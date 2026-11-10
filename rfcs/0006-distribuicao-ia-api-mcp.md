# RFC-0006: Distribuição: Markdown para IA, JSON, API e MCP

- **Estado:** Proposta
- **Autor(es):** Fundador (rascunho redigido com apoio de IA)
- **Aberta em:** 2026-10-23
- **Decide:** Conselho (no início, o fundador)
- **Fim do prazo de comentários:** 14 dias depois da publicação do repositório

## Resumo

O texto é escrito **uma vez** (USFM, [RFC-0003](0003-formato-e-camadas.md)) e **publicado em vários formatos gerados**: **Markdown** para leitura e para IA, **JSON** para apps e para uma **API de leitura**, e um **servidor MCP** que deixa assistentes de IA consultar a Bíblia do projeto com a atribuição incluída. A API hospedada pelo bibleme é um serviço **opcional e cobrado** ([RFC-0007](0007-sustentabilidade.md)); o texto nunca fica atrás de paywall.

## Problema

- Cada app e cada pesquisador reescreve conversores para chegar a um formato que consiga ler.
- Assistentes de IA citam a Bíblia de memória, às vezes de traduções protegidas, e quase nunca com atribuição. Se o texto livre estiver em formato fácil de consultar, a IA pode citar **a nossa**, corretamente.
- Servir texto e busca em escala tem custo. Quem quer conveniência e garantia de disponibilidade pode pagar por isso, sem que o texto deixe de ser livre.

## Proposta

### 1. Princípio: um texto, muitos formatos, sempre gerados

Os formatos de consumo são **gerados em CI** a partir do USFM e das camadas de dados e **nunca editados à mão** (a pasta `dist/` é regenerada). A CI confere a **volta completa**: contagem de versos, texto idêntico entre formatos e IDs consistentes.

### 2. Formatos

| Formato | Para quê | Detalhes |
|---|---|---|
| **USFM** | Fonte e intercâmbio com o ecossistema | Já é a fonte |
| **Markdown "leitura"** | Humanos e IA | Um arquivo por capítulo, **front matter YAML** (tradução, idioma, livro, capítulo, release, estado, licença, **atribuição pronta para copiar**, URL). Versículos marcados com `[1]`, perícopes como `##`, notas como rodapés |
| **Markdown "estudo"** | RAG, estudo, assistentes | O mesmo, com Strong (`amou{G25}`), referências cruzadas, variantes e notas em linha, para quem precisa de contexto rico |
| **JSON compatível com USJ** | Intercâmbio fiel com o ecossistema USFM | A representação JSON oficial da família USFM/USX |
| **JSON "leitura"** | Apps e API | Esquema **simples e estável**, versionado (`schemaVersion`): livros, capítulos, versos, perícopes, notas, referências, Strong, estado, atribuição |
| **SQLite** | Apps offline | Um arquivo por release e idioma, com índice de busca |
| **EPUB e PDF** | Leitura e impressão | Fase 2 |
| **`llms.txt`** | Descoberta por IA | Arquivo na raiz do site que explica o corpus, a licença e como citar |

Todo arquivo gerado e toda resposta da API trazem `release` (ou `null`), `commit` e `generated_at`, para a citação por tipo de uso da [RFC-0010](0010-citacao-por-tipo-de-uso.md).

Exemplo do Markdown "leitura" (exemplo de formato, não é texto da tradução):

```markdown
---
translation: bibleme-[versao]-pt-BR
language: pt-BR
book: PSA
chapter: 117
release: "0.1"          # null quando o texto não é de uma release (RFC-0010)
commit: "a1b2c3d"
generated_at: 2027-03-01
status: rascunho
license: CC BY 4.0
attribution: "bibleme [Versão] pt-BR · © Contribuidores do projeto bibleme Traduções · CC BY 4.0 · https://www.bibleme.com.br/translations"
---

# Salmos 117

## Convite universal ao louvor

[1] Louvem o Senhor, todas as nações;
celebrem-no, todos os povos.[^1]

[^1]: No hebraico, *goyim*, os povos de fora de Israel.
```

### 3. Servidor MCP (somente leitura)

Um servidor **Model Context Protocol** para que assistentes de IA consultem o texto. Ferramentas propostas:

| Ferramenta | O que faz |
|---|---|
| `list_translations` | Versões e idiomas disponíveis, com estado e release |
| `get_passage(ref, translation, include?)` | Passagem com opções: notas, Strong, referências, texto original, variantes |
| `get_chapter(book, chapter, translation)` | Capítulo inteiro |
| `search(query, translation, scope?)` | Busca por palavra, frase, lema ou Strong |
| `get_cross_references(ref)` | Versículos relacionados e citações do AT no NT |
| `get_word(strong_or_lemma)` | Léxico: palavra original, glosa, ocorrências |
| `get_original(ref, edition)` | Texto original alinhado |
| `get_variants(ref)` | Variantes textuais e testemunhas |
| `get_book_info(book)` | Introdução, esboço, autoria, data |
| `compare(ref, translations[])` | Lado a lado, **só entre versões abertas** |

Recursos: `bibleme://<tradução>/<livro>/<capítulo>`. **Toda resposta carrega o campo `attribution`** (e o aviso de licença), para que o assistente possa citar corretamente o que repete ao usuário.

**Dois modos de uso:** (a) **local** (`stdio`), lendo os arquivos de uma release, sem rede e sem custo; (b) **remoto** (HTTP), hospedado pela API. Apenas leitura, sem dados pessoais, sem estado de usuário.

### 4. API de leitura

REST somente leitura, versionada (`/v1`), com o texto **fixado por release** (`?release=1.2`; padrão: a última estável).

```
GET /v1/translations
GET /v1/translations/{id}/books
GET /v1/translations/{id}/chapters/{book}/{n}
GET /v1/translations/{id}/passages/{ref}        ?format=json|md|usfm
GET /v1/search?q=…&translation=…
GET /v1/crossrefs/{ref}
GET /v1/words/{strong}
GET /v1/originals/{edition}/{ref}
GET /v1/variants/{ref}
```

- Toda resposta inclui `attribution` no corpo e um cabeçalho com o link da licença.
- Texto, capítulos e livros são **arquivos estáticos** servidos por CDN (barato, rápido, com CORS aberto). A parte **dinâmica** (busca, chaves, limites, webhooks de nova release, SLA) é o que dá custo.
- O código da API é **MIT** e o texto é CC BY: **qualquer pessoa pode hospedar a sua própria API** a partir das releases.

### 5. Espelhos e garantias

- Cada release publica os formatos como **arquivos para download** (Git, *release assets* e espelhos como CDNs de código aberto). O texto nunca depende só da nossa API.
- A API do bibleme é **uma conveniência**, não um portão.

### 6. Atribuição em saídas de IA

A licença pede crédito quando o texto é compartilhado. Para IA: o MCP, o Markdown e o JSON trazem a atribuição pronta; o `llms.txt` pede que as respostas que reproduzam o texto citem a versão e o link. Não podemos impor isso a modelos, mas facilitamos ao máximo.

## Alternativas consideradas

- **Só JSON:** ruim para leitura e para IA, que lê texto.
- **Só uma API paga, sem arquivos:** quebra o princípio de texto livre.
- **Só arquivos, sem API:** serve a quem sabe consumir, não a quem quer pronto.
- **Servidores MCP de terceiros:** existem vários para Bíblia. O nosso tem a vantagem de servir **as nossas camadas** (Strong, variantes, originais) com atribuição embutida.
- **Seguir o modelo de outros projetos abertos** (um arquivo Markdown e um JSON por capítulo, como a Open Translation Bible): serve de ponto de partida e valida a ideia. Aprendemos a **evitar** nomes de arquivo localizados, Markdown dentro do JSON e PDFs no histórico do Git ([projetos relacionados](../docs/projetos-relacionados.md)). Uma ideia que vale testar no Markdown "estudo": **um título por versículo**, que facilita a recuperação por trechos (RAG).

## O que muda para quem

- **Apps:** baixam um JSON ou SQLite versionado, ou chamam a API.
- **Pesquisadores e IA:** leem Markdown, usam MCP.
- **Mantenedores:** mantêm um gerador e testes de volta completa.

## Questões em aberto

1. Quais campos do **JSON "leitura"** entram no esquema 1.0?
2. **Markdown "estudo"**: formato exato de Strong, notas e variantes em linha.
3. **Busca**: índice em SQLite (FTS) para o modo local? Serviço de busca na API remota?
4. **Nome e distribuição do pacote MCP** (registro de pacotes, Docker, binário).
5. **Autenticação** da API remota e do MCP remoto.
6. Compatibilidade com o JSON de outras APIs bíblicas, para facilitar a troca?

## Decisão

*(a preencher)*

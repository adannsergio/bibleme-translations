# RFC-0004: Processo de revisão, versões e uso de IA

- **Estado:** Proposta
- **Autor(es):** Fundador (rascunho redigido com apoio de IA)
- **Aberta em:** 2026-10-23
- **Decide:** Conselho (no início, o fundador)
- **Fim do prazo de comentários:** 14 dias depois da publicação do repositório

## Resumo

Como um texto nasce, é revisado e vira uma **versão estável e citável**; como cada idioma escolhe entre **traduzir do zero** e **revisar uma base aberta**; e **que lugar a IA tem** no processo, dado o risco real de reproduzir traduções protegidas.

## Problema

- Uma Bíblia que muda sem aviso não serve para citar, imprimir, nem para embutir em um app. Mas uma Bíblia congelada demais não aprende com os erros.
- Revisar de verdade é caro. Sem estados claros, ninguém sabe o que está pronto.
- Modelos de IA foram treinados com traduções protegidas e podem **reproduzi-las de memória**. Um "rascunho feito pela IA" pode ser uma cópia disfarçada.
- Projetos abertos comparáveis levaram **anos** para completar uma Bíblia. Precisamos entregar valor por blocos.

## Proposta

### 1. Estados de maturidade (por livro, capítulo e verso)

| Estado | Significa |
|---|---|
| **0. Rascunho** | Texto proposto, com justificativa, sem revisão |
| **1. Em revisão** | Em revisão por pelo menos uma pessoa, com comentários abertos |
| **2. Revisado** | Aprovado por **um revisor de originais e um revisor de língua** |
| **3. Lido em voz alta** | Lido por pelo menos duas pessoas, com ajustes de ritmo e clareza |
| **4. Estável** | Incluído em uma **release** |

O estado fica em dados do repositório e aparece em quadros e no JSON ([RFC-0006](0006-distribuicao-ia-api-mcp.md)); os apps podem mostrar "ainda em revisão" onde fizer sentido.

### 2. Releases

- O ramo `main` é o **texto vivo**. Qualquer pessoa pode ler, mas ele muda.
- Uma **release** é uma versão congelada e citável: `bibleme [Versão] [idioma] MAJOR.MINOR` (por exemplo, `1.0`, `1.1`).
- `MINOR`: correções (erros, tipografia, notas), com registro de mudanças. `MAJOR`: mudanças amplas de texto, anunciadas com antecedência.
- Cada release traz o texto em todos os formatos, o `SOURCES`, o `AUTHORS` e o registro de mudanças, e recebe um **DOI** (por exemplo, no Zenodo).
- Apps e APIs devem **fixar uma release**; há também o alias `latest`.
- **Cadência por blocos:** lançar quando um bloco coerente (Evangelhos, Salmos, Pentateuco) estiver estável, em vez de esperar a Bíblia toda.
- **Errata pública** e **link de sugestão por verso**: qualquer app pode abrir a Issue de sugestão já preenchida com a referência.
- **Relatório público de semelhança por release**, com a métrica e a linha de base descritas ([política](../docs/direitos-autorais-e-referencias.md#verificação-de-semelhança)).

### 3. Estratégia de partida de cada idioma

| Estratégia | Vantagens | Cuidados |
|---|---|---|
| **A. Do zero, a partir dos originais** | Máxima independência e consistência; sem dívida de atribuição | Lenta; exige equipe com formação |
| **B. Revisar uma base aberta** (por exemplo, a Bíblia Livre em português, CC BY 4.0, e a Berean Standard Bible em inglês, domínio público) **contra os originais** | Muito mais rápida; a base já é legível | A base pode seguir outro texto-base (a Bíblia Livre segue o Textus Receptus); a nossa versão passa a ser **adaptação** e precisa **manter a atribuição** à base |
| **C. Híbrida** | Do zero onde o texto-base diverge muito da base; revisão onde coincide | Exige registro claro de qual trecho veio de onde |

**Proposta:** cada idioma escolhe e registra. Para o português, começamos pelo **piloto "do zero"** (Rute, Jonas e Filemom) para exercitar o protocolo e medir o esforço real, e decidimos a estratégia dos demais livros com esses números.

### 4. Piloto (Fase 1)

Livros curtos de gêneros diferentes: **Rute** (narrativa), **Jonas** (narrativa e poesia) e **Filemom** (carta). Critérios de sucesso: o ciclo completo (rascunho, revisão, voz alta, release) funcionou; os formatos gerados (Markdown, JSON, MCP) foram consumidos pelo app; a verificação de semelhança rodou; tempo gasto por capítulo foi registrado.

### 5. Novos idiomas

Uma equipe de idioma precisa de: **coordenador** nomeado; **pelo menos uma pessoa que consiga conferir contra os originais**; uma proposta de estratégia (A, B ou C); respeito aos trabalhos existentes no idioma (quando há uma tradução livre, a conversa começa por ela); e, para línguas minoritárias, **a comunidade falante como parte da decisão**. Usamos a Issue "Novo idioma". O projeto **coopera, não compete**, com organizações que já traduzem a Bíblia.

### 6. Uso de IA no processo

| Uso | Posição proposta |
|---|---|
| Gerar o **rascunho de tradução** do texto bíblico | **Não vale como rascunho independente**: o modelo pode reproduzir de memória traduções protegidas. Se alguém usar, trata-se como material de risco: reescrever a partir do original e passar pela verificação de semelhança |
| Apoiar a **conferência**: apontar inconsistências, listar ocorrências, sugerir perguntas de revisão, checar números de Strong | **Permitido**, com decisão humana |
| Traduzir **documentação e interface** | Permitido, com revisão humana |
| Gerar **notas, introduções ou títulos de seção** | Permitido só como ponto de partida, com autoria e revisão humanas; sujeito à mesma verificação de semelhança |
| **Idiomas com poucos recursos** | A decidir por RFC do idioma, com revisão humana por falantes e aviso de uso de IA |

Regras comuns: **IA não é autora; a pessoa que submete responde pela contribuição**. Todo PR e Issue **declara** se houve apoio de IA e para quê. A verificação de semelhança roda em tudo.

## Alternativas consideradas

- **Só texto vivo, sem releases:** impossível citar e imprimir.
- **Só releases fechadas, sem texto vivo:** mata a colaboração.
- **Banir IA por completo:** impede usos seguros e valiosos de conferência. O foco está na linha que importa: rascunho do texto sagrado.

## O que muda para quem

- **Tradutores e revisores:** têm estados claros e uma regra de dupla revisão.
- **Apps e APIs:** têm versões estáveis para fixar.
- **Leitores:** veem o estado de maturidade de cada passagem.

## Questões em aberto

1. Dupla revisão (originais e língua) para chegar ao estado 2: é viável com a equipe que existir?
2. Prazo de comentários públicos antes de uma passagem virar estável?
3. Piloto "do zero" em português é a melhor prova, ou a estratégia B (revisão da Bíblia Livre) já deve ser testada junto?
4. Quanta **remuneração de revisores** o projeto pode custear ([RFC-0007](0007-sustentabilidade.md))?
5. Política de **versões antigas**: por quanto tempo uma release `MAJOR` anterior recebe correções?

## Decisão

*(a preencher)*

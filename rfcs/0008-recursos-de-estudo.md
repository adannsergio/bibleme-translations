# RFC-0008: Recursos de estudo que a comunidade pode construir

- **Estado:** Proposta
- **Autor(es):** Fundador (rascunho redigido com apoio de IA)
- **Aberta em:** 2026-10-23
- **Decide:** Conselho (no início, o fundador)
- **Fim do prazo de comentários:** 14 dias depois da publicação do repositório

## Resumo

O Logos Bible Software é a referência em estudo bíblico digital. Muito do que ele cobra vem de **livros licenciados**, que não dá para replicar, mas uma parte grande vem de **dados estruturados e ferramentas** que uma comunidade pode construir, revisar e manter **sob licença livre**. Esta RFC cruza a lista de recursos do Logos com o que o projeto pode oferecer, diz **quem constrói e mantém cada coisa** e propõe uma ordem de prioridade. Inclui também requisitos que **nem o Logos nem a lista original do projeto** cobrem.

> **Como esta lista foi feita.** Li a página pública de assinaturas do Logos (planos Premium, Pro e Max, incluindo a tabela de comparação), em 23/out/2026. Ela mostra **categorias de recursos**, não o produto em uso. Isto é um mapa de ideias, não uma avaliação do Logos.

## Problema

Quem estuda a Bíblia a sério hoje escolhe entre ferramentas caras e fechadas ou recursos livres dispersos, em formatos incompatíveis, muitos só em inglês. Uma comunidade com um **modelo de dados único** ([RFC-0003](0003-formato-e-camadas.md)) pode oferecer, em vários idiomas, camadas de estudo que se somam ao texto e se mantêm com contribuições pequenas, verificáveis e em paralelo.

## Proposta

### 1. Mapa do Logos para o projeto

**Prioridade:** **A** = alta (fase 1 a 2), **M** = média, **L** = longo prazo. **Licença** indica o estado da verificação ([registro de fontes](../docs/registro-de-fontes.md)); "a verificar" significa que ainda não foi conferida na fonte oficial.

| Recurso no Logos | O que oferecemos | Camada | Quem constrói e mantém | Fontes abertas candidatas (licença) | Prior. |
|---|---|---|---|---|---|
| Estudar palavras do grego e do hebraico **a partir da Bíblia em português** | Alinhamento palavra a palavra, léxico com glosas no idioma, glossário de termos-chave | T e D | Tradutores e alinhadores; tradutores de glosas | Dicionário de Strong (domínio público), OSHB (CC BY 4.0), **STEPBible (CC BY 4.0, conferido no README oficial)**. Estrutura: [RFC-0009](0009-estrutura-de-dados-lexicos-e-dicionarios.md) | A |
| **Interlinear e morfologia** | Original alinhado, com lema e morfologia | D | Revisores de originais, comunidade | OSHB: texto em domínio público e morfologia CC BY 4.0 (conferido); SBLGNT CC BY 4.0 (página conferida, EULA a ler) | A |
| Analisar a **estrutura da frase**, rastrear **referências gramaticais** e o **argumento do autor** | Árvores sintáticas e estrutura do discurso | D | Especialistas e doutorandos | MACULA (Clear Bible): CC BY 4.0 segundo fontes secundárias, **a confirmar na fonte** | L |
| **Comparar manuscritos antigos** | Registro de manuscritos, variantes, testemunhas, forma da citação | D | Paleógrafos, revisores | Aparato do SBLGNT; aparato de Tischendorf (domínio público, a digitalizar); imagens por **link** | M |
| Estudar a **Septuaginta, a Vulgata e os Pais Apostólicos** | Camadas paralelas e interlinear reverso | D | Comunidade, latinistas e helenistas | Swete, Vulgata Clementina e edições antigas de Pais Apostólicos (domínio público, a verificar as edições digitais) | L |
| Ferramentas estendidas para os **deuterocanônicos** | Deuterocanônicos com o **mesmo nível de dados** dos demais livros, de graça | T e D | Contribuidores católicos e ortodoxos | LXX e Vulgata (ver acima) | **A** (diferencial) |
| Explorar **passagens, pessoas e temas** | Entidades (pessoas, lugares, grupos, eventos, tempos), genealogias, tópicos | D | Curadores e comunidade | OpenBible.info Bible Geocoding (**CC BY 4.0**, conferido); Theographic (**CC BY 4.0** segundo o site do projeto, a conferir no repositório); Nave (domínio público) | A |
| **Buscar** em Bíblias e livros; buscas **precisas** | Índices por palavra, frase, lema e Strong; busca na API | API | Equipe técnica | — | M |
| **Resumir** capítulos; busca e tradução automática por **IA** | Markdown, JSON e MCP prontos para IA; **resumos curtos de capítulo escritos por humanos**; conjuntos de **perguntas e respostas de avaliação** | T, D e API | Comunidade (resumos e avaliação); IA só como ferramenta ([RFC-0004](0004-processo-e-versoes.md)) | — | A |
| **Notas e destaques** do usuário | Dados do usuário ficam no app. O projeto fornece **IDs estáveis** e um formato aberto de anotação, compatível com o modelo W3C de Web Annotation | App | App bibleme e outros | — | M |
| **Criar estudos bíblicos**; planejar e escrever **sermões** | Estudos prontos (perguntas, roteiros, passagens), como conteúdo aberto. **Ferramentas de sermão ficam no app**, fora do repositório | D | Pastores, educadores, líderes de célula | — | M |
| **Fluxos devocionais** (Lectio Divina, orar a Escritura, adoração) | Roteiros devocionais abertos (texto, passos, passagens), de várias tradições | D | Contribuidores de cada tradição | — | M |
| **Ferramenta de memorização** | Conjuntos de memorização por tema e nível; dados de dificuldade. A ferramenta fica no app (o bibleme já tem) | D | Comunidade | — | **A** (fácil, bom primeiro passo) |
| **Planos de leitura** pré-calculados | Planos abertos em JSON: do começo ao fim, cronológico, temáticos, litúrgicos | D | Comunidade; o plano cronológico exige **revisão editorial** | — | **A** (o app já tem os seus) |
| **Dados de história, teologia e temas** | Linha do tempo (com intervalos e convenções declaradas), quadros, glossário teológico **neutro, com definições por tradição** | D | Curadores e revisores | Nave e Tesouro do Conhecimento Bíblico (domínio público); OpenBible.info referências cruzadas (CC BY, já usado no app) | M |
| **Leitor avançado** (paralelo, áudio, temas) | Texto paralelo por ID, **áudio**, EPUB, PDF | D e app | Narradores, equipe técnica | — | M |
| **Comentários** e bibliotecas licenciadas (Bible Speaks Today, Logos Research, EEC) | **Não replicamos.** Alternativas: notas de tradução e comentário comunitário revisado, e **comentários de domínio público modernizados** | D | Comunidade | Autores do século XIX em domínio público (a verificar edição e tradução) | L |
| **Cursos** e materiais educativos | Planos de aula, infográficos e glossários ilustrados sob CC BY | D | Educadores | — | L |
| **Mídia** | Mapas, ilustrações, infográficos, áudio; vídeos só por link e com crédito | D | Cartógrafos, ilustradores, narradores | OpenBible.info Geocoding; dados do OpenStreetMap têm **licença própria (ODbL)** | M |
| Ferramentas para **latim, copta e siríaco** | Idiomas originais adicionais | D | Especialistas | A verificar | L |
| Busca em **livros impressos do usuário**, loja, cupons | Fora do escopo | — | — | — | — |

### 2. O que a comunidade mantém bem

Tarefas **pequenas, verificáveis e paralelizáveis**, com **validação automática** e tolerância a trabalho parcial: alinhar um versículo, escrever o resumo de um capítulo, curar a ficha de uma pessoa ou de um lugar, montar um conjunto de memorização, revisar um plano de leitura, gravar um capítulo, traduzir a interface ou uma ficha.

Exigem **especialistas**: árvores sintáticas, aparato de variantes, estrutura de discurso, escolha de edições, revisão de originais, comentários.

### 3. Perfis e o que cada um pode fazer

| Perfil | Contribuição |
|---|---|
| Tradutor | Rascunhos e justificativas |
| Revisor de originais | Aprovação contra hebraico, aramaico e grego; alinhamento; variantes |
| Revisor de língua | Clareza, ritmo, ortografia, glossário |
| Linguista e paleógrafo | Morfologia, sintaxe, manuscritos |
| Cartógrafo e ilustrador | Mapas, quadros, infográficos (sob licença livre) |
| Narrador | Áudio de capítulos |
| Educador, pastor, padre, líder | Estudos, devocionais, planos, memorização |
| Desenvolvedor e designer | Validadores, geradores, API, MCP, site |
| Tradutor de documentação | Landing page e docs em outros idiomas |
| Advogado de propriedade intelectual | Revisão de licença, marca e processo |

### 4. Requisitos além do que foi pedido e do que o Logos oferece

1. **Citação estável:** releases imutáveis, DOI, endereços permanentes ([RFC-0004](0004-processo-e-versoes.md), [RFC-0005](0005-nome-marca-e-url.md)).
2. **Versificação e ordem de livros** como parte do modelo ([RFC-0003](0003-formato-e-camadas.md)).
3. **Cobertura e qualidade visíveis:** painel por livro e capítulo com estado de revisão, % de versos com Strong e alinhamento, variantes documentadas.
4. **Palavras acrescentadas marcadas** (`\add`), para o leitor ver o que a língua exigiu.
5. **Glossário de termos-chave** amarrado ao Strong, com verificação automática de consistência.
6. **Duas versões por idioma** (literal e simples), no futuro ([RFC-0002](0002-filosofia-de-traducao.md)).
7. **Licenças verificáveis por máquina:** cabeçalhos SPDX e conformidade com o padrão REUSE, para auditar o que entra.
8. **Errata e sugestões por verso**, com **link profundo** para qualquer app abrir a Issue já preenchida.
9. **Crédito aos colaboradores**, por livro e capítulo, no site e no `AUTHORS`.
10. **Kit de novo idioma:** modelos, lista de checagem (ortografia, nomes próprios, fonte, direção da escrita, Unicode), glossário-base e dados neutros prontos.
11. **Acessibilidade:** estrutura que leitores de tela entendem; áudio; EPUB; formatos para impressão em tipo grande e Braille (fase posterior); texto simples.
12. **Pronúncia de nomes próprios** para leitura em voz alta e para voz sintética.
13. **Conjuntos de avaliação** para testar assistentes de IA sobre o texto (perguntas com resposta e referência).
14. **Política de IA** ([RFC-0004](0004-processo-e-versoes.md)) por causa do risco de reprodução de textos protegidos.
15. **Cooperação com organizações de tradução bíblica existentes**, em vez de competição, principalmente em línguas minoritárias.
16. **Privacidade:** API e MCP sem dados pessoais; registros de acesso mínimos e com prazo.

### 5. O que não faremos

- Replicar **bibliotecas licenciadas** (comentários, dicionários e cursos protegidos).
- Pôr **ferramentas de produto** (sermões, assistentes de pregação, anotação do usuário) neste repositório: elas ficam nos apps que usam o texto.
- Aceitar material **sem origem e licença registradas**.

### 6. Interface de leitura e sugestão de melhorias

**Visão do fundador:** o endereço de atribuição ([RFC-0005](0005-nome-marca-e-url.md)), `https://www.bibleme.com.br/translations`, passa a abrigar um **leitor** em que a pessoa lê a tradução, **compara com o original** ou com outra versão e **propõe melhorias** no próprio verso.

**O que o leitor faz:**

- lê por livro, capítulo e verso, com **leitura paralela** (outras versões do projeto, outros idiomas, e traduções livres externas quando a licença permite);
- mostra o **original alinhado** (com lema e Strong) e as **camadas** que a pessoa ligar: perícopes, notas, variantes, relacionados;
- tem, em cada verso, o botão **"Sugerir melhoria"**.

**Três níveis de sugestão**, do mais simples de construir ao mais amigável:

| Nível | Como funciona | Custo |
|---|---|---|
| 1. Link profundo | O botão abre uma Issue do GitHub **já preenchida** com a referência e o texto atual | Baixo. Exige conta no GitHub |
| 2. Formulário no site | A pessoa preenche no site, com a declaração de originalidade marcada; um **robô** (GitHub App) abre a Issue ou o PR em nome do projeto, registrando a autoria; cai numa fila de triagem | Médio. Sem GitHub para quem sugere |
| 3. Apoios da comunidade | Outros leitores endossam uma sugestão, com justificativa, para priorizar a revisão | Médio |

**Salvaguardas:** declaração de originalidade obrigatória e **aviso para não colar traduções protegidas**; verificação de semelhança na triagem; limite de envios e moderação; **o mínimo de dados pessoais** (e-mail só para dar retorno, apagável); **crédito automático** quando a sugestão é aceita; **estado visível** ("em análise", "aceita na release 1.1", "não adotada, por quê").

**Reaproveitamento:** o app bibleme já tem um modo de leitura e transcrição com **segunda versão**, números de Strong e versículos relacionados. O leitor de `/translations` pode reaproveitar essas peças. Os dados vêm **sempre** dos formatos gerados deste repositório ([RFC-0006](0006-distribuicao-ia-api-mcp.md)), sem cópia manual.

**Código:** o leitor, quando existir, deve ser **código aberto (MIT)**, no mesmo repositório ou em outro, para que o projeto não dependa de um produto fechado.

## Alternativas consideradas

- **Só o texto, sem camadas de estudo:** seria mais simples, mas perderíamos o que faz uma Bíblia de estudo valer, e o que a comunidade faz melhor.
- **Todas as camadas na primeira release:** inviável. Priorizamos o que é pequeno, verificável e de alto valor (Strong, referências, perícopes, introduções, memorização e planos).

## O que muda para quem

- **Comunidade:** tem tarefas de vários tamanhos e níveis de especialização, com rótulos nas Issues (`camada:*`, `boa-primeira-contribuição`).
- **Apps e IA:** recebem camadas prontas, com os mesmos IDs.
- **O app bibleme:** vira um consumidor dessas camadas (por exemplo, memorização, planos, entidades), sem ser dono delas.

## Questões em aberto

1. Quais camadas entram na **release 1.0** e quais ficam para depois?
2. **Padrões de dados** de entidades e de anotações: IDs próprios ou compatíveis com projetos abertos existentes?
3. **Revisão** de camadas de especialista: quem aprova árvores sintáticas e aparato de variantes?
4. **Neutralidade** de definições teológicas e de cronologia (datas): como apresentar visões diferentes sem decidir entre elas?
5. **Áudio:** quem grava? Voz humana apenas, ou voz sintética rotulada?
6. Como **reconhecer e credenciar** contribuições de especialistas sem criar barreiras para iniciantes?
7. **Interface de leitura:** quem faz a triagem das sugestões? Como evitar spam e abuso sem criar uma barreira para quem só quer apontar um erro?
8. O leitor de `/translations` nasce **dentro do app** ou como **projeto aberto separado** que o app incorpora?
9. Quais camadas de referência inspiradas em obras comerciais (**índice por assunto**, **cadeias temáticas**, **concordância**) entram na lista de prioridades? ([projetos relacionados](../docs/projetos-relacionados.md))

## Decisão

*(a preencher)*

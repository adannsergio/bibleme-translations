# RFC-0003: Formato do texto e camadas de dados

- **Estado:** Proposta
- **Autor(es):** Fundador (rascunho redigido com apoio de IA)
- **Aberta em:** 2026-10-23
- **Decide:** Conselho (no início, o fundador)
- **Fim do prazo de comentários:** 14 dias depois da publicação do repositório

## Resumo

> **Atualização (23/out/2026):** a estrutura de Strong, léxicos, dicionários e relações foi detalhada na [RFC-0009](0009-estrutura-de-dados-lexicos-e-dicionarios.md). Onde esta RFC diz que o Strong vive no USFM, vale a RFC-0009: o Strong dentro do USFM passa a ser **gerado** a partir de um alinhamento em arquivo lateral.

Propõe-se que o **texto de cada tradução seja escrito em USFM 3** (o formato padrão da tecnologia bíblica), que tudo que é **neutro de idioma** (originais, manuscritos, variantes, referências, lugares, pessoas, mapas) viva em **camadas de dados separadas**, e que os formatos de consumo (**Markdown para IA, JSON, SQLite**, ver [RFC-0006](0006-distribuicao-ia-api-mcp.md)) sejam **gerados**, nunca editados à mão. Esta RFC também lista **o que cada nível do texto carrega nativamente**: Bíblia, livro, capítulo, seção, verso, palavra, idiomas originais e manuscritos.

## Problema

- O texto precisa carregar muito além das palavras: números de Strong, notas, perícopes, introduções, referências, variantes, lugares, áudio. Sem um modelo único, cada recurso nasce num formato diferente e não conversa com os outros.
- Dezenas de pessoas vão editar. O formato precisa ser **legível, comparável linha a linha no Git** e validável por máquina.
- Há várias tradições de **numeração** (hebraica, grega, latina, inglesa) e de **ordem dos livros**. Se isso não estiver no modelo desde o começo, as equipes de idiomas divergem.
- O projeto quer ser **consumido por apps, por IA e por APIs** sem que ninguém reescreva o texto à mão.

## Proposta

### 1. Fonte de verdade: USFM 3

| Opção | Prós | Contras |
|---|---|---|
| **A. USFM 3 (proposta)** | Padrão do ecossistema (Paratext, Scripture Forge, Door43, eBible e outros); suporta `\w` com `strong`, notas, referências cruzadas, perícopes, introduções, figuras, pronúncia; texto simples, bom para diff | Pouco familiar para quem vem do Markdown; exige validador |
| B. Markdown com atributos | Familiar; ótimo para IA | Não há padrão para Strong, notas e variantes; conversão para o ecossistema bíblico é custom; mais risco de divergência |
| C. JSON como fonte | Máquina lê fácil | Péssimo para edição humana e para revisão em PR |

**Proposta: A.** Markdown e JSON saem do USFM em CI e acompanham cada release. O USFM tem uma representação JSON oficial na mesma família de padrões (USX/USJ), e o JSON do projeto é compatível com ela e acrescenta o que é nosso ([RFC-0006](0006-distribuicao-ia-api-mcp.md)).

### 2. Identificadores

- **Livro:** código de três caracteres do USFM (`GEN`, `PSA`, `JHN`, e os deuterocanônicos `TOB`, `JDT`, `ESG`, `WIS`, `SIR`, `BAR`, `LJE`, `S3Y`, `SUS`, `BEL`, `1MA`, `2MA`, e os da tradição ortodoxa `1ES`, `3MA`, `4MA`, `MAN`, `PS2`).
- **Verso:** `LIV.cap.verso`, por exemplo `JHN.3.16` (o mesmo padrão já usado pelo app bibleme). Intervalos: `JHN.3.16-18`.
- **Palavra do original:** `edição:identificador` (por exemplo, `sblgnt:43003016004`), porque a posição depende da edição do texto-base.
- **Versão:** `bibleme-<versão>-<idioma>` com o idioma em BCP 47 (`pt-BR`, `en`, `es`).

### 3. O que cada nível carrega nativamente

A coluna **Onde** diz se vai no USFM da tradução (**T**) ou numa camada de dados neutra (**D**). **Fase** é uma estimativa: 1 = release inicial, 2 = depois, 3 = longo prazo.

#### Bíblia (a tradução como um todo)

| Recurso | Onde | Fase |
|---|---|---|
| Identidade: nome, sigla, idioma (BCP 47), escrita, direção (LTR/RTL), versão do texto (`MAJOR.MINOR`), data | D | 1 |
| Licença, atribuição e aviso de ausência de garantia, repetidos em cada arquivo (`\rem`) e em cada release | T | 1 |
| Textos-base e edições usadas, com licenças (arquivo `SOURCES`) | D | 1 |
| Cânon: lista de livros, **várias ordens** (protestante, católica, ortodoxa, hebraica) como metadado | D | 1 |
| Esquema de versificação em que o texto foi composto e **tabelas de mapeamento** para os outros | D | 1 |
| Registro de mudanças, **errata** pública e `AUTHORS` gerado do histórico | D | 1 |
| Estado de revisão por livro, capítulo e verso | D | 1 |
| DOI por release (arquivamento, por exemplo no Zenodo) | D | 2 |

#### Livro

| Recurso | Onde | Fase |
|---|---|---|
| **Introdução** (autoria, data, destinatários, gênero, estrutura, temas, questões de texto), sem tomar partido confessional | T (`\imt`, `\is`, `\ip`) | 1 |
| **Esboço** navegável | T (`\iot`, `\io`) | 1 |
| Nomes e abreviações do livro em cada idioma | D | 1 |
| Língua original (hebraico, aramaico, grego) e **trechos em aramaico** (Daniel, Esdras) | D | 1 |
| Gênero literário e **status canônico por tradição** (proto, deutero, ortodoxo) | D | 1 |
| Principais **testemunhas** (manuscritos e versões antigas) do livro | D | 2 |
| Mapas, linha do tempo, quadros do livro (reis de Israel e Judá, festas, pesos e medidas) | D | 2 |
| Panorama em vídeo (apenas link, com crédito) e áudio do livro | D | 2 |

#### Capítulo

| Recurso | Onde | Fase |
|---|---|---|
| Resumo curto | T | 1 |
| Contagem de versículos e **mapeamento de numeração** entre MT, LXX, Vulgata e inglesa (por exemplo, Salmos, Joel, Malaquias, Daniel, Ester) | D | 1 |
| Aviso quando uma **perícope atravessa o limite do capítulo** (a divisão em capítulos é medieval) | D | 1 |
| Mapas e ilustrações do capítulo | D | 2 |
| Áudio do capítulo | D | 2 |

#### Seção (perícope)

| Recurso | Onde | Fase |
|---|---|---|
| **Título original**, curto e neutro, e subtítulo | T (`\s1`, `\s2`) | 1 |
| **Passagens paralelas** (sinóticos, Reis e Crônicas) | T (`\r`) e D | 1 |
| Gênero (narrativa, lei, poesia, profecia, parábola, carta, oráculo) | D | 2 |
| Estrutura literária (quiasmo, paralelismo, estrofes) | D | 3 |
| **Salmos:** sobrescritos como parte do texto, acrósticos com as **letras hebraicas** (Salmo 119, Lamentações) | T | 1 |
| Quem fala, **interlocutores** e discurso citado | D | 2 |
| Cenário (lugar e tempo) e personagens presentes | D | 2 |

#### Verso

| Recurso | Onde | Fase |
|---|---|---|
| Texto, com **poesia em linhas** (`\q1`, `\q2`) e parágrafos | T | 1 |
| **Números alternativos** (`\vp`) e capítulo publicado diferente (`\cp`) | T | 1 |
| **Palavras acrescentadas** pela língua, sem equivalente no original (`\add`), visíveis ao leitor | T | 1 |
| **Nome divino** marcado em **toda ocorrência** (`\nd`, com o Strong H3068): a forma exibida é decisão do guia de estilo do idioma e quem consome pode trocá-la ([RFC-0002](0002-filosofia-de-traducao.md)) | T | 1 |
| **Notas** de três tipos: alternativa literal, variante textual, esclarecimento cultural (`\f`) | T | 1 |
| **Referências cruzadas** e **citações do AT no NT** (com a forma citada: hebraico ou grego) | T (`\x`) e D | 1 |
| **Variantes textuais**: unidades de variação com as leituras e as testemunhas | D | 2 |
| **Versículo ausente em manuscritos antigos**, marcado entre colchetes duplos e explicado | T e D | 1 |
| Pronúncia de **nomes próprios** para leitura em voz alta (`\pro`) | T | 2 |
| **Entidades** marcadas: pessoas, lugares, grupos, eventos, tempos, com ID ligado aos dados neutros | T (marcadores `\z`) e D | 2 |
| **Tópicos e temas** do verso | D | 2 |
| Unidades de **medida e moeda** com equivalente aproximado | D | 2 |
| **Áudio** com marcação de tempo por frase | D | 2 |
| Comentário (camada à parte, por autor e tradição) | D | 2 |
| Estado de revisão e **justificativa** da escolha de tradução | D | 1 |
| Verso **em todas as versões do projeto**, alinhado pelo mesmo ID (leitura paralela) | D | 1 |

#### Palavra (token)

| Recurso | Onde | Fase |
|---|---|---|
| **Número de Strong** na palavra traduzida (`\w palavra\|strong="G25"\w*`), **gerado a partir do alinhamento** ([RFC-0009](0009-estrutura-de-dados-lexicos-e-dicionarios.md)) | T (gerado) | 1 |
| **Alinhamento** palavra a palavra com o original: lema, morfologia, dStrong, glosa, transliteração, função sintática, em arquivo lateral protegido por hash do texto | D | 1 |
| Marca "sem equivalente" ou "implícito" para palavras do original não traduzidas | D | 2 |
| Termo-chave do glossário (`glossario:hesed`) | D | 1 |
| Ocorrências da palavra no livro, no testamento e na Bíblia | gerado | 2 |

### 4. Idiomas originais e manuscritos

O texto original acompanha a tradução como **camada paralela** (hebraico com vogais e acentos, aramaico, grego com acentos e espíritos, além de uma forma normalizada para busca), alinhada ao verso e à palavra. Cada edição de texto-base ([RFC-0001](0001-textos-base.md)) é uma **fonte**, identificada e com licença registrada. O projeto **não copia grandes conjuntos de dados de terceiros para o repositório**: scripts baixam versões fixadas por *hash*, e só dados que nós produzimos (alinhamentos, correções, notas) vivem no Git.

Os **manuscritos e as tradições textuais** entram assim:

| Recurso | Descrição |
|---|---|
| **Registro de manuscritos** | Sigla (Gregory-Aland para o NT grego, Göttingen e Rahlfs para a LXX, siglas dos Pergaminhos do Mar Morto), nome, data estimada em intervalo, local de guarda, conteúdo e **link** para imagens digitais da instituição. **Links, nunca cópias**, a menos que a licença permita |
| **Tradições como camadas** | Texto Massorético, LXX, Pentateuco Samaritano, Qumran, Vulgata, Peshitta, e no NT o texto crítico, o bizantino e outros, cada uma alinhada por verso (e por palavra quando houver dados) |
| **Unidade de variação** | `{ref, leituras: [{texto, tradição, testemunhas[]}], leitura_adotada, importância, nota}`. Importância: *afeta a tradução*, *relevante*, *ortográfica*. Começamos pelas variantes que **mudam a tradução**; a cobertura cresce com o tempo |
| **Lista de testemunhas por verso** | Quais manuscritos contêm ou não o verso (por exemplo, Marcos 16:9-20 e João 7:53 a 8:11) |
| **Forma da citação** | Quando o NT cita o AT: se segue o texto massorético ou a LXX |
| **Apêndice de fontes livres** | O aparato crítico de Tischendorf (domínio público) e outras obras antigas são candidatos a **digitalização comunitária** (a verificar) |

Princípio: **mostrar a variação sem decidir doutrina**. O texto adotado vem do texto-base ([RFC-0001](0001-textos-base.md)); as alternativas são fatos documentados, com as testemunhas, e a nota diz o que muda para o sentido.

### 5. Versificação

Cada versão declara o esquema em que foi composta e o projeto mantém **tabelas de mapeamento** versículo a versículo entre os esquemas (original hebraico, LXX, Vulgata, inglês). Com isso:

- a mesma passagem se encontra em qualquer versão ou idioma do projeto;
- os **Salmos** podem ser exibidos com a numeração hebraica, a grega ou ambas;
- referências cruzadas de terceiros (que seguem a numeração inglesa) se traduzem para a nossa.

### 6. Estrutura do repositório (proposta)

```
texts/<idioma>/<versão>/<LIV>.usfm      texto-fonte (USFM 3)
data/canon/                             livros, ordens, esquemas e mapeamentos
data/alinhamento/<idioma>/<versão>/     alinhamento com o original (JSON)
data/variantes/<LIV>.json               unidades de variação textual
data/manuscritos/                       registro de manuscritos e testemunhas
data/referencias/                       cruzadas, citações AT/NT, paralelas
data/entidades/                         pessoas, lugares, grupos, eventos, tempos
data/glossario/<idioma>.yaml            termos-chave amarrados ao Strong
data/lexico/<idioma>/                   léxico: glosas e definições por idioma (RFC-0009)
data/dicionarios/<obra>/                verbetes com âncoras estruturadas (RFC-0009)
data/topicos/ · data/planos/ · data/memorizacao/ · data/mapas/
notes/<idioma>/<versão>/<LIV>.json      notas e comentários por camada
audio/                                  manifestos (os binários ficam fora do Git)
tools/                                  validadores e geradores (MIT)
dist/                                   gerado: Markdown, JSON, SQLite
```

As pastas serão criadas quando houver conteúdo.

### 7. Validação automática (CI)

Todo PR roda: sintaxe USFM, **contagem de versos contra o esquema**, ordem dos capítulos e versos, IDs de livros, formato dos números de Strong, presença do aviso de licença no cabeçalho, caracteres proibidos e **consistência do glossário** (termo-chave traduzido por uma forma não prevista). Para o texto, a verificação de semelhança com traduções protegidas é feita pelos mantenedores ([política](../docs/direitos-autorais-e-referencias.md)).

### 8. Exemplo ilustrativo

Exemplo de **formato**, escrito para este documento. **Não é texto da tradução.**

```usfm
\id PSA [Versão] pt-BR
\usfm 3.0
\ide UTF-8
\rem Exemplo ilustrativo de formato. Não é texto da tradução.
\rem [Versão] pt-BR · © Contribuidores do projeto bibleme Traduções · CC BY 4.0 · https://www.bibleme.com.br/translations
\h Salmos
\c 117
\s1 Convite universal ao louvor
\r (Rm 15.11)
\q1
\v 1 Louvem o \nd \+w Senhor|strong="H3068"\+w*\nd*, \w todas|strong="H3605"\w* as
\w nações|strong="H1471"\w*;\f + \fr 117.1: \ft No hebraico, \fq goyim\fq*, os povos de fora de Israel.\f*
\q2 \w celebrem|strong="H7623"\w*-no, \w todos|strong="H3605"\w* os \w povos|strong="H523"\w*.\x - \xo 117.1: \xt Rm 15.11.\x*
```

A sintaxe exata dos marcadores será conferida com o validador do USFM antes da primeira release.

## Alternativas consideradas

- **Só Markdown:** descartado como fonte (opção B) pelo isolamento do ecossistema; adotado como formato de consumo.
- **XML/TEI:** muito expressivo, mas pesado para quem edita e para revisar em PR.
- **Banco de dados como fonte:** perde o diff legível e a revisão por PR.

## O que muda para quem

- **Tradutores:** editam USFM (com modelos e validação que ajudam); quem não quiser mexer em marcadores pode propor texto em Issues e deixar a marcação para revisores.
- **Apps e IA:** consomem Markdown, JSON ou SQLite gerados; todos com o mesmo ID e mapeamento de versificação.
- **Equipes de idioma:** herdam as camadas neutras (originais, variantes, referências) e só produzem o que é do idioma.

## Questões em aberto

1. USFM como fonte (proposta), ou Markdown com atributos?
2. Qual **esquema de versificação** é o de composição: o hebraico ("original") ou o inglês? (O app bibleme usa hoje a numeração da KJV.)
3. Qual **esquema de Strong**? A [RFC-0009](0009-estrutura-de-dados-lexicos-e-dicionarios.md) propõe o **dStrong** (Strong desambiguado do STEPBible) como identidade e o Strong clássico como cruzamento: o clássico é impreciso (um número para muitas palavras, ausências), mas é o que o público conhece.
4. **Resolvida pelo fundador em 23/out/2026:** o **alinhamento em arquivo lateral é a fonte** e o Strong dentro do USFM é **saída gerada** ([RFC-0009](0009-estrutura-de-dados-lexicos-e-dicionarios.md)). Em aberto: quando começar a alinhar, já no piloto ou depois?
5. Onde guardar **áudio e imagens** (Git LFS, *release assets*, armazenamento externo)?
6. Padrão de dados de **entidades** (pessoas, lugares, eventos): IDs próprios ou compatíveis com outras fontes abertas?
7. A marcação de **variantes** entra no USFM (marcadores `\z`) ou só na camada de dados?

## Decisão

*(a preencher)*

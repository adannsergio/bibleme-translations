# bibleme Traduções

**Uma Bíblia livre, feita em colaboração, em muitos idiomas.**

Uma iniciativa aberta para produzir traduções da Bíblia de alta qualidade, com uma licença que permite usar de graça, vender e adaptar. A única exigência é citar a versão e linkar para o projeto. Cada tradução leva o nome **bibleme + versão + idioma**.

> **Estado: Fase 0, fundação.** Ainda não existe texto traduzido. Estamos definindo, em público e com você, as regras do jogo: licença, textos de partida, filosofia de tradução, formato e processo de revisão. As propostas estão em [`rfcs/`](rfcs/) e esperam a sua opinião.

[English version](README.en.md)

## Princípios

1. **Livre de verdade.** Texto sob [CC BY 4.0](LICENSE): use, copie, imprima, venda, coloque em app. Só peça-se a citação (veja [como citar](docs/licenca.md#como-citar)).
2. **Fiel e legível.** Fiel aos textos originais, clara para quem lê hoje. As escolhas difíceis ficam à vista, em nota, não escondidas.
3. **Transparente.** Cada versículo tem histórico, autoria e justificativa. Discussões, revisões e decisões acontecem aqui, em público.
4. **Para muitos idiomas.** O projeto nasce em português, mas é desenhado para receber qualquer idioma, cada um com sua equipe e com a mesma barra de qualidade.
5. **Honesta com quem veio antes.** Não copiamos traduções que têm donos. Veja [Direitos autorais e referências](docs/direitos-autorais-e-referencias.md): é a regra mais importante do projeto.

## O que cada tradução terá

| Recurso | Como entra |
|---|---|
| Todos os livros | Os 66 livros e os deuterocanônicos, identificados como tal, com várias ordens canônicas (escopo exato em [RFC-0001](rfcs/0001-textos-base.md)) |
| Idiomas originais | Hebraico, aramaico e grego como camada paralela, alinhada palavra a palavra, com lema e morfologia |
| Manuscritos e variantes | Registro de manuscritos, unidades de variação, testemunhas e forma das citações do AT no NT |
| Números de Strong | Palavra do texto ligada ao original, no próprio arquivo ([RFC-0003](rfcs/0003-formato-e-camadas.md)) |
| Versículos relacionados | Referências cruzadas e citações, como dados neutros de idioma, de fontes livres |
| Perícopes | Títulos de seção originais, curtos e neutros |
| Introdução a cada livro | Autoria, data, estrutura, temas e questões de texto, sem tomar partido confessional |
| Notas e comentários | Em camadas: alternativas literais e variantes no texto; interpretação em camada separada |
| Mapas e ilustrações | Só material com licença livre ou criado pelo projeto, com origem registrada |
| Pessoas, lugares, eventos, áudio, planos de leitura, memorização | Camadas que a comunidade constrói e mantém ([RFC-0008](rfcs/0008-recursos-de-estudo.md)) |

### Em todos os formatos

O texto é escrito **uma vez** em USFM e **gerado** em **Markdown** (para leitura e para IA), **JSON** e **SQLite** (para apps), com um **servidor MCP** para assistentes de IA e uma **API de leitura** que o bibleme hospeda a preço de custo mais uma margem de sustentação. O texto continua sempre livre e baixável ([RFC-0006](rfcs/0006-distribuicao-ia-api-mcp.md) e [RFC-0007](rfcs/0007-sustentabilidade.md)).

## Propostas em discussão

| RFC | Assunto |
|---|---|
| [0001](rfcs/0001-textos-base.md) | Textos de partida (originais) e escopo do cânon |
| [0002](rfcs/0002-filosofia-de-traducao.md) | Filosofia de tradução e decisões de estilo |
| [0003](rfcs/0003-formato-e-camadas.md) | Formato do texto e o que cada nível (verso, capítulo, livro, palavra) carrega |
| [0004](rfcs/0004-processo-e-versoes.md) | Revisão, versões estáveis e uso de IA |
| [0005](rfcs/0005-nome-marca-e-url.md) | Nome, marca e endereço de atribuição |
| [0006](rfcs/0006-distribuicao-ia-api-mcp.md) | Markdown para IA, JSON, API e MCP |
| [0007](rfcs/0007-sustentabilidade.md) | API paga a preço de custo e doações |
| [0008](rfcs/0008-recursos-de-estudo.md) | Recursos de estudo que a comunidade pode construir |
| [0009](rfcs/0009-estrutura-de-dados-lexicos-e-dicionarios.md) | Estrutura de dados: Strong, relacionados, léxicos e dicionários |

## Direitos autorais: a regra mais importante

A Bíblia de Jerusalém, a NVI, a ARA e a maioria das traduções modernas têm detentores de direitos. Traduções, notas, títulos de seção e listas de referências cruzadas são obras protegidas. Por isso:

- **Traduzimos a partir dos textos originais** (hebraico, aramaico, grego e, onde for o caso, latim), e não a partir de outra tradução.
- Bíblias consagradas servem de **ponto de comparação** para avaliar fidelidade e clareza, **nunca de fonte de texto**. Nada delas entra no repositório: nem versículos, nem notas, nem títulos, nem introduções.
- Toda fonte que usamos é registrada com a licença conferida em [`docs/registro-de-fontes.md`](docs/registro-de-fontes.md).

Detalhes, protocolo do tradutor e o que fazer em caso de dúvida: [`docs/direitos-autorais-e-referencias.md`](docs/direitos-autorais-e-referencias.md).

## Como participar

Você não precisa saber Git. Pode participar de quatro jeitos:

- **Dar opinião** nas propostas abertas: leia as [RFCs](rfcs/) e comente nas Issues e nas Discussions.
- **Sugerir uma tradução ou uma nota** para um versículo, com a justificativa nos originais.
- **Revisar**: se você lê hebraico, aramaico ou grego, ou tem ouvido apurado para a língua, sua leitura vale muito.
- **Começar um idioma novo**: abra a Issue "Novo idioma" e conte como você faria.

Comece por [CONTRIBUTING.md](CONTRIBUTING.md). A convivência segue o [Código de Conduta](CODE_OF_CONDUCT.md) e as decisões seguem a [Governança](GOVERNANCE.md).

## Estrutura do repositório

```
README.md · README.en.md      porta de entrada
LICENSE                       CC BY 4.0 (textos, dados e documentação)
LICENSE-CODE                  MIT (código do site e das ferramentas)
CONTRIBUTING.md               como contribuir
GOVERNANCE.md                 papéis e como decidimos
CODE_OF_CONDUCT.md            convivência
docs/                         licença, direitos autorais, registro de fontes, projetos relacionados
rfcs/                         propostas abertas para discussão
site/                         landing page (GitHub Pages)
.github/                      modelos de Issue e de PR, publicação do site
texts/                        (a criar) <idioma>/<versão>/<LIVRO>.usfm
data/                         (a criar) dados neutros de idioma
```

## Fases

| Fase | O que acontece |
|---|---|
| **0. Fundação** (agora) | Decidir licença, fontes, filosofia, formato, processo e nome nas RFCs |
| **1. Piloto** | Traduzir Rute, Jonas e Filemom (narrativa, poesia e carta) para testar o fluxo inteiro |
| **2. Primeiros blocos** | Evangelhos e Salmos, com release estável |
| **3. Cobertura** | Restante do Novo e do Antigo Testamento, deuterocanônicos |
| **4. Mais idiomas** | Novas equipes de idioma, com o mesmo processo |

Uma Bíblia inteira é trabalho de anos. Por isso entregamos por blocos, com versões estáveis ([RFC-0004](rfcs/0004-processo-e-versoes.md)), e não em um lançamento único.

## O app bibleme

O [app bibleme](https://www.bibleme.com.br) é um dos usuários possíveis destas traduções, e nasceu antes delas. O projeto de tradução é independente do app: as decisões editoriais não seguem necessidades de produto (veja a [Governança](GOVERNANCE.md#independência-editorial)) e qualquer pessoa ou empresa pode usar o texto nas mesmas condições.

## Como estes documentos foram escritos

Os documentos fundadores (este README, o guia da licença, as políticas, o registro de fontes e as RFCs) foram **redigidos com apoio de IA (Claude, da Anthropic) e revisados pelo fundador**. São propostas: a comunidade os revisa, corrige e decide. Isso segue a [política de IA do projeto](rfcs/0004-processo-e-versoes.md#6-uso-de-ia-no-processo): a IA pode apoiar, **não** é autora do texto bíblico, e toda contribuição declara o apoio recebido.

## Licenças

- Textos, dados e documentação: [CC BY 4.0](LICENSE).
- Código do site e ferramentas: [MIT](LICENSE-CODE).
- O nome e a marca "bibleme" não são licenciados por nenhuma das duas. Veja a [política de nome](docs/licenca.md#nome-e-versões-modificadas).

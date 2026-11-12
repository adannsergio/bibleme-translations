# bibleme Traduções

**Uma Bíblia livre, feita em colaboração, em muitos idiomas.**

Uma iniciativa aberta para produzir traduções da Bíblia de alta qualidade, sob uma licença que permite usar de graça, vender e adaptar — só pedimos a citação e o link para o projeto. Cada tradução leva o nome **versão + idioma** (por exemplo, `[Versão] pt-BR`); veja [como citar](docs/licenca.md#como-citar).

> **Estado: primeira release.** O Novo Testamento em português (**Essencial pt-BR 0.1 "Primícias"**) já está traduzido e no ar, mas como [pré-release de quarentena](https://github.com/adannsergio/bibleme-translations/releases/tag/essencial-pt-br-0.1): revisado por agentes de IA, ainda sem revisão humana formal nem verificação de semelhança. [Leia e confira](https://adannsergio.github.io/bibleme-translations/leitor/) ou veja o que falta na [página sobre o rascunho](https://adannsergio.github.io/bibleme-translations/traducao/). As regras do projeto continuam abertas a comentário em [`rfcs/`](rfcs/).

[English version](README.en.md)

## Princípios

1. **Livre de verdade.** Texto sob [CC BY 4.0](LICENSE): use, copie, imprima, venda, coloque em app.
2. **Fiel e legível.** Fiel aos textos originais, clara para quem lê hoje. As escolhas difíceis ficam à vista, em nota, não escondidas.
3. **Transparente.** Cada versículo tem histórico, autoria e justificativa, em público — inclusive onde IA apoiou a redação ([mais](rfcs/0004-processo-e-versoes.md#6-uso-de-ia-no-processo)).
4. **Para muitos idiomas.** Nasce em português, desenhado para receber qualquer idioma, cada um com sua equipe e a mesma barra de qualidade.
5. **Honesta com quem veio antes.** Não copiamos traduções que têm donos — veja [Direitos autorais e referências](docs/direitos-autorais-e-referencias.md).

## O que cada tradução traz

Os 66 livros (e os deuterocanônicos, identificados como tal) traduzidos a partir dos **originais** — nunca de outra tradução —, com os idiomas originais alinhados palavra a palavra, números de Strong, variantes de manuscrito, referências cruzadas, notas em camadas (literal, separado de interpretação) e introdução neutra a cada livro. Formato completo em [RFC-0001](rfcs/0001-textos-base.md) e [RFC-0003](rfcs/0003-formato-e-camadas.md). O texto é escrito uma vez em USFM e distribuído também em Markdown, JSON e SQLite, com servidor MCP e API própria ([RFC-0006](rfcs/0006-distribuicao-ia-api-mcp.md)) — sempre livre e baixável.

## Direitos autorais: a regra mais importante

A Bíblia de Jerusalém, a NVI, a ARA e a maioria das traduções modernas têm detentores de direitos; por isso **traduzimos a partir dos textos originais**, nunca de outra tradução. Bíblias consagradas servem só de ponto de comparação, nunca de fonte. Veja o protocolo completo em [Direitos autorais e referências](docs/direitos-autorais-e-referencias.md).

## Como participar

Você não precisa saber Git: comente nas [RFCs](rfcs/) em aberto, sugira uma tradução ou nota por Issue, ou comece um idioma novo. Detalhes em [CONTRIBUTING.md](CONTRIBUTING.md). A convivência segue o [Código de Conduta](CODE_OF_CONDUCT.md); as decisões, a [Governança](GOVERNANCE.md).

## Licenças

Textos, dados e documentação sob [CC BY 4.0](LICENSE); código sob [MIT](LICENSE-CODE). O nome e a marca **bibleme** não são licenciados por nenhuma das duas — veja a [política de nome](docs/licenca.md#nome-e-versões-modificadas). O [app bibleme](https://www.bibleme.com.br) é um dos usuários possíveis destas traduções e nasceu antes delas; o projeto de tradução é editorialmente independente ([mais](GOVERNANCE.md#independência-editorial)).

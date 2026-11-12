# bibleme Translations

**A free Bible, made together, in many languages.**

An open initiative to produce high-quality Bible translations under a license that lets anyone use them for free, sell them and adapt them — we only ask for credit and a link back to the project. Every translation is named **version + language** (e.g. `[Version] pt-BR`); see [how to credit](docs/licenca.md#como-citar).

> **Status: first release.** The New Testament in Portuguese (**Essencial pt-BR 0.1 "Primícias"**) is translated and live, as a [quarantine prerelease](https://github.com/adannsergio/bibleme-translations/releases/tag/essencial-pt-br-0.1): reviewed by AI agents, still without formal human review or a similarity check. [Read and check it](https://adannsergio.github.io/bibleme-translations/leitor/), or see what's missing on the [about-the-draft page](https://adannsergio.github.io/bibleme-translations/traducao/). The project's rules are still open for comment in [`rfcs/`](rfcs/) (written in Portuguese first; English versions of the key ones are welcome as contributions).

[Versão em português](README.md)

## Principles

1. **Truly free.** Text under [CC BY 4.0](LICENSE): use, copy, print, sell, ship in an app.
2. **Faithful and readable.** Faithful to the original texts, clear to today's reader. Hard choices stay visible in notes, never hidden.
3. **Transparent.** Every verse has history, authorship and a rationale, in public — including where AI assisted the writing ([more](rfcs/0004-processo-e-versoes.md#6-uso-de-ia-no-processo)).
4. **For many languages.** Born in Portuguese, designed for any language, each with its own team and the same quality bar.
5. **Honest toward those who came before.** We do not copy translations that have owners — see [Copyright and references](docs/direitos-autorais-e-referencias.md).

## What each translation brings

All 66 books (and the deuterocanonical ones, labelled as such) translated from the **originals** — never from another translation —, with the original languages aligned word by word, Strong's numbers, manuscript variants, cross-references, layered notes (literal, kept separate from interpretation) and a neutral introduction to each book. Full format in [RFC-0001](rfcs/0001-textos-base.md) and [RFC-0003](rfcs/0003-formato-e-camadas.md). The text is written once in USFM and also distributed as Markdown, JSON and SQLite, with its own MCP server and API ([RFC-0006](rfcs/0006-distribuicao-ia-api-mcp.md)) — always free and downloadable.

## Copyright: the most important rule

The Jerusalem Bible, the NIV, the ARA and most modern translations have rights holders; that's why **we translate from the original texts**, never from another translation. Well-known Bibles serve only as a point of comparison, never as a source. See the full protocol in [Copyright and references](docs/direitos-autorais-e-referencias.md).

## How to take part

You do not need to know Git: comment on the open [RFCs](rfcs/), suggest a translation or a note through an Issue, or start a new language. Details in [CONTRIBUTING.md](CONTRIBUTING.md). Behavior follows the [Code of Conduct](CODE_OF_CONDUCT.md); decisions follow [Governance](GOVERNANCE.md).

## Licenses

Texts, data and documentation under [CC BY 4.0](LICENSE); code under [MIT](LICENSE-CODE). The "bibleme" name and mark are not licensed by either — see the [naming policy](docs/licenca.md#nome-e-versões-modificadas). The [bibleme app](https://www.bibleme.com.br) is one possible user of these translations and predates them; the translation project is editorially independent ([more](GOVERNANCE.md#independência-editorial)).

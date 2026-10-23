# bibleme Translations

**A free Bible, made together, in many languages.**

An open initiative to produce high-quality Bible translations under a license that lets anyone use them for free, sell them and adapt them. The only requirement is to credit the version and link back to the project. Every translation is named **bibleme + version + language**.

> **Status: Phase 0, foundations.** There is no translated text yet. We are defining the ground rules in public, with you: license, source texts, translation philosophy, format and review process. The proposals live in [`rfcs/`](rfcs/) and are waiting for your opinion. (They are written in Portuguese first; English versions of the key ones are welcome as contributions.)

[Versão em português](README.md)

## Principles

1. **Truly free.** Text under [CC BY 4.0](LICENSE): use, copy, print, sell, ship in an app. We only ask for credit ([how to credit](docs/licenca.md#como-citar)).
2. **Faithful and readable.** Faithful to the original texts, clear to today's reader. Hard choices stay visible in notes, never hidden.
3. **Transparent.** Every verse has history, authorship and a rationale. Discussion, review and decisions happen here, in public.
4. **For many languages.** The project starts in Portuguese but is designed for any language, each with its own team and the same quality bar.
5. **Honest toward those who came before.** We do not copy translations that have owners. See [Copyright and references](docs/direitos-autorais-e-referencias.md): it is the most important rule of the project.

## What each translation will include

All books (66 plus the deuterocanonical books, labelled as such, with several canonical orders), the original languages (Hebrew, Aramaic, Greek) as an aligned parallel layer, manuscripts and textual variants, Strong's numbers, related verses and Old Testament quotations, section headings (pericopes), an introduction to each book, notes and commentary in separate layers, and maps and illustrations that are freely licensed or created by the project. The community can also build further layers: people, places and events, audio, reading plans, memorization sets ([RFC-0008](rfcs/0008-recursos-de-estudo.md)).

**In every format.** The text is written once in USFM and *generated* as **Markdown** (for reading and for AI), **JSON** and **SQLite** (for apps), with an **MCP server** for AI assistants and a **read API** that bibleme hosts at cost plus a published sustaining margin. The text always stays free and downloadable ([RFC-0006](rfcs/0006-distribuicao-ia-api-mcp.md), [RFC-0007](rfcs/0007-sustentabilidade.md)).

## Copyright: the most important rule

Modern translations such as the Jerusalem Bible, the NIV-family translations and the Brazilian ARA have rights holders. Translations, notes, section headings and cross-reference lists are protected works. So:

- **We translate from the original texts** (Hebrew, Aramaic, Greek and, where relevant, Latin), not from another translation.
- Well-known Bibles are used as a **point of comparison** for fidelity and clarity, **never as a source of text**. Nothing from them enters the repository.
- Every source we use is logged, with its license checked, in [`docs/registro-de-fontes.md`](docs/registro-de-fontes.md).

## How to take part

You do not need to know Git.

- **Weigh in** on the open [RFCs](rfcs/) through Issues and Discussions.
- **Suggest a translation or a note** for a verse, with your reasoning from the original text.
- **Review**: if you read Hebrew, Aramaic or Greek, or have a good ear for your language, your reading is worth a lot.
- **Start a new language**: open the "New language" issue and tell us how you would do it.

Start with [CONTRIBUTING.md](CONTRIBUTING.md). Behavior follows the [Code of Conduct](CODE_OF_CONDUCT.md); decisions follow [Governance](GOVERNANCE.md).

## How these documents were written

The founding documents (this README, the license guide, the policies, the source register and the RFCs) were **drafted with AI assistance (Claude, by Anthropic) and reviewed by the founder**. They are proposals: the community reviews, corrects and decides. This follows the [project's AI policy](rfcs/0004-processo-e-versoes.md#6-uso-de-ia-no-processo): AI may assist, it is **not** an author of the Bible text, and every contribution declares the assistance received.

## Licenses

- Texts, data and documentation: [CC BY 4.0](LICENSE).
- Website and tooling code: [MIT](LICENSE-CODE).
- The "bibleme" name and mark are not licensed by either. See the [naming policy](docs/licenca.md#nome-e-versões-modificadas).

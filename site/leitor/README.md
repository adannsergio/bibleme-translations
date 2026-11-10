# Leitor do Novo Testamento (rascunho de IA)

Leitor estático (HTML, CSS e JavaScript sem dependências) do **rascunho de IA** do Novo Testamento em português, traduzido do grego (SBLGNT). Publicado junto com a página do projeto pelo workflow `.github/workflows/pages.yml`.

> **Quarentena.** O texto foi feito com uso de IA (que pode incluir escrita e revisão), **ainda não passou por revisão humana formal** e não é texto aprovado do projeto. A política do projeto ([RFC-0004, §6](../../rfcs/0004-processo-e-versoes.md)) trata rascunho de IA do texto bíblico como material de risco até a verificação de semelhança e a revisão humana. Veja [`../traducao/`](../traducao/index.html).

## O que o leitor faz

- Lê qualquer capítulo (`#/Mat/5`, `#/Jhn/3/16`) com **Strong** em cada termo, modo **interlinear**, **notas** (literal, variante, cultural, acréscimo, não traduzido, tradução contextual) e palavras acrescentadas sublinhadas.
- Painel do versículo: **grego palavra a palavra** (lema, Strong, glosa, morfologia em português, trecho que a traduz e **em quais edições do grego a palavra aparece**), as palavras que outras edições trazem a mais, notas e **versículos relacionados** (citações nas notas, referências cruzadas do OpenBible, paralelos de vocabulário).
- Página de cada termo (`#/g/26`): léxico, como o rascunho o traduziu e todos os versículos em que aparece.
- Busca: referência (`Jo 3:16`), Strong (`G26`), grego (`πίστις`), português (`amor`).
- **Camadas opcionais em piloto** (Marcos): botões "Palavras de Jesus" (vermelho) e "Pronomes reverenciais" (maiúscula), desligados por padrão.
- Tema claro e escuro, tamanho de texto, funciona em celular. Nada é enviado a servidor algum; só `localStorage` guarda as preferências.

## Dados (`dados/`)

Arquivos JSON compactos, carregados sob demanda. Gerados a partir dos rascunhos da tarefa 0003 (mesa editorial, local, fora do git) pelo script `site.py` daquela tarefa; **não edite à mão**.

| Arquivo | Conteúdo |
|---|---|
| `livros.json` | livros, capítulos, estado da revisão (`rev`, `caps_ap`) e rodadas de revisão de IA (`rev_n`), contadores e fontes |
| `refs.json` | `[livro, cap, verso]` de cada versículo, na ordem canônica (índice usado por `strong-indice.json`) |
| `texto.json` | texto em português puro, por livro, capítulo e verso (busca e pré-visualização) |
| `livros/<Cod>.json` | por versículo: `t` = tokens do texto (`["u", texto, [ids gregos], espaço]` unidade alinhada · `["f", …]` acréscimo · `["p", …]` pontuação · `["o", "", [ids]]` palavra grega não traduzida · `["n", tipo, texto]` nota), `g` = palavras gregas (`[forma, Strong, morfologia, lema, edições?]`; `edições` é uma máscara de bits de `info.edicoes` e só aparece quando a palavra não está em todas as edições comparadas) e `x` = palavras que outras edições trazem e o SBLGNT não (`[forma, Strong, morfologia, edições]`) |
| `rel/<Cod>.json` | versículos relacionados: `[referência OpenBible, código do projeto, origens (bits 1 nota · 2 OpenBible · 4 vocabulário), votos, similaridade %, Strong em comum, tipo]` |
| `lexico.json` | por Strong: lema, transliteração, glosa e sentidos (TBESG), usos e como o rascunho o traduziu |
| `strong-indice.json` | por Strong: índices (de `refs.json`) dos versículos que o usam |
| `morf.json` | código de morfologia do TAGNT → rótulo em português |
| `camadas.json` e `camadas/<Cod>.json` | camadas opcionais em piloto ([RFC-0011](../../rfcs/0011-camadas-interpretativas-opcionais.md)): `wj` = palavras de Jesus (faixas de tokens por versículo: `[início, fim, certeza, fala, verbo]`) e `rv` = pronomes reverenciais (`[token, categoria, certeza, forma grega]`); só existem para os livros já gerados (hoje, Marcos); propostas automáticas, sem revisão |

Os códigos de livro são os do TAGNT (`Mat`, `Mrk`, `Luk`, `Jhn`, `Act`, `Rom`, `1Co`, …).

## Fontes e licenças

- **Texto grego:** [SBLGNT](https://github.com/LogosBible/SBLGNT), Michael W. Holmes (ed.), Society of Biblical Literature e Logos Bible Software, 2010. CC BY 4.0. É uma edição crítica, não um manuscrito único; o leitor não consulta manuscritos individuais.
- **Strong, lema, morfologia e glosas:** [STEPBible-Data](https://github.com/STEPBible/STEPBible-Data) (TAGNT e TBESG), Tyndale House, Cambridge, e STEPBible.org. CC BY 4.0. Os dados foram reformatados, recortados e combinados com o alinhamento deste projeto (as glosas em inglês vêm do TBESG, baseado em Abbott-Smith). O arquivo original não é republicado.
- **Referências cruzadas:** [OpenBible.info](https://www.openbible.info/labs/cross-references/), CC BY. Só as referências, sem texto.
- **Tradução em português:** rascunho de IA (Claude, da Anthropic, e Codex, da OpenAI). Licença pretendida do projeto: CC BY 4.0, sujeita à revisão humana e à conferência de originalidade.

## Versão publicada

O workflow do Pages troca `__SHA__`, `__DIA__` e `__REPO__` (nas `meta` de `index.html` e no HTML de `../traducao/`) pelo commit, pela data e pelo repositório da publicação, e o rodapé do leitor mostra a versão e o modelo de citação da [RFC-0010](../../rfcs/0010-citacao-por-tipo-de-uso.md) (aceita em 2026-11-10). Localmente os marcadores ficam como estão e o leitor diz "cópia local".

## Rodar localmente

O leitor busca os JSON por `fetch`, então precisa de um servidor HTTP (abrir o arquivo direto do disco não funciona):

```bash
python3 -m http.server 8000 --directory site
# abra http://localhost:8000/leitor/
```

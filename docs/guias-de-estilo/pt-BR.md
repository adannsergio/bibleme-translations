# Guia de estilo: português do Brasil (pt-BR)

> **Rascunho, ainda não decidido.** A coluna "Sugestão inicial" foi escrita com apoio de IA, **não foi adotada pelo fundador nem pela comunidade** e está aí só para a conversa não começar do zero. O que **já está decidido** vale para todos os idiomas e está na [RFC-0002](../../rfcs/0002-filosofia-de-traducao.md): o ponto "no meio" (sentido e imagem), a regra de desempate, o "sem partido escondido" e uma versão por idioma.

## Antes do piloto

O piloto (Rute, Jonas e Filemom) vai mexer em quase todos os temas abaixo. As escolhas de **custo alto de mudar depois** devem estar fechadas antes dele:

1. **Tratamento** (você/vocês ou tu/vós), porque aparece em todo diálogo.
2. **Linguagem inclusiva**, porque se decide frase a frase.
3. **Nomes próprios**, porque a forma se espalha por todo o texto e pelo glossário.
4. **Termos-chave** (glossário), pelo mesmo motivo.

O **nome divino** parece a escolha mais polêmica, mas, como a [RFC-0002](../../rfcs/0002-filosofia-de-traducao.md) manda **marcá-lo em toda ocorrência**, trocar a forma exibida depois é barato.

## Os temas

| Tema | Opções | Sugestão inicial (não decidida) | Custo de mudar depois |
|---|---|---|---|
| **Tratamento** | você/vocês · tu/vós | Você/vocês, sem "vós" | **Alto** |
| **Linguagem inclusiva** (ex.: *adelphoi*) | Literal ("irmãos") · inclusiva quando o contexto exige ("irmãos e irmãs") | Inclusiva quando o grupo claramente inclui mulheres, com a forma literal em nota | **Alto** |
| **Nomes próprios** | Forma tradicional (Davi, Moisés) · transliteração | Forma consagrada em português quando existe; transliteração consistente para os demais; lista no glossário | **Alto** |
| **Termos-chave** (*hesed*, *shalom*, *dikaiosyne*, *pistis*, *agape*, *logos*) | Uma tradução fixa · variar por contexto | Entradas no glossário, variação por contexto, sempre justificada | **Alto** |
| **Alma, espírito, carne** (*nephesh*, *psyche*, *pneuma*, *sarx*) | Uma tradução · contextual | Glossário, contextual | **Alto** |
| **Destino dos mortos** (*sheol*, *hades*, *geena*, *tártaro*) | Uma palavra para todos ("inferno") · uma por termo do original | Distinguir os termos do original, no glossário, e explicar em nota na primeira ocorrência | **Alto** |
| **Termos de forte carga entre tradições** (batizar, igreja, sacerdote, presbítero ou ancião, justificação, ceia) | Palavra de uma tradição · sentido do original | Sentido do original; palavra consagrada quando também é a mais fiel; alternativas em nota ([RFC-0002](../../rfcs/0002-filosofia-de-traducao.md), seção 3) | Médio |
| **Nome divino** (YHWH, já marcado no arquivo-fonte) | "Senhor" em versalete · "Javé" · "Yahweh" · "Eterno" | "SENHOR" em versalete (convenção histórica), com nota na primeira ocorrência de cada livro e entrada no glossário; debater "Javé" | Baixo |
| **Pronomes divinos** | Maiúscula reverencial · minúscula | Minúscula (evita decidir exegese em textos ambíguos) | Médio |
| **Cristo / Messias** | "Cristo" · "Messias" | "Cristo", com nota quando o sentido de "Messias" importa | Médio |
| **Poesia** | Em prosa · em versos por paralelismo | Em versos, seguindo o paralelismo hebraico | Médio |
| **Medidas e moedas** | Manter a medida antiga e converter em nota · converter no texto | Manter a medida e dar o equivalente aproximado em nota | Médio |
| **Nomes dos livros e rótulo dos deuterocanônicos** | Forma católica (Eclesiástico) · ecumênica (Sirácida) · protestante (Cantares) · "apócrifos" ou "deuterocanônicos" | Forma mais usada, com a outra entre parênteses na primeira menção; rótulo "deuterocanônicos" | Baixo |
| **Discurso direto** | Aspas · travessão | Aspas | Baixo |
| **Ortografia** | Acordo Ortográfico de 1990 | Sim; o português europeu seria uma versão à parte | Baixo |

## Como cada tema se fecha

1. O coordenador do idioma (no começo, o fundador) propõe a escolha, **com a justificativa**.
2. Um revisor de língua e um revisor dos originais comentam.
3. A escolha entra neste guia por PR, com o motivo, e passa a valer.

Mudar uma escolha de **custo alto** depois do piloto exige um PR que diga **o quanto do texto muda** e quem refaz.

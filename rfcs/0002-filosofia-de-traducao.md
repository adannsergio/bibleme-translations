# RFC-0002: Filosofia de tradução

- **Estado:** Proposta
- **Autor(es):** Fundador (rascunho redigido com apoio de IA)
- **Aberta em:** 2026-10-23
- **Decide:** Conselho (no início, o fundador), ouvidos os coordenadores de idioma
- **Fim do prazo de comentários:** 14 dias depois da publicação do repositório

## Resumo

Esta RFC propõe **uma postura e uma lista de decisões de estilo** para as traduções do projeto. A postura: **fiel ao texto, clara ao leitor, honesta nas escolhas**. A lista de decisões está em aberto de propósito: é o que mais precisa da sua opinião.

## Problema

Toda tradução escolhe um ponto entre dois polos: seguir a forma do original (mais "palavra por palavra") ou o sentido, em frases naturais da língua de chegada (mais "pensamento por pensamento"). As três edições citadas como referência de qualidade ficam em lugares diferentes dessa linha: a **ARA** tende ao formal, a **NVI** tende ao dinâmico, e a **Bíblia de Jerusalém** se destaca pelo aparato crítico e literário. O projeto precisa dizer onde quer ficar, e por quê, para que centenas de revisões puxem na mesma direção.

## Proposta

### Postura em cinco compromissos

1. **Fidelidade ao original.** Preservar a palavra, a estrutura, a imagem e o ritmo, quando a língua de chegada os comporta. Metáforas e termos culturais permanecem se um leitor atento os entende. Quando adaptamos, a forma literal vai em nota ("Lit.: …").
2. **Clareza para o leitor de hoje.** Língua contemporânea e culta, sem arcaísmos gratuitos, boa para leitura em voz alta e para ser entendida sem notas.
3. **Consistência nos termos-chave.** Um glossário amarra termos centrais aos números de Strong. A variação entre traduções de uma mesma palavra é **deliberada e justificada**, nunca acidental.
4. **Transparência nas escolhas.** Alternativas relevantes, variantes textuais e passagens disputadas vêm com o texto escolhido e as principais alternativas em nota, sem esconder a dificuldade.
5. **Neutralidade confessional no texto.** O texto procura dizer o que o original diz. Interpretação teológica fica na **camada de comentário**, identificada por autor e tradição ([RFC-0008](0008-recursos-de-estudo.md)).

### Uma versão ou duas?

Projetos abertos comparáveis (por exemplo o *unfoldingWord*, com seus textos "literal" e "simplificado") mostram o valor de **duas versões complementares** do mesmo texto: uma **literal**, próxima da forma do original, útil para estudo; outra **legível**, em linguagem simples, para leitura corrida e para quem aprende a língua. Proposta: começar com **uma** versão por idioma e deixar o desenho preparado (o nome é "bibleme + versão + idioma") para uma segunda, depois. Em aberto.

### Decisões de estilo em aberto

A coluna **"Sugestão inicial"** é um ponto de partida do rascunho, escrito com apoio de IA. **Ainda não foi adotada pelo fundador nem pela comunidade**; está aí só para a conversa não começar do zero.

| Tema | Opções | Sugestão inicial (não decidida) |
|---|---|---|
| **Nome divino** (YHWH) | "Senhor" em versalete · "Javé" · "Yahweh" · "Eterno" | "SENHOR" em versalete (convenção histórica) com nota na primeira ocorrência de cada livro e entrada no glossário; debater "Javé" |
| **Nomes próprios** | Forma tradicional (Davi, Moisés) · transliteração | Forma consagrada em português quando existe; transliteração consistente para os demais; lista no glossário |
| **Linguagem inclusiva** (ex.: *adelphoi*) | Literal ("irmãos") · inclusiva quando o contexto exige ("irmãos e irmãs") | Inclusiva quando o grupo claramente inclui mulheres, com a forma literal em nota |
| **Tratamento** | tu/vós · você/vocês | Você/vocês, sem "vós" |
| **Pronomes divinos** | Maiúscula reverencial · minúscula | Minúscula (evita decidir exegese em textos ambíguos) |
| **Poesia** | Em prosa · em versos por paralelismo | Em versos, seguindo o paralelismo hebraico |
| **Discurso direto** | Aspas · travessão | Aspas |
| **Medidas e moedas** | Manter a medida antiga e converter em nota · converter no texto | Manter a medida e dar o equivalente aproximado em nota |
| **Ortografia (pt-BR)** | Acordo Ortográfico de 1990 | Sim; português europeu seria uma versão à parte |
| **Versículos ausentes em manuscritos antigos** | Texto principal com marca · só em nota · omitir | Incluir **entre colchetes duplos**, com nota |
| **Títulos de seção (perícopes)** | Descritivos curtos e neutros | Sim, **originais**, nunca copiados de outras edições |
| **Notas** | Só alternativas literais, variantes e esclarecimentos culturais · também interpretações | Só as três primeiras; interpretação vai ao comentário |
| **Termos-chave** (*hesed*, *shalom*, *dikaiosyne*, *pistis*, *agape*, *logos*) | Uma tradução fixa · variar por contexto | Entradas no glossário, variação por contexto, sempre justificada |
| **Cristo / Messias** | "Cristo" · "Messias" | "Cristo", com nota quando o sentido de "Messias" importa |
| **Palavras acrescentadas** (sem equivalente direto no original) | Sem marca · com marca discreta | Com marca no arquivo-fonte (`\add`) para que o leitor possa ver o que a língua exigiu |
| **Alma, espírito, carne** (*nephesh*, *psyche*, *pneuma*, *sarx*) | Uma tradução · contextual | Glossário, contextual |

## Alternativas consideradas

- **Escolher um polo (só formal ou só dinâmico):** perderia ou a precisão ou a leitura. A postura proposta tenta o meio, com a nota como válvula.
- **Seguir a filosofia da Jerusalém, da NVI ou da ARA:** nenhuma sozinha. O projeto aprende com as três sem se prender a uma.
- **Deixar cada idioma decidir tudo:** os idiomas decidem o seu estilo, mas dentro dos cinco compromissos.

## O que muda para quem

- **Tradutores:** têm um critério para decidir e uma regra de registro quando fogem do literal.
- **Revisores:** podem questionar uma escolha com base nos compromissos, não por gosto.
- **Leitores:** sabem o que esperar e onde olhar quando um texto difícil aparece.

## Questões em aberto

1. Uma versão ou duas (literal e simples) por idioma?
2. Cada linha da tabela acima.
3. O projeto trata **registro** (formal, coloquial) como estilo do idioma ou como decisão comum?
4. Como lidar com **palavras que carregam disputas teológicas históricas** (por exemplo, *almah* em Isaías 7:14, *logos* em João 1:1, a pontuação de Romanos 9:5): texto principal e alternativas em nota, com critério escrito.
5. Que critério decide quando a "forma tradicional" de um nome ou expressão deve ceder a uma forma mais correta?

## Decisão

*(a preencher)*

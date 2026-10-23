# Projetos relacionados: o que aprender, usar e evitar

Estado em **23/out/2026**. Três projetos foram trazidos pelo fundador para estudo. Este documento resume o que vimos e o que o projeto tira daí. O que foi verificado e o que não foi está dito em cada seção.

> **Três "Open Bible" diferentes.** Não confunda: **OpenBible.info** (dados de referências cruzadas e lugares, CC BY, que o projeto planeja usar), **openbible.uk** (a *Open Translation Bible*, CC BY-SA) e **The Open Bible** da Thomas Nelson (Bíblia de estudo comercial). O nome "Open Bible" é um terreno cheio de colisões; é mais um motivo para o projeto manter um nome próprio.

## 1. Open Translation Bible (openbible.uk · GitHub OpenTranslationBible/open-bible)

**O que é.** Um projeto que se apresenta como "a primeira Bíblia de código aberto do mundo", lançado em julho de 2025, hoje em **24 idiomas** (inclusive português do Brasil), sob **CC BY-SA 4.0**. Há PDF por idioma, **texto em Markdown e JSON por capítulo** no repositório, um **leitor na web** (read.openbible.uk) e **aplicativos** para iOS e Android que funcionam offline, sem rastreio nem anúncios, com **voz neural offline**.

**O que li.** As páginas do site (início, sobre, artigo sobre código aberto, leitor), o README, a licença, a estrutura de pastas e alguns capítulos em Markdown e JSON.

**O que vi no repositório.** Um contribuinte listado pelo GitHub (52 contribuições; os commits aparecem também com o nome "Conrad"), 15 estrelas, 3 forks e nenhuma Issue aberta. Não vi guia de contribuição. **As páginas que li não dizem quem traduziu cada idioma, a partir de quê, nem como foi revisado.** Isso não prova nada sobre o método, só que ele não está documentado onde procurei.

**Afirmações do projeto.**
- *"Só 18 versículos iguais a qualquer outra versão em inglês, de 1,3 milhão"*: vale **só para o inglês**. A tabela deles mostra a **similaridade média** com cada versão, entre 76% e 80% para NASB, NIV, ESV e RSV. A métrica **não está explicada**, então não dá para dizer se isso é muito ou pouco.
- *Bíblias de domínio público (WEB, BSB, ASV, KJV) teriam problemas de licença*: não verifiquei. Os termos do site da BSB dizem que ela foi dedicada ao domínio público em 30/abr/2023 ([registro de fontes](registro-de-fontes.md)).

**Uma amostra nossa (informal, pequena).** Comparei o texto pt-BR deles, em **6 capítulos** (Gênesis 1, Rute 1, Salmo 23, João 3, Romanos 8 e 1 Coríntios 13; 147 versículos), com a Bíblia Livre (BLIVRE), que é da família Almeida. Métrica: razão de sequência sobre palavras sem acento nem pontuação. **Média 0,60, nenhum versículo idêntico.** Como régua, KJV e Douay-Rheims (duas traduções inglesas tradicionais) deram **0,75** nos mesmos capítulos. Então, **nessa amostra, não há sinal de cópia da Bíblia Livre**. Isso **não** diz nada sobre ARA, NVI ou Bíblia de Jerusalém (não as tenho nem devo ter no projeto), e seis capítulos não bastam para concluir nada sobre a obra toda.

**O que aprender.**
- **Texto por capítulo em Markdown e JSON no Git** valida a [RFC-0006](../rfcs/0006-distribuicao-ia-api-mcp.md): o formato simples já serve a quem consome. Mas os detalhes mostram o que **evitar**:
  - nomes de arquivo localizados e com acento (`01.Gênesis/json/gênesis-01.json`), com numeração inconsistente (`-01` e `-023`): usamos **IDs estáveis** (`GEN`, `PSA`);
  - Markdown embutido no JSON (versos de poesia com o prefixo `> ` dentro do texto) e itens sem número de verso misturados à lista (como o sobrescrito do Salmo 23): usamos **linhas de poesia e sobrescritos como campos próprios**;
  - títulos em inglês que vazaram para outros idiomas (vários commits corrigem isso): a **validação automática** da [RFC-0003](../rfcs/0003-formato-e-camadas.md) existe para pegar esse tipo de erro;
  - **PDFs de 8 a 11 MB por idioma dentro do Git**: PDF e EPUB vão como **arquivos de release**, e não no histórico.
- **Evidência pública de independência.** Publicar uma comparação com outras traduções é uma boa ideia. A lição é **definir a métrica e a linha de base antes** (por exemplo, o que se espera de duas traduções independentes do mesmo texto) e publicar o **relatório por release**. Sem linha de base, um número solto não prova nem refuta nada ([política](direitos-autorais-e-referencias.md#verificação-de-semelhança)).
- **Aplicativo offline, sem rastreio e com voz neural offline.** Combina com a camada de áudio da [RFC-0008](../rfcs/0008-recursos-de-estudo.md): voz sintética **rotulada como tal**, ao lado de narração humana.
- **Leitor mínimo**: seletor de idioma com 24 opções, seletor de livro, busca, navegação por capítulo. Bom ponto de partida para a interface de leitura de `/translations`, mas **sem títulos de seção, notas, referências, Strong nem original**: é aí que podemos ir além.

**A questão do CC BY-SA.** O projeto defende que a licença SA "garante que as obras derivadas permaneçam livres". É o argumento certo para a pergunta que deixamos em aberto em [Por que CC BY 4.0](licenca.md#por-que-cc-by-40). Uma consequência prática que vale ver: **texto CC BY-SA não pode ser copiado para um texto CC BY**, mas texto CC BY pode ser aproveitado por um projeto CC BY-SA. Com BY, **o nosso texto poderia entrar na OTB**; com a OTB, não poderíamos usar o dela. O mundo de Bíblias abertas está dividido em três faixas (domínio público, BY e BY-SA), e misturar entre elas tem regras.

**Podemos usar a OTB no app bibleme?** A licença **cabe no critério do app** (BY-SA é aceita, com citação). O que **segura** é a origem e a qualidade, que não estão documentadas, e o fato de que dados nossos adicionados ao texto (números de Strong, alinhamentos, correções) seriam **adaptações sob BY-SA**. **Recomendação:** não adicionar agora. Registrar como **Livre com condição** e perguntar ao projeto, pelo contato público do site, **como cada idioma foi produzido e revisado**. Se a resposta for boa, vale conversar sobre cooperação (formato comum, método de semelhança).

## 2. The Open Bible, da Thomas Nelson

**O que é.** Uma **Bíblia de estudo comercial** (edições em KJV, NKJV e NIV), com direitos reservados.

**O que consegui ver.** A página oficial **bloqueou meu acesso (403)**; o que sei vem de **fichas de livrarias e do próprio site em resultados de busca**, e não da página do produto. Segundo elas, a obra traz:
- cerca de **72 mil referências cruzadas** na coluna central;
- um **índice por assunto** (cerca de 8 mil temas, com algo em torno de 50 mil entradas) que liga nomes, lugares, conceitos, eventos e doutrinas às passagens;
- **introduções e esboços** de cada livro;
- uma **concordância**;
- uma **visão visual** da Bíblia (levantamento em infográfico);
- textos de apoio, como "Como estudar a Bíblia" e "O fio escarlate da redenção" (a história da redenção seguida ao longo da Bíblia).

**O que inspira (sem copiar nada).** Tudo isso é protegido; serve como **mapa de ideias** para camadas nossas, abertas e originais:

| Ideia | Equivalente aberto |
|---|---|
| Índice por assunto | **Tópicos** (assunto para passagens), em dados abertos: base em Nave (domínio público) e em dados livres, a verificar ([RFC-0008](../rfcs/0008-recursos-de-estudo.md)) |
| Referências em cadeia (um tema seguido ao longo da Bíblia) | **Cadeias temáticas**: listas ordenadas de passagens, escritas pela comunidade e revisadas |
| Introduções e esboços | Já previstos em cada livro ([RFC-0003](../rfcs/0003-formato-e-camadas.md)) |
| Concordância | Gerada a partir dos **lemas** e do Strong, sem escrever à mão |
| Visão visual da Bíblia | Quadros e infográficos livres (mapas, linha do tempo) |
| Textos de apoio ("como estudar") | Guias curtos da comunidade, sob CC BY |

**O que evitar.** Usar "Open Bible" como nome de qualquer coisa nossa (é nome de produto de terceiro). Notas doutrinárias em cadeia são, por natureza, confessionais: no nosso caso vão para a **camada de comentário**, com autor e tradição à vista, e não no texto ([RFC-0002](../rfcs/0002-filosofia-de-traducao.md)).

## 3. Bible Strong (smontlouis/bible-strong)

**O que é.** Um aplicativo de estudo gratuito e de código aberto (**GPL-3.0**), para iOS, Android e web, feito primeiro para o público francófono. Traz mais de 40 traduções, concordância de Strong, Bíblia hebraico-grega, interlinear, tópicos de Nave, dicionários, referências cruzadas, comentários, linha do tempo, planos de leitura e áudio. O repositório reúne **o produto inteiro**: o aplicativo, o site, os serviços que publicam e servem os recursos e um **estúdio editorial** que adquire, transforma, valida e empacota os dados. Está ativo (último envio em 22/out/2026) e tem 173 estrelas.

**O que li.** O README, o mapa de contextos, os documentos do estúdio editorial (o pipeline do léxico v3, o contrato da fonte "rica" do Strong, a especificação do painel de Strong, a metodologia de qualidade, os dicionários e o levantamento de trabalhos com IA) e as pesquisas de licenças. A maior parte está em francês.

**O que aprender (é daqui que vem a [RFC-0009](../rfcs/0009-estrutura-de-dados-lexicos-e-dicionarios.md)).**
- **Strong separado do texto.** Os índices de Strong se instalam **independentes** do texto, e há um teste de que **retirar o complemento deixa o texto canônico idêntico**. O texto fonte "rico" é mantido sem perdas e projetado para um formato canônico; títulos e perícopes viram objetos ancorados.
- **Ordem de identidade:** dStrong, depois Strong estendido, depois Strong clássico.
- **Dois contratos de saída:** *leitura* (só o que foi validado) e *avançado* (tudo, com o estado visível).
- **Avaliação com "ouro mascarado"**: escondem o Strong de uma Bíblia conhecida, regeram, e comparam. Distinguem precisão e revocação **de posição**, sobreposição e **inventário**, e avisam que o inventário **não** mede qualidade de alinhamento. Tiram da referência a edição irmã da avaliada, para não inflar os números.
- **Portas de qualidade e nada é "correto porque um modelo disse":** artefatos intermediários são candidatos até passarem por validação e por decisão humana; casos em conflito ficam em quarentena; lançamentos são imutáveis, em perfis `core` e `full`, com impressão digital das entradas.
- **Dicionários:** verbetes com identidade própria; **âncoras dicionário-passagem**; renvios internos com **origem** (da fonte, sugestão editorial ou gerado) e regras conservadoras para gerar; **grupos de correspondência** entre obras e idiomas **sem fundir os textos**.
- **Postura de licenças:** privilegiam domínio público, CC0 e CC BY; **material BY-SA fica em um canal separado**, exportável sob BY-SA. Essa ideia resolve a nossa pergunta "e se quisermos usar algo BY-SA?" sem contaminar o texto CC BY.
- **IA com rédeas:** o levantamento de projetos que usam IA para criar Bíblias com Strong (inclusive um do unfoldingWord, feito com habilidades do Claude Code) repete a mesma lição: **código onde dá para verificar, julgamento só onde é preciso**, com validação mecânica.

**O que não usar.** O **código é GPL-3.0**: não pode entrar em um projeto MIT e não o copiamos. Os dados de cada recurso têm a licença da respectiva fonte, e cada uma precisa ser conferida na origem. Vale uma conversa com o autor sobre cooperação (os glossários em francês e os levantamentos de licença podem ajudar).

**O STEPBible por trás.** O pipeline deles se apoia no **STEPBible-Data (CC BY 4.0, conferido no README oficial)**, que também serve ao nosso projeto: original com lema, morfologia e dStrong; variantes por edição no grego; nomes próprios (TIPNR); léxicos; mapeamento de versificação ([registro de fontes](registro-de-fontes.md)).

## 4. Bible::Reference (gryphonshafer/Bible-Reference)

**O que é.** Uma biblioteca Perl (versão 1.20, 3 estrelas, licença Artistic 2.0 no `dist.ini`) que **encontra, valida e canoniza referências bíblicas** em texto: `Rom 12:13-14,17` vira `Romans 12:13-14, 17`, com saídas como lista de versículos, mapa por livro ou o texto original com as referências reescritas. Aceita configuração de **cânone** (protestante, católico, ortodoxo), nomes completos ou siglas, ordenação e tamanho mínimo de nome de livro.

**O que aprender.**
- **Os três cânones como configuração**, e não como código separado. Pelo que vi no código, o católico acrescenta Tobias, Judite, Sabedoria, Eclesiástico, Baruque e 1 e 2 Macabeus, e o ortodoxo ainda 1 Esdras, Oração de Manassés, Salmo 151, 3 e 4 Macabeus e 2 Esdras. Isso confirma as opções A, B e C da [RFC-0001](../rfcs/0001-textos-base.md).
- **Referência como problema próprio**, com intervalos, listas e ambiguidades. A [RFC-0009](../rfcs/0009-estrutura-de-dados-lexicos-e-dicionarios.md#7-gramática-de-referências) propõe uma **especificação normativa com vetores de teste compartilhados**, para o app, o MCP e a API se comportarem igual.

**Limites.** Só em inglês; nós precisamos de abreviações por idioma e por tradição. Não há dependência: é só ideia.

## 5. Resumo

| Projeto | Licença | Para nós |
|---|---|---|
| Open Translation Bible | CC BY-SA 4.0 | **Inspirar:** formato por capítulo, evidência de semelhança (com métrica), aplicativo offline, leitor. **Usar no app:** não agora; perguntar pelo método. **Evitar:** PDFs no Git, nomes localizados, Markdown dentro do JSON, origem não documentada, superlativos |
| The Open Bible (Thomas Nelson) | Protegida | **Inspirar:** índice por assunto, cadeias, esboços, concordância, visão visual. **Usar:** nada. **Evitar:** o nome e as notas doutrinárias no texto |
| OpenBible.info (dados) | CC BY | **Usar** referências cruzadas e lugares, com crédito (já no registro de fontes) |
| Bible Strong | Código GPL-3.0 | **Inspirar:** Strong separado do texto, portas de qualidade, avaliação com ouro mascarado, dicionários com âncoras e renvios, BY-SA em canal isolado. **Usar:** nada do código. **Evitar:** nada de GPL no repositório MIT |
| Bible::Reference | Artistic 2.0 | **Inspirar:** três cânones como configuração e a referência como especificação com testes. **Usar:** nada |
| STEPBible-Data | CC BY 4.0 | **Usar** (com crédito): original, morfologia, dStrong, variantes por edição, nomes próprios, versificação. Confirmar o status do que vem de NA27/28 |

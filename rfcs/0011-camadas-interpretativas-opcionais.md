# RFC-0011: Camadas interpretativas opcionais: palavras de Jesus e pronomes reverenciais

- **Estado:** Proposta (com uma decisão do fundador, ver **Decisão**)
- **Autor(es):** Fundador (ideias); rascunho redigido com apoio de IA
- **Aberta em:** 2026-11-10
- **Decide:** Conselho (no início, o fundador)
- **Fim do prazo de comentários:** 2026-11-24 (14 dias)

## Resumo

Propomos duas **camadas opcionais** sobre o texto: **palavras de Jesus** (edição "Red-Letter") e **pronomes reverenciais** (maiúscula nos pronomes que se referem a Deus, a Jesus e ao Espírito). Elas **não fazem parte do texto-base**, que continua neutro: são dados ancorados nas palavras do original, com **certeza** e **estado de revisão**, que cada leitor ou app decide mostrar ou não. O piloto começou em Marcos e o fundador decidiu estendê-lo a **todo o Novo Testamento** (ver [Decisão](#decisão)); os dois botões do leitor continuam desligados por padrão, e cada marca segue `proposto-auto` até passar pelas duas revisões independentes do item 4.

## Problema

- Muitos leitores e apps querem ver "o que Jesus disse" destacado, ou usam maiúscula reverencial nos pronomes. Outros não querem, e há tradições que discordam de uma ou das duas práticas.
- **O grego não marca nenhuma das duas coisas.** Dizer quem fala e a quem um pronome se refere é interpretação. Se isso entrar no texto-base (por exemplo, escrevendo "Ele" com maiúscula), a escolha fica escondida e não pode ser desligada, o que contraria o "sem partido escondido" da [RFC-0002](0002-filosofia-de-traducao.md).
- Em passagens disputadas, decidir quem fala ou a quem o pronome se refere decide também uma leitura teológica (por exemplo, Jo 3:13-21, Jo 1:1, Rm 9:5, Tt 2:13, 2Pe 1:1).

## Proposta

### 1. Duas camadas, separadas do texto

| Camada | O que marca | Como se vê |
|---|---|---|
| **Falantes** (primeira aplicação: **palavras de Jesus**) | Os trechos de fala direta cujo falante é Jesus, com as palavras gregas que os compõem | Texto em vermelho; no USFM, `\wj … \wj*` |
| **Referentes divinos** (**pronomes reverenciais**) | Cada pronome de 3ª pessoa (e possessivo ou reflexivo) cujo antecedente é Jesus, Deus ou o Espírito | Maiúscula inicial ("Ele", "Dele", "Lhe", "Seu", "-Lo") |

A camada de falantes é desenhada para guardar **qualquer falante** (Deus, anjos, personagens), e "palavras de Jesus" é o filtro `falante = Jesus`. Assim ela serve também ao AT.

### 2. Dados

- **Ancoragem:** nas **palavras do original** (número da palavra no versículo, como o alinhamento e o Strong da [RFC-0003](0003-formato-e-camadas.md) e da [RFC-0009](0009-estrutura-de-dados-lexicos-e-dicionarios.md)), e não no português. Se o português mudar, a marca continua valendo; ela só é remapeada para as unidades em português na hora de gerar a saída.
- **Campos de cada marca:** livro, capítulo, versículo, palavras (faixas), falante ou categoria, **certeza** (`alta`, `media`, `baixa`, `debatido`), **fonte** (como a proposta nasceu), **estado** (`proposto-auto`, `revisado-1`, `revisado-2`, `aceito`) e nota.
- **Formatos:** USFM com `\wj`; JSON com as faixas por versículo; o leitor lê `camadas/<Livro>.json`. O campo `estado` acompanha cada exportação.
- **Pronomes:** só pronomes **escritos** em português; o pronome implícito na forma do verbo não tem o que marcar. A maiúscula é aplicada na exibição, não gravada no texto.

### 3. Regras de marcação (para o guia de estilo de cada idioma)

**Palavras de Jesus:**
- Entra: fala direta atribuída a Jesus pelo próprio texto (inclusive perguntas, orações e gritos, e citações do AT dentro da fala). Fala indireta não entra.
- Palavras de Jesus ressuscitado ou glorificado (por exemplo, no Apocalipse e na voz do céu a Paulo) entram com a marca `tipo = após a ressurreição`.
- Palavras de Jesus **citadas por outra pessoa** (por exemplo, At 20:35; 1Co 11:24-25) entram como `tipo = citado por outro`, para quem quiser ou não incluí-las.
- Quando o texto não deixa claro onde a fala acaba (Jo 3:13-21, Jo 3:31-36 e outros), a marca recebe `certeza = debatido` e uma nota neutra.

**Pronomes reverenciais:**
- Entra: pronome de 3ª pessoa, possessivo ou reflexivo cujo antecedente é Jesus, Deus ou o Espírito.
- Primeira e segunda pessoa ficam **fora** desta RFC. Em particular, a convenção atual "você/vocês" (inclusive nas orações) **não muda**: "pronome reverencial" aqui é maiúscula, não o tratamento "tu".
- Antecedente ambíguo (κύριος, πατήρ, υἱός, πνεῦμα sem "santo") **não é marcado automaticamente**; vai para decisão de pessoa.
- Passagens em que o antecedente decide uma leitura teológica ficam `debatido`, com nota neutra, e o leitor pode não aplicar a maiúscula.

### 4. Como as marcas nascem (propostas automáticas e revisão)

1. **Proposta automática** a partir de uma segunda fonte aberta que anota o falante dos verbos de fala e o antecedente de cada pronome (para o NT, o **Macula Greek**, CC BY 4.0) e, no caso das falas, das aspas do rascunho. Tudo sai como `proposto-auto`.
2. **Revisão:** **duas revisões independentes por camada e por capítulo**, fora das 10 revisões por capítulo da meta de revisão do NT, por pessoas ou por IA com regra de independência (quem gerou a proposta não revisa).
3. **Aceite:** só marcas revisadas (duas vezes) viram `aceito` e podem ser publicadas sem o aviso de "proposta automática".

### 5. Exibição e opção

- Cada camada tem **botão próprio, desligado por padrão**; o leitor lembra a escolha de cada pessoa. Apps e impressões escolhem se usam.
- Enquanto uma camada não estiver `aceito`, o leitor mostra o aviso "proposta automática, sem revisão" e a certeza de cada marca.
- Nenhuma camada altera o texto-base nem o que é citado como "a versão".

### 6. Traduções novas (inclusive o AT)

O tradutor **registra falantes e referentes na hora de traduzir**, no mesmo passo do alinhamento: depois do rascunho, roda-se a ferramenta de propostas e a equipe revisa. Para o AT é preciso achar uma fonte equivalente ao Macula Greek (questão em aberto 1).

## Piloto em Marcos (2026-11-10)

Foram geradas as duas camadas para Marcos (16 capítulos, 673 versículos), por ferramenta própria, e exibidas no leitor. Números do piloto, **ainda sem revisão**:

- **Falas:** 260 falas diretas encontradas pelas aspas do rascunho; **139 de Jesus** (131 com certeza alta e 8 média), distribuídas em **284 versículos** (42% do livro); 13 falas sem falante identificado (por exemplo, a voz do céu em 1:11 e as citações de Is e Ml em 1:2-3); 16 verbos de fala de Jesus sem fala direta marcada (ensino sem conteúdo e discurso indireto).
- **Pronomes:** **263 propostas** para Jesus (262) e Deus (1): 233 com certeza alta, 26 média (sujeito implícito no verbo, com um "ele" acrescentado pelo português) e 4 baixa (a unidade tem mais pronomes escritos do que pronomes gregos divinos, por exemplo "levá-lo até ele"); 259 vão para o leitor. Outras 68 unidades têm pronome grego divino mas nenhum pronome escrito em português, e 40 pronomes ficaram sem proposta por antecedente ambíguo.
- **Achado de qualidade do texto:** a comparação revelou **aspas que não fechavam** nos rascunhos (Mc 4:8 e 16:18, já corrigidos; e 26 outras posições no resto do NT), que passaram a ser testadas automaticamente.
- **Fonte e limites:** as propostas dependem das anotações do Macula Greek e das aspas do rascunho; as duas podem errar, e a ferramenta não substitui a revisão.

## Expansão para todo o NT (2026-11-12)

Rodadas `propor` → `validar` → `exportar` nos 26 livros restantes (Marcos já tinha saído no piloto). `validar` deu **0 erros** em todos; os avisos (verbo de fala de Jesus sem fala marcada no versículo nem nos dois anteriores) ficam, como esperado, em discurso indireto ou ensino sem citação direta. Totais do NT inteiro, ainda **proposto-auto**: **582 falas** agrupadas, **1.662 versículos** com trecho de palavras de Jesus, **1.228 pronomes reverenciais** propostos (a maior parte em Mateus, Lucas e João; as cartas têm poucas ou nenhuma fala direta de Jesus, como esperado, e concentram pronomes reverenciais por "Deus").

## Duas revisões independentes (2026-11-12)

Cumprido o item 4 para o NT inteiro: duas revisões independentes, cada uma sem ver a outra nem as notas da fundação, lendo os 27 livros por completo (os quatro evangelhos verso a verso). Metodologia: cada revisão recebeu um texto de prova por livro (fala de Jesus entre «», pronomes reverenciais marcados com categoria e certeza) e o texto desta RFC como critério. Uma delas abriu três sub-revisões próprias para os evangelhos, cada achado verificado por amostragem contra o arquivo-fonte antes de entrar no relatório.

**Achados confirmados e corrigidos** (verificados por leitura direta do grego/TSV antes de aplicar):
- **Falante errado, corrigido (removido da camada):** Mc 2:7 (pensamento dos escribas, não Jesus), Lc 3:22 (voz do Pai, não Jesus), Lc 7:40b (resposta de Simão, não Jesus), Jo 2:17 (citação do Salmo 69 pelo narrador, não Jesus), Jo 21:12 (pergunta nunca feita, atribuída por engano).
- **Referente errado, corrigido:** Ef 2:6, duas marcas "com ele" que o atalho de "sujeito implícito" resolvia para "Deus" (sujeito gramatical) quando o padrão teológico (comparar Cl 2:12-13, Cl 3:4, 1Ts 4:14) pede "Jesus" (união com Cristo, embutida no prefixo συν- do verbo). Jo 18:35 removido (pronome de 2ª pessoa, "tua", fora do escopo desta camada). Mc 6:14 rebaixado de certeza alta para média (antecedente gramaticalmente mais próximo é Herodes).
- **Limite indefinido tratado com certeza `alta` indevida:** Jo 3:13-21, o próprio exemplo que esta RFC cita para `certeza = debatido`, estava marcado do início ao fim com a certeza mais alta possível. Como o campo `debatido` ainda não existe no formato de dados, a correção interina foi **truncar a fala para terminar em 3:12** (onde não há disputa) e deixar 3:13-21 sem marca — mesmo tratamento que 3:31-36 já tinha, por serem irmãs no mesmo problema segundo a RFC.
- **Bug de código, corrigido:** `categoria()` em `camadas.py` só reconhecia "Espírito" quando a palavra grega imediatamente seguinte a πνεῦμα era ἅγιος; o padrão grego mais comum repete o artigo entre as duas palavras ("τὸ πνεῦμα τὸ ἅγιον"), então a condição quase nunca batia. Corrigido para olhar 1 ou 2 posições à frente. Efeito prático pequeno: a maior parte das referências ao Espírito no NT usa pronome demonstrativo (ἐκεῖνος, como em Jo 14:26), que fica fora do escopo de pronomes que esta camada reconhece (`PRON_MORPH` só pega pronome pessoal/possessivo/reflexivo) — ampliar para demonstrativos é mudança maior, que precisa de revisão própria, não feita agora.

**Pendências registradas, não corrigidas nesta rodada** (a camada continua disponível como opcional e desligada por padrão com este aviso; nenhuma é motivo para tirá-la do ar, mas nenhuma marca pendente deve virar `aceito`):
- **Campos `tipo` e `debatido`, implementados (2026-11-12):** ver seção própria abaixo.
- **Lacunas de cobertura, revisadas e corrigidas (2026-11-12):** ver seção própria abaixo.
- **Bug de limite, corrigido (2026-11-12):** a primeira palavra portuguesa de uma fala às vezes ficava fora da faixa marcada como `wj`. Causa: em `cmd_exportar`, a extensão da faixa para trás (para incluir a aspa de abertura) só reconhecia a aspa colada a um token de pontuação (`kind "p"`); quando a aspa vinha colada a uma palavra acrescentada para a regência do português (`kind "f"`, sem id grego — ex. "«Por" em "lhes disse «Por que têm medo…"), ou havia mais de um acréscimo antes da primeira palavra alinhada ao grego (ex. "«Você" + "mesmo" em Mt 26:64), a busca parava cedo demais e deixava a 1ª palavra de fora. Corrigido em `.colab/tarefas/0003-traduzir-nt/ferramentas/camadas.py` para reconhecer aspa colada a um `kind "f"` e pular acréscimos intermediários sem aspa. Confirmado e corrigido em 17 falas: Mt 8:26, 14:27, 19:17, 20:21, 21:19, 22:18, 22:20, 26:10, 26:64; Lc 22:46, 23:43, 24:38; Jo 1:50, 8:14, 18:4, 18:7, 19:28 (as 13 citadas antes eram "pelo menos"; uma varredura completa do NT, repetindo o mesmo algoritmo da ferramenta, confirmou que essas 17 eram as únicas instâncias do padrão e que não sobra nenhuma depois da correção). Não mudava o falante nem o sentido do texto; apenas o alcance do destaque visual da camada opcional.
- **João 1:1 (prólogo) e Rm 9:5/Tt 2:13/2Pe 1:1:** sem nenhuma marca — correto e neutro (a camada só processa referência pronominal, não disputa de predicado/aposição como "Deus" aplicado a Cristo nesses versos), mas é um limite de escopo que vale deixar registrado.

**Estado exportado:** `revisado-2` (as duas revisões foram feitas; os achados acima foram corrigidos onde seguro corrigir). Nenhum livro passa a `aceito` nesta rodada — as lacunas de cobertura continuam pendentes para isso, e a camada segue desligada por padrão com o aviso de dado revisado mas incompleto.

## Campos `tipo` e `debatido` implementados (2026-11-12)

Pedido do fundador. Os dois campos que a seção 3 já previa, mas que ainda não existiam no formato de dados nem no leitor, foram implementados:

- **Formato:** `FAL_COLS` em `camadas.py` ganhou as colunas `tipo` (`""`, `após a ressurreição` ou `citado por outro`) e `nota` (texto livre, como a camada de referentes já tinha). O JSON exportado em `wj` passou de `[a, z, certeza, fala, verbo]` para `[a, z, certeza, fala, verbo, tipo, nota]`. `certeza = debatido` já era um valor previsto na seção 2, sem mudança de formato — só passou a ser usado de fato.
- **Leitor:** o toque/tooltip de uma faixa de "palavras de Jesus" agora lê "limite da fala debatido entre leituras" em vez de "certeza debatido" quando for o caso, e inclui o tipo quando houver; o painel do versículo mostra a mesma informação, mais a nota, quando existir. Um trecho `debatido` ganha estilo próprio (opacidade reduzida + sublinhado tracejado), para se distinguir visualmente do vermelho sólido das falas de certeza alta/média; a legenda explica o novo estilo.
- **`tipo = após a ressurreição`:** aplicado às falas já marcadas como `wj` comuns que a RFC listava (sem mudar falante, certeza nem a faixa): Mt 28:9-10,18-20 (F306, F307, F309); Mc 16:15-18 (F260); Lc 24:17,19,25-26,38-39,41,44,46-49 (F333, F335, F337, F341-F344); Jo 20:15-17,19,21-23,26-27,29 e todo o Jo 21 (F343-F381, 25 falas); At 1:4-5,7-8 (F001, F003); Ap 22:20 (F085).
- **`tipo = citado por outro`:** os dois exemplos que a própria RFC cita.
  - **1Co 11:24-25** (F019, F020): a proposta automática já tinha a faixa certa, mas resolvia o falante só até o lema ambíguo `κύριος` (não está em `NOME_DIV`); corrigido para `Jesus`, certeza mantida em `media` (o mesmo discurso nomeia "o Senhor Jesus" em 11:23, mas a cadeia de resolução automática não chegou lá sozinha).
  - **At 20:35:** achado mais interessante — é uma citação **aninhada**: o discurso inteiro de Paulo em Mileto (20:18-35) já estava marcado como uma fala só (F138, falante Παῦλος, correto), mas a ferramenta não separa uma aspa simples (‘…’) dentro de uma aspa dupla (“…”) como uma fala à parte, então a citação de Jesus embutida ("É mais feliz dar do que receber") não tinha marca própria. Acrescentada como nova fala (F203), falante Jesus, certeza alta ("ele mesmo" remete explicitamente a "o Senhor Jesus", nomeado na mesma oração), `tipo = citado por outro`. F138 ganhou uma nota remetendo a ela. **Achado geral, registrado para o guia de estilo:** aspas aninhadas (discurso dentro de discurso) não são separadas automaticamente em falas distintas; pode haver outros casos no NT além deste, não varridos nesta rodada.
  - **Jo 18:9, deixado em aberto:** a própria RFC chamava este de "caso-limite" (o narrador cita uma fala anterior do próprio Jesus no mesmo capítulo, comparável a Mc 14:72) sem se comprometer com uma leitura. Continua sem `tipo`, como estava — não foi uma omissão desta rodada, é uma decisão de não resolver um caso que a RFC já sinalizava como disputado sem critério definido.
- **`certeza = debatido`:** Jo 3:13-21, o exemplo que a própria RFC cita. Na rodada da revisão anterior (achados corrigidos), a fala de Jesus a Nicodemos (F047, antes 3:10-21) tinha sido truncada para terminar em 3:12, por não existir ainda o valor `debatido`. Agora 3:13-21 voltou a ganhar marca, como fala separada (F392, mesmo verbo-âncora de F047), com `certeza = debatido` e nota explicando a disputa (onde termina a fala de Jesus e começa o comentário do narrador). Jo 3:31-36 **não** ganhou marca: ao contrário de 3:13-21, esse trecho já não está dentro de nenhuma aspa no rascunho (a fala de João Batista fecha no fim do v. 30); continua sendo tratado como comentário do narrador, sem falante atribuído — não é um caso de limite debatido de uma fala existente.

Nenhuma destas marcas novas ou corrigidas passou pelas duas revisões independentes formais da seção 4 (foram verificadas por mim, uma a uma, contra o grego e o rascunho, com o mesmo cuidado da rodada anterior, mas isso não substitui a revisão por uma segunda pessoa/IA independente). Continuam `proposto-auto`/`revisado-2` conforme o restante do livro; nenhuma vira `aceito` nesta rodada.

## Lacunas de cobertura revisadas (2026-11-12)

Pedido do fundador. Cada lacuna que a rodada anterior listou foi investigada até a causa raiz (lançando três investigações independentes, uma por área, cada achado conferido por mim diretamente contra o grego/Macula antes de aplicar) e corrigida onde segura de corrigir. Nenhuma marca nova ou corrigida aqui passou pelas duas revisões independentes formais da seção 4; continuam `proposto-auto`/`revisado-2`, nenhuma vira `aceito`.

**Apocalipse** (quase todo o livro sem marca): duas causas distintas, as duas mecânicas, não teológicas.
- **1:17-20 (F002):** a cadeia subjref do grego para "λέγων" (1:17) para em "υἱὸν" (1:13, "filho do homem"), que não tem referente próprio e não está em `NOME_DIV`. Mas o próprio falante se identifica na mesma fala como "o primeiro e o último, e o que vive; estive morto, e eis que vivo para todo o sempre" — linguagem de ressurreição inequívoca. Corrigido para falante Jesus, certeza alta, `tipo = após a ressurreição`.
- **As sete cartas (caps. 2-3, F003-F009):** cada carta abre com um verbo de fala ("Isto diz...") que fica **dentro** da própria aspa, inutilizável pela busca; a busca então olha a carta **anterior** e encontra o refrão de fechamento dela ("o que o Espírito diz às comunidades") — um verbo de fala real, mas do assunto errado. Por isso 6 das 7 cartas saíam atribuídas a "Espírito" e a primeira (Éfeso, sem carta anterior para herdar por engano) saía sem falante algum. Corrigidas as 7 para falante Jesus, certeza alta, `tipo = após a ressurreição` — cada uma confirmada lendo a própria abertura: "o primeiro e o último, que morreu e tornou a viver" (Esmirna, ecoa 1:17-18), "o Filho de Deus... olhos como chama de fogo" (Tiatira, ecoa 1:14), "a chave de Davi" (Filadélfia), "o Amém, a testemunha fiel e verdadeira, o princípio da criação de Deus" (Laodiceia), etc. — todas retomam a autodescrição do "Filho do Homem" ressuscitado de Ap 1.
- **Não corrigido, por ser correto ficar de fora:** Ap 1:8 ("Eu sou o Alfa e o Ômega, diz o Senhor, Deus") é **Deus falando**, não Jesus — nomeado explicitamente ("λέγει κύριος ὁ θεός"), fora do escopo desta camada independente da pontuação.
- **Não corrigido, por ser um problema de pontuação do rascunho, não da camada:** Ap 16:15 ("Eis que venho como ladrão...") e Ap 22:12-16 ("Eu sou o Alfa e o Ômega... Eu, Jesus, enviei o meu anjo...") são inequivocamente palavras de Jesus (22:16 se assina "Eu, Jesus"), mas **não estão dentro de nenhuma aspa no rascunho** — a camada só processa aspas existentes, e inventar uma faixa sem aspa no rascunho contrariaria essa regra. Fica registrado como um ajuste de pontuação pendente para o rascunho de Apocalipse, fora do escopo desta ferramenta.
- **Achado de ferramenta, documentado e não corrigido:** a busca de verbo de fala (`off=1`/`off=2` em `propor_falantes`) só exclui as palavras da **própria** fala sendo resolvida, não as de **outras** falas já identificadas — por isso ela pôde "roubar" o refrão de uma carta vizinha. É o mesmo mecanismo por trás do problema das sete cartas. Corrigir isso na raiz exigiria mudar a busca para todo o NT, risco maior que o desta rodada (mesmo critério usado para não ampliar `PRON_MORPH` a demonstrativos, na rodada anterior); as 8 falas afetadas já foram corrigidas à mão.

**Atos 9/22/26 (a voz a Saulo/Paulo no caminho de Damasco):** duas causas.
- **At 9:4-6 (F051, F052, F053):** verbo elidido no grego na segunda fala de um diálogo alternado ("ele disse: 'Quem é, Senhor?' E [ele]: 'Eu sou Jesus...'"); a ferramenta reaproveitou por engano o verbo/falante da **primeira** fala do par. F052 (a pergunta do próprio Paulo) já estava correta. Corrigidas F051 (9:4, "Saulo, Saulo...") e F053 (9:5b-6, "Eu sou Jesus...") para falante Jesus, `tipo = após a ressurreição`; certeza alta em F053 (autoidentificação explícita na própria fala), media em F051 (é a mesma voz, mas a identificação só vem no versículo seguinte).
- **At 22:7-10 e 26:14-18 (falas novas F204-F208):** citação aninhada — Paulo narra, dentro do seu próprio discurso de defesa (uma aspa dupla “…”), o que a voz lhe disse usando aspa simples ‘…’; a ferramenta não separa uma aspa aninhada como fala à parte (mesmo padrão encontrado em At 20:35/F203, na rodada anterior). Acrescentadas 5 falas novas (F204-F208) isolando só o trecho da voz dentro de cada versículo partilhado com a fala de Paulo (ex. 22:8 tem a pergunta do próprio Paulo *e* a resposta da voz no mesmo verso; só a resposta ganhou marca). Falante Jesus, `tipo = após a ressurreição`; certeza alta onde há autoidentificação explícita ("Eu sou Jesus") na própria fala (22:8, 22:10, 26:15-18), media onde a identificação vem só no versículo seguinte (22:7, 26:14, mesmo critério de 9:4).

**Mateus 11:21-24, 13:44-51, 20:1-16; Marcos 8:20; Lucas 18:6-8:** três causas menores, todas mecânicas.
- **Mt 11:21-24 (F071):** o verbo que introduz o trecho ("ὀνειδίζειν", "começou a repreender") não está na lista `SPEECH` de lemas de verbo de fala da ferramenta. Corrigido para Jesus/alta (continuação do mesmo discurso de 11:7-19, já atribuído).
- **Mt 13:44-50 (F096) e Mt 20:1-16 (F184):** cadeia de ensino/parábolas sem reintrodução narrativa ("γάρ" liga 20:1 à conclusão de 19:30); a busca só olha 2 versículos para trás e não achou verbo nesse intervalo. Corrigidas para Jesus/alta (continuação de falas já atribuídas, F095 e F183).
- **Mt 13:51 (F097) e Mc 8:20 (F112):** mesmo padrão do Damasco — pergunta de Jesus com verbo elidido, que herdou por engano o verbo/falante da resposta dos discípulos logo depois (F098 e F113, que já estavam corretas). Corrigidas para Jesus/alta.
- **Lc 18:6-8 (F223):** "ὁ κύριος" aqui é o título narrativo que Lucas usa para Jesus (convenção lucana), não outro falante; o verso 1 já estabelece Jesus como quem conta a parábola. Corrigido para Jesus, certeza mantida em media (resolução por título, mesmo critério de 1Co 11:24-25, não autoidentificação mecânica).

**João 8:7/8:11 e 15:1-17/16:1-16:** duas causas, uma delas um achado novo de código.
- **Bug de código, corrigido:** o lema grego de 10 palavras do NT inteiro (quase todas dentro de Jo 7:53-8:11) vem do Macula com o acento em forma decomposta (NFD) em vez de precomposta (NFC) — visualmente idêntico a `SPEECH`/`NOME_DIV`, mas falha na comparação por string. Confirmado varrendo as 137.741 linhas do Macula: só 102 têm esse descompasso, 100 delas dentro de Jo 7:53-8:11 (as outras 2, em Lc 14:29 e Ef, não afetam nenhuma fala). Corrigido normalizando para NFC em `Livro.__init__` (`camadas.py`), antes de `self.byid`/`self.verses` serem montados. Com a correção, Jo 8:7 e 8:11b resolvem para Jesus/alta automaticamente; de caminho, também corrigiu 8:4-5 (acusadores, já corretamente fora da camada) e 8:11a ("Ninguém, Senhor") para falante "a mulher" (também fora da camada; só por integridade do dado, já que antes dizia "?"). Certeza alta, não `debatido`: a disputa textual da perícope (já registrada na nota "var" do rascunho) é sobre a passagem pertencer ou não ao evangelho, não sobre quem fala dentro dela.
- **Jo 15:1-17 (F276) e 16:1-16 (F278):** discurso de despedida ininterrupto (13:31-16:33); o rascunho reabre aspas a cada parágrafo sem reintroduzir verbo de apresentação, e a busca (que olha só 2 versículos para trás) ou não achava candidato, ou achava um errado interno à própria fala anterior. Corrigidas para Jesus, certeza media (mesmo critério da fala vizinha já correta, F277, que também sofre do mesmo limite mecânico apesar de o conteúdo ser tão claro quanto o de F271/F273/F275, já alta). Nota: a contagem de "23 versículos" da rodada anterior estava errada — 15:1-17 (17v) + 16:1-16 (16v) = 33 versículos.
- **Achado adicional, fora da lista original, corrigido de passagem:** Jo 14:1-4 (F269) estava atribuído ao "galo" (ἀλέκτωρ!) — a busca tinha casado com "φωνήσῃ" de 13:38 ("o galo não cantará"), fora de contexto. É a abertura do mesmo discurso de despedida ("Não se perturbe o coração de vocês..."). Corrigido para Jesus, certeza media (mesmo motivo mecânico de F276/F278).

**Estado exportado:** `revisado-2`, mantido (nenhuma marca nova passou pelas duas revisões formais). A mensagem de estado no JSON deixa de citar "lacunas de cobertura ainda pendentes" (RFC-0011) e passa a dizer que as lacunas listadas foram revisadas e corrigidas em 2026-11-12, com a ressalva honesta de que podem existir outras não varridas (esta rodada cobriu só as lacunas que a RFC já havia listado, não uma auditoria de aspas do NT inteiro).

## Alternativas consideradas

| Alternativa | Por que não |
|---|---|
| **Gravar vermelho e maiúscula no texto-base** | Esconde a escolha, não pode ser desligada e fere a neutralidade |
| **Marcar à mão, sem fonte aberta** | Lento e inconsistente; a proposta automática dá um ponto de partida revisável |
| **Só palavras de Jesus, sem pronomes** | Possível, mas as duas camadas têm a mesma natureza e a mesma infraestrutura |
| **Maiúscula também em 1ª e 2ª pessoa (tu/Tu)** | Mexe na convenção "você/vocês" (guia de estilo); fica para outra proposta |
| **Não oferecer** | Perde um recurso que muitos leitores pedem e que se pode oferecer sem custo ao texto |

## O que muda para quem

- **Tradutores e revisores:** um passo a mais por livro (registrar falantes e referentes, revisar as propostas) e duas revisões por camada.
- **Usuários do texto:** podem ligar ou desligar cada camada; as marcas vêm com certeza e estado.
- **O app bibleme e outros apps:** recebem as camadas como dados opcionais (JSON e USFM).
- **Custos:** ferramenta de propostas e tempo de revisão; sem custo para o texto-base.

## Questões em aberto

1. **Fonte para o AT:** existe um conjunto aberto equivalente ao Macula Greek para o hebraico, com falantes e antecedentes anotados? Se não, a camada do AT nasce só da marcação do tradutor.
2. **Falantes além de Jesus:** quando incluir Deus, anjos e outros, e como exibir.
3. **Casos disputados:** a lista inicial (Jo 1:1, Jo 3:13-21, Rm 9:5, Tt 2:13, 2Pe 1:1 e outros) e a nota neutra de cada um.
4. **Pronomes de Deus Pai e do Espírito:** a regra para "Senhor", "Pai" e "espírito" sem "santo", hoje fora das propostas automáticas.
5. **Primeira e segunda pessoa:** vale uma proposta separada, junto com a convenção "você/vocês"?
6. **Citações de Jesus por outros** (At 20:35, 1Co 11:24-25): entram no vermelho por padrão?
7. **Quem revisa:** duas revisões independentes por camada e por capítulo exigem mais de duas fontes de revisão; ver a terceira fonte pendente na revisão do NT.

## Decisão

**Decisão do fundador em 2026-11-12** (a comunidade ainda pode comentar até o fim do prazo):

- **Escopo do piloto:** estendido de Marcos para **todo o Novo Testamento** (27 livros). Mecanismo e cautelas inalterados: camadas fora do texto-base, botões desligados por padrão, e cada marca permanece `proposto-auto` — o leitor continua mostrando a certeza e o aviso de "proposta automática, sem revisão" enquanto o item 4 (duas revisões independentes por camada e por capítulo) não for cumprido.
- **O que isso não decide:** nenhuma das questões em aberto (1-7); em particular, "aceito" continua exigindo as duas revisões independentes por camada e capítulo, ainda pendentes para o NT inteiro.

O restante (aceite formal da RFC, questões em aberto) segue aberto até o fim do prazo de comentários.

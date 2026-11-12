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
- **Campos `tipo` (após a ressurreição / citado por outro) e `debatido`:** ainda não existem no formato de dados nem no leitor. Falas de Jesus ressuscitado/glorificado já marcadas como `wj` comuns (sem o tipo): Mt 28:9-10,18-20; Mc 16:15-18; Lc 24 (vv. 17,19,25-26,38-39,41,44,46-49); Jo 20 (vv. 15-17,19,21-23,26-27,29) e todo o Jo 21; At 1:4-5,7-8; Ap 22:20. Falas "citadas por outro" sem marca nenhuma: At 20:35, 1Co 11:23-25 (os dois exemplos da própria RFC), Jo 18:9 (caso-limite: Mc 14:72).
- **Lacunas de cobertura** (fala de Jesus real, sem nenhuma proposta, provavelmente por o falante não ser nomeado "Jesus"/"Cristo" no grego ou por aspas que não casaram no rascunho): quase todo o Apocalipse (1:8, 1:17-20, caps. 2-3, 16:15 — só 22:20 tem marca), At 9:4-6/22:7-10/26:14-18 (o Damasco das três narrações, falante tagueado "κύριος" no grego, fora de `NOME_DIV`), Mt 11:21-24, 13:44-51, 20:1-16, Mc 8:20, Lc 18:6-8, Jo 8:7/8:11, Jo 15:1-17 e 16:1-16 (23 versículos do discurso de despedida, a lacuna mais grave encontrada).
- **Bug de limite, não corrigido:** a primeira palavra portuguesa de uma fala às vezes fica fora do par «» (descasamento no realinhamento grego→português). Confirmado em pelo menos Mt 8:26, 14:27, 19:17, 20:21, 21:19, 22:18, 22:20, 26:10, 26:64 e Jo 1:50, 18:4, 18:7, 19:28. Não muda o falante nem o sentido; precisa de correção antes de `aceito`.
- **João 1:1 (prólogo) e Rm 9:5/Tt 2:13/2Pe 1:1:** sem nenhuma marca — correto e neutro (a camada só processa referência pronominal, não disputa de predicado/aposição como "Deus" aplicado a Cristo nesses versos), mas é um limite de escopo que vale deixar registrado.

**Estado exportado:** `revisado-2` (as duas revisões foram feitas; os achados acima foram corrigidos onde seguro corrigir). Nenhum livro passa a `aceito` nesta rodada — os campos `tipo`/`debatido` em aberto e as lacunas de cobertura continuam pendentes para isso, e a camada segue desligada por padrão com o aviso de dado revisado mas incompleto.

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

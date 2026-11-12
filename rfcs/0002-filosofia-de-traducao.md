# RFC-0002: Filosofia de tradução

- **Estado:** Proposta (com quatro decisões do fundador, ver **Decisão**)
- **Autor(es):** Fundador (rascunho redigido com apoio de IA)
- **Aberta em:** 2026-10-23
- **Decide:** Conselho (no início, o fundador), ouvidos os coordenadores de idioma
- **Fim do prazo de comentários:** 14 dias depois da publicação do repositório

## Resumo

Esta RFC fixa a **postura** do projeto (fiel ao sentido e à imagem, clara ao leitor, honesta nas escolhas), a **regra de desempate** para quando esses compromissos se chocam e as **regras comuns a todos os idiomas**. As escolhas que dependem da língua (tratamento, ortografia, forma do nome divino, nomes próprios) ficam num **guia de estilo por idioma**; o do português é o [primeiro rascunho](../docs/guias-de-estilo/pt-BR.md).

## Problema

Toda tradução escolhe um ponto entre dois polos: seguir a forma do original (mais "palavra por palavra") ou o sentido, em frases naturais da língua de chegada (mais "pensamento por pensamento"). As três edições citadas como referência de qualidade ficam em lugares diferentes dessa linha: a **ARA** tende ao formal, a **NVI** tende ao dinâmico, e a **Bíblia de Jerusalém** se destaca pelo aparato crítico e literário. O projeto precisa dizer onde quer ficar, e por quê, para que centenas de revisões puxem na mesma direção.

Dois problemas da primeira versão desta RFC:

- **Princípios genéricos não resolvem conflitos.** "Fiel e clara" é o que toda tradução promete. A filosofia está em **o que vence quando as duas se chocam**.
- **Misturava o que vale para todos os idiomas com o que é só do português** (você ou vós, aspas, ortografia). Decidir isso em português seria decidir pelos demais idiomas.

## Proposta

### 1. Postura em cinco compromissos

1. **Fidelidade ao sentido e à imagem.** Preservar a palavra, a estrutura, a imagem e o ritmo, quando a língua de chegada os comporta. Metáforas e termos culturais permanecem se um leitor atento os entende. Quando adaptamos, a forma literal vai em nota ("Lit.: …").
2. **Clareza para o leitor de hoje.** Língua contemporânea e culta, sem arcaísmos gratuitos, boa para leitura em voz alta e para ser entendida sem notas.
3. **Consistência nos termos-chave.** Um glossário por idioma amarra termos centrais aos números de Strong. A variação entre traduções de uma mesma palavra é **deliberada e justificada**, nunca acidental.
4. **Transparência nas escolhas.** Alternativas relevantes, variantes textuais e passagens disputadas vêm com o texto escolhido e as principais alternativas em nota, sem esconder a dificuldade.
5. **Sem partido escondido.** Traduzir é escolher, e o projeto não promete uma neutralidade impossível. Promete **mostrar** a escolha: o texto adota a leitura mais provável segundo quem lê os originais, mostra as alternativas relevantes e **nunca escolhe um lado por omissão**. A interpretação teológica fica fora do texto e das notas, na camada de comentário, com autor e tradição à vista ([RFC-0008](0008-recursos-de-estudo.md)).

### 2. Regra de desempate

Quando fidelidade e clareza se chocam, vale esta ordem:

1. **Não distorcer o sentido.** Nunca trocar o que o texto diz por algo mais fácil.
2. **Manter a imagem e a forma** quando um leitor atento as entende. A imagem faz parte do sentido.
3. **Se a imagem não se entende sem ajuda**, o tradutor escolhe, com o menor ruído possível: (a) **manter a imagem e explicá-la em nota cultural**, ou (b) **dizer o sentido e pôr a forma literal em nota** ("Lit.: …").
4. **Se a mesma escolha se repete**, ela vai para o **glossário** (termos) ou para o **guia de estilo** (forma), para não ser reinventada a cada capítulo.

**Exemplo ilustrativo.** Escrito para esta RFC, **não é texto da tradução**. Mostra a regra no ponto "no meio" da linha, que o fundador escolheu ([Decisão](#decisão)):

| Passagem | Texto | Nota |
|---|---|---|
| Romanos 12:20 | Fazendo isso, você amontoará brasas sobre a cabeça dele.ᵃ | ᵃ Imagem de quem desperta no outro vergonha e arrependimento. *(mantém a imagem e a explica)* |
| Provérbios 3:8 | Será saúde para o seu corpoᵃ e alívio para os seus ossos. | ᵃ Lit.: umbigo. *(diz o sentido e guarda a forma)* |
| Lucas 12:35 | Estejam prontos, com a roupa presa à cinturaᵃ e as lâmpadas acesas. | ᵃ Lit.: com os lombos cingidos; imagem de quem se prepara para agir. *(idem)* |

### 3. "Sem partido escondido", na prática

- **Texto principal:** a leitura que a maioria de quem lê os originais considera mais provável. Quem decide é a revisão dos originais ([RFC-0004](0004-processo-e-versoes.md)), com a justificativa registrada.
- **Alternativas:** as principais ficam em nota, na primeira ocorrência relevante e no glossário.
- **Passagens disputadas** (por exemplo *almah* em Isaías 7:14, a pontuação de Romanos 9:5, *logos* em João 1:1): texto principal, alternativas em nota e **nunca sem nota**.
- **Termos de forte carga entre tradições** (batizar, igreja, sacerdote, presbítero ou ancião, justificação, os termos para o destino dos mortos, os nomes dos livros em disputa): traduzir o **sentido do original**, e **manter a palavra consagrada quando ela também é a mais fiel** (apóstolo, anjo, batizar). Nenhuma palavra entra ou sai só por ser de uma tradição. Alternativas em nota.
- **Notas e comentários:** interpretação teológica não entra nas notas do texto; vai à camada de comentário, com autor e tradição.

### 4. Regras comuns a todos os idiomas

| Tema | Regra comum |
|---|---|
| **Variantes e versículos ausentes em manuscritos antigos** | O texto-base manda ([RFC-0001](0001-textos-base.md)). O que falta nos manuscritos mais antigos entra **entre colchetes duplos**, com nota; variantes que mudam o sentido vão em nota e na camada de variantes |
| **Palavras acrescentadas** (sem equivalente direto no original) | Marcadas no arquivo-fonte (`\add`), para o leitor poder ver o que a língua exigiu |
| **Notas** | De três tipos: alternativa literal, variante textual e esclarecimento cultural |
| **Títulos de seção** | Originais, curtos e descritivos, **nunca copiados** de outras edições |
| **Termos-chave** | Glossário por idioma, amarrado ao Strong, com variação deliberada e justificada |
| **Nome divino** (YHWH) | **Marcado em toda ocorrência** no arquivo-fonte (`\nd`, com o Strong H3068). A **forma exibida** é decisão do guia de estilo de cada idioma e **quem consome pode trocá-la**; assim a escolha mais visível do texto deixa de ser irreversível |
| **Poesia** | Em versos, seguindo o paralelismo (linhas marcadas no USFM) |
| **Pronúncia e nomes próprios** | Tabela por idioma, no guia e no glossário |

### 5. Uma versão agora, desenho pronto para duas

Projetos abertos comparáveis (por exemplo o *unfoldingWord*, com seus textos "literal" e "simplificado") mostram o valor de **duas versões complementares**: uma **literal**, para estudo, e outra **legível**, em linguagem simples, para leitura corrida e para quem aprende a língua. **Decisão:** cada idioma começa com **uma** versão. O nome ("versão + idioma"), o formato e o alinhamento ([RFC-0003](0003-formato-e-camadas.md), [RFC-0009](0009-estrutura-de-dados-lexicos-e-dicionarios.md)) já aceitam uma segunda depois, sem refazer nada.

### 6. O que cada idioma decide, num guia de estilo

Cada idioma mantém um **guia de estilo** (`docs/guias-de-estilo/<idioma>.md`) com as escolhas que dependem da língua e da tradição local, cada uma com a **justificativa**:

- forma exibida do nome divino;
- nomes próprios (forma tradicional ou transliteração);
- tratamento (por exemplo você/vocês ou tu/vós) e registro;
- linguagem inclusiva;
- ortografia e pontuação do discurso direto;
- maiúsculas reverenciais;
- medidas e moedas;
- nomes dos livros e rótulo dos deuterocanônicos;
- termos de forte carga entre tradições e os termos para o destino dos mortos.

**O custo de mudar depois varia muito.** As escolhas de **custo alto** (tratamento, linguagem inclusiva, nomes próprios, glossário) devem ser fixadas **antes do piloto**; as de custo baixo (ortografia, aspas, nome divino, desde que marcado) se acertam durante o piloto. O guia do português traz esse custo por linha. Mudanças no guia passam por PR e pelo coordenador do idioma.

## Alternativas consideradas

- **Escolher um polo (só formal ou só dinâmico):** perderia ou a precisão ou a leitura. O ponto escolhido é "no meio", com a nota como válvula.
- **Seguir a filosofia da Jerusalém, da NVI ou da ARA:** nenhuma sozinha. O projeto aprende com as três sem se prender a uma.
- **Prometer neutralidade confessional:** soa bem, é impossível de cumprir à risca e pode ser cobrada contra o projeto. Por isso o compromisso 5 promete **transparência**.
- **Declarar uma tradição de leitura** (por exemplo, o consenso acadêmico ecumênico): descartado por ora; a regra de "leitura mais provável segundo quem lê os originais" já cumpre quase o mesmo, sem fechar o projeto numa linha.
- **Deixar cada idioma decidir tudo:** os idiomas decidem o seu estilo, mas dentro dos cinco compromissos, da regra de desempate e das regras comuns.

## O que muda para quem

- **Tradutores:** têm uma ordem para decidir e uma regra de registro quando saem do literal.
- **Revisores:** podem questionar uma escolha com base nos compromissos e na regra de desempate, não por gosto.
- **Coordenadores de idioma:** mantêm o guia de estilo do seu idioma.
- **Leitores:** sabem o que esperar e onde olhar quando um texto difícil aparece.

## Questões em aberto

1. **Volume de notas:** quantas notas por capítulo o leitor suporta? O app bibleme segue o princípio de "pouca informação"; o projeto pode adotar um orçamento de notas por capítulo.
2. **Quem decide a "leitura mais provável"** quando os revisores de originais discordam: quórum, desempate, registro da divergência.
3. **Registro** (formal, coloquial): é estilo do idioma, como proposto, ou decisão comum?
4. **Quando uma forma tradicional** de um nome ou expressão deve ceder a uma forma mais correta (critério por idioma).
5. **Exemplos de referência:** vale manter um conjunto de passagens-teste, traduzidas em cada ponto da linha, para calibrar novos revisores?

## Decisão

**Decisões do fundador em 24/out/2026** (a comunidade ainda pode comentar antes de a RFC ser aceita):

1. **Estrutura:** esta RFC fica com os princípios e as regras comuns; as escolhas do português vão para o guia de estilo pt-BR, e cada idioma faz o seu.
2. **Ponto na linha:** **"no meio"**: sentido e imagem, com a imagem mantida quando o leitor a entende e a forma literal em nota quando adaptamos.
3. **Versões:** **uma por idioma agora**, com o desenho pronto para uma segunda.
4. **Neutralidade:** **"sem partido escondido"**: transparência em vez de neutralidade absoluta.

As demais linhas da antiga tabela de estilo viraram o [guia do português](../docs/guias-de-estilo/pt-BR.md), **ainda não decidido**.

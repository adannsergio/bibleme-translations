# RFC-0001: Textos de partida e escopo do cânon

- **Estado:** Proposta
- **Autor(es):** Fundador (rascunho redigido com apoio de IA)
- **Aberta em:** 2026-10-23
- **Decide:** Conselho (no início, o fundador)
- **Fim do prazo de comentários:** 14 dias depois da publicação do repositório

## Resumo

A tradução parte dos textos originais, e não de outra tradução. Esta RFC propõe **quais edições dos originais usar** (priorizando licença livre e dados de lema e morfologia) e **qual o escopo do cânon** da primeira release.

## Problema

- Traduzir de outra tradução repete os erros dela e cria risco de [obra derivada](../docs/direitos-autorais-e-referencias.md).
- Edições críticas modernas dos originais (Nestlé-Aland, UBS, BHS, Göttingen) têm direitos sobre seleção e aparato. Precisamos de edições que possamos citar, distribuir e anotar.
- Sem lema e morfologia por palavra não há números de Strong confiáveis nem estudo de palavras.
- Existem várias tradições de cânon. Escolher uma ordem ou um escopo mexe com sensibilidades.

## Critérios

1. **Licença** compatível com CC BY 4.0, conferida na fonte oficial e registrada no [registro de fontes](../docs/registro-de-fontes.md).
2. **Qualidade acadêmica** e aceitação entre especialistas.
3. **Dados por palavra** (lema, morfologia, Strong) já existentes ou fáceis de produzir.
4. **Cobertura** do escopo escolhido.
5. **Manutenção**: o projeto de origem está vivo?

## Proposta

| Corpo | Texto-base proposto | Licença (estado da verificação) | Cotejo e variantes |
|---|---|---|---|
| Novo Testamento | **SBLGNT** | CC BY 4.0, **conferida na página oficial** (sblgnt.com, 23/out/2026: "licensed freely under the Creative Commons Attribution 4.0 International Public License"). Falta ler o EULA completo e o status do aparato | **Texto Majoritário bizantino** (Robinson-Pierpont): **domínio público, conferido na página oficial** (aviso dos editores, que pedem manter nomes, título e aviso); variantes relevantes em nota |
| Antigo Testamento em hebraico e aramaico | **Códice de Leningrado (WLC), via OSHB** | Texto em domínio público; lemas e morfologia do OSHB sob CC BY 4.0 (conferido no repositório do OSHB) | Cotejo com a LXX, os manuscritos do Mar Morto, o Pentateuco Samaritano, a Vulgata e os Targuns **onde o sentido muda**, com nota |
| Deuterocanônicos com original grego | **LXX**: o texto de **Swete (1909)** como candidato, **edição a decidir** | Ver a nota abaixo: a obra é antiga, mas a cópia digital limpa é **CC BY-SA 4.0** e **não há marcação livre** de lema e morfologia | Cotejo com a Vulgata |
| Deuterocanônicos com original hebraico (Sirácida e fragmentos de Tobias) | Fragmentos da Genizá do Cairo, Qumran e Massada, em edições antigas livres | A verificar | Cotejo com o grego |
| Partes só em latim | **Vulgata Clementina** | Domínio público (a Nova Vulgata tem direitos da Santa Sé) | |

**A camada de dados do original vem do STEPBible, como camada auxiliar** (decisão do fundador, ver **Decisão**; os textos-base seguem vindo direto de OSHB e SBLGNT) (CC BY 4.0, conferido no README oficial em 23/out/2026): o **TAHOT** (hebraico e aramaico, com lema, morfologia e Strong desambiguado, a partir do Códice de Leningrado) e o **TAGNT** (grego, com as palavras de NA27/28, TR, SBLGNT, bizantino, Westcott-Hort e outras, **cada palavra marcada com as edições que a trazem**). Isso entrega de uma vez o texto-base, a morfologia e uma **camada de variantes** para o Novo Testamento ([RFC-0009](0009-estrutura-de-dados-lexicos-e-dicionarios.md)). O cuidado é confirmar com o STEP o status do que vem de edições críticas modernas.

**Nota sobre o grego dos deuterocanônicos (pesquisa de 23/out/2026).** É o ponto mais incerto:

- O texto de **Swete (1909)** está no **First1KGreek** (Universidade de Leipzig), em TEI/EpiDoc, com 56 obras sob `tlg0527` (a lista inclui, por exemplo, Baruque, Susana e Bel e o Dragão, na versão de Teodócio). **O cabeçalho do arquivo e o repositório declaram CC BY-SA 4.0** (a obra de Swete é antiga; a licença é da digitalização). Serve como **fonte de consulta e como pacote isolado** ([RFC-0009](0009-estrutura-de-dados-lexicos-e-dicionarios.md)), não para ser misturado ao texto CC BY. Se vale a ressalva de BY-SA para uma **tradução** feita a partir desse texto é pergunta para o advogado.
- **Não encontrei Septuaginta livre com lema e morfologia.** Segundo as fontes que achei: a marcação do **CCAT/CATSS** tem restrição de uso comercial; a de Eliran Wong sobre Rahlfs (1935) é **CC BY-NC-SA 4.0** (segundo uma página de terceiros, não a origem); Rahlfs-Hanhart (2006) e Göttingen têm direitos. O texto de Rahlfs de 1935 é descrito como domínio público por uma listagem de terceiros, a verificar.
- **Consequência:** para os deuterocanônicos, a primeira versão do alinhamento provavelmente **não terá Strong**. Produzir lema e morfologia livres para a LXX seria um projeto à parte.

**Regra geral de cotejo:** o texto-base manda. Variantes que alteram o sentido, partes ausentes em manuscritos antigos (por exemplo Marcos 16:9-20 e João 7:53 a 8:11) e emendas entram em **nota**, e a política de apresentação é decidida na [RFC-0002](0002-filosofia-de-traducao.md).

### Escopo do cânon

| Opção | O que inclui | Observação |
|---|---|---|
| **A (proposta)** | 73 livros do cânon católico, com os deuterocanônicos **identificados como tal**; Ester e Daniel com os acréscimos | Casa com o que o app bibleme já mostra |
| B | 66 livros e os deuterocanônicos numa seção à parte | Ordem protestante preservada |
| C | A + livros adicionais da tradição ortodoxa (1 Esdras, 3 e 4 Macabeus, Salmo 151, Oração de Manassés) | Fase posterior |

**O formato guarda o livro por identificador, e a ordem é metadado** ([RFC-0003](0003-formato-e-camadas.md)): quem consome escolhe a ordem protestante, católica, ortodoxa ou hebraica. A primeira release traz a opção A, com os extras ortodoxos como trabalho posterior, claramente marcados.

## Alternativas consideradas

- **Partir de uma tradução protegida (Jerusalém, NVI, ARA):** descartada. Obra derivada e risco jurídico.
- **NA28 ou UBS5 como base:** descartadas por direitos. Podem ser **consultadas** por tradutores que as tenham, mas sem copiar aparato.
- **Texto Majoritário ou Textus Receptus como base do NT:** descartados como base pelo fundador. Entram como **variantes documentadas**, e uma segunda edição do NT, que atenderia a tradição do Textus Receptus (a da ARA), ficou fora por ora.

## O que muda para quem

- **Tradutores:** trabalham sobre as edições listadas, com ferramentas que mostram o grego e o hebraico com lema e morfologia.
- **Quem usa o texto:** cada release declara os textos-base e suas licenças (arquivo `SOURCES` na release).
- **Estudiosos:** a escolha do SBLGNT é aceita no meio acadêmico, mas **não é neutra**. As variantes ficam documentadas.

## Questões em aberto

1. **NT:** *resolvida pelo fundador em 23/out/2026* (ver **Decisão**): SBLGNT como base, com o texto bizantino e o Textus Receptus em variantes documentadas.
2. **Deuterocanônicos:** *adiada para a Fase 3 pelo fundador.* Qual edição livre do grego usar? As restrições estão na nota acima.
3. **Sirácida e Tobias:** adotar o grego, o hebraico ou o latim onde divergem?
4. **Escopo:** *resolvida pelo fundador em 23/out/2026:* opção A.
5. **Licença do aparato do SBLGNT:** confirmar, por escrito, com a SBL/Logos se necessário. O mesmo vale para o **STEPBible**: confirmar o que na base vem de NA27/28.
6. **Quem verifica** cada licença do registro de fontes? (Pedido de voluntários: [CONTRIBUTING](../CONTRIBUTING.md#primeiras-contribuições).)

## Decisão

**Decisões do fundador em 23/out/2026** (a comunidade ainda pode comentar antes de a RFC ser aceita):

1. **Novo Testamento:** **SBLGNT** como texto-base. O **texto bizantino** (Robinson-Pierpont) e o **Textus Receptus** entram como **variantes documentadas** em nota e na camada de variantes. Não haverá uma segunda edição do NT por ora.
2. **Antigo Testamento:** Códice de Leningrado, via OSHB.
3. **Escopo do cânon:** **opção A**, os 73 livros, com os deuterocanônicos identificados como tal e várias ordens canônicas como metadado.
4. **Deuterocanônicos:** a **edição grega e o alinhamento (sem Strong) ficam para a Fase 3**. As restrições encontradas hoje (cópia limpa em CC BY-SA e nenhuma marcação livre de lema e morfologia) ficam registradas aqui e no registro de fontes.
5. **STEPBible:** os **textos-base vêm diretamente das fontes** (OSHB para o hebraico, SBLGNT para o grego), e o **STEPBible-Data entra como camada auxiliar** (lema, morfologia, dStrong, variantes por edição, nomes próprios, versificação), **com condições**: confirmar com o STEP o status do que vem de NA27/28 e tratar o conteúdo criado por IA como `proposto`. O projeto **não depende** dele: se a confirmação falhar, produzimos essa camada por conta própria. *(Confirmado pelo fundador em 23/out/2026.)*

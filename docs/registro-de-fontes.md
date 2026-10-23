# Registro de fontes

Toda fonte que o projeto usa (textos originais, dados, imagens, léxicos) entra aqui **antes** de ser usada, com a licença **conferida na página oficial**. Sem registro, não entra. Veja a [política](direitos-autorais-e-referencias.md).

**Categorias:** **Livre** (domínio público ou licença compatível com CC BY 4.0), **Livre com condição** (por exemplo, BY-SA: só consulta até uma RFC aceitar a condição), **Protegida** (só consulta, nunca copiar).

**Estado da verificação:** *Conferida* (licença lida na fonte oficial) · *Parcial* (indício de fonte primária ou de busca, falta ler o texto da licença) · *A verificar* (de memória ou de fonte secundária).

Última atualização: 2026-10-23. A verificação de hoje foi feita por busca na web e **não substitui** a leitura do texto da licença na fonte; por isso quase tudo aparece como *Parcial*.

## Textos originais e bases

| Fonte | O que é | Categoria | Licença declarada | Estado | Observações |
|---|---|---|---|---|---|
| SBLGNT | Novo Testamento grego (SBL e Logos) | Livre | CC BY 4.0 | **Conferida** (página oficial sblgnt.com, 23/out/2026) para o texto | Atribuição obrigatória e alterações sinalizadas, segundo o EULA citado no eBible. A página diz que o texto difere de NA/UBS em mais de 540 unidades de variação. **Falta ler o EULA completo e confirmar o aparato** (a edição impressa o traz). |
| Códice de Leningrado (WLC) via OSHB | Antigo Testamento hebraico e aramaico | Livre | Texto em domínio público; lemas e morfologia sob CC BY 4.0 | Parcial | Declarado no repositório do OSHB, que pede crédito ao projeto. |
| Texto Majoritário bizantino (Robinson-Pierpont) | Novo Testamento grego, tradição bizantina | Livre | **Domínio público**, pelo aviso dos editores | **Conferida** (byzantinetext.com, 23/out/2026) | Os editores pedem que se mantenham seus nomes, o título e o aviso em reproduções. Texto em github.com/byztxt/byzantine-majority-text. Candidato a cotejo ([RFC-0001](../rfcs/0001-textos-base.md)). |
| Septuaginta (Swete, 1909) no First1KGreek | Antigo Testamento grego, com deuterocanônicos (56 obras em `tlg0527`) | Livre com condição | A obra é de 1909; **a digitalização da Universidade de Leipzig é CC BY-SA 4.0** | **Conferida** (cabeçalho do arquivo e licença do repositório, 23/out/2026) | **BY-SA**: só pacote isolado ou consulta. Sem lema nem morfologia. |
| Septuaginta (Rahlfs-Hanhart, Göttingen) | Edições críticas modernas | Protegida | Direitos reservados | A verificar | Só consulta. Edições eletrônicas derivadas têm condições restritivas (CCAT/CATSS com limite de uso comercial; marcação de Eliran Wong sobre Rahlfs 1935 em CC BY-NC-SA 4.0, segundo página de terceiros). O texto de Rahlfs de 1935 é descrito como domínio público por uma listagem de terceiros. |
| Vulgata Clementina | Latim | Livre | Domínio público | A verificar | A Nova Vulgata tem direitos (Santa Sé): só consulta. |
| Nestlé-Aland, UBS, BHS | Edições críticas modernas | Protegida | Direitos reservados | A verificar | Só consulta. |
| Aparato crítico de Tischendorf | Variantes do NT (século XIX) | Livre | Domínio público (obra antiga) | A verificar | Candidato a digitalização comunitária. |

## Traduções e bases abertas

| Fonte | O que é | Categoria | Licença declarada | Estado | Observações |
|---|---|---|---|---|---|
| Berean Standard Bible (BSB) | Tradução inglesa | Livre | Domínio público desde 30/abr/2023 | Parcial | Segundo os termos do site; o rótulo "CC0" **não** foi confirmado. Pedem não usar o nome em textos alterados. |
| Bíblia Livre (BLIVRE) | Tradução portuguesa, base Textus Receptus | Livre | CC BY 4.0 | Conferida | Registro do app bibleme (`data/CREDITOS.md`), a partir do eBible. Exige atribuição. |
| unfoldingWord (ULT, UST, notas) | Tradução literal e simples, notas e léxicos | Livre com condição | CC BY-SA 4.0 | A verificar | BY-SA obriga a compartilhar igual. Só consulta, até uma RFC. |
| Open Translation Bible (openbible.uk) | Tradução em 24 idiomas, Markdown e JSON por capítulo | Livre com condição | CC BY-SA 4.0 | Parcial | README e `LICENCE.md` lidos em 23/out/2026. **Origem e revisão de cada idioma não documentadas** nas páginas lidas. Só consulta, até uma RFC aceitar o BY-SA. Veja [projetos relacionados](projetos-relacionados.md). **Não confundir com OpenBible.info.** |
| Bíblia de Jerusalém, NVI, ARA, e outras modernas | Traduções com aparato | Protegida | Direitos reservados | — | Só ponto de comparação, nunca fonte. |
| The Open Bible (Thomas Nelson) | Bíblia de estudo comercial | Protegida | Direitos reservados | — | Só fonte de ideias ([projetos relacionados](projetos-relacionados.md)); nada dela entra. |
| Bible Strong (smontlouis/bible-strong) | Aplicativo e ferramentas editoriais de estudo | Livre com condição | Código **GPL-3.0**; os dados de cada recurso têm a licença da fonte | Parcial | **Não copiamos código** (GPL não cabe em MIT). Servem de referência de **arquitetura**. Seus levantamentos de licenças (notas, dicionários) ajudam, mas cada fonte deve ser conferida na origem. |
| Bible::Reference (gryphonshafer) | Biblioteca Perl de leitura de referências | Livre com condição | Artistic License 2.0 (no `dist.ini`) | Parcial | Só ideia: leitura e canonização de referências, com três cânones. Sem dependência. |

## Dados e léxicos

| Fonte | O que é | Categoria | Licença declarada | Estado | Observações |
|---|---|---|---|---|---|
| OpenBible.info (não é o openbible.uk), referências cruzadas | Referências cruzadas com votos | Livre | CC BY 4.0 | Conferida | Já usadas pelo app bibleme (lido o cabeçalho do arquivo e a página oficial em 21/out/2026). |
| OpenBible.info, Bible Geocoding | Lugares bíblicos com coordenadas | Livre | CC BY 4.0 (dados) | Parcial | Segundo o README do repositório. Dados do OpenStreetMap, **ODbL**; imagens variam. |
| Theographic Bible Metadata | Pessoas, lugares, eventos, tempos | Livre | CC BY 4.0, segundo o site do projeto | Parcial | Conferir o repositório. Os dados do Viz.Bible não têm licença clara. |
| MACULA (Clear Bible), Grego e Hebraico | Árvores sintáticas e anotações linguísticas | Livre | CC BY 4.0 (fontes secundárias) | A verificar | Ler o arquivo de licença de cada repositório (as fontes de dados podem ter avisos próprios). |
| **STEPBible-Data** (TAHOT, TAGNT, TBESH e TBESG, TIPNR, versificação, códigos de morfologia) | Original hebraico e grego com lema, morfologia e dStrong; variantes por edição; léxicos em inglês; nomes próprios; mapeamento de versificação | Livre | **CC BY 4.0** para o repositório inteiro, segundo o README oficial ("STEPBible Data Repository CC BY 4.0") | **Conferida** (README oficial, 23/out/2026) | Pede **crédito "STEP Bible" com link para www.STEPBible.org** e que as mudanças sejam registradas. **Cuidados:** (1) a base marca as palavras de edições críticas modernas (NA27/28) e convém **confirmar com o STEP** o status disso; (2) **parte do conteúdo foi criada com IA, e o próprio projeto declara isso** (por exemplo, o TBCWG): entra como `proposto` até revisão; (3) a menção antiga a CC BY-NC que vimos citada **contradiz** o README atual: vale a licença do repositório, mas confira o cabeçalho de cada arquivo ao importar. |
| NEUU Bible Topics Dataset | 5.745 tópicos unificados de Nave (1896) e Torrey (1897), com referências | Livre | **CC BY 4.0** sobre fontes em domínio público | **Conferida** (metadados e README do repositório, 23/out/2026) | Só a camada de tópicos e referências. Os campos de definição e de "enriquecimento por IA" são piloto e **não** entram. O README lista um conflito conhecido de *slug* em dois tópicos. |
| Aquifer Open Study Notes e Open Bible Dictionary | Notas e verbetes adaptados de obras da Tyndale House | Livre com condição | CC BY-SA 4.0 (segundo o levantamento do Bible Strong) | A verificar | **BY-SA**: só como pacote isolado, se uma RFC aceitar ([RFC-0009](../rfcs/0009-estrutura-de-dados-lexicos-e-dicionarios.md)). |
| Dicionário de Strong (Open Scriptures) | Léxico | A verificar | Dicionário de Strong em domínio público; XML do Open Scriptures com aviso "CC-BY-SA" no cabeçalho, sem versão | A verificar | Nota já registrada no app bibleme. Se BY-SA, só consulta. |
| Nave, Tesouro do Conhecimento Bíblico | Tópicos e referências cruzadas (século XIX) | Livre | Domínio público (obras antigas) | A verificar | Conferir a edição digital usada. |

## Como conferir uma fonte

1. Vá à **página oficial** do projeto (não a um resumo de terceiros) e leia o **texto da licença** ou o arquivo `LICENSE`.
2. Confirme **qual versão** da licença e **o que ela cobre** (texto, aparato, dados, imagens).
3. Anote: licença exata, versão, endereço, data e quem conferiu.
4. Se a licença tem condições (BY-SA, NC, ND) ou for ambígua, a fonte fica em **Livre com condição** ou **A verificar**, e **não entra** até que uma RFC decida.
5. Abra um PR atualizando esta tabela. Esta é uma ótima [primeira contribuição](../CONTRIBUTING.md#primeiras-contribuições).

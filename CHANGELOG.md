# Changelog

Formato livre, por release. Veja [RFC-0004](rfcs/0004-processo-e-versoes.md) para o que uma release traz e
[RFC-0010](rfcs/0010-citacao-por-tipo-de-uso.md) para qual versão citar por tipo de uso.

## Essencial pt-BR 0.3 "Revisada" — 2026-11-15

Terceira release: o AT recebe sua **primeira rodada de revisão cruzada de IA** e a correção de um bug
sistêmico de geração, encontrados depois da release 0.2. O NT (0.1 "Primícias") não mudou nesta release —
a tag `essencial-pt-br-0.1` continua válida e congelada. A `essencial-pt-br-0.2` ("Integral") também continua
válida e congelada para quem já a citou; esta release substitui o conteúdo do AT dela, não o do NT.

- **Revisão cruzada de IA, 1ª rodada**, nos 39 livros do AT: um agente de registro em português (perspectiva
  do idioma-alvo) e, numa segunda passada, um agente especialista em hebraico/aramaico mais especialistas de
  corpus por grupo de livros (Torá, Históricos, Poéticos/Sapienciais, Profetas Maiores, Profetas Menores).
  1.092 pareceres registrados, 587 decididos como acatados (total ou parcialmente) e aplicados ao texto.
  Ainda **sem revisão humana formal** — diferente do NT, que teve piso de 3 revisões de IA por capítulo.
- Corrigido um **bug sistêmico de geração** (marcador de posição de palavra hebraica vazio ou malformado,
  `{}`/`{...}`): 656 das 687 ocorrências encontradas numa varredura do texto inteiro. As 31 restantes ficam
  documentadas e não resolvidas de propósito, por não haver como atribuir a posição com segurança: 21 no
  capítulo 23 de 2 Reis (bug estrutural maior, de linhas inteiras, não o padrão pontual das demais), 9 em
  Números (3.31, 3.48, 4.6, 4.11, 5.21, 7.89, 11.23, 12.11, 14.19) e 1 em Ester 2.6.
- Achados teológicos corrigidos nesta rodada incluem: remoção de leitura messiânica antecipada em Isa 7.14 e
  Dn 9.25-26, e correção de "Satanás" (nome próprio) para "o Acusador" (substantivo comum com artigo, conforme
  o TAHOT) em Zc 3.1-2.
- USFM dos 39 livros regenerado em `texts/pt-BR/Essencial/`; dados do leitor regenerados (agora com
  referências cruzadas AT↔NT resolvidas de verdade onde antes só havia o placeholder "AT").
- **Pendente**: o achado de originalidade do Salmo 23 (ver `SOURCES`) segue sem correção; revisão humana
  formal e verificação pública de semelhança continuam pendentes, como já divulgado na release 0.2.

## Essencial pt-BR 0.2 "Integral" — 2026-11-13

Segunda release: acrescenta o **Antigo Testamento completo** (39 livros), em pré-release de quarentena (`0.x`).
O Novo Testamento (0.1 "Primícias") não mudou nesta release — a tag `essencial-pt-br-0.1` continua válida e
congelada para quem citar só o NT.

- Texto traduzido do hebraico/aramaico (Códice de Leningrado, via TAHOT/STEPBible), com números de Strong e
  alinhamento morfológico próprios por versículo.
- **Zero revisões** — nem de IA, nem humana. Diferente do NT, que teve um piso de 3 revisões de IA por capítulo
  antes desta release. Validação só mecânica (cobertura de palavra, formato, notas obrigatórias de Qere/Ketiv).
- **Achado de originalidade conhecido e não corrigido:** trechos do Salmo 23 (versos 1, 3 e 6) saíram muito
  parecidos com a Almeida Revista e Atualizada — ver `SOURCES`. Outros versos muito citados ainda não foram
  conferidos.
- Convenção nova: YHWH → "SENHOR" (caixa alta), com nota cultural na 1ª ocorrência de cada livro; Qere seguida
  no texto, Ketiv citada em nota quando muda o sentido.
- **Pendente, e divulgado nesta release:** revisão humana e de IA (nenhuma até aqui); verificação pública de
  semelhança com traduções protegidas; registro de DOI; meta/piso de revisões do AT (quantas por capítulo, antes
  de uma próxima release) ainda não foi decidida.

## Essencial pt-BR 0.1 "Primícias" — 2026-11-11

Primeira release: o **Novo Testamento completo** (27 livros), em pré-release de quarentena (`0.x`).

- Texto traduzido do grego (SBLGNT), com números de Strong e alinhamento morfológico próprios por versículo.
- Revisão cruzada por agentes de IA especialistas (grego, português, teologia paulina, grupos de livros),
  piso de **3 revisões por capítulo** em todos os 260 capítulos (registro do processo é interno ao projeto,
  não faz parte deste repositório).
- 72 contestações de número de Strong, com motivo registrado por ocorrência.
- Suplemento separado com os 18 versículos ausentes do SBLGNT (`texts/pt-BR/Essencial/Suplemento/`), não incluído
  no texto principal.
- **Pendente, e divulgado nesta release:** verificação pública de semelhança com traduções protegidas (ver `SOURCES`);
  registro de DOI; revisão humana (a revisão até aqui é de agentes de IA, não de pessoas).

Formatos: USFM (`texts/pt-BR/Essencial/`), leitor web (GitHub Pages), dados do leitor em JSON
([RFC-0003](rfcs/0003-formato-e-camadas.md)).

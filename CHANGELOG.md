# Changelog

Formato livre, por release. Veja [RFC-0004](rfcs/0004-processo-e-versoes.md) para o que uma release traz e
[RFC-0010](rfcs/0010-citacao-por-tipo-de-uso.md) para qual versão citar por tipo de uso.

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

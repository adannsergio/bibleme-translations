# Governança

Este documento descreve quem decide o quê. Ele também é uma proposta: qualquer parte pode ser mudada por [RFC](rfcs/README.md).

## Papéis

| Papel | O que faz | Como se torna |
|---|---|---|
| **Colaborador** | Comenta, sugere, abre Issues e PRs | Qualquer pessoa |
| **Tradutor** | Escreve rascunhos de livros ou capítulos | Aceita a [declaração de originalidade](CONTRIBUTING.md#declaração-de-originalidade) e é atribuído a uma tarefa |
| **Revisor de originais** | Confere o texto contra o hebraico, o aramaico ou o grego | Demonstra leitura dos originais (formação, publicação ou prova prática de revisão) |
| **Revisor de língua** | Confere clareza, ritmo, ortografia e consistência | Convite de um coordenador, depois de revisões úteis |
| **Coordenador de idioma** | Lidera a equipe de um idioma e responde pela qualidade dele | Indicado pelo Conselho; no início, por quem propôs o idioma |
| **Conselho Editorial** | Decide o que vale para todos os idiomas (formato, licença, processo, nome) | Ver abaixo |

## Começo: um fundador, um caminho para o Conselho

No início o projeto tem um **fundador-mantenedor** (Adann), que cria a estrutura, aceita as RFCs e decide em caso de impasse, sempre **com justificativa pública**. Isso é um ponto de partida, não um desenho final. A meta é um **Conselho Editorial** de 5 a 9 pessoas, com pelo menos duas que leiam os originais, que assuma o papel de decisão quando houver pessoas qualificadas e engajadas o bastante (a proposta de transição é uma RFC futura).

## Como decidimos

1. **Mudanças de texto** (um versículo, uma nota): o tradutor propõe, o revisor de originais e o revisor de língua aprovam, o coordenador do idioma funde.
2. **Regras do projeto** (licença, fontes, filosofia, formato, processo, nome): passam por [RFC](rfcs/README.md). Há um período mínimo de comentários de **14 dias**. Sem objeção fundamentada, a RFC é aceita (consenso por omissão). Com objeção, busca-se acordo; sem acordo, decide o Conselho (no início, o fundador) e a justificativa fica registrada na RFC.
3. **Discordâncias de tradução entre idiomas** não existem: cada idioma decide o seu texto, dentro das regras comuns.
4. **Questões de conduta** seguem o [Código de Conduta](CODE_OF_CONDUCT.md).

## Independência editorial

O app [bibleme](https://www.bibleme.com.br) é apenas um dos usuários possíveis do texto, e a empresa ou pessoa que o mantém não tem voto de qualidade nas decisões de tradução por ser dona do app. Em particular:

- decisões editoriais não seguem necessidades de produto, de venda ou de marketing de nenhum usuário do texto;
- o app e qualquer outro usuário recebem o texto, os formatos e a API **nas mesmas condições públicas**; não há acesso antecipado, versão especial nem preço especial;
- conflitos de interesse (por exemplo, um mantenedor que também vende produtos com o texto) são declarados no perfil e na RFC afetada.

## Dinheiro e transparência

O texto é livre e sempre baixável. Se o projeto receber dinheiro (doações, receita da API, patrocínio), valem estas regras, detalhadas na [RFC-0007](rfcs/0007-sustentabilidade.md):

- o dinheiro do projeto fica **separado** do dinheiro do app, com registro próprio;
- entradas e saídas são **publicadas** (resumo trimestral);
- o dinheiro serve ao projeto: hospedagem, revisão, ilustrações e mapas, consultoria jurídica, formação de equipes de idioma;
- ninguém compra influência editorial. Patrocinadores e doadores podem ser citados, nunca decidem texto.

## Marca e licença

- A marca "bibleme" e o nome das versões seguem a [política de nome](docs/licenca.md#nome-e-versões-modificadas) e a [RFC-0005](rfcs/0005-nome-marca-e-url.md).
- Versões já publicadas **não podem ficar mais restritivas**: a CC BY 4.0 é irrevogável para quem já recebeu o texto. Mudança de licença para versões futuras exige RFC e consentimento dos autores que não tiverem licenciado sob termos que permitam a mudança.

## Continuidade

Se o fundador deixar o projeto, a intenção é que o repositório e os registros financeiros passem a uma organização designada pelo Conselho. O endereço de atribuição fica no domínio do app e é **mantido enquanto possível**, com redirecionamento se algum dia mudar, porque está impresso em milhares de cópias do texto ([RFC-0005](rfcs/0005-nome-marca-e-url.md)). Um prazo em anos e a transferência do controle desse caminho a uma organização sucessora ficam para uma RFC futura.

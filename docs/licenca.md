# Licença

> Este documento explica a licença em linguagem simples. O que vale juridicamente é o texto da [CC BY 4.0](../LICENSE). Isto não é aconselhamento jurídico.

## Em uma frase

Os **textos, dados e a documentação** deste projeto estão sob [Creative Commons Atribuição 4.0 (CC BY 4.0)](../LICENSE): você pode usar como quiser, inclusive vender, desde que **cite a versão e linke para o projeto**. O **código** (site, ferramentas) está sob [MIT](../LICENSE-CODE).

## Em linguagem simples

**Você pode**, sem pedir permissão e sem pagar:

- ler, copiar, imprimir e distribuir o texto;
- usar em app, site, livro, estudo, curso, áudio, vídeo, apresentação;
- vender (impresso, digital ou dentro de um produto), cobrar por serviço ou por assinatura;
- adaptar, traduzir, formatar, anotar, converter para outros formatos.

**Você precisa**:

- dizer qual versão você usou (**versão + idioma**) e **qual texto exato**: a **release** (por exemplo, `1.2`) ou, no uso digital que acompanha o texto vivo, o **commit** ([veja por tipo de uso](#qual-versão-citar-por-tipo-de-uso));
- incluir o **link do projeto** e indicar a **licença** (CC BY 4.0, com link);
- **dizer que alterou**, se alterou o texto, e manter o registro de alterações anteriores.

**Não está incluído**:

- usar o nome e a marca "bibleme" para sugerir que o seu produto é oficial ou endossado pelo projeto (veja [Nome e versões modificadas](#nome-e-versões-modificadas));
- qualquer garantia: o texto é fornecido "como está".

## Como citar

A CC BY pede que os avisos que **acompanham o texto** continuem acompanhando: quem criou, a nota de direitos, a licença, o aviso de ausência de garantia e o link. Por isso colocamos esses avisos em cada arquivo do texto e em cada release. Você cumpre a exigência de qualquer jeito **razoável para o seu meio**: numa tela de créditos de um app, numa página de créditos de um livro, na descrição de um vídeo, ao lado de uma citação.

**Modelo curto** (para citações e telas apertadas):

```
[Versão] [idioma] [release] · CC BY 4.0 · https://www.bibleme.com.br/translations
```

**Modelo completo** (créditos, página "Sobre", livro):

```
Texto bíblico: [Versão] [idioma] [release]. © Contribuidores do projeto bibleme Traduções.
Licenciado sob CC BY 4.0 (https://creativecommons.org/licenses/by/4.0/).
Disponível em https://www.bibleme.com.br/translations. Texto fornecido "como está", sem garantias.
```

**Se você alterou o texto**, acrescente: `Texto adaptado por [seu nome]; alterações: [resumo].`

### Qual versão citar, por tipo de uso

A citação informa **qual texto exato** você usou ([RFC-0010](../rfcs/0010-citacao-por-tipo-de-uso.md), aceita em 2026-11-10). O texto tem duas vidas: `main` é o texto vivo e muda; uma **release** é uma versão congelada, com número, autores, soma de verificação e DOI ([RFC-0004](../rfcs/0004-processo-e-versoes.md)). O projeto oferece **as duas formas de acesso**, sempre.

| Uso | O que citar | Exemplo |
|---|---|---|
| **Mídia durável:** impresso, áudio ou vídeo gravado, produto físico, qualquer edição **vendida** | A **release** | `[Versão] pt-BR 1.2 · CC BY 4.0 · https://www.bibleme.com.br/translations` |
| **Digital que acompanha o projeto:** app, site, leitor, servidor, assistente de IA | Uma release **ou** o `latest`; no `latest`, o **commit** e a **data de acesso** | `[Versão] pt-BR · latest (main@a1b2c3d, acessado em 2027-03-01) · CC BY 4.0 · https://www.bibleme.com.br/translations` |
| **Texto de `main` (fora de release) em mídia durável** | O **commit**, sem usar o nome como versão oficial | `Baseado em [Versão] pt-BR, commit a1b2c3d (sem release)` |

Todo arquivo gerado e toda resposta da API trazem os campos `release` (ou `null`), `commit` e `generated_at`, para você copiar a versão sem adivinhar. Quem precisa do texto estável (planos de leitura, citações salvas) deve **fixar uma release**; quem quer o texto vivo usa o `latest`.

> **O endereço oficial de atribuição é `https://www.bibleme.com.br/translations`** ([RFC-0005](../rfcs/0005-nome-marca-e-url.md)). Ele vai ficar impresso e embutido em milhares de cópias, por isso o projeto o trata como infraestrutura permanente e o **mantém enquanto possível**, com redirecionamento se algum dia mudar.

## Nome e versões modificadas

A licença CC não concede direitos de marca e proíbe sugerir que alguém foi endossado pelo licenciante (CC BY 4.0, seções 2(b)(2) e 2(a)(6)). Em consequência:

- **"[Versão] [idioma]"** identifica o texto publicado nas releases do projeto, sem alterações.
- Você pode **distribuir o texto sem alterações** com esse nome.
- Se você **alterar** o texto, diga que alterou e **não o apresente como a versão oficial**. Uma fórmula que funciona: *"baseada na [Versão] [idioma], modificada por [você]"*. Você pode dar um nome próprio à sua adaptação.
- Usar "bibleme" como nome de empresa, produto ou domínio exige autorização, definida na RFC-0005.
- **Mídia durável** (impresso, áudio ou vídeo gravado, produto físico, edição vendida): o nome "[Versão]" **como versão oficial** só pode ser usado se o texto for uma **release inalterada**, citando o número dela. Imprimir ou vender texto de `main` é permitido pela licença; nesse caso cite o **commit** e **não** use o nome como versão oficial.
- **Pré-releases** (`0.x`, por exemplo textos ainda em quarentena) **não** autorizam o nome como versão oficial em mídia durável.
- Isto é uma política sobre o **nome**; a CC BY continua permitindo usar o texto. A redação final desta cláusula aguarda a revisão jurídica (veja o fim deste guia).

## Por que CC BY 4.0

| Licença | Uso comercial | Obriga citar | Obriga compartilhar igual | Observação |
|---|---|---|---|---|
| CC0 / domínio público | Sim | Não | Não | Máxima liberdade, mas sem a citação que o projeto quer |
| **CC BY 4.0** | **Sim** | **Sim** | **Não** | **Escolhida: livre para usar e vender, com crédito e link** |
| CC BY-SA 4.0 | Sim | Sim | Sim | Mantém as melhorias abertas, mas dificulta o uso em produtos com outras licenças |
| CC BY-NC 4.0 | Não | Sim | Não | Contraria o objetivo de uso livre, inclusive comercial |

**O preço da escolha:** com CC BY, alguém pode adaptar o texto e distribuir a adaptação sob termos fechados (mantendo a citação ao original). Aceitamos isso em troca de liberdade e de adoção ampla. A versão original continua livre para todos. Se a comunidade quiser compartilhamento obrigatório (BY-SA), é uma decisão que se toma **agora**, antes da primeira release, por RFC: depois fica difícil voltar atrás.

## Código, imagens, mapas e dados de terceiros

- Código: MIT.
- Imagens e mapas: cada arquivo tem a licença e a origem registradas; preferimos CC0, domínio público e CC BY. Material de terceiros entra pelo [registro de fontes](registro-de-fontes.md).
- Dados de terceiros incluídos (por exemplo, referências cruzadas) mantêm a licença e o crédito de origem.

## Autoria e contribuições

- A linha de direitos é: **© Contribuidores do projeto bibleme Traduções**.
- Cada pessoa mantém os direitos sobre a sua contribuição e a licencia sob CC BY 4.0 ao contribuir (veja a [declaração de originalidade](../CONTRIBUTING.md#declaração-de-originalidade)).
- O histórico do Git é o registro de autoria; cada release traz um arquivo `AUTHORS` gerado dele.

## Perguntas frequentes

**Posso vender uma edição impressa?** Sim, com o crédito. Para usar o nome "[Versão]" na edição, o texto precisa ser uma **release** inalterada, citada pelo número (se for texto de `main`, cite o commit e não use o nome como versão oficial).
**Posso usar num app pago ou com assinatura?** Sim, com o crédito.
**Posso colocar numa API e cobrar pelo acesso?** Sim. A licença permite. (Nós mesmos pensamos em fazê-lo, veja a [RFC-0007](../rfcs/0007-sustentabilidade.md).)
**Preciso pedir permissão?** Não.
**Posso traduzir para outro idioma?** Sim, é uma adaptação; cite a versão de origem.
**Posso usar o texto para treinar ou alimentar uma IA?** Sim, mantendo o crédito quando o texto for reproduzido ao usuário. As saídas em Markdown e o servidor MCP do projeto já trazem o aviso de atribuição ([RFC-0006](../rfcs/0006-distribuicao-ia-api-mcp.md)).
**Posso aplicar outra licença na minha adaptação?** Pode, desde que ela não impeça quem a recebe de cumprir a CC BY em relação ao nosso texto.

## Antes da primeira release

Recomendamos que um advogado de propriedade intelectual revise: esta licença, a política de [direitos autorais e referências](direitos-autorais-e-referencias.md), a declaração de originalidade, a política de marca e a cláusula do nome em mídia durável ([RFC-0010](../rfcs/0010-citacao-por-tipo-de-uso.md)).

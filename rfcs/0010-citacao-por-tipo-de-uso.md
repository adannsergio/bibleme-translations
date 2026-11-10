# RFC-0010: Como citar por tipo de uso: release para impressão e comércio, commit ou `latest` para uso digital

- **Estado:** Aceita (2026-11-10)
- **Autor(es):** Fundador (ideia); rascunho redigido com apoio de IA
- **Aberta em:** 2026-11-10
- **Decide:** Conselho (no início, o fundador)
- **Fim do prazo de comentários:** 2026-11-24 (14 dias)

## Resumo

Hoje a citação pede só "bibleme [Versão] [idioma]", sem dizer **qual** texto exato foi usado. Propomos que a citação identifique sempre a versão exata e que ela dependa do uso: **mídia durável** (impresso, áudio gravado, produto vendido) cita uma **release** e é a única que pode usar o nome "bibleme [Versão]" como versão oficial; **uso digital** pode citar uma release ou o `latest` (com o commit e a data). O projeto garante acesso às **duas formas**, sempre.

## Problema

- O texto tem duas vidas ([RFC-0004](0004-processo-e-versoes.md), §2): `main` é o texto vivo e muda; uma **release** é uma versão congelada e citável. A citação atual ([docs/licenca.md](../docs/licenca.md#como-citar)) não diferencia as duas.
- Uma edição **impressa** (ou um áudio gravado, ou um produto vendido) fixa o texto para sempre. Quem a lê no futuro precisa saber exatamente qual texto é aquele, e o projeto precisa poder responder "esta é a release 1.2, com este relatório de semelhança e estes autores". Um app ou site **digital** pode acompanhar o texto vivo e se atualizar.
- A licença **não pode** proibir ninguém de imprimir ou vender texto que não esteja numa release: a CC BY 4.0 concede o uso comercial, e uma exigência extra de "só imprima releases" seria uma restrição adicional que a própria licença não permite. O que o projeto controla é (a) o que a **atribuição** deve informar e (b) o uso do **nome**, porque a CC BY não licencia marca ([RFC-0005](0005-nome-marca-e-url.md), §2).

## Proposta

### 1. Duas formas de acesso, sempre

| Forma | O que é | Como se obtém |
|---|---|---|
| **Release** (congelada) | Uma tag Git, imutável, com os arquivos de todos os formatos, `SOURCES`, `AUTHORS`, registro de mudanças, relatório de semelhança, **soma de verificação (SHA-256)** e **DOI** (RFC-0004, §2) | Página de releases do repositório, API com `?release=1.2`, espelhos |
| **Latest** (viva) | O estado mais recente de `main` | Ramo `main`, alias `latest`, API sem `?release` ou com `?release=latest` |

Todo arquivo gerado (Markdown, JSON, SQLite, USFM) e toda resposta da API trazem, além da atribuição, os campos **`release`** (ou `null` se o texto não for de uma release), **`commit`** (hash curto) e **`generated_at`** (data). Assim, quem copia um texto sabe de onde ele veio sem precisar adivinhar.

### 2. O que citar, por tipo de uso

| Uso | O que citar | Exemplo |
|---|---|---|
| **Mídia durável:** impresso, áudio ou vídeo gravado, produto físico, e-book distribuído como arquivo fixo, qualquer edição **vendida** | A **release** | `bibleme [Versão] pt-BR 1.2 · CC BY 4.0 · https://www.bibleme.com.br/translations` |
| **Digital que acompanha o projeto:** app, site, leitor, servidor, assistente de IA | Uma release **ou** o `latest`; no `latest`, o **commit** e a **data de acesso** | `bibleme [Versão] pt-BR · latest (main@a1b2c3d, acessado em 2027-03-01) · CC BY 4.0 · https://www.bibleme.com.br/translations` |
| **Texto de `main` (fora de release) em mídia durável** | O **commit**, sem usar o nome como versão oficial | `Baseado em bibleme [Versão] pt-BR, commit a1b2c3d (sem release)` |
| **Texto alterado** | Como já diz o guia da licença: dizer que alterou e **não** apresentar como versão oficial | `Baseada na bibleme [Versão] pt-BR 1.2, modificada por [você]` |

Os avisos que acompanham o texto (autoria, direitos, licença, ausência de garantia e link) continuam como na [licença](../docs/licenca.md#como-citar).

### 3. O que é exigido e o que é só pedido

- **Exigido pela licença:** a atribuição, que passa a **informar a versão exata** (release ou commit) em qualquer meio razoável para o uso.
- **Condição para usar o nome** (política do nome, RFC-0005): em **mídia durável**, o nome "bibleme [Versão]" **como versão oficial** só pode ser usado se o texto for uma **release inalterada** e a citação trouxer o número dela. Isto **não impede** ninguém de imprimir ou vender texto de `main`: apenas não pode chamá-lo de versão oficial e deve citar o commit.
- **Pedido (não exigido):** que apps digitais fixem uma release quando o texto precisa ser estável (por exemplo, planos de leitura e citações salvas) e usem `latest` quando quiserem o texto vivo.
- **Limite:** isto é norma e política de nome, não bloqueio técnico; o projeto não tem como fiscalizar. A redação final da cláusula do nome precisa de **confirmação de advogado**, que já está prevista antes da primeira release.

### 4. Releases, rascunhos e quarentena

- Uma **release estável** (`1.0` em diante) só existe depois do que a [RFC-0004](0004-processo-e-versoes.md) pede: revisão por pessoas, verificação de semelhança e relatório público.
- Textos ainda em quarentena (por exemplo, rascunhos de IA sem revisão humana) só podem ter **pré-releases** (`0.x`), marcadas como tal. Uma pré-release **não** autoriza o uso do nome como versão oficial em mídia durável.
- O que for publicado sem release (como um leitor de rascunho) deve mostrar a **versão e o commit** na própria página.

### 5. Proteções técnicas

- Proteger `main` e as **tags de release**: sem *force-push* e sem apagar tags. Depois da primeira release **não se reescreve o histórico**, porque citações por commit, DOIs e somas de verificação dependem dele.
- A publicação de uma release é feita por **CI** a partir de uma tag: gera os formatos, as somas de verificação, o relatório de semelhança e dispara o DOI.
- A formação do nome da tag e o número seguem a RFC-0004 (`MAJOR.MINOR`) e a RFC-0006 (`bibleme-[versao]-pt-BR`, campo `release`). Sugestão de tag: `bibleme-[versao]-[idioma]-MAJOR.MINOR` (por exemplo, `bibleme-xyz-pt-BR-1.2`).

## Alternativas consideradas

| Alternativa | Por que não |
|---|---|
| **Exigir release para qualquer uso** | Trava apps e leitores que querem o texto vivo; e, para texto sob CC BY, seria restrição adicional |
| **Citar sempre só o commit** | Serve ao digital, mas não dá à gráfica e ao leitor um rótulo humano estável, com DOI, autores e relatório de semelhança |
| **Citar só a data** ("versão de 2027-03-01") | Ótimo como complemento, ambíguo sem o commit |
| **Licença não livre com cláusula de release** | Contradiz o objetivo de licença livre do projeto ([RFC-0001](0001-textos-base.md) e [guia da licença](../docs/licenca.md)) |
| **Não diferenciar** (como hoje) | Impressões e produtos vendidos ficam sem versão rastreável |

## O que muda para quem

- **Tradutores e revisores:** nada no dia a dia; passam a existir marcos de release com critérios (RFC-0004).
- **Usuários do texto (gráficas, editoras, apps, IA):** o modelo de citação ganha o campo da versão. Quem imprime usa uma release; quem faz digital pode ficar no `latest` citando o commit.
- **O app bibleme e outros apps:** podem escolher entre fixar uma release e seguir o `latest`, e a API suporta os dois (RFC-0006).
- **Custos:** CI de release e DOI (RFC-0004 e RFC-0006); revisão jurídica da cláusula do nome.
- **Se for aceita**, mudam: [docs/licenca.md](../docs/licenca.md) (seção "Como citar" e "Nome e versões modificadas"), a seção de licença da página inicial, a RFC-0006 (campos `release` e `commit` nos formatos) e a política do nome da RFC-0005.

## Questões em aberto

1. **Cláusula do nome:** a redação exata, e a confirmação jurídica. Quem é dono do nome é a questão 1 da RFC-0005.
2. **Pré-releases em uso digital:** podem ser citadas como "bibleme [Versão] 0.x"? (Proposta: sim, sempre marcadas como pré-release.)
3. **Versões antigas:** por quanto tempo uma release `MAJOR` anterior recebe correções (RFC-0004, questão 5)?
4. **Impressões de `main` que circulem:** o projeto apenas orienta, ou pede a retirada do nome? (Proposta: orienta e pede a correção da citação.)
5. **Livros e blocos:** a release é por bloco (RFC-0004, "cadência por blocos"). Uma edição impressa que reúna blocos de releases diferentes cita cada um?

## Decisão

**Aceita pelo fundador (Conselho) em 2026-11-10**, a pedido dele, **antes do fim do prazo de comentários** (2026-11-24). Foi aplicada no mesmo dia em: [docs/licenca.md](../docs/licenca.md) ("Você precisa", "Como citar", "Nome e versões modificadas", perguntas frequentes e lista de revisão jurídica), RFC-0004 (§2), RFC-0005 (§2), RFC-0006 (campos `release`, `commit` e `generated_at`), página inicial (pt e en), leitor e página "Sobre".

Os comentários continuam abertos até 2026-11-24 e podem levar a ajustes, por emenda a esta RFC ou por outra RFC. **Pendências:** (a) confirmação de advogado da cláusula do nome (§3); (b) as questões em aberto acima; (c) acrescentar `release` e `commit` ao exemplo de cabeçalho USFM da [RFC-0003](0003-formato-e-camadas.md) (arquivo ainda em edição pelo fundador).

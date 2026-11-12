# RFC-0005: Nome, marca e endereço de atribuição

- **Estado:** Proposta
- **Autor(es):** Fundador (rascunho redigido com apoio de IA)
- **Aberta em:** 2026-10-23
- **Decide:** Conselho (no início, o fundador)
- **Fim do prazo de comentários:** 14 dias depois da publicação do repositório

## Resumo

Define como as versões se chamam (**versão + idioma**, sem o nome "bibleme" grudado na citação — atualizado em 2026-11-12, decisão do fundador), quem é dono do nome e **qual endereço da internet fica impresso em todas as cópias do texto**. Esta última escolha é a mais difícil de desfazer: o link de atribuição vai ficar em apps, livros e sites que ninguém mais controla.

## Problema

- A licença CC BY pede o link do projeto. Se ele mudar de dono, de nome ou sair do ar, milhares de cópias apontam para o vazio.
- A CC BY não licencia marca. Sem política, qualquer um pode publicar uma versão modificada com o nome "bibleme" e confundir leitores.
- O nome "bibleme" pertence hoje ao app do fundador. Para um projeto com governança independente, o dono da marca precisa estar claro.

## Proposta

### 1. Padrão de nome

**versão + idioma**, por exemplo `[Versão] pt-BR` — sem "bibleme" grudado: o nome da versão, sozinho, mais o idioma e, quando for o caso, a release (número ou codinome) identificam o texto com exatidão. "bibleme" continua sendo o nome do projeto; só não entra na citação do texto em si.

- **Versão:** um nome curto, fácil de falar, sem conotação confessional, escolhido por RFC. Uma mesma *família* de versão pode existir em vários idiomas.
- **Idioma:** código BCP 47 (`pt-BR`, `en`, `es`).
- **Sigla** de 3 a 6 letras por versão, registrada em `data/canon/versoes.json`, para citações e apps. Não pode colidir com siglas conhecidas (ARA, NVI, KJV, ESV...).
- Se houver duas versões no mesmo idioma (literal e simples, [RFC-0002](0002-filosofia-de-traducao.md)), cada uma tem o seu nome.

### 2. Uso do nome

| Uso | Regra |
|---|---|
| Citar o texto sem alterações: "[Versão] pt-BR" | Livre, com os avisos de atribuição |
| Modificar o texto | Diga que modificou; **não use o nome como se fosse a versão oficial** ([política](../docs/licenca.md#nome-e-versões-modificadas)) |
| Mídia durável (impresso, gravação, produto vendido) com o nome "[Versão]" | Só com uma **release inalterada**, citando o número ([RFC-0010](0010-citacao-por-tipo-de-uso.md)) |
| Texto de `main` (fora de release) em mídia durável | Cite o **commit**; **não use o nome como versão oficial** (RFC-0010) |
| Nome de empresa, produto, app, domínio ou conta de rede social | Exige autorização |
| Sugerir endosso ou parceria oficial | Proibido (a própria CC BY, seção 2(a)(6), proíbe) |

### 3. Quem é dono do nome

Hoje a marca "bibleme" é do app do fundador. Opções:

| Opção | Efeito |
|---|---|
| **A.** O fundador (ou sua empresa) registra e **licencia o nome ao projeto** por escrito, de forma irrevogável para uso nas traduções | Simples e rápido; depende de confiança |
| **B.** Registra-se uma **marca específica** do projeto, depois transferida a uma associação ou fundação | Mais limpo, custa mais |
| **C.** O projeto adota um **nome próprio, independente do app** | Máxima independência editorial; perde-se a ligação com o app |

Proposta: **A agora**, com compromisso de ir para **B** quando houver organização para recebê-la. Em qualquer opção, o registro (INPI, no Brasil) e a política de uso são revisados por advogado.

### 4. Endereço de atribuição

**Proposta do fundador: `https://www.bibleme.com.br/translations`** (grafia confirmada por ele em 23/out/2026: em inglês, no plural e com `www`). O fundador também quer que, no futuro, esse endereço abrigue uma **interface de leitura** em que se compara o texto com o original ou com outra versão e se **propõem melhorias** ([RFC-0008](0008-recursos-de-estudo.md#6-interface-de-leitura-e-sugestão-de-melhorias)).

| | A favor | Contra |
|---|---|---|
| **Caminho no domínio do app** (proposta) | Já existe, já é conhecido, não custa nada; o app é o lugar natural da interface de leitura; um endereço só para tudo | O domínio pertence ao app (empresa do fundador): enfraquece a independência percebida do projeto |
| Subdomínio de um domínio do projeto | Mais independente | Exige um domínio novo, e ele precisa de dono estável |
| GitHub Pages direto | Zero custo | Atrelado a uma conta ou organização; frágil |

**Como se reduz o contra do caminho no app:**

- **O conteúdo do endereço vem deste repositório**, e não do app: a página, o texto da licença e as páginas de cada release são geradas aqui e apenas **servidas** pelo app. Assim o projeto, e não o produto, define o que está lá.
- Cada release tem **endereço permanente**: `https://www.bibleme.com.br/translations/<versão>/<release>`, com a licença também em formato legível por máquina.
- **Persistência, sem prazo escrito por ora** (decisão do fundador em 23/out/2026): o endereço de atribuição e os das releases são tratados como **infraestrutura permanente** e **mantidos enquanto possível**. Se algum dia precisarem mudar, o caminho antigo **continua redirecionando** e a mudança é anunciada com antecedência. Um prazo em anos e a transferência do controle do caminho a uma organização sucessora ficam para uma RFC futura, quando houver uma organização para recebê-los ([Governança](../GOVERNANCE.md#continuidade)).
- **Plano B já pronto:** o site é estático e funciona em qualquer lugar. O GitHub Pages deste repositório serve de **prévia e de espelho**, e o endereço oficial pode migrar para um domínio da organização sem mexer em nenhum texto já distribuído, **desde que o caminho antigo continue redirecionando**.

**O que o app precisa fazer (a decidir quando for implementar; nada foi implementado):**

1. Servir `/translations/` como **página aberta** (fora do portão de convite, para o link de atribuição funcionar para qualquer pessoa, e indexável pelos buscadores).
2. Redirecionar `/translations` para `/translations/` (o site usa caminhos relativos).
3. Importar a pasta `site/` e os dados das releases deste repositório **na hora do build**, sem copiar conteúdo à mão.
4. Mais adiante, evoluir o mesmo endereço para a interface de leitura.

### 5. Nome do projeto no GitHub

`bibleme-translations` é o nome de trabalho. Quando existir uma organização (por exemplo, no GitHub), o repositório muda para lá; o endereço de atribuição não muda.

## Alternativas consideradas

- **Atribuição só com o nome, sem link:** a CC BY pede o link quando razoável, e o link é o que traz gente para o projeto.
- **Usar a URL do GitHub:** frágil. Troca de dono, de nome, de plataforma.
- **Domínio novo só do projeto:** mais independente, e custa pouco. É uma opção a considerar junto com a marca (C).

## O que muda para quem

- **Quem usa o texto:** tem um modelo de atribuição claro e estável.
- **Contribuidores:** sabem que o nome do projeto não depende da vontade de uma pessoa.
- **O app bibleme:** cita as traduções como qualquer outro usuário.

## Questões em aberto

1. Opção A, B ou C para o dono do nome?
2. **Grafia resolvida pelo fundador em 23/out/2026:** o endereço de atribuição é `https://www.bibleme.com.br/translations`. Falta a comunidade comentar as **salvaguardas de independência** da seção 4 e dizer se, e quando, o projeto deve prometer um **prazo em anos** e a **transferência do caminho** a uma organização. O ideal é decidir isso antes da primeira release, porque o endereço vai estar impresso em todas as cópias.
3. Como se escolhe o nome da *versão*? (Proposta: RFC por idioma, com sugestões da comunidade e checagem de colisão.)
4. O logotipo do projeto: criar um próprio?

## Decisão

*(a preencher)*

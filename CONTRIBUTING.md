# Como contribuir

Obrigado por querer ajudar. Este projeto só funciona com muita gente olhando para o mesmo texto com atenção.

## Você não precisa saber Git

| Quero... | Faça isto |
|---|---|
| Dar opinião numa decisão aberta | Comente nas Issues ou Discussions da [RFC](rfcs/) correspondente |
| Sugerir mudança em um versículo | Abra a Issue **Sugestão de tradução** |
| Sugerir nota, introdução, título de seção ou mapa | Abra a Issue **Nota, introdução ou perícope** |
| Propor uma regra nova ou mudar uma | Abra a Issue **Proposta (RFC)** |
| Começar um idioma | Abra a Issue **Novo idioma** |
| Avisar de erro (digitação, link, formato) | Abra a Issue **Erro** |
| Escrever direto no repositório | Faça um fork e abra um Pull Request (veja abaixo) |

Perguntas e conversas abertas ficam nas **Discussions**.

## Primeiras contribuições

- Traduzir a página do projeto para um idioma novo (a pasta [`site/`](site/) tem um modelo).
- Ler uma [RFC](rfcs/) e apontar o que está confuso, errado ou faltando.
- Conferir a licença de uma fonte em [`docs/registro-de-fontes.md`](docs/registro-de-fontes.md) lendo o texto da licença na página oficial.
- Se você lê hebraico ou grego: dizer o que acha de cada [RFC-0001](rfcs/0001-textos-base.md) e [RFC-0002](rfcs/0002-filosofia-de-traducao.md).

## Declaração de originalidade

Toda contribuição de texto (tradução, nota, introdução, título de seção) vem com esta declaração, que o modelo de Issue e de PR já traz:

> 1. Sou autor(a) desta contribuição ou tenho direito de licenciá-la.
> 2. Fiz a partir dos textos originais e das fontes do [registro de fontes](docs/registro-de-fontes.md). **Não copiei nem parafraseei de perto** nenhuma tradução, nota, título ou obra que tenha direitos autorais (por exemplo, Bíblia de Jerusalém, NVI, ARA).
> 3. Concordo em licenciá-la sob [CC BY 4.0](LICENSE) (texto, dados e documentação) ou [MIT](LICENSE-CODE) (código).

O GitHub já trata contribuições a um repositório com licença como licenciadas sob essa licença ([Termos de Serviço, seção D.6](https://docs.github.com/pt/site-policy/github-terms/github-terms-of-service#6-contributions-under-repository-license)). A declaração acima torna isso explícito e acrescenta o compromisso de originalidade, que é o mais importante. Veja o protocolo completo em [Direitos autorais e referências](docs/direitos-autorais-e-referencias.md).

## Antes de traduzir ou sugerir texto

1. Leia a [filosofia de tradução](rfcs/0002-filosofia-de-traducao.md) e o [guia de estilo do seu idioma](docs/guias-de-estilo/README.md) (mesmo em rascunho, eles orientam as escolhas).
2. Trabalhe a partir do **texto original** ([RFC-0001](rfcs/0001-textos-base.md)).
3. **Escreva sua versão antes de consultar** outras traduções. Depois pode compará-las para achar erros, mas não adote soluções peculiares delas.
4. Escreva a **justificativa** da escolha quando ela não for óbvia (palavra do original, número de Strong, gramática, contexto).
5. Não cole trechos de traduções com direitos autorais em Issues, PRs, comentários nem notas, nem "só para mostrar".

## Pull Requests

- Um PR, um assunto (um capítulo, uma nota, uma correção).
- Mensagens de commit curtas, no imperativo, em português ou inglês: `Rute 1: revisa vv. 16-17`.
- Texto vai nos arquivos de `texts/` no formato definido na [RFC-0003](rfcs/0003-formato-e-camadas.md). Arquivos de `dist/` (Markdown, JSON) são **gerados** e nunca editados à mão.
- Siga o [modelo de PR](.github/pull_request_template.md).
- Uma revisão pode pedir que você reescreva trechos que se pareçam demais com uma tradução protegida. Isso não é acusação: é o processo funcionando.

## Estrutura do repositório

```
texts/                        (a criar) <idioma>/<versão>/<LIVRO>.usfm — o texto, escrito uma vez
data/                         (a criar) dados neutros de idioma (relacionados, léxicos)
rfcs/                         propostas abertas para discussão (veja rfcs/README.md para o estado de cada uma)
docs/                         licença, direitos autorais, registro de fontes, guias de estilo
site/                         landing page (GitHub Pages)
.github/                      modelos de Issue e de PR, publicação do site
```

## Idiomas das conversas

Português e inglês. Quem quiser conduzir uma conversa em outro idioma, fique à vontade, desde que alguém possa resumir nas duas línguas.

## Convivência

Siga o [Código de Conduta](CODE_OF_CONDUCT.md). Discordar de uma escolha de tradução é parte do trabalho. Atacar pessoas ou tradições não é.

# RFC-0007: Sustentabilidade: API paga a preço de custo e doações

- **Estado:** Proposta
- **Autor(es):** Fundador (rascunho redigido com apoio de IA)
- **Aberta em:** 2026-10-23
- **Decide:** Conselho (no início, o fundador)
- **Fim do prazo de comentários:** 14 dias depois da publicação do repositório

## Resumo

O texto é e continuará **livre e baixável**. Manter o projeto de pé tem custo: hospedagem, revisão qualificada, mapas e ilustrações, orientação jurídica. Propõe-se financiá-lo de duas formas **que não fecham o texto**: (1) uma **API de leitura hospedada pelo bibleme, cobrada a preço de custo mais uma margem de sustentação publicada**, e (2) **doações**. O dinheiro fica separado do app, é publicado e **nunca compra influência editorial**.

## Problema

- Um projeto de alta qualidade precisa de dinheiro além da boa vontade: revisores experientes, ilustradores e cartógrafos, advogado de propriedade intelectual, infraestrutura.
- A CC BY permite que qualquer um cobre pelo texto ou por serviços sobre ele. Se o projeto não tiver uma oferta própria e transparente, outros capturarão esse valor sem devolver nada.
- Misturar o dinheiro do projeto com o do app (que tem planos pagos) cria desconfiança e conflito de interesse.

## Proposta

### 1. Princípios

1. **O texto nunca é vendido nem trancado.** O que se cobra é **serviço** (disponibilidade, busca, volume, suporte), não acesso ao texto.
2. **Isonomia:** todos os usuários da API, **inclusive o app bibleme**, pagam e recebem nas mesmas condições públicas. Sem acesso antecipado, sem versão especial, sem preço especial.
3. **Preço de custo mais margem declarada:** o preço é o custo medido de operar o serviço somado a uma **margem de sustentação** publicada e revista uma vez por ano por RFC.
4. **Transparência:** custos reais, receitas e uso do dinheiro são **publicados** (resumo trimestral).
5. **Dinheiro do projeto separado do do app**, com registro próprio.
6. **Ninguém compra influência editorial.** Doadores e patrocinadores podem ser citados; não decidem texto.

### 2. API paga (camadas de oferta)

| Faixa | Para quem | O que oferece |
|---|---|---|
| **Aberta** | Hobby, igrejas, ONGs, estudantes, pesquisa, projetos pequenos | Arquivos estáticos por CDN, sem chave, com limite justo de uso |
| **Padrão** | Apps e sites com tráfego real | Chave de API, limites maiores, busca, MCP remoto, suporte básico. **Custo mais margem** |
| **Escala** | Plataformas grandes | SLA, volume alto, webhooks de nova release, suporte direto. Sob contrato, mesma regra de preço |

- Por ser, em grande parte, **texto estático servido por CDN**, o custo por requisição é baixo. O valor da camada paga está em **busca, garantias de disponibilidade e suporte**, não em esconder o texto.
- **Não removemos a faixa aberta para uso não comercial** sem RFC e com pelo menos 90 dias de aviso. Mudanças de preço são anunciadas com **90 dias** de antecedência.
- O **código da API é MIT**: quem preferir, hospeda a sua. Isso mantém o preço honesto.

### 3. Doações

- Formas candidatas: **Pix**, patrocínio no GitHub, e um **anfitrião fiscal** para dar transparência e recibos (a avaliar). O app bibleme já tem uma página de apoio com Pix; ela pode **apontar** para as doações do projeto, que vão **direto ao fundo do projeto**, não à receita do app.
- **Patrocínio de empresas e organizações:** pode haver menção de marca; sem influência no texto.
- **Sem promessas de benefício editorial** ou acesso antecipado em troca de doação.

### 4. Para que o dinheiro serve (ordem proposta)

1. Infraestrutura (hospedagem, domínio, CDN, API).
2. **Revisão remunerada** de livros-chave por especialistas em originais.
3. **Mapas, ilustrações e áudio** encomendados já sob licença livre.
4. **Orientação jurídica** (licença, marca, verificação de semelhança).
5. **Apoio a equipes de idiomas** com poucos recursos.
6. Eventos e formação de revisores.

Cada categoria tem um limite de gasto e é reportada.

### 5. Governança do dinheiro

- Registro de entradas e saídas **público** (resumo trimestral; detalhe a pedido).
- Quem opera a API (hoje, o fundador ou a empresa dele) **declara o conflito de interesse**, apresenta os custos e passa por **auditoria da comunidade** (qualquer pessoa pode conferir o relatório de custos).
- Enquanto não houver pessoa jurídica própria, a arrecadação é feita por quem opera, com contabilidade separada. Receber e gastar dinheiro tem implicações **fiscais**: o projeto precisa de **orientação de contador e de advogado** antes da primeira cobrança. A criação de uma **associação sem fins lucrativos ou fundação** é o caminho natural quando houver volume.
- **Superávit** da API vai para o fundo do projeto.

### 6. O que isso não é

- Não é um paywall sobre o texto, os formatos ou as camadas de dados.
- Não é uma vitrine para produtos do app. As ofertas pagas do app (como a Nuvem) **não se misturam** com o fundo do projeto.

## Alternativas consideradas

- **Só doações:** frágil e imprevisível.
- **API gratuita sem limite:** insustentável quando houver tráfego.
- **Patrocínio forte de uma única empresa:** risco de captura editorial.
- **Texto só pago:** contradiz a razão de existir do projeto.

## O que muda para quem

- **Quem consome a API:** sabe quanto custa e por quê. Pode sair e hospedar por conta própria.
- **Doadores:** sabem para onde vai o dinheiro.
- **Mantenedores:** assumem a obrigação de prestar contas.

## Questões em aberto

1. **Qual margem** de sustentação? (Proposta: um percentual sobre o custo, revisado anualmente; o número vem da primeira medição real de custos, não de palpite.)
2. Qual **veículo** para receber o dinheiro no início: CPF, MEI, CNPJ ou um anfitrião fiscal?
3. Quando e como virar **associação ou fundação**?
4. **Limites da faixa aberta:** o que é "justo" por IP e por chave?
5. O app bibleme deve apontar para as doações do projeto? Onde e com que linguagem?
6. O dinheiro **remunera revisores**? Em que condições e com que critério de seleção?

## Decisão

*(a preencher)*

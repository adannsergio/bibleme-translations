# RFCs: propostas abertas

Uma **RFC** (pedido de comentários) é uma proposta escrita para uma decisão que vale para o projeto todo: licença, fontes, filosofia de tradução, formato, processo, nome. É assim que o projeto muda, em público e com história.

## Estado das RFCs

| # | Título | Estado | Decidir antes de... |
|---|---|---|---|
| [0001](0001-textos-base.md) | Textos de partida e escopo do cânon | Proposta | **traduzir** |
| [0002](0002-filosofia-de-traducao.md) | Filosofia de tradução | Proposta | **traduzir** |
| [0003](0003-formato-e-camadas.md) | Formato do texto e camadas de dados | Proposta | **traduzir** |
| [0004](0004-processo-e-versoes.md) | Processo de revisão, versões e uso de IA | Proposta | **traduzir** |
| [0005](0005-nome-marca-e-url.md) | Nome, marca e endereço de atribuição | Proposta | a **primeira release** |
| [0006](0006-distribuicao-ia-api-mcp.md) | Distribuição: Markdown para IA, JSON, API e MCP | Proposta | a **primeira release** |
| [0007](0007-sustentabilidade.md) | Sustentabilidade: API paga a preço de custo e doações | Proposta | a **primeira cobrança** |
| [0008](0008-recursos-de-estudo.md) | Recursos de estudo que a comunidade pode construir | Proposta | pode esperar |
| [0009](0009-estrutura-de-dados-lexicos-e-dicionarios.md) | Estrutura de dados para Strong, relacionados, léxicos e dicionários | Proposta | a **primeira release** |
| [0010](0010-citacao-por-tipo-de-uso.md) | Como citar por tipo de uso: release para impressão e comércio, commit ou `latest` para uso digital | Proposta | a **primeira release** |

**Por onde começar a ler:** 0001 e 0002 (o que traduzimos e como), depois 0003 e 0004. As demais podem esperar.

Todas começam como **Proposta**, redigidas pelo fundador, com apoio de IA, como ponto de partida. Nenhuma está decidida.

## Como uma RFC anda

1. **Proposta**: alguém abre a Issue "Proposta (RFC)" ou um PR com um arquivo novo copiado de [`0000-template.md`](0000-template.md).
2. **Em comentários**: no mínimo **14 dias** de discussão pública. O autor atualiza o texto conforme a conversa e registra as objeções.
3. **Decisão**: sem objeção fundamentada, a RFC é **aceita**. Com objeção, busca-se acordo; sem acordo, decide o Conselho (no início, o fundador) e **justifica por escrito** na própria RFC.
4. **Aceita**: vira regra e é referenciada em [CONTRIBUTING](../CONTRIBUTING.md), [docs/](../docs/) ou nos arquivos que ela afeta. **Rejeitada** ou **substituída**: fica no histórico com o motivo.

Uma RFC aceita também pode ser mudada por outra RFC. Nada aqui é para sempre, exceto a licença já concedida para versões já publicadas.

## Dicas para escrever

- Comece pelo **problema**, não pela solução.
- Mostre as **alternativas** e por que não foram escolhidas.
- Diga o que muda para **tradutores, revisores, usuários do texto e o app**.
- Seja específico sobre o que ainda está **em aberto**.

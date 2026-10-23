# Direitos autorais e referências

> Esta é a política mais importante do projeto, e **não é aconselhamento jurídico**. Antes da primeira release, um advogado de propriedade intelectual deve revisá-la.

## Por que isso importa

Uma tradução é uma obra protegida (no Brasil, a Lei de Direitos Autorais protege traduções como criações novas, art. 7º, XI). A Bíblia de Jerusalém, a NVI, a ARA e a maioria das traduções modernas têm detentores de direitos. O mesmo vale para as **notas**, os **títulos de seção**, as **introduções**, os **mapas** e as **listas de referências cruzadas** dessas edições: são criações próprias.

Os textos originais antigos (hebraico, aramaico, grego) são de domínio público. Já as **edições críticas modernas** (por exemplo, certas edições de Nestlé-Aland, UBS, BHS, Göttingen) podem ter direitos sobre a seleção e o aparato. Por isso o projeto trabalha com edições de licença livre ([RFC-0001](../rfcs/0001-textos-base.md)).

Duas traduções independentes do mesmo versículo podem sair muito parecidas, porque o original impõe o sentido e a língua oferece poucas formas naturais. Isso é normal. O problema é a **cópia**: reaproveitar escolhas peculiares, estruturas de frase, notas ou títulos de uma tradução protegida.

## A regra

1. **Traduzimos dos textos originais**, não de outra tradução.
2. Traduções consagradas (a Bíblia de Jerusalém, a NVI na primeira edição brasileira e a ARA são as que o projeto cita como referência de qualidade) servem de **ponto de comparação**: para ver se erramos, para medir clareza e fidelidade, para aprender com as soluções de quem veio antes. **Nunca servem de fonte de texto.**
3. **Nada delas entra no repositório**: nem versículos, nem notas, nem títulos de seção, nem introduções, nem listas de referências, nem mapas, nem paráfrases próximas, nem em Issues, PRs ou comentários.

## Três categorias de material

| Categoria | O que é | O que podemos fazer |
|---|---|---|
| **Livre** | Domínio público ou licença compatível com CC BY 4.0 (CC0, CC BY), conferida e registrada | Usar como fonte e incluir, com a atribuição exigida |
| **Livre com condição** | Licença que impõe algo a mais (por exemplo, BY-SA, que obrigaria o projeto a compartilhar igual) | **Só consulta**, até que uma RFC aceite a condição |
| **Protegida** | Com direitos reservados (as três referências acima e a maioria das edições modernas) | **Só consulta**, nunca copiar nem parafrasear de perto |

Toda fonte livre usada entra no [registro de fontes](registro-de-fontes.md), com a licença conferida **na página oficial** (não em resumo de terceiros), a data e quem conferiu. Sem registro, não entra.

## Protocolo do tradutor

1. **Leia o original** e escreva o seu rascunho, com as suas palavras, **antes de abrir outras traduções**.
2. Anote a **justificativa filológica** quando a escolha não for óbvia (palavra do original, número de Strong, sintaxe, contexto).
3. **Depois**, compare com traduções de referência para encontrar erros e pontos cegos.
4. Se a sua versão coincide com uma referência porque essa é a forma natural de dizer, ótimo. Se você notou que **adotaria uma solução peculiar** dela (uma palavra rara, uma ordem incomum, um torneio de frase), **reformule a partir do original**.
5. Marque a declaração de originalidade no PR.

Boas práticas que reduzem o risco:

- trabalhe com um glossário próprio de termos-chave, ligado aos números de Strong ([RFC-0002](../rfcs/0002-filosofia-de-traducao.md));
- decida a estrutura de frases e a pontuação pelas regras de estilo do projeto, não por uma tradução específica;
- escreva títulos de seção e notas sem olhar os de outras edições.

## Verificação de semelhança

Os mantenedores podem rodar, **na própria máquina**, uma comparação de n-gramas entre o texto proposto e cópias locais de traduções protegidas. Resultado alto leva a um pedido de reescrita, com a conversa registrada. As cópias locais ficam fora do Git (a pasta `referencias-locais/` está no `.gitignore`) e **nunca** vão para o repositório. Uma ferramenta que faça essa comparação por impressões digitais (hashes de n-gramas), sem guardar o texto protegido, é uma ideia a avaliar com orientação jurídica.

**Defina a métrica e a linha de base antes de medir.** Um número solto de semelhança não prova nem refuta nada: duas traduções independentes do mesmo texto já se parecem bastante, porque o original impõe o sentido. Numa amostra informal de 147 versículos, duas traduções inglesas tradicionais (KJV e Douay-Rheims) tiveram semelhança média de palavras de 0,75. Por isso o projeto, a cada release, **publica um relatório de semelhança** com: a métrica usada, a linha de base (pares de traduções independentes) e os versículos acima do limite, que passam por revisão. Outro projeto aberto publicou uma tabela de semelhança sem explicar a métrica ([projetos relacionados](projetos-relacionados.md)): é o que queremos evitar.

## Atalhos legítimos

Há traduções e bases abertas em que podemos nos apoiar sem risco, desde que a licença seja conferida: textos em domínio público e traduções sob CC BY (por exemplo, a Berean Standard Bible em inglês e a Bíblia Livre em português, que entram como **bases a revisar** contra os originais). A escolha entre **partir do zero** e **revisar uma base aberta** é decisão de cada idioma, discutida na [RFC-0004](../rfcs/0004-processo-e-versoes.md).

## Se alguém reclamar

Se um detentor de direitos apontar semelhança indevida, o projeto: (1) retira o trecho em questão do ramo principal e das próximas releases; (2) registra o caso publicamente, sem expor a pessoa que contribuiu; (3) revisa o processo para que não se repita. A licença CC BY é irrevogável para quem já recebeu cópias; por isso a prevenção, aqui, vale mais que a correção.

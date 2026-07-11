# M1 · IA na Fábrica e no Escritório: o que já está mudando

**Trilha 1 · Módulo 1 de 6 · 1h**

Você entende o que a IA generativa faz bem, o que não faz — sem jargão e sem hype.

---

## O contrato deste módulo

**Você ganha:** um mapa claro do que a IA faz bem, do que ela não faz, e os 3 modos de usar — com exemplo de fábrica em cada um.

**Você se compromete a:** listar 5 tarefas repetitivas da sua semana e marcar 2 onde a IA poderia entrar. Papel e caneta bastam.

**Tempo de leitura desta página:** 9 min

---

## Você entra com → O que acontece → Você sai com

| Você entra com | O que acontece | Você sai com |
|---|---|---|
| Sua rotina de sempre — e talvez uma desconfiança justa sobre "essa história de IA" | Você vê o que a IA faz de verdade, sem hype, com exemplos do seu turno: relatório, OS, comunicado | Os 3 modos de uso (copiloto, automação, agente) e 2 tarefas suas marcadas onde a IA pode entrar |

---

## Por que isso importa aqui dentro

A linha 3 parou 40 minutos ontem. Você resolveu o problema em 10 — os outros 30 foram para registrar, avisar o próximo turno e explicar para o PCP. É nessa segunda parte, a do papel, que a IA entra. A primeira continua sua.

A Anthropic (fabricante do Claude) publica uma análise contínua sobre uso de IA no trabalho — o Anthropic Economic Index, com dados de milhões de conversas reais. O padrão que aparece é claro: as pessoas usam IA principalmente para escrever, resumir e organizar informação — não para operar máquina nem para decidir por ninguém. É exatamente o tipo de tarefa que consome a manhã de um supervisor na Mallory.

E tem um detalhe que joga a seu favor: a IA sem contexto produz resposta genérica. Quem dá o contexto é você — 11, 15, 20 anos de casa. Neste módulo você vai entender por que essa combinação funciona.

---

## O conceito em 5 pontos

### 1. IA generativa é uma máquina de completar texto — muito bem treinada

Ela leu uma quantidade absurda de texto e aprendeu a prever o que vem depois. Não pensa, não sente, não conhece a Mallory. Mas escreve, resume e organiza em segundos o que levaria uma hora sua.

### 2. Ela faz bem o que é texto; faz mal o que é fato que ela não recebeu

Faz bem: rascunhar comunicado, resumir instrução de trabalho, organizar anotação bagunçada. Faz mal: dizer o parâmetro exato do molde X, lembrar o histórico da injetora 5, dar número que você não forneceu. A regra: o que você entrega, ela trabalha; o que você não entrega, ela pode inventar.

### 3. Os 3 modos de uso — e onde cada um aparece na fábrica

**Copiloto:** te ajuda a pensar e escrever — o Programador de Produção rascunha com ela o comunicado da mudança de sequência da linha por causa do gargalo no molde, e revisa. **Automação:** tarefa repetitiva feita sozinha, sempre igual — transformar os apontamentos da semana em registro padrão. **Agente:** executa processos de vários passos e toma ações — ainda é horizonte para nós; começamos pelo copiloto.

### 4. Seus 20 anos de casa são o ativo, não o obstáculo

O Anthropic Economic Index mostra outro padrão: o resultado melhora quando quem usa domina o assunto. Exemplo daqui: o histórico de falhas da injetora só vira prioridade de OS certa se quem pede sabe qual falha derruba a linha e qual espera. Você sabe o que a IA nunca vai saber — o barulho que a injetora faz antes de quebrar, qual fornecedor atrasa, o jeito de falar com cada turno. A IA entra com velocidade; o julgamento continua sendo seu.

### 5. Onde a IA não entra — e não vai entrar neste treinamento

Decisão sobre pessoa (advertência, escala, avaliação). Negociação. Qualquer coisa que dependa de estar lá: cheiro, vibração, o olhar do operador. E decisão final de qualidade ou segurança — ela rascunha o registro, você assina.

---

## Quando aplicar / Quando NÃO aplicar

| 🟢 Onde a IA entra nas suas tarefas | 🔴 Onde ela não entra |
|---|---|
| Rascunhar registro, relatório ou comunicado que você revisará | Decidir advertência, escala ou avaliação de alguém do time |
| Resumir instrução de trabalho ou procedimento longo | Substituir a leitura do sinal físico da máquina |
| Organizar anotações bagunçadas do turno em texto claro | Dar o fato exato que você não forneceu (parâmetro, histórico, norma) |
| Explicar um termo ou conceito que apareceu num documento | Aprovar registro de qualidade ou segurança — isso é assinatura sua |

---

## Prompt-âncora do módulo

O PCTFL completo vem no M2. Por enquanto, uma versão simples — para você ver a diferença que o contexto faz:

```text
# PAPEL
Você é um consultor prático de produtividade industrial.

# CONTEXTO
Sou supervisor em uma fábrica de eletroportáteis. Minhas tarefas mais repetitivas da semana:
[cole aqui suas 5 tarefas — ex.: relatório de turno, comunicado de mudança de linha, registro de parada]

# TAREFA
Para cada tarefa, diga se a IA pode ajudar como copiloto, como automação, ou se deve ficar comigo — e por quê, em 1 linha.

# FORMATO
Tabela: Tarefa | Modo (copiloto / automação / fica comigo) | Por quê.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
```

---

## Exercício

### Camada 1 — Básico (todos · 10-15 min)

**Objetivo:** mapear onde a IA entra na sua semana — ainda sem usar IA.

**Passo a passo:**
1. Escreva 5 tarefas repetitivas da sua semana. Coisas que você faz sempre igual: relatório, DDS, comunicado, registro, planilha.
2. Para cada uma, responda: "isso é texto/organização, ou é decisão/sinal físico?"
3. Marque as 2 que são texto ou organização — essas são suas candidatas.
4. Compare com o colega do lado: as candidatas dele são parecidas com as suas?

**Resultado esperado:** uma lista de 5 tarefas com 2 marcadas — seu ponto de partida para o M2.

**Como avaliar:** se as 2 marcadas acontecem toda semana e terminam em papel ou mensagem, você acertou.

### Camada 2 — Desafio (para quem terminou · +10-15 min)

**Objetivo:** testar o prompt-âncora com a sua lista real.

**Passo a passo:**
1. Abra [claude.ai](https://claude.ai) no celular (o passo a passo de conta é no M2 — se ainda não tem, faça em dupla com quem tem).
2. Copie o prompt-âncora acima e cole suas 5 tarefas no lugar indicado.
3. Envie e leia a tabela que voltar.
4. Compare com a sua marcação do Básico: a IA concordou com você? Onde discordou?

**Resultado esperado:** a tabela da IA, comparada com o seu próprio julgamento.

**Como avaliar:** se você consegue explicar por que concorda ou discorda de cada linha, o módulo cumpriu a promessa.

---

## Os 3 erros mais comuns

| Erro | Sintoma | Causa | Como corrigir |
|---|---|---|---|
| Tratar a IA como o Google | Pergunta curta, resposta genérica, você fecha e conclui "não serve" | A IA não busca — ela escreve a partir do que você dá | Dê contexto: quem você é, qual a situação, o que quer receber |
| Achar que ela vai substituir quem sabe | Resistência antes de testar: "20 anos de linha não se aprende em app" | Confundir a parte do papel com a parte do julgamento | Teste numa tarefa de papel. O julgamento não está em jogo — é pré-requisito |
| Desistir na primeira resposta ruim | Um teste vago, resultado fraco, ferramenta abandonada | Prompt sem contexto gera resposta sem valor — sempre | Antes de desistir, refaça com contexto. O M2 mostra o método |

---

> 🟣 **Marco: o que você leva para a Mallory na 2ª feira**
> Até sexta-feira, registre as 5 tarefas repetitivas da sua semana com 2 marcadas para IA — e mostre a lista para um colega do seu turno.
> Como saber que aconteceu: a lista existe no papel ou no celular, e um colega viu.

---

[← Início](../) · [M2 · Primeiro Prompt: Mão na Massa →](../m2/)

[Banco de Prompts](../banco-de-prompts/) · [Artefatos](../artefatos/)

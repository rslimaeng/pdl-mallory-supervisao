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

A Anthropic (fabricante do Claude) publica o **Anthropic Economic Index** — uma análise contínua de milhões de conversas reais de trabalho. O padrão é claro: as pessoas usam IA para escrever, resumir e organizar — não para operar máquina nem decidir por ninguém. É o tipo de tarefa que consome a manhã de um supervisor.

E o índice mostra outro padrão: o resultado melhora quando quem usa domina o assunto. O contexto é seu — 11, 15, 20 anos de casa. É essa combinação que você vai entender aqui.

---

## O que é IA generativa

IA generativa é a camada mais interna de uma matriz encaixada: dentro de Deep Learning, dentro de Machine Learning. Foi treinada em uma quantidade absurda de texto e aprendeu a completar padrões.

Não pensa, não sente, não conhece a Mallory. Mas escreve, resume e organiza em segundos o que levaria uma hora sua.

---

## Os 3 modos de uso

A IA entra na fábrica de 3 formas. Comece sempre pela primeira.

**Copiloto** — te ajuda a pensar e escrever. Ex.: o Programador de Produção rascunha o comunicado da mudança de sequência da linha por causa do gargalo no molde, e revisa. *Quando NÃO usar:* quando você quer a resposta pronta sem revisar.

**Automação** — tarefa repetitiva feita sempre igual. Ex.: transformar os apontamentos da semana em registro padrão, toda quinta. *Quando NÃO usar:* quando o caso é único e exige julgamento novo.

**Agente** — executa vários passos e toma ações. Ex.: ainda é horizonte para a fábrica. *Quando NÃO usar:* no seu primeiro dia com IA — comece pelo copiloto.

---

## Seus 20 anos como ativo

A IA sem contexto produz resposta genérica. Com o seu contexto — 11, 15, 20 anos de Mallory — produz trabalho útil.

O julgamento continua sendo seu. A IA só ganha velocidade quando encontra alguém que sabe o assunto: você sabe o barulho que a injetora faz antes de quebrar, qual fornecedor atrasa, o jeito de falar com cada turno.

---

## Onde a IA não entra

Quatro fronteiras que a IA não cruza — e não vai cruzar neste treinamento:

- **Pessoa** — decisão sobre gente: advertência, escala, avaliação.
- **Segurança** — assinatura de registro que exige a sua responsabilidade.
- **Sinal físico** — o barulho da injetora, o cheiro no torno, o olhar do operador.
- **Contrato** — condição comercial, negociação com fornecedor.

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

*(marque "Rodei este prompt no Claude" quando testar)*

---

## Exercício

### Camada 1 — Básico

**Objetivo:** mapear onde a IA entra na sua semana — ainda sem usar IA.

**Passo a passo:**
1. Escreva 5 tarefas repetitivas da sua semana. Coisas que você faz sempre igual: relatório, DDS, comunicado, registro, planilha.
2. Para cada uma, responda: "isso é texto/organização, ou é decisão/sinal físico?"
3. Marque as 2 que são texto ou organização — essas são suas candidatas.
4. Compare com o colega do lado: as candidatas dele são parecidas com as suas?

**Resultado esperado:** uma lista de 5 tarefas com 2 marcadas — seu ponto de partida para o M2.

**Como avaliar:** se as 2 marcadas acontecem toda semana e terminam em papel ou mensagem, você acertou.

### Camada 2 — Desafio

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
> *(marque "Compromisso feito" quando fechar com o colega)*

---

[← Início](../) · [M2 · Primeiro Prompt: Mão na Massa →](../m2/)

[Banco de Prompts](../banco-de-prompts/) · [Artefatos](../artefatos/)

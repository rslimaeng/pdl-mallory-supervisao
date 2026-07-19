# M5 · IA para Comunicação, Documentação e Análise

**Trilha 1 · Módulo 5 de 6 · 1h30**

A habilidade universal deste módulo: **transformar material bruto em documento revisado** — três tarefas (redigir · extrair · estruturar) rodadas com fonte no bolso e válvula de escape ligada. Sai da aula com o seu prompt salvo, um documento real da sua semana pronto e o hábito de rodar todo prompt de documento no Validador antes de mandar.

---

## O contrato deste módulo

**Você ganha:** o padrão de trabalho que serve para 3 tipos de tarefa — redigir, extrair e estruturar — e o hábito de salvar prompt bom para reusar.

**Você se compromete a:** trabalhar em dupla e gerar 1 documento real da sua rotina, do material bruto à versão revisada.

**Tempo de leitura desta página:** 10 min

---

## Você entra com → O que acontece → Você sai com

| Você entra com | O que acontece | Você sai com |
|---|---|---|
| PCTFL no dedo (M2), oportunidades mapeadas (M3) e o protocolo de segurança (M4) | Prática em dupla nos 3 tipos de tarefa: redigir documento, extrair de texto longo, estruturar um problema | 1 documento real da sua rotina, gerado por você com IA e revisado com critério |

---

## Por que isso importa aqui dentro

Some o papel de uma semana sua: relatório de turno todo dia, comunicado quando muda a sequência, ata quando tem reunião, registro quando tem parada. Nenhum deles é o seu trabalho de verdade — eles **documentam** o seu trabalho. E são exatamente o tipo de tarefa em que a IA mais rende, segundo a análise da Anthropic sobre uso da IA no trabalho: redação, resumo e organização de informação.

O ganho não é só velocidade. Documento bem escrito passa o turno sem ruído: o supervisor da tarde entende a pendência, o PCP entende o gargalo, a manutenção entende a prioridade. Metade dos problemas de comunicação entre turnos é texto ruim escrito com pressa.

**Não é discurso — é dado.** Casos brasileiros documentados: Localiza reduziu **8,3 horas/mês por colaborador** com IA de escritório (até 19h/mês para quem usa muito); Ambev cortou análise de pesquisa de mercado de **3 meses para 1 dia** com agentes de IA (TDC Summit, abr/2026); Itaú processa **+70 mil documentos jurídicos/mês** com IA generativa. Nenhuma dessas empresas ficou mais burra — os textos saem, a revisão continua humana, o tempo economizado virou análise. É esse mesmo padrão que entra na sua semana a partir de hoje.

A partir de hoje, o padrão muda: você entrega o material bruto e o critério; a IA entrega a primeira versão; você revisa e assina. Anotação de caderno vira relatório. Lista de falhas vira prioridade. Rascunho ruim vira comunicado claro.

---

## O conceito em 6 pontos

### 1. Grounding: dá a fonte, ou aceita adivinhação

A IA acerta muito mais quando você **dá o texto-fonte** e manda usar só ele. O benchmark oficial da OpenAI (SimpleQA, publicado em 2025) mediu isso: em pergunta factual, o modelo **inventa em 47% das respostas** quando responde de cabeça; **cai para 9,6%** quando pode consultar a fonte. Cinco vezes menos erro só por colar o material.

Regra prática: **antes de perguntar, cole.** Instrução de trabalho, apontamento da semana, ata da última reunião, procedimento novo — o que a IA vai usar entra colado no prompt (ou anexado como arquivo). Se você não tem a fonte, o prompt precisa dizer explicitamente: *"se algo não estiver no texto que colei, escreva [não consta] em vez de adivinhar"*. Isso é a **válvula de escape** — o interruptor que troca alucinação por silêncio honesto.

### 2. O fluxo é sempre: material bruto → primeira versão → sua revisão

A IA não cria informação — transforma a que você tem. Suas anotações, seus apontamentos, seu histórico entram; um documento organizado sai; você revisa e responde por ele. Quem pula a primeira etapa (não dá material) recebe texto genérico. Quem pula a última (não revisa) assina erro.

### 3. Tarefa tipo 1 — Redigir: do rascunho ao documento

Relatório de turno, comunicado, ata, DDS, e-mail. Você entrega os fatos em qualquer ordem, define o formato no PCTFL e recebe a primeira versão em segundos. O tempo que você gastava escrevendo vira tempo revisando — que é onde seu julgamento vale mais.

**Truque de passagem de turno — brain dump com prioridade:** ao invés de escrever parágrafos, jogue tudo em bullet caótico no celular no final do turno (linha 1 ok, linha 3 parou 25min, retrabalho 6 peças, trava do copo quase zerou…). No prompt, peça o formato final **com marcador de urgência** em cada pendência (ALTA · MÉDIA · BAIXA) e limite de **3 minutos de leitura** para o turno seguinte. O supervisor da tarde absorve o panorama em 30 segundos.

**Ata não é uma coisa só — são três formatos diferentes:**

| Tipo de ata | Quando usar | O que muda no prompt |
|---|---|---|
| **Orientada a decisões** | Reunião operacional, acompanhamento de projeto | Peça só decisões + próximos passos com responsável e prazo. Discussão em 1-2 frases no máximo. |
| **Pronta para cliente** | Reunião com fornecedor, terceirizado, cliente externo | Tom formal, sem conversa interna, sem jargão. Peça revisão contra "e se sair da empresa?". |
| **Notas de trabalho internas** | DDS, reunião técnica com histórico de decisão | Peça timecode/horário em cada risco ou número. Se dois discordaram, capture as duas posições. |

Guardar o tipo certo evita a ata mais comum — 4 páginas de nada que ninguém lê.

### 4. Tarefa tipo 2 — Extrair: do documento longo ao essencial

Instrução de trabalho de 12 páginas, procedimento novo, regulamento. Em vez de ler tudo procurando o que muda para o seu setor, você cola o texto (sem dado sensível) e pede: *"extraia o que afeta a montagem, em 5 pontos"*. Vale para planilha simples também: cole a tabela de apontamentos e peça totais, padrões e destaques.

**Peça o formato certo — e peça grau de certeza.** A extração fica muito mais confiável quando você exige uma tabela com **coluna de confiança** por linha:

```
| Ponto extraído | Trecho fonte (colar literal) | Confiança |
|---|---|---|
| [conteúdo] | "[…]" | Alta · Média · Baixa |
```

A confiança vira o seu radar: linha "Baixa" é onde você olha primeiro na fonte original. É o protocolo de 3 passos do M4 (fonte · número · consistência) virado hábito de output, não de revisão.

### 5. Tarefa tipo 3 — Estruturar: do problema embolado à decisão organizada

Situação confusa, várias frentes, você nem sabe por onde começar. Descreva o problema e peça: *"organize em causas prováveis, o que checar primeiro e opções de ação"*. A IA não decide — ela arruma a mesa para você decidir. É apoio ao julgamento, não substituto.

**Duas técnicas que amplificam esse ponto:**

- **Pré-mortem (Gary Klein).** Peça: *"é daqui a 30 dias e a decisão que estou pensando foi um fracasso. Liste os 5 motivos mais prováveis. Para cada um: probabilidade, gravidade e o que dá para fazer hoje para mitigar."* Antes de mudar sequência de linha, cadência de manutenção, alocação de operador — passe pelo pré-mortem. Cinco minutos custam menos que um dia de retrabalho.
- **Auditoria de premissas.** Peça: *"liste todas as premissas explícitas e implícitas que eu tenho ao propor essa mudança. Para cada uma: nível de confiança (alto/médio/baixo), o que confirmaria e o que negaria, e o que acontece se estiver errada."* Serve pra qualquer decisão onde você está se acostumando com uma explicação — a auditoria pergunta se ela ainda é a verdadeira.

### 6. Prompt bom é ferramenta: salve, reuse, melhore

O prompt do relatório de turno que funcionou hoje serve toda semana — só troca o conteúdo do CONTEXTO. Salve seus 3 melhores (notas do celular, arquivo, onde for) e pare de começar do zero. No Claude, a conversa fica no histórico: achou o prompt bom, copie para o seu banco pessoal.

---

## Duas ferramentas, dois papéis (demo em sala)

O Claude/ChatGPT resolve **redigir · extrair · estruturar** com material colado no prompt. Já o **NotebookLM** (Google, gratuito com Gmail) é a ferramenta certa quando o insumo é **muito longo** (procedimento de 40 páginas, regulamento inteiro, várias instruções de trabalho juntas): você sobe os arquivos, ele responde **só com base nos arquivos** e devolve **citação clicável no trecho fonte de cada resposta**.

**Como demonstramos em sala:**

1. Abrir `notebooklm.google.com` (login com Gmail — se você não tem, o vizinho tem).
2. Criar um caderno novo, subir 1 procedimento fictício de 12 páginas do PCP (o instrutor traz).
3. Perguntar: *"o que mudou pra montagem da linha 3?"* — a resposta vem com número + **link clicável no parágrafo exato do PDF onde está escrito**.
4. Perguntar: *"tem algum ponto que fala sobre torque de aperto?"* — se não tiver, o NotebookLM responde "não encontrei nas fontes", não inventa. É a **válvula de escape ligada por padrão**.

**Quando cada ferramenta ganha:**

| Situação | Ferramenta | Por que |
|---|---|---|
| Redigir relatório de turno · ata · comunicado | Chat (Claude/ChatGPT) | Material bruto cabe no prompt · você define formato |
| Extrair de procedimento de 3 páginas | Chat | Cola o texto, extrai com tabela + confiança |
| Extrair/perguntar em conjunto de 5+ documentos longos | NotebookLM | Grounded por padrão · citação clicável no trecho fonte |
| Estruturar problema, pré-mortem, auditoria de premissas | Chat | É conversação iterativa |
| Consultar procedimento novo enquanto está em pé na linha | NotebookLM (celular) | Pergunta em português + resposta com citação |

Regra dura das duas: **nunca colocar dado sensível na conta gratuita** — nem no chat, nem no NotebookLM. Mata v. Avianca não escolhe ferramenta. Diretriz da Mallory decide o que entra (M4).

---

## Quando aplicar / Quando NÃO aplicar

| 🟢 Quando aplicar | 🔴 Quando NÃO aplicar |
|---|---|
| Relatório, ata, comunicado — qualquer documento com material bruto seu | Documento cujo insumo é dado sensível que não pode entrar (M4) |
| Extrair pontos-chave de procedimento ou instrução longa | Usar o trecho extraído sem conferir no documento original |
| Organizar problema confuso antes de decidir | Deixar a IA escolher por você — ela arruma, você decide |
| Análise simples de planilha sem dado confidencial | Número que vai para a diretoria sem você recalcular na fonte |
| Extrair de conjunto de 5+ documentos longos com citação obrigatória | Colar dado sensível (5 categorias do M4) em conta gratuita — chat ou NotebookLM |
| Rodar pré-mortem antes de decidir mudança de sequência ou cadência | Aceitar a "primeira ideia razoável" sem pedir os 5 motivos de fracasso |

---

## Prompt-âncora do módulo

O relatório de passagem de turno — o documento mais universal da trilha, com dados fictícios embutidos. **Copie, cole no Claude ou ChatGPT, e ajuste só o CONTEXTO com o seu turno de hoje.**

```text
# PAPEL
Você é um líder de produção experiente em fábrica de eletroportáteis.

# CONTEXTO
Fechamento do turno da manhã, área de montagem. Anotações brutas de hoje (FICTÍCIAS):
- linha 1 ok, 2.100 unidades (meta 2.000)
- linha 3 parou 25 min às 8h15, falta de componente (trava do copo), almoxarifado repôs
- 2 operadores em treinamento na linha 1, rendimento ainda abaixo
- pendência: conferir estoque da trava do copo para amanhã — quase zerou
- qualidade apontou 6 unidades para retrabalho na linha 3

# TAREFA
Organize as anotações no relatório de passagem para o supervisor do turno da tarde.

# FORMATO
4 blocos: Produção (realizado × meta por linha) · Paradas (horário, causa, solução) ·
Pessoal · Pendências priorizadas. Cada pendência com marcador de urgência (ALTA · MÉDIA · BAIXA).
Máximo 15 linhas.

# LIMITAÇÕES (grounding + válvula de escape)
- Use SÓ o que está no CONTEXTO. Não invente número, hora, causa nem responsável.
- Se faltar informação para preencher algum bloco, escreva [a confirmar] em vez de completar.
- Se algo estiver ambíguo, faça 1 pergunta objetiva no final antes de eu enviar.
```

Os grounding + válvula do bloco LIMITAÇÕES são o **hábito** deste módulo. Todo prompt de documento que você escrever daqui pra frente carrega essas duas travas — é o que separa "texto fluido" de "texto que você pode assinar".

### Os 3 follow-ups oficiais

Todo prompt-âncora deste treinamento vem com 3 seguintes prontos. Rode o prompt-âncora, depois emende cada um deles na mesma conversa:

**Follow-up 1 · Refinar formato**

```text
Refaça em 3 blocos em vez de 4 (junte Pessoal com Pendências). Se alguma pendência
ficou como [a confirmar], liste no final "para confirmar antes de enviar" separado.
```

**Follow-up 2 · Ata do DDS de amanhã (mesmo esqueleto)**

```text
Agora, com o MESMO esqueleto (papel, formato, limitações), gere um prompt pronto para
eu usar na ata do DDS de amanhã. Deixe CONTEXTO em branco — vou preencher com as
anotações do DDS. Mantenha as regras de grounding e válvula de escape.
```

**Follow-up 3 · Extrair pontos-chave de procedimento longo**

```text
Ainda com este esqueleto, transforme em um prompt que serve para colar procedimento
de 8-12 páginas e extrair "o que mudou para a linha de montagem" em tabela com 3
colunas: ponto extraído · trecho fonte (literal) · confiança (Alta/Média/Baixa).
```

Um esqueleto, muitos documentos. E o hábito é sempre o mesmo: cole a fonte, use válvula, peça confiança na extração, refine.

---

### Validador de Prompt de Documento

Todo prompt de documento que sai da sua mesa passa por aqui antes. Cola, valida, ajusta o que veio vermelho, roda de novo. Sua nota ideal é 8+/10 — abaixo disso, você está pedindo pra IA adivinhar.

*(Ferramenta interativa na versão HTML desta página — cola o prompt, recebe checklist automatizado + nota 0-10.)*

---

## Exercício

**Insumo do dia (obrigatório):** 1 anotação real da sua semana + 1 procedimento fictício de 12 páginas que o instrutor traz. Duplas por proximidade.

### Camada 1 — Básico (todos · 15 min · em duplas)

**Objetivo:** gerar 1 documento real da sua rotina, do bruto à versão revisada. Salvar o prompt.

**Passo a passo:**
1. Escolha o documento da semana: relatório de turno, comunicado, ata, DDS — o que você vai precisar de verdade. **Desidentifique** o material bruto no celular (nomes, matrículas, cliente) — protocolo M4.
2. Cole o prompt-âncora no Claude ou ChatGPT. Ajuste só o CONTEXTO com o seu material.
3. Rode. Passe o output pelo **Validador de Prompt de Documento** (o artefato inline mais acima) — a pontuação vai te dizer se seu prompt está com grounding e válvula ligados, ou se está solto.
4. Aplique os 3 follow-ups oficiais na mesma conversa. Salve o prompt final no seu banco pessoal (notas do celular, arquivo, onde for).
5. Troca com a dupla: um lê o documento do outro. **Vale só uma pergunta:** *"deu pra entender sem eu explicar nada?"*

**Resultado esperado:** seu documento real revisado + prompt salvo no seu banco + nota do Validador ≥ 8/10.

### Demo NotebookLM (instrutor · 10 min · todos assistem)

O instrutor sobe 1 procedimento fictício de 12 páginas no NotebookLM, faz 3 perguntas ao vivo: (1) o que mudou pra montagem da linha 3, (2) tem algum ponto sobre torque de aperto, (3) qual a última data de revisão desse procedimento. Cada resposta vem com **citação clicável no trecho fonte**. Ao final, cada participante entra em `notebooklm.google.com` com seu Gmail, cria um caderno vazio, sobe 1 arquivo próprio (desidentificado) e faz 1 pergunta. **Marco:** cada um sai com o NotebookLM aberto pelo menos uma vez.

### Camada 2 — Desafio (para quem terminou · +15 min)

**Objetivo:** rodar a tarefa de análise — transformar histórico em prioridade — e adicionar pré-mortem.

**Passo a passo:**
1. Use esta lista fictícia de falhas de uma injetora (ou monte a sua, fictícia): jan — vazamento óleo (2x) · fev — sensor porta (1x) · mar — vazamento óleo (1x), travamento rosca (1x) · abr — vazamento óleo (2x), sensor porta (1x) · mai — travamento rosca (2x).
2. Monte um PCTFL: papel de planejador de manutenção; tarefa *"analise o padrão de falhas e proponha prioridades de OS preventiva com justificativa"*; formato tabela com coluna **confiança**; regra de grounding no L (não inventar dados fora da lista).
3. Rode. Avalie: a prioridade que a IA propôs bate com o que você faria? Onde seu julgamento discorda?
4. **Pré-mortem:** na mesma conversa, peça *"é daqui a 30 dias e a prioridade acima falhou. Liste os 5 motivos mais prováveis e o que dá pra checar hoje."*
5. Refine com informação nova: *"considere que a peça do item X demora 30 dias para chegar — refaça a prioridade."*

**Resultado esperado:** análise de padrão com prioridade + pré-mortem + pelo menos 1 refinamento que só você sabia.

**Como avaliar:** se o refinamento com informação que só você tinha melhorou a resposta, você viu o ponto do módulo — a IA processa, o seu contexto decide.

---

## Os 3 erros mais comuns

| Erro | Sintoma | Causa | Como corrigir |
|---|---|---|---|
| Pedir documento sem dar material | "Escreva meu relatório de turno" — sai texto genérico de fábrica genérica | A IA não estava no seu turno; sem fatos, ela inventa estrutura vazia | Despeje as anotações brutas primeiro. Bruto seu + formato claro = documento útil |
| Revisar só o português | Texto lindo aprovado — com a pendência errada no meio | Revisão de forma, não de conteúdo | Revise contra os fatos: cada linha do documento existe nas suas anotações? |
| Não salvar o prompt que funcionou | Toda semana montando o mesmo prompt do zero, cada vez pior | Tratar prompt como conversa, não como ferramenta | Funcionou? Salvou. Seus 3 melhores prompts são patrimônio seu |

---

> ⚠️ **Anti-alucinação — a regra prática deste módulo**
> - **Grounding é a técnica #1.** Modelo respondendo de cabeça inventa em 47% das perguntas factuais (benchmark SimpleQA da OpenAI); com a fonte no bolso, cai pra 9,6%. Cinco vezes menos erro só por colar o texto.
> - **Válvula de escape ligada.** No L do prompt, sempre: *"se algo não estiver na fonte, escreva [não consta]"*. É o interruptor que troca alucinação por silêncio honesto.
> - **Todo número volta pra origem.** Antes de assinar, confira 1 número por bloco — caso-âncora **Mata v. Avianca (2023)** e **Air Canada v. Moffatt (2024)**: texto fluido, conteúdo inventado, prejuízo real. A companhia pagou porque o chatbot inventou política de reembolso — não porque o cliente entendeu errado.

---

> 🟣 **Marco: o que você leva para a Mallory na 2ª feira**
> Até sexta-feira, gere com IA 1 documento real da sua rotina — relatório, ata ou comunicado — e envie de verdade para quem precisa dele. Salve o prompt que funcionou.
> Como saber que aconteceu: o documento chegou ao destino (sistema, e-mail ou mural) e o prompt está salvo no seu banco pessoal.

---

[← M4 · Usando IA com Segurança](../m4/) · [M6 · Canvas de Oportunidades de IA →](../m6/)

[Banco de Prompts](../banco-de-prompts/) · [Artefatos](../artefatos/)

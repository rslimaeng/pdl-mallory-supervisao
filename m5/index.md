# M5 · IA para Comunicação, Documentação e Análise

**Trilha 1 · Módulo 5 de 6 · 1h30**

Relatório de turno, ata, comunicado, análise de documento — a IA aplicada ao papel que consome seu dia.

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

A partir de hoje, o padrão muda: você entrega o material bruto e o critério; a IA entrega a primeira versão; você revisa e assina. Anotação de caderno vira relatório. Lista de falhas vira prioridade. Rascunho ruim vira comunicado claro.

---

## O conceito em 5 pontos

### 1. O fluxo é sempre: material bruto → primeira versão → sua revisão

A IA não cria informação — transforma a que você tem. Suas anotações, seus apontamentos, seu histórico entram; um documento organizado sai; você revisa e responde por ele. Quem pula a primeira etapa (não dá material) recebe texto genérico. Quem pula a última (não revisa) assina erro.

### 2. Tarefa tipo 1 — Redigir: do rascunho ao documento

Relatório de turno, comunicado, ata, DDS, e-mail. Você entrega os fatos em qualquer ordem, define o formato no PCTFL e recebe a primeira versão em segundos. O tempo que você gastava escrevendo vira tempo revisando — que é onde seu julgamento vale mais.

### 3. Tarefa tipo 2 — Extrair: do documento longo ao essencial

Instrução de trabalho de 12 páginas, procedimento novo, regulamento. Em vez de ler tudo procurando o que muda para o seu setor, você cola o texto (sem dado sensível) e pede: "extraia o que afeta a montagem, em 5 pontos". Vale para planilha simples também: cole a tabela de apontamentos e peça totais, padrões e destaques. A IA acha rápido; você confere no original o que for usar — protocolo do M4.

### 4. Tarefa tipo 3 — Estruturar: do problema embolado à decisão organizada

Situação confusa, várias frentes, você nem sabe por onde começar. Descreva o problema e peça: "organize em causas prováveis, o que checar primeiro e opções de ação". A IA não decide — ela arruma a mesa para você decidir. É apoio ao julgamento, não substituto.

### 5. Prompt bom é ferramenta: salve, reuse, melhore

O prompt do relatório de turno que funcionou hoje serve toda semana — só troca o conteúdo do CONTEXTO. Salve seus 3 melhores (notas do celular, arquivo, onde for) e pare de começar do zero. No Claude, a conversa fica no histórico: achou o prompt bom, copie para o seu banco pessoal.

---

## Quando aplicar / Quando NÃO aplicar

| 🟢 Quando aplicar | 🔴 Quando NÃO aplicar |
|---|---|
| Relatório, ata, comunicado — qualquer documento com material bruto seu | Documento cujo insumo é dado sensível que não pode entrar (M4) |
| Extrair pontos-chave de procedimento ou instrução longa | Usar o trecho extraído sem conferir no documento original |
| Organizar problema confuso antes de decidir | Deixar a IA escolher por você — ela arruma, você decide |
| Análise simples de planilha sem dado confidencial | Número que vai para a diretoria sem você recalcular na fonte |

---

## Prompt-âncora do módulo

O relatório de passagem de turno — o documento mais universal da trilha, com dados fictícios embutidos:

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
Pessoal · Pendências priorizadas. Máximo 15 linhas.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
Não crie causa nem estimativa que não estejam nas anotações.
```

Guarde a estrutura: ela resolve ata de reunião (troque as anotações), comunicado (troque tarefa e formato) e registro de ocorrência. Um esqueleto, muitos documentos.

---

## Exercício

### Camada 1 — Básico (todos · 10-15 min · em duplas)

**Objetivo:** gerar 1 documento real da sua rotina, do bruto à versão revisada.

**Passo a passo:**
1. Escolha o documento da semana: relatório de turno, comunicado, ata, DDS — o que você vai precisar de verdade.
2. Despeje o material bruto no celular: fatos, números, pendências, em qualquer ordem. Sem dado sensível — desidentifique (M4).
3. Monte o PCTFL a partir do prompt-âncora: troque CONTEXTO e ajuste o FORMATO para o seu padrão.
4. Rode. Aplique o protocolo de 3 passos (fonte · número · consistência).
5. Troque de lugar com a dupla: um lê o documento do outro e aponta 1 coisa boa e 1 para ajustar.

**Resultado esperado:** seu documento real, revisado por você e lido por um colega.

**Como avaliar:** a dupla entendeu o documento sem você explicar nada de boca? Passou. Precisou explicar? O que você explicou de boca faltou no texto — ajuste e rode de novo.

### Camada 2 — Desafio (para quem terminou · +10-15 min)

**Objetivo:** a tarefa de análise — transformar histórico em prioridade.

**Passo a passo:**
1. Use esta lista fictícia de falhas de uma injetora (ou monte a sua, fictícia): jan — vazamento óleo (2x) · fev — sensor porta (1x) · mar — vazamento óleo (1x), travamento rosca (1x) · abr — vazamento óleo (2x), sensor porta (1x) · mai — travamento rosca (2x).
2. Monte o PCTFL: papel de planejador de manutenção; tarefa "analise o padrão de falhas e proponha prioridades de OS preventiva com justificativa"; formato tabela; regra de ouro no L.
3. Rode e avalie: a prioridade que a IA propôs bate com o que você faria? Onde seu julgamento discorda?
4. Refine na mesma conversa: "considere que a peça do item X demora 30 dias para chegar — refaça a prioridade".

**Resultado esperado:** uma análise de padrão com prioridades — e pelo menos 1 refinamento seu que mudou o resultado.

**Como avaliar:** se o refinamento com informação que só você tinha melhorou a resposta, você viu o ponto do módulo: a IA processa, o seu contexto decide.

---

## Os 3 erros mais comuns

| Erro | Sintoma | Causa | Como corrigir |
|---|---|---|---|
| Pedir documento sem dar material | "Escreva meu relatório de turno" — sai texto genérico de fábrica genérica | A IA não estava no seu turno; sem fatos, ela inventa estrutura vazia | Despeje as anotações brutas primeiro. Bruto seu + formato claro = documento útil |
| Revisar só o português | Texto lindo aprovado — com a pendência errada no meio | Revisão de forma, não de conteúdo | Revise contra os fatos: cada linha do documento existe nas suas anotações? |
| Não salvar o prompt que funcionou | Toda semana montando o mesmo prompt do zero, cada vez pior | Tratar prompt como conversa, não como ferramenta | Funcionou? Salvou. Seus 3 melhores prompts são patrimônio seu |

---

> ⚠️ **Anti-alucinação — a regra prática deste módulo**
> - **Não deixe a IA inventar número que você não tem.** Se as anotações não dizem quantas peças, o relatório não diz quantas peças — ou diz "a confirmar".
> - No L do prompt, trave: *"não crie causa nem estimativa que não estejam nas anotações"*.
> - Todo número que vai para o documento final, confira na origem — caso-âncora **Mata v. Avianca (2023)**: texto fluido, conteúdo inventado, prejuízo real.

---

> 🟣 **Marco: o que você leva para a Mallory na 2ª feira**
> Até sexta-feira, gere com IA 1 documento real da sua rotina — relatório, ata ou comunicado — e envie de verdade para quem precisa dele. Salve o prompt que funcionou.
> Como saber que aconteceu: o documento chegou ao destino (sistema, e-mail ou mural) e o prompt está salvo no seu banco pessoal.

---

[← M4 · Usando IA com Segurança](../m4/) · [M6 · Canvas de Oportunidades de IA →](../m6/)

[Banco de Prompts](../banco-de-prompts/) · [Artefatos](../artefatos/)

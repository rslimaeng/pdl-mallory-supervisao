# Banco de Prompts · Trilha 1 — Supervisão

**O kit de segunda-feira.** Copie o prompt da sua área, cole no Claude, troque o que está `[entre colchetes]` pelos seus dados desidentificados — e revise antes de usar. Não é catálogo para ler inteiro: é prateleira para pegar o que precisa.

[← Início](../) · [M1](../m1/) · [M2](../m2/) · [M3](../m3/) · [M4](../m4/) · [M5](../m5/) · [M6](../m6/) · [Artefatos](../artefatos/)

---

## Como usar este banco

1. Ache o prompt da sua situação — pelos módulos (os 6 primeiros) ou pela sua área (os demais).
2. Copie, cole no Claude ([claude.ai](https://claude.ai)) e troque o conteúdo `[entre colchetes]` pelos seus dados **desidentificados** — nome real, número real e código real ficam de fora; aproximação e nome trocado entram.
3. Rode, valide, ajuste. O prompt que funcionou vira patrimônio: salve no seu banco pessoal.

**PCTFL em 30 segundos:**

- **P**apel — quem a IA deve ser (define vocabulário e nível)
- **C**ontexto — a situação real; sem ele, a resposta serve para qualquer fábrica
- **T**arefa — o que fazer, com verbo claro: escreva, resuma, liste, compare
- **F**ormato — como entregar: tabela, blocos, máximo de linhas
- **L**imitações — o que não fazer, começando pela regra de ouro: *"Se faltar informação, pergunte. Não invente."*

**Validação em 30 segundos (antes de usar qualquer resposta):**

1. **Fonte** — cada fato veio do que você enviou, ou apareceu do nada?
2. **Coerência** — algum número, nome ou norma surgiu sem origem? Confere na fonte.
3. **Seu conhecimento** — bate com o que você sabe do seu setor? Estranhou, checou.

**O que nunca entra no prompt (os 3 "nunca" do M4):**

- **Gente** — nome, CPF, salário, atestado, avaliação, escala com nomes
- **Produto** — parâmetro de molde e injetora, especificação, desenho técnico
- **Contrato** — fornecedor, preço, condição comercial

Na dúvida: se você não postaria num grupo aberto de WhatsApp, não cola na IA.

---

## Os 6 prompts dos módulos

Os mesmos prompts que você rodou em sala — na íntegra, para reusar.

### M1 · Mapa das minhas tarefas

**Área:** todas — é o ponto de partida
**Para quando:** você quer saber onde a IA entra na sua semana antes de gastar tempo testando.
**Você leva:** uma tabela com cada tarefa classificada em copiloto, automação ou "fica comigo".

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

**Como avaliar:** você consegue explicar por que concorda ou discorda de cada linha da tabela? Então o mapa é seu, não da IA.

### M2 · DDS de segurança

**Área:** Segurança do Trabalho — e qualquer um que conduz DDS
**Para quando:** o DDS de segunda precisa sair e não pode repetir o do mês passado.
**Você leva:** roteiro de fala de 5 minutos com abertura, mensagem central e compromisso.

```text
# PAPEL
Você é um técnico de segurança do trabalho experiente em fábrica de eletroportáteis.

# CONTEXTO
Vou conduzir o DDS (Diálogo Diário de Segurança) de segunda-feira na área de montagem.
Tema: uso correto de EPI — luvas e óculos. Motivo: na semana passada houve 2 registros
de operadores sem óculos na bancada de rebarbação. Equipe: 14 pessoas, turno da manhã.
Já falamos deste tema no mês passado — não pode ficar repetitivo.

# TAREFA
Escreva o roteiro do DDS de no máximo 5 minutos de fala, com uma pergunta para
abrir conversa com o time e um fechamento que peça compromisso prático.

# FORMATO
3 blocos: Abertura (com a pergunta) · Mensagem central (com exemplo concreto) ·
Fechamento (com o compromisso). Máximo 20 linhas. Linguagem falada, direta.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
Não cite norma ou número de NR — se precisar, eu confirmo na fonte e acrescento.
```

**Como avaliar:** dá para falar em 5 minutos, no seu jeito, sem soar decorado? Troque o CONTEXTO pelo tema da sua semana e o resto se mantém.

### M3 · Relatório de passagem de turno (injetoras)

**Área:** Produção / Injetoras
**Para quando:** fechar o turno com as anotações bagunçadas do dia e entregar limpo para quem assume.
**Você leva:** relatório em 4 blocos, no máximo 15 linhas, direto ao ponto.

```text
# PAPEL
Você é um líder de produção experiente em fábrica de eletroportáteis.

# CONTEXTO
Estou fechando o turno da manhã na área de injetoras. Minhas anotações brutas:
- linha 2 parou 35 min, molde da air fryer travou, ferramentaria atuou, liberado 10h40
- produção: 4.200 peças (meta 4.500)
- 1 operador remanejado da linha 4 para cobrir falta
- pendência: molde da linha 2 precisa de revisão preventiva, ferramentaria avisada
- turno da tarde precisa priorizar reposição das 300 peças

# TAREFA
Organize essas anotações no relatório de passagem de turno para o supervisor da tarde.

# FORMATO
4 blocos: Paradas (com horário e causa) · Produção (realizado × meta) ·
Pessoal · Pendências para o próximo turno. Máximo 15 linhas, direto ao ponto.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
Use apenas os números das minhas anotações — não complete lacunas com estimativa.
```

**Como avaliar:** o supervisor da tarde entende as pendências sem te ligar? Passou. No uso real, troque as anotações fictícias pelas suas.

### M4 · Registro de não-conformidade

**Área:** Qualidade
**Para quando:** registrar NC com clareza de auditoria ISO 9001 — sem deixar a IA inventar causa.
**Você leva:** descrição factual pronta para o sistema de qualidade, assinada por você.

```text
# PAPEL
Você é um inspetor de qualidade experiente em fábrica certificada ISO 9001.

# CONTEXTO
Preciso registrar uma não-conformidade. Dados FICTÍCIOS para este treino:
- Produto: lote 4812-B de liquidificadores, 240 unidades
- Detecção: inspeção final, 14/07, turno da manhã
- Problema: 18 unidades com folga na trava do copo, fora do padrão de montagem
- Ação imediata: lote segregado, linha avisada, reinspeção de 100% do lote

# TAREFA
Escreva a descrição da não-conformidade para o registro do sistema de qualidade:
o que foi detectado, onde, extensão e ação de contenção tomada.

# FORMATO
Texto corrido de até 10 linhas, objetivo, sem opinião — descrição factual
no padrão de registro de auditoria.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
NÃO escreva causa-raiz nem ação corretiva — isso sai da análise do time, não do registro inicial.
```

**Como avaliar:** cada frase do registro existe nos seus dados? Nenhuma causa apareceu do nada? Então está no padrão de auditoria.

### M5 · Relatório de passagem de turno (montagem)

**Área:** Produção / Montagem — o esqueleto serve para ata, comunicado e ocorrência
**Para quando:** o mesmo fechamento de turno, agora na montagem — e como modelo para qualquer documento com material bruto seu.
**Você leva:** o esqueleto que resolve relatório, ata e registro: bruto seu + formato claro.

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

**Como avaliar:** cada linha do relatório existe nas suas anotações? Para virar ata ou comunicado, troque CONTEXTO, TAREFA e FORMATO — o esqueleto fica.

### M6 · Priorização de oportunidades (Canvas)

**Área:** todas — fecha o Canvas do grupo
**Para quando:** o grupo mapeou oportunidades e precisa de desempate com critério.
**Você leva:** notas de impacto e facilidade sugeridas com justificativa — o grupo bate o martelo.

```text
# PAPEL
Você é um consultor prático de melhoria contínua em fábrica de eletroportáteis.

# CONTEXTO
Meu grupo mapeou estas oportunidades de uso de IA na nossa área:
[cole as oportunidades do grupo — ex.: "relatório de turno (hoje: 30 min/dia)",
"comunicado de mudança de linha (hoje: 20 min, 3x/semana)", "resumo de procedimento novo"]

# TAREFA
Para cada oportunidade, estime impacto (1-5) e facilidade (1-5) com justificativa
de 1 linha cada, e aponte qual é o melhor quick win — a de melhor combinação.

# FORMATO
Tabela: Oportunidade | Impacto | Facilidade | Justificativa | e 1 linha final
com o quick win recomendado.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
As notas são sugestão para discussão — o grupo decide as finais.
```

**Como avaliar:** onde a nota da IA divergiu da sua, você sabe dizer quem tem razão e por quê? A priorização está viva.

---

## Prompts por área da Mallory

Novos prompts, um por situação real. Todos com dados fictícios ou campos para preencher — a regra dos 3 "nunca" vale em cada um.

### Injetoras / Gestão de Fábrica

#### Comunicado de mudança de sequência da linha

**Área:** Injetoras / Gestão de Fábrica
**Para quando:** a sequência da linha vai mudar por gargalo de molde e todo mundo precisa saber antes do turno, não durante.
**Você leva:** comunicado de 10 linhas que a supervisão lê em 1 minuto e ninguém interpreta errado.

```text
# PAPEL
Você é um programador de produção experiente em fábrica de eletroportáteis.

# CONTEXTO
A sequência da linha de injetoras vai mudar. Fatos (troque pelos seus, sem parâmetro de molde):
- Motivo: [ex.: gargalo no molde do produto X, capacidade reduzida até quinta]
- O que muda: [ex.: produto Y adiantado para linha 2, produto X reduzido para 1 turno]
- A partir de quando: [data e turno]
- Quem precisa agir: [ex.: supervisores das linhas 1 e 2, almoxarifado ajusta abastecimento]

# TAREFA
Escreva o comunicado da mudança de sequência para a supervisão e as áreas de apoio.

# FORMATO
Máximo 10 linhas: o que muda · por quê · desde quando · o que cada área faz.
Sem introdução, sem "conforme alinhado" — direto ao fato.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
Não inclua parâmetro técnico de molde ou máquina — se a supervisão precisar, trato por outro canal.
```

**Como avaliar:** quem lê sabe o que fazer no turno dele sem te procurar? Se alguém "ia perguntar a partir de quando", o campo ficou vago.

#### Análise de padrão de rejeição

**Área:** Injetoras / Gestão de Fábrica
**Para quando:** a rejeição subiu e você tem os apontamentos da semana — mas ninguém teve tempo de olhar o padrão.
**Você leva:** o padrão por linha, turno e tipo de defeito, com as 2 perguntas a investigar primeiro.

```text
# PAPEL
Você é um analista de processo experiente em injeção plástica.

# CONTEXTO
Fábrica de eletroportáteis. Apontamentos de rejeição da semana (FICTÍCIOS — troque pelos seus,
sem parâmetro de máquina):
- seg: linha 2, 38 peças, rebarba · linha 3, 12 peças, mancha
- ter: linha 2, 41 peças, rebarba · linha 2, 9 peças, peça incompleta
- qua: linha 2, 35 peças, rebarba (após troca de turno) · linha 3, 14 peças, mancha
- qui: linha 2, 8 peças, rebarba (após intervenção da ferramentaria)
- sex: linha 3, 16 peças, mancha

# TAREFA
Identifique padrões: qual linha, qual defeito, concentra onde (dia, turno, evento) —
e liste as 2 perguntas que eu deveria investigar primeiro, com justificativa.

# FORMATO
Bloco 1: padrão em até 5 linhas. Bloco 2: tabela Defeito | Onde concentra | Pergunta a investigar.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
Não proponha causa técnica definitiva — aponte o padrão e a pergunta; a causa sai da investigação na máquina.
```

**Como avaliar:** o padrão apontado existe mesmo nos seus números (confira!) e as perguntas fazem sentido para quem conhece a linha? A investigação continua sua.

### Montagem

#### Checklist de montagem para posto novo

**Área:** Montagem
**Para quando:** chegou gente nova no posto e a instrução de trabalho tem 12 páginas que ninguém lê em pé.
**Você leva:** checklist de 1 página que o operador novo segue no posto, validado por você contra a IT oficial.

```text
# PAPEL
Você é um supervisor de montagem experiente em fábrica de eletroportáteis.

# CONTEXTO
Vou treinar um operador novo no posto de [ex.: montagem da base do liquidificador].
Etapas da operação, nas minhas palavras (sem especificação técnica de produto):
[liste as etapas como você explica de boca — ex.: "1. pegar a base e conferir se não tem rebarba,
2. encaixar o motor na posição da guia, 3. apertar os 4 parafusos em cruz, 4. teste de giro manual,
5. colocar na esteira com a etiqueta para cima"]
Erros mais comuns de quem está começando: [ex.: aperto fora de ordem, esquecer o teste de giro]

# TAREFA
Transforme em um checklist de posto para operador novo: passo a passo numerado,
com os pontos de atenção destacados nos passos onde os erros comuns acontecem.

# FORMATO
1 página: título do posto · passos numerados (1 linha cada) · "Atenção" nos passos críticos ·
fechamento "na dúvida, chame o líder".

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
Não acrescente etapa, torque ou medida que eu não informei — o padrão oficial é a instrução de trabalho da Mallory.
```

**Como avaliar:** compare com a IT oficial antes de usar: nenhum passo inventado, nenhum passo faltando? O checklist treina; a IT manda.

### Ferramentaria

#### Plano de manutenção preventiva de molde

**Área:** Ferramentaria
**Para quando:** o molde crítico só recebe atenção quando trava — e você quer virar o jogo para o preventivo.
**Você leva:** rascunho de plano preventivo com frequências propostas, para validar com a experiência da bancada.

```text
# PAPEL
Você é um planejador de manutenção de moldes de injeção experiente.

# CONTEXTO
Fábrica de eletroportáteis. Molde [apelido fictício — ex.: "molde da jarra"], uso intenso.
Histórico recente, nas minhas palavras (sem desenho nem especificação):
[ex.: "travamento em março e maio, sempre depois de campanha longa; desgaste visível
no pino extrator; limpeza hoje é feita só quando a qualidade reclama de mancha"]
Paradas programadas disponíveis: [ex.: sábados alternados, 4h]

# TAREFA
Monte o rascunho de um plano de manutenção preventiva para este molde: itens de verificação,
frequência sugerida e sinal de alerta que antecipa cada problema do histórico.

# FORMATO
Tabela: Item | O que verificar | Frequência sugerida | Sinal de alerta.
Máximo 10 itens — os que importam, não a lista enciclopédica.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
As frequências são ponto de partida para minha validação — não as apresente como norma do fabricante.
```

**Como avaliar:** a bancada reconhece os itens e ajustaria no máximo as frequências? Bom rascunho. Se o plano ignora o histórico que você deu, refaça com mais contexto.

### Manutenção

#### Priorização de OS a partir do histórico de falhas

**Área:** Manutenção
**Para quando:** a semana tem mais OS que gente e a priorização está sendo feita no olho.
**Você leva:** prioridades com justificativa, para bater com o seu julgamento antes de abrir as OS.

```text
# PAPEL
Você é um planejador de manutenção industrial experiente.

# CONTEXTO
Fábrica de eletroportáteis. Histórico de falhas FICTÍCIO de uma injetora (troque pelo seu, sem
parâmetro de máquina):
- jan: vazamento de óleo (2x)
- fev: sensor da porta (1x)
- mar: vazamento de óleo (1x), travamento da rosca (1x)
- abr: vazamento de óleo (2x), sensor da porta (1x)
- mai: travamento da rosca (2x)
Contexto operacional: [ex.: peça do sensor demora 30 dias para chegar; linha roda 2 turnos]

# TAREFA
Analise o padrão de falhas e proponha prioridades de OS preventiva para a semana,
com justificativa de 1 linha por prioridade.

# FORMATO
Tabela: Prioridade | Falha/Item | Justificativa (frequência, tendência, risco de parada).

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
Não estime custo nem prazo de reparo — isso sai do meu planejamento, não do histórico.
```

**Como avaliar:** a prioridade nº 1 da IA bate com a que você faria? Onde discorda, você sabe o porquê (peça em falta, criticidade da linha)? Refine na mesma conversa com essa informação.

#### Roteiro de inspeção de rota

**Área:** Manutenção
**Para quando:** montar a rota de inspeção do turno sem esquecer ponto — e sem depender de quem "sabe de cabeça".
**Você leva:** roteiro sequenciado que qualquer técnico do time executa e registra igual.

```text
# PAPEL
Você é um supervisor de manutenção experiente em planta industrial.

# CONTEXTO
Fábrica de eletroportáteis. Preciso padronizar a rota de inspeção do turno em [área — ex.: injetoras].
Pontos que hoje inspecionamos, nas minhas palavras: [liste — ex.: "nível de óleo das unidades
hidráulicas, ruído anormal nas bombas, temperatura dos painéis, vazamento visível nas mangueiras,
estado das proteções"]
Tempo disponível para a rota: [ex.: 40 min no início do turno]

# TAREFA
Organize um roteiro de inspeção sequenciado: ordem lógica de percurso, o que verificar
em cada ponto e o que registrar quando encontrar anormalidade.

# FORMATO
Lista numerada na ordem do percurso: Ponto | O que verificar | Registrar se anormal.
Cabeçalho com turno, data e nome de quem executou (campos em branco).

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
Não acrescente ponto de inspeção que eu não citei — a rota oficial passa pela minha validação.
```

**Como avaliar:** um técnico que nunca fez a rota executa com o papel na mão? Rode 1 semana em paralelo com o jeito atual antes de oficializar.

### PCP

#### Comunicado de replanejamento

**Área:** PCP
**Para quando:** o plano da semana mudou (falta de componente, pedido antecipado) e cada área precisa saber só o que muda para ela.
**Você leva:** comunicado curto por área afetada — sem a planilha inteira anexada.

```text
# PAPEL
Você é um analista de PCP experiente em fábrica de eletroportáteis.

# CONTEXTO
O plano da semana mudou. Fatos (sem preço nem dado de fornecedor):
- Motivo: [ex.: atraso na chegada de componente da linha de ventiladores]
- O que muda: [ex.: ventilador da linha 1 adiado para quinta; batedeira antecipada para terça]
- Áreas afetadas e como: [ex.: montagem remaneja linha 1; almoxarifado inverte abastecimento;
  qualidade ajusta plano de inspeção]

# TAREFA
Escreva o comunicado de replanejamento com uma seção por área afetada — cada uma lê só o seu bloco
e sabe o que fazer.

# FORMATO
Abertura de 2 linhas (o que houve, desde quando) + 1 bloco por área: "O que muda para [área]"
em até 3 linhas cada.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
Não cite fornecedor, preço nem condição de compra — o motivo fica no nível "atraso de componente".
```

**Como avaliar:** cada área entende a sua parte sem abrir a planilha do plano? Se todo mundo te ligou mesmo assim, o bloco por área ficou genérico.

#### Análise de aderência semanal

**Área:** PCP
**Para quando:** fechar a semana comparando planejado × realizado sem passar a sexta-feira montando o resumo.
**Você leva:** resumo de aderência com os desvios que merecem conversa na reunião de planejamento.

```text
# PAPEL
Você é um analista de planejamento de produção experiente.

# CONTEXTO
Fábrica de eletroportáteis. Planejado × realizado da semana (FICTÍCIO — troque pelos seus números):
- linha 1 (liquidificador): plano 10.000 · real 9.400
- linha 2 (air fryer): plano 6.000 · real 6.100
- linha 3 (ventilador): plano 8.000 · real 5.900 (parada de 6h por falta de componente na quarta)
- linha 4 (batedeira): plano 4.000 · real 4.000
Meta de aderência da fábrica: 95%.

# TAREFA
Calcule a aderência por linha e da fábrica, aponte quais desvios são relevantes (fora da meta)
e o que cada desvio sugere verificar para a próxima semana.

# FORMATO
Tabela: Linha | Plano | Real | Aderência % | Relevante? · Fechamento com os 2 pontos
para a reunião de planejamento.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
Confiro todos os percentuais antes de usar. Não atribua causa a desvio que não tem causa anotada — marque como "verificar".
```

**Como avaliar:** recalcule 2 percentuais na mão — bateram? Os "2 pontos para a reunião" são os que você levaria? Número que sobe para relatório, você confere sempre.

### Qualidade

#### Instrução de trabalho para desvio recorrente

**Área:** Qualidade
**Para quando:** o mesmo desvio volta toda semana e a correção vive na cabeça de 2 pessoas — precisa virar padrão escrito.
**Você leva:** rascunho de instrução operacional no padrão ISO, pronto para sua revisão e aprovação formal.

```text
# PAPEL
Você é um analista de qualidade experiente em fábrica certificada ISO 9001.

# CONTEXTO
Desvio recorrente na [área — ex.: montagem]: [descreva sem especificação de produto —
ex.: "etiqueta de identificação aplicada fora da posição, detectada na inspeção final,
3 ocorrências por semana"]. Correção que hoje é feita de boca: [descreva o passo a passo
que os experientes aplicam — ex.: "conferir gabarito antes do lote, reposicionar a bobina,
validar as 5 primeiras peças"]

# TAREFA
Transforme a correção em rascunho de instrução de trabalho: quando aplicar, passo a passo,
como verificar que funcionou e quando escalar para o supervisor.

# FORMATO
4 seções numeradas: Quando aplicar · Passo a passo · Verificação · Escalonamento.
Máximo 1 página, linguagem de posto de trabalho.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
Não cite norma nem código de procedimento — a numeração e o enquadramento no sistema da qualidade são feitos por mim.
```

**Como avaliar:** quem executa a correção hoje lê o rascunho e diz "é isso"? Então segue para o rito formal — a IA rascunhou, o sistema de qualidade aprova.

### Segurança do Trabalho

#### Análise preliminar de risco (APR)

**Área:** Segurança do Trabalho
**Para quando:** uma tarefa não rotineira vai acontecer (manutenção em altura, içamento, serviço a quente) e a APR precisa sair completa.
**Você leva:** rascunho de APR com riscos e medidas organizados — a aprovação continua do técnico de segurança.

```text
# PAPEL
Você é um técnico de segurança do trabalho experiente em indústria de manufatura.

# CONTEXTO
Tarefa não rotineira: [descreva — ex.: "troca de refletores no telhado do galpão de injetoras,
2 pessoas, 4 horas, uso de plataforma elevatória, linha continua operando embaixo"].
Riscos que já identifiquei: [liste os seus — ex.: "queda de altura, queda de material sobre a linha,
contato com rede elétrica"]

# TAREFA
Organize a APR: para cada risco identificado, descreva a consequência possível e as medidas
de controle — e aponte se percebe algum risco típico desta tarefa que eu não listei,
marcado como "sugestão a validar".

# FORMATO
Tabela: Etapa/Risco | Consequência | Medidas de controle · Sugestões a validar em bloco separado.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
Não cite NR nem item de norma — a base legal quem confere e insere sou eu, na fonte.
```

**Como avaliar:** as sugestões da IA ficaram claramente separadas do que você identificou? Cada medida é executável com o que existe na fábrica? A APR só vale com a sua assinatura — e norma se confere na norma.

### Almoxarifado / Remanufatura

#### Registro de discrepância de estoque

**Área:** Almoxarifado / Remanufatura
**Para quando:** o físico não bateu com o sistema e o registro precisa ficar claro para quem for investigar.
**Você leva:** registro factual da discrepância, sem culpado apontado e sem causa inventada.

```text
# PAPEL
Você é um supervisor de almoxarifado experiente em indústria com ERP.

# CONTEXTO
Fábrica de eletroportáteis, controle no ERP (Datasul). Discrepância encontrada (FICTÍCIA —
troque pelos seus dados, sem preço):
- Item: [ex.: trava do copo, código interno genérico]
- Sistema: 1.480 unidades · Físico contado: 1.310 (2 contagens, mesma pessoa não repetiu)
- Última movimentação registrada: [ex.: requisição da linha 3, terça-feira]
- O que já foi verificado: [ex.: "conferi devoluções pendentes e a prateleira de retrabalho — nada"]

# TAREFA
Escreva o registro da discrepância para abrir a investigação: o que foi encontrado, como foi
contado, o que já foi descartado e o que falta verificar.

# FORMATO
4 blocos curtos: Discrepância (números) · Como foi verificado · Hipóteses já descartadas ·
Próximos passos de verificação. Máximo 12 linhas.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
Não sugira causa provável nem responsável — o registro abre a investigação, não conclui.
```

**Como avaliar:** quem pegar a investigação amanhã sabe exatamente o que já foi feito e por onde continuar? Registro bom economiza a segunda contagem.

### Pós-Vendas / ADM. Vendas

#### Resposta a reclamação de assistência técnica

**Área:** Pós-Vendas / ADM. Vendas
**Para quando:** a reclamação chegou irritada e a resposta precisa sair no mesmo dia — firme no processo, respeitosa no tom.
**Você leva:** resposta padronizada que informa prazo e próximo passo sem prometer o que o processo não garante.

```text
# PAPEL
Você é um analista de pós-vendas experiente em fabricante de eletroportáteis.

# CONTEXTO
Reclamação recebida sobre atendimento de assistência técnica (RESUMO desidentificado — sem nome,
telefone ou dado do cliente): [ex.: "produto na assistência há 20 dias, consumidor sem previsão,
já ligou 2 vezes, ameaça registrar no órgão de defesa do consumidor"]
Situação real do caso no processo: [ex.: "peça aguardando reposição, previsão de 7 dias úteis,
assistência autorizada já informada ontem"]
O que posso oferecer: [ex.: "prazo confirmado + retorno ativo nosso em 3 dias"]

# TAREFA
Redija a resposta ao consumidor: reconheça a demora sem se justificar em excesso, informe
a situação real, o prazo e o compromisso de retorno ativo.

# FORMATO
E-mail de até 12 linhas: reconhecimento · situação e prazo · compromisso de retorno ·
canal direto. Tom firme e respeitoso, sem juridiquês.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
Não prometa prazo ou compensação que não estejam no que eu posso oferecer. Não inclua dado pessoal do cliente.
```

**Como avaliar:** a resposta compromete só o que o processo sustenta? Se o consumidor ligar no dia seguinte, o que está escrito se confirma? Então pode enviar.

### Trade Marketing

#### Briefing de ação em ponto de venda

**Área:** Trade Marketing
**Para quando:** a ação de PDV precisa de briefing para o promotor executar igual em toda loja — sem reunião de 1 hora.
**Você leva:** briefing de 1 página que o promotor lê no celular e executa sem te ligar.

```text
# PAPEL
Você é um coordenador de trade marketing experiente em eletroportáteis no varejo.

# CONTEXTO
Ação em ponto de venda (dados FICTÍCIOS — troque pelos seus, sem preço nem condição comercial):
- Produto em destaque: [ex.: linha de air fryer]
- Período e lojas: [ex.: semana do dia 20, 12 lojas da rede X na região metropolitana]
- Objetivo da ação: [ex.: ponto extra montado + demonstração aos sábados]
- Material disponível: [ex.: display de chão, wobbler, 1 unidade de demonstração por loja]
- O que o promotor deve checar e reportar: [ex.: foto do ponto montado, ruptura na gôndola]

# TAREFA
Monte o briefing da ação para os promotores: o que montar, como, quando, o que reportar
e para quem — executável sem ligação de dúvida.

# FORMATO
1 página: Objetivo (2 linhas) · Checklist de montagem · Calendário · O que reportar
(com formato: foto, mensagem) · Contato para imprevisto.

# LIMITAÇÕES
Se faltar informação, pergunte. Não invente.
Não inclua preço, margem nem condição negociada com o varejo — briefing de execução, não comercial.
```

**Como avaliar:** um promotor que nunca fez a ação executa com o briefing no celular? As fotos de reporte chegaram no formato pedido? Briefing bom se mede na segunda-feira seguinte.

---

## Antes de fechar a página

- Prompt usado é prompt salvo: seus 3 melhores são patrimônio seu — guarde onde você acha (notas do celular vale).
- Dúvida sobre o que pode entrar no prompt? Revise os 3 "nunca" e o protocolo completo no [M4 · Usando IA com Segurança](../m4/).
- Esqueceu uma camada do PCTFL? O método completo está no [M2 · Primeiro Prompt](../m2/).

---

[← Início](../) · [Artefatos →](../artefatos/)

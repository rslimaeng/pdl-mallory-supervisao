# M4 · Usando IA com Segurança: LGPD, Dados e Alucinações

**Trilha 1 · Módulo 4 de 6 · 1h**

Por que a IA "inventa" respostas e como usar sem colocar você nem a Mallory em risco.

---

## O contrato deste módulo

**Você ganha:** a lista do que nunca enviar para a IA e um protocolo de validação em 3 passos — curto o bastante para virar hábito.

**Você se compromete a:** fazer o teste do semáforo ao vivo e flagrar uma invenção da IA com os próprios olhos.

**Tempo de leitura desta página:** 10 min

---

## Você entra com → O que acontece → Você sai com

| Você entra com | O que acontece | Você sai com |
|---|---|---|
| Prompts já rodando (M2 e M3) e uma pergunta justa: "até onde posso confiar?" | Você vê a IA inventar ao vivo, aprende por que acontece e treina o protocolo que pega o erro | A lista do que nunca enviar + o protocolo de validação em 3 passos, testados por você |

---

## Por que isso importa aqui dentro

O Supervisor de Qualidade registra uma não-conformidade de lote. O texto vai para o sistema e pode ser lido em auditoria ISO 9001. Se a IA "completar" o registro com uma causa que ninguém apurou, o problema deixou de ser o lote — virou o registro. É este o território do módulo: o que acontece quando o texto fluido da IA encontra documento que vale alguma coisa.

A Mallory está atenta a isso. Circulou pesquisa interna perguntando quem usa IA e que dados compartilha — governança de dados já é assunto de casa, não teoria de treinamento. O que você aprende aqui alinha o seu uso com essa preocupação.

E tem a LGPD: a lei brasileira que protege dado pessoal. Nome, CPF, salário, avaliação, atestado — nada disso pode ir para ferramenta externa sem controle. Quem envia responde, e a empresa junto.

---

## O conceito em 5 pontos

### 1. A IA erra com a mesma cara com que acerta

Ela foi treinada para escrever texto fluido e confiante — não para dizer "não sei". Quando falta informação, ela completa com o que parece plausível. O texto vem bonito, seguro, bem escrito. Confiança da máquina não é evidência de nada. Isso tem nome: alucinação.

### 2. LGPD em 30 segundos

Dado pessoal é qualquer informação que identifica alguém: nome, CPF, telefone, salário, atestado, avaliação. A LGPD diz que a empresa responde pelo que faz com esses dados — inclusive pelo que os funcionários colam em ferramenta externa. Enviar ficha de operador para a IA não é atalho: é incidente.

### 3. A lista do que nunca entra — memorize 3, consulte o resto

As três de cabeça: **gente** (qualquer dado de funcionário), **produto** (especificação, parâmetro de molde, desenho), **contrato** (fornecedor, preço, condição comercial). A lista completa está no callout amarelo desta página. Na dúvida, vale a regra do grupo de WhatsApp: se não postaria num grupo aberto, não cola na IA.

### 4. Protocolo de validação em 3 passos — 30 segundos por resposta

**Fonte:** cada fato da resposta veio do que eu enviei, ou apareceu do nada? **Número:** todo número, data, norma ou nome citado — confere na origem antes de repassar. **Consistência:** bate com o que eu sei do meu setor? Estranhou, checou. Três passos, meio minuto — mais rápido que refazer um registro errado em auditoria.

### 5. Se você não pode conferir, não use

A regra que fecha todas as outras. A IA sugeriu um prazo de norma que você não tem como verificar? Não entra no documento. Para rascunho, ideia e estrutura, use à vontade — o risco é zero porque você revisa. Para fato que você não domina, a IA não é fonte. Fonte é a norma, o sistema, o registro.

---

## Quando aplicar / Quando NÃO aplicar

| 🟢 Uso seguro | 🔴 Uso arriscado |
|---|---|
| Rascunhar registro de não-conformidade com dados que você confere | Deixar a IA "completar" a causa-raiz que ninguém apurou |
| Organizar texto de ocorrência a partir das suas anotações | Colar ficha, atestado ou avaliação de funcionário no prompt |
| Pedir estrutura de checklist e preencher você mesmo os critérios | Usar norma, prazo ou parâmetro citado pela IA sem conferir na fonte |
| Treinar com dado fictício antes de usar no processo real | Enviar especificação de produto ou desenho de molde para ferramenta externa |

---

## Prompt-âncora do módulo

Registro de não-conformidade — a demonstração de como usar IA em documento sério **sem expor dado real**. Os dados abaixo são fictícios de propósito:

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

Repare no que o prompt faz: entrega todos os fatos, proíbe a causa-raiz e trava a invenção. No uso real, você troca os dados fictícios pelos seus — e o registro continua sendo assinado por você.

---

## Exercício

### Camada 1 — Básico (todos · 10-15 min)

**Objetivo:** treinar o semáforo (pode / não pode) e o protocolo de 3 passos.

**Passo a passo:**
1. Classifique as 8 situações abaixo em 🟢 pode ou 🔴 não pode — 30 segundos cada, no papel:
   1. Colar suas anotações de parada de linha para virar relatório
   2. Colar a escala do time com nomes para a IA "otimizar"
   3. Pedir a estrutura de um checklist de inspeção
   4. Colar o parâmetro de injeção do molde novo para "documentar"
   5. Pedir para reescrever um comunicado seu com tom mais claro
   6. Perguntar o prazo legal de guarda de um documento e usar direto
   7. Resumir um procedimento interno sem dados de pessoas
   8. Colar o contrato do fornecedor para a IA "achar o problema"
2. Confira em dupla. Gabarito: 🟢 1, 3, 5, 7 · 🔴 2, 4, 6, 8.
3. Rode o prompt-âncora no celular. Aplique o protocolo: fonte · número · consistência.

**Resultado esperado:** 8 classificações conferidas + 1 registro fictício gerado e validado.

**Como avaliar:** errou alguma do semáforo? Volte na lista dos 3 "nunca" (gente, produto, contrato) e refaça o raciocínio — o item 6 é o mais traiçoeiro: o problema não é perguntar, é usar sem conferir.

### Camada 2 — Desafio (para quem terminou · +10-15 min)

**Objetivo:** flagrar uma alucinação com os próprios olhos.

**Passo a passo:**
1. Pergunte à IA algo específico da Mallory que ela não tem como saber: "Qual o procedimento de segregação de lote da Mallory Eletroportáteis?"
2. Observe a resposta. Ela disse "não tenho essa informação" — ou descreveu um procedimento plausível e confiante?
3. Agora peça um número: "Qual NR trata de trabalho em prensas e qual o item exato sobre proteção?" Anote a resposta e marque o que precisaria conferir na fonte.
4. Escreva em 2 linhas: como essa resposta enganaria alguém com pressa?

**Resultado esperado:** pelo menos 1 resposta confiante que você não aceitaria sem verificação — vista ao vivo.

**Como avaliar:** se você consegue apontar na resposta o trecho que parece fato mas não tem fonte, o módulo cumpriu a promessa.

---

## Os 3 erros mais comuns

| Erro | Sintoma | Causa | Como corrigir |
|---|---|---|---|
| Confiar no texto bem escrito | "Veio tão certinho que nem li direito" — e o erro passou | Fluência parece competência; a IA é sempre fluente | Protocolo de 3 passos em toda resposta que vira documento |
| "É só desta vez" com dado real | Colou o nome, a especificação, o contrato — porque tinha pressa | Exceção de hoje vira hábito de amanhã | Os 3 "nunca" não têm exceção. Desidentifique ou não use |
| Terceirizar a culpa | "Foi a IA que errou" no registro que você assinou | Esquecer que a IA rascunha e você responde | O nome no documento é o seu. Revisar não é opcional |

---

> ⚠️ **Anti-alucinação — o protocolo completo (leve esta página)**
>
> **Por que existe:** em *Mata v. Avianca* (2023), advogados entregaram à Justiça americana uma petição com 6 decisões judiciais que o ChatGPT inventou — nomes de casos, números de processo, citações, tudo plausível e tudo falso. Foram multados e viraram o exemplo mundial do erro. Não foi má-fé: foi confiar sem verificar. Mesmo ferramentas que leem seus documentos erram — estudos de Stanford (2025) mediram 17–33% de erro em sistemas desse tipo.
>
> **Nunca envie para a IA:**
> - Dados de **funcionários** — nome, CPF, salário, atestado, avaliação, escala com nomes
> - **Especificações de produto** — parâmetro de molde e injetora, desenho técnico, fórmula, dado de processo
> - **Contratos e comercial** — contrato de fornecedor, preço, condição, proposta
> - Dados de **clientes** — cadastro, reclamação com identificação, histórico
> - Qualquer documento marcado como confidencial ou de circulação restrita
>
> **Sempre valide antes de usar (3 passos · 30 segundos):**
> 1. **Fonte** — cada fato veio do que você enviou, ou apareceu do nada?
> 2. **Número** — todo número, data, norma e nome, conferido na origem
> 3. **Consistência** — bate com o que você sabe do seu setor? Estranhou, checou
>
> **A regra que fecha tudo:** se você não pode conferir, não use. E se a IA respondeu com confiança algo que você não sabia — desconfie em dobro.

---

> 🟣 **Marco: o que você leva para a Mallory na 2ª feira**
> Até sexta-feira, aplique o protocolo de 3 passos em 1 resposta de IA que você usou de verdade — e apresente a lista dos 3 "nunca" (gente, produto, contrato) para o seu time em 5 minutos, no DDS ou na passagem de turno.
> Como saber que aconteceu: o time ouviu a lista, e você sabe dizer o que conferiu no protocolo.

---

[← M3 · IA no Seu Setor](../m3/) · [M5 · IA para Comunicação, Documentação e Análise →](../m5/)

[Banco de Prompts](../banco-de-prompts/) · [Artefatos](../artefatos/)

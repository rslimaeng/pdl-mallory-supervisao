/* IA na Prática · Mallory — Trilha 1
   JS mínimo: botão Copiar, menu mobile, scroll suave em âncoras.
   Sem dependências, sem analytics, sem tracking. */

(function () {
  'use strict';

  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Botão Copiar (cards de prompt) ---------- */

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    // Fallback para contextos sem Clipboard API (ex.: file:// em navegador antigo)
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy') ? resolve() : reject();
      } catch (e) {
        reject(e);
      } finally {
        document.body.removeChild(ta);
      }
    });
  }

  document.querySelectorAll('.btn-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var box = btn.closest('.prompt-box');
      var pre = box && box.querySelector('pre');
      if (!pre) return;
      copyText(pre.textContent.trim()).then(function () {
        var original = btn.textContent;
        btn.textContent = 'Copiado!';
        btn.classList.add('copied');
        window.setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove('copied');
        }, 2000);
      });
    });
  });

  /* ---------- 2. Menu mobile ---------- */

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && e.target !== toggle) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    });
  }

  /* ---------- 3. Scroll suave para âncoras internas ---------- */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (e) {
      var id = link.getAttribute('href').slice(1);
      var target = id && document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });

  /* ---------- 5. Accordion "3 modos" (um aberto por vez) ---------- */

  document.querySelectorAll('.modos-accordion').forEach(function (root) {
    var cards = root.querySelectorAll('.modo-card');
    cards.forEach(function (card) {
      var header = card.querySelector('.modo-header');
      if (!header) return;
      header.addEventListener('click', function () {
        var isOpen = card.classList.contains('open');
        cards.forEach(function (c) {
          c.classList.remove('open');
          var h = c.querySelector('.modo-header');
          if (h) h.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          card.classList.add('open');
          header.setAttribute('aria-expanded', 'true');
        }
      });
      header.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); header.click(); }
      });
    });
  });

  /* ---------- 6. Tabs do exercício (lembra última aberta) ---------- */

  document.querySelectorAll('.tabs-exercicio').forEach(function (root) {
    var buttons = root.querySelectorAll('.tab-button');
    var panels = root.querySelectorAll('.tab-panel');
    buttons.forEach(function (btn, i) {
      btn.addEventListener('click', function () {
        buttons.forEach(function (b) { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        panels.forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        if (panels[i]) panels[i].classList.add('active');
        try { localStorage.setItem(root.dataset.tabsKey || 'tabs-exercicio', String(i)); } catch (e) {}
      });
    });
    try {
      var saved = parseInt(localStorage.getItem(root.dataset.tabsKey || 'tabs-exercicio'), 10);
      if (!isNaN(saved) && buttons[saved]) buttons[saved].click();
    } catch (e) {}
  });

  /* ---------- 7. Checkboxes com localStorage ---------- */

  document.querySelectorAll('.action-check').forEach(function (label) {
    var key = label.dataset.key;
    if (!key) return;
    var checkbox = label.querySelector('input[type="checkbox"]');
    if (!checkbox) return;

    function markContainer(el, done) {
      var container = el.closest('.card-prompt, .callout-marco');
      if (container) container.classList.toggle('done', done);
    }

    try {
      if (localStorage.getItem(key) === '1') {
        checkbox.checked = true;
        label.classList.add('checked');
        markContainer(label, true);
      }
    } catch (e) {}

    checkbox.addEventListener('change', function () {
      var v = checkbox.checked;
      label.classList.toggle('checked', v);
      markContainer(label, v);
      try { localStorage.setItem(key, v ? '1' : '0'); } catch (e) {}
    });
  });

  /* ---------- 8. Explorador dos 7 níveis (goal 5f) ---------- */

  var NIVEIS_ORDEM = ['pre-1', 'N1', 'N2', 'N3', 'N4', 'N5', 'N6', 'N7'];
  var NIVEIS = {
    'pre-1': {
      badge: 'pré-1', kicker: 'ANTES DO COMEÇO', nome: 'A Pré-Exploradora',
      frase: 'Nunca usou IA generativa — é onde você está hoje',
      aqui: 'Você nunca abriu o Claude, ChatGPT ou Gemini para resolver algo de verdade do seu trabalho. Talvez tenha ouvido falar, visto vídeo, mas não foi pra ferramenta. É o ponto de partida da maioria dos supervisores e gestores que ainda não tiveram contato com IA generativa aplicada.',
      define: 'Pré-1 não é "atrasado" — é anterior. Você domina seu trabalho há anos. O que falta é atravessar a primeira fronteira: abrir a ferramenta e escrever uma pergunta real. A boa notícia é que pra você, o ganho de aprender é o maior — cada coisa que descobre é nova.',
      ferramenta: 'Ainda nenhuma — pra estrear no treinamento',
      proximo: 'Antes do treinamento: abra claude.ai (ou chatgpt.com), digite UMA pergunta sobre algo do seu trabalho, leia a resposta e feche. Sem pressão de fazer certo — só pra atravessar a primeira fronteira.'
    },
    'N1': {
      badge: 'N1', kicker: 'PRIMEIROS PASSOS', nome: 'Curioso',
      frase: 'Abre a IA de vez em quando — sem método',
      aqui: 'Você já abriu Claude, ChatGPT ou Gemini algumas vezes. Perguntou algo, leu, fechou. Talvez não tenha achado útil, talvez tenha achado interessante mas não incorporou. Não faz parte da sua semana ainda.',
      define: 'Ausência de método. A ferramenta é usada como Google — pergunta curta, resposta que veio, decisão. Sem contexto, sem estrutura, sem repetição. É o nível majoritário de profissionais no Brasil em 2026.',
      ferramenta: 'Claude ou ChatGPT no navegador · uso esporádico',
      proximo: 'Escolha 1 tarefa da sua semana que envolve texto (relatório, comunicado, resumo). Rode uma vez com prompt PCTFL (Papel + Contexto + Tarefa + Formato + Limitações). Compare com o que você fez sem IA. Anote a diferença.'
    },
    'N2': {
      badge: 'N2', kicker: 'META DA TRILHA 1', nome: 'Prompter consciente',
      frase: 'Pensa antes de perguntar — usa estrutura',
      aqui: 'Você já usa IA no trabalho e percebeu: o jeito de pedir muda a resposta. Aplica PCTFL de forma consistente, testa variações, guarda os prompts que funcionaram. A IA parou de ser roleta.',
      define: 'Método antes de execução. Cada prompt é pensado. Contexto é dado, formato é especificado, limitações são explícitas. É a meta pedagógica da Trilha 1 (supervisores) — e o ponto de partida realista da Trilha 2 (gestores).',
      ferramenta: 'Claude ou ChatGPT · biblioteca pessoal de 5-10 prompts que funcionam',
      proximo: 'Nas próximas 2 semanas, transforme 3 tarefas recorrentes suas em prompts PCTFL prontos. Guarde em documento seu (Google Docs, Notion, papel). Isso é sua biblioteca inicial — patrimônio.'
    },
    'N3': {
      badge: 'N3', kicker: 'META DA TRILHA 2', nome: 'Operador com contexto',
      frase: 'Contexto salvo — IA sabe quem você é',
      aqui: 'Você tem seu perfil/contexto salvo na ferramenta — quem você é, sua função, tom de voz, coisas que sempre e nunca fazer. A IA não te trata como estranho a cada conversa. Suas respostas já saem calibradas.',
      define: 'Contexto persistente. A IA vira colega treinada, não estranha. Pra gestor, é onde a produtividade dá salto — respostas específicas da sua área saem de primeira. É a meta pedagógica da Trilha 2 (gestão).',
      ferramenta: 'Claude Projects · ChatGPT Custom Instructions · CLAUDE.md em workstation Cowork',
      proximo: 'Escreva 1 página com contexto seu: função, área, tom de voz, 3 coisas que sempre fazer, 3 nunca. Configure em Claude Projects ou ChatGPT Custom Instructions. Teste com 3 prompts que você já usava — respostas mudam?'
    },
    'N4': {
      badge: 'N4', kicker: 'HORIZONTE T2 (via Cowork no M5)', nome: 'Orquestrador de ferramentas',
      frase: '3+ ferramentas, sabe qual pra qual caso',
      aqui: 'Você usa 3 ou mais ferramentas de IA e sabe qual escolher para cada tipo de tarefa. Não é loyalty à ferramenta — é fluência no ecossistema. Cada uma tem seu ponto forte, você conhece.',
      define: 'Discernimento entre ferramentas. Claude pra escrita nuançada, ChatGPT pra brainstorm rápido, Copilot pra código, Gemini pra pesquisa com fontes. Não gasta tempo escolhendo — decide na hora.',
      ferramenta: 'Claude Pro + ChatGPT Plus + Microsoft Copilot + Gemini · uso diário orquestrado',
      proximo: 'Faça um levantamento das ferramentas que você tem acesso. Para cada uma, teste 1 caso onde ela é forte (Claude: redação; ChatGPT: brainstorm; Copilot: código; Gemini: pesquisa). Registre por escrito quando escolher qual.'
    },
    'N5': {
      badge: 'N5', kicker: 'TERRITÓRIO AVANÇADO', nome: 'Construtor de processos',
      frase: 'Automação/skill viva rodando sem toque',
      aqui: 'Você construiu pelo menos 1 automação ou skill de IA que roda sem sua intervenção passo a passo. Uma workstation Cowork configurada, um workflow n8n com IA, uma skill Claude — algo que economiza horas por semana automaticamente.',
      define: 'Sai de uso pra construção. Não usa IA — constrói com IA. Sua produtividade não é linear no tempo que você investe. Você é referência interna começando.',
      ferramenta: 'Claude Cowork workstation com CLAUDE.md · n8n workflows com IA · Claude Skills',
      proximo: 'Explore o terminal. Instale Claude Code (guia oficial). Comece por tarefas simples: renomear arquivos, resumir documentos locais em lote. Meta 30 dias: 1 tarefa hoje manual, feita via terminal.'
    },
    'N6': {
      badge: 'N6', kicker: 'FRONTEIRA PRÁTICA', nome: 'Builder',
      frase: 'Terminal, arquivos, sistemas construídos',
      aqui: 'Você trabalha com IA no terminal, opera arquivos locais, constrói pequenos sistemas com Claude. Não é engenheiro de software — é profissional de negócios que aprendeu a operar na fronteira. Entrega em horas o que times inteiros levam semanas.',
      define: 'Fluência técnica sem ser dev. Claude Code, Cowork em nível avançado, scripts que a IA edita. Você entrega em horas o que times inteiros levam semanas. Na Mallory hoje, quase ninguém está aqui.',
      ferramenta: 'Claude Code · Cowork avançado · GitHub · scripts customizados',
      proximo: 'Explore agentes múltiplos: um agente pra pesquisa, outro pra redação, outro pra validação. Orquestre juntos numa cadeia. Meta 60 dias: workforce de 3 agentes cobrindo uma cadeia inteira da sua rotina.'
    },
    'N7': {
      badge: 'N7', kicker: 'FRONTEIRA ABSOLUTA', nome: 'Workforce de agentes',
      frase: 'Múltiplos agentes em paralelo — fronteira',
      aqui: 'Você tem uma força de trabalho de agentes. Múltiplos LLMs, cada um com seu papel, seu contexto, sua responsabilidade — rodando em paralelo enquanto você orquestra. Menos de 0,1% dos profissionais no mundo em 2026 estão aqui.',
      define: 'Você não usa IA — você emprega IA. Sua força é decidir quem faz o quê, revisar o que sai e ajustar o sistema. É pesquisa de ponta aplicada ao trabalho.',
      ferramenta: 'Multi-agent orchestration · Claude Sonnet + Opus + Haiku em pipeline · MCP customizado',
      proximo: 'Você chegou onde ninguém chegou. Documente o que você faz — vai virar referência para os próximos. Considere compartilhar sua arquitetura com o time da Mallory. Continue evoluindo: o campo muda rápido, e você está na linha de frente.'
    }
  };

  document.querySelectorAll('.niveis-explorer').forEach(function (root) {
    var tabs = root.querySelectorAll('.nivel-tab');
    var card = root.querySelector('.nivel-card');
    if (!card || !tabs.length) return;

    function render(key) {
      var n = NIVEIS[key];
      if (!n) return;
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-nivel') === key;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      var idx = NIVEIS_ORDEM.indexOf(key);
      var isLast = idx === NIVEIS_ORDEM.length - 1;
      card.innerHTML =
        '<div class="nivel-card-header">' +
          '<span class="nivel-badge">' + n.badge + '</span>' +
          '<div class="nivel-titulo-wrap">' +
            '<span class="nivel-kicker">' + n.kicker + '</span>' +
            '<h3 class="nivel-nome">' + n.nome + '</h3>' +
            '<p class="nivel-frase">' + n.frase + '</p>' +
          '</div>' +
        '</div>' +
        '<div class="nivel-card-body">' +
          '<div class="nivel-bloco"><h4>Você está aqui se...</h4><p>' + n.aqui + '</p></div>' +
          '<div class="nivel-bloco"><h4>O que define este nível</h4><p>' + n.define + '</p></div>' +
          '<div class="nivel-bloco"><h4>Ferramentas típicas</h4><span class="nivel-ferramenta">' + n.ferramenta + '</span></div>' +
          '<div class="nivel-proximo"><h4>Próximo passo concreto</h4><p>' + n.proximo + '</p></div>' +
        '</div>' +
        '<div class="nivel-card-footer">' +
          '<button class="btn-proximo-nivel" type="button">' + (isLast ? 'voltar ao início ↺' : 'próximo →') + '</button>' +
        '</div>';
      if (!reducedMotion) { card.classList.remove('fade'); void card.offsetWidth; card.classList.add('fade'); }
      var btn = card.querySelector('.btn-proximo-nivel');
      if (btn) btn.addEventListener('click', function () {
        var next = isLast ? NIVEIS_ORDEM[0] : NIVEIS_ORDEM[idx + 1];
        select(next);
      });
    }

    function select(key) {
      render(key);
      try { localStorage.setItem('m1-nivel-atual', key); } catch (e) {}
    }

    tabs.forEach(function (t) {
      t.addEventListener('click', function () { select(t.getAttribute('data-nivel')); });
    });

    var start = 'pre-1';
    try { var s = localStorage.getItem('m1-nivel-atual'); if (s && NIVEIS[s]) start = s; } catch (e) {}
    render(start);
  });

  /* ---------- 9. Matriz IA generativa · clique troca a legenda (goal 6a3 §1.2) ---------- */

  function initMatrizIA() {
    var matriz = document.querySelector('.matriz-ia');
    if (!matriz) return;
    var caixas = matriz.querySelectorAll('.caixa[data-nivel]');
    var blocos = matriz.querySelectorAll('.legenda-bloco[data-nivel]');
    function ativar(nivel) {
      caixas.forEach(function (c) {
        var on = c.dataset.nivel === nivel;
        c.classList.toggle('caixa-ativa', on);
        c.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      blocos.forEach(function (b) { b.hidden = (b.dataset.nivel !== nivel); });
    }
    caixas.forEach(function (caixa) {
      caixa.addEventListener('click', function (e) { e.stopPropagation(); ativar(caixa.dataset.nivel); });
      caixa.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); ativar(caixa.dataset.nivel); }
      });
    });
  }
  initMatrizIA();

  /* ---------- 9b. WYSIATI · hover na zona destaca a linha da tabela (goal 6a3 §1.3) ---------- */

  function initWysiatiHover() {
    var wysiati = document.querySelector('.wysiati');
    if (!wysiati) return;
    var zonas = wysiati.querySelectorAll('.zona[class*="zona-"]');
    var linhas = wysiati.querySelectorAll('.wysiati__tabela tr[data-zona]');
    function destacar(n) { linhas.forEach(function (l) { l.classList.toggle('destacada', l.dataset.zona === String(n)); }); }
    function limpar() { linhas.forEach(function (l) { l.classList.remove('destacada'); }); }
    zonas.forEach(function (zona) {
      var m = zona.className.match(/zona-(\d)/); if (!m) return;
      var n = m[1];
      zona.addEventListener('mouseenter', function (e) { e.stopPropagation(); destacar(n); });
      zona.addEventListener('mouseleave', function (e) {
        var rel = e.relatedTarget && e.relatedTarget.closest && e.relatedTarget.closest('.zona');
        if (!rel) limpar();
        else { var rm = rel.className.match(/zona-(\d)/); if (rm) destacar(rm[1]); }
      });
      zona.addEventListener('focus', function () { destacar(n); });
      zona.addEventListener('blur', limpar);
      zona.setAttribute('tabindex', '0');
    });
  }
  initWysiatiHover();

  /* ---------- 9c. Explorador dos 3 modos · substitui o simulador (goal 6a3 §1.4) ---------- */

  function initExploradorModos() {
    var explorador = document.querySelector('.modos-explorador');
    if (!explorador) return;
    var cards = explorador.querySelectorAll('.explorador-card');
    var painel = explorador.querySelector('.explorador-painel');
    var MODOS = {
      autopiloto: {
        titulo: 'Autopiloto — IA executa, você revisa',
        modo: 'Tarefa repetitiva que segue sempre o mesmo padrão. Você define uma vez, a IA executa, você revisa a saída. Baixo risco, alto ganho de tempo.',
        exemplo: 'Organizar uma pasta com 200 arquivos por tipo e data. A IA classifica, renomeia, cria subpastas. Você abre no fim e confere se ficou como queria.',
        naoUsar: 'Quando o caso é único e exige julgamento novo. Autopiloto vale pro repetitivo — o excepcional pede olho humano.'
      },
      colaboracao: {
        titulo: 'Colaboração — IA e você juntos',
        modo: 'Você conduz, a IA apoia. Você dá o contexto que só quem trabalha aqui tem, ela rascunha e propõe; você critica e decide. Risco médio, ganho em qualidade.',
        exemplo: 'Redigir um comunicado explicando uma mudança pra equipe. A IA sugere a estrutura, você ajusta o tom pro seu time — porque só você conhece o time.',
        naoUsar: 'Quando você quer resposta pronta sem revisar. Colaboração exige que você conduza. Se você largar a rédea, sai genérico.'
      },
      manual: {
        titulo: 'Manual — Só você decide',
        modo: 'Território seu. A IA no máximo dá referência; a decisão, o registro e a responsabilidade continuam com você. Alto impacto, autoria autoral.',
        exemplo: 'Decidir se um colaborador leva advertência formal ou conversa reservada. A IA fica fora — é seu julgamento, seu peso, sua responsabilidade.',
        naoUsar: 'Manual não tem "quando não usar". Se a decisão envolve pessoa, sinal físico ou assinatura sua, é sempre Manual.'
      }
    };
    function render(m) {
      var d = MODOS[m]; if (!d) return;
      cards.forEach(function (c) { c.setAttribute('aria-pressed', c.dataset.modo === m ? 'true' : 'false'); });
      painel.innerHTML =
        '<div class="explorador-conteudo">' +
          '<h4 class="explorador-titulo">' + d.titulo + '</h4>' +
          '<dl>' +
            '<dt>O modo</dt><dd>' + d.modo + '</dd>' +
            '<dt>Exemplo</dt><dd>' + d.exemplo + '</dd>' +
            '<dt>Quando NÃO usar</dt><dd>' + d.naoUsar + '</dd>' +
          '</dl>' +
        '</div>';
      try { localStorage.setItem('m1-explorador-modo', m); } catch (e) {}
    }
    cards.forEach(function (card) { card.addEventListener('click', function () { render(card.dataset.modo); }); });
    try { var u = localStorage.getItem('m1-explorador-modo'); if (u && MODOS[u]) render(u); } catch (e) {}
  }
  initExploradorModos();

  /* ---------- 11. Modal do autodiagnóstico (goal 5f) ---------- */

  document.querySelectorAll('.autodiagnostico-modal').forEach(function (modal) {
    var opener = document.getElementById('abrir-autodiagnostico');
    var lastFocus = null;

    function focusables() {
      return modal.querySelectorAll('button:not([hidden]), iframe, [href], input, [tabindex]:not([tabindex="-1"])');
    }
    function open() {
      lastFocus = document.activeElement;
      modal.hidden = false;
      document.body.classList.add('modal-open');
      var closeBtn = modal.querySelector('.modal-close');
      if (closeBtn) closeBtn.focus();
    }
    function close() {
      modal.hidden = true;
      document.body.classList.remove('modal-open');
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    if (opener) opener.addEventListener('click', open);
    modal.querySelectorAll('[data-close]').forEach(function (el) {
      el.addEventListener('click', close);
    });
    document.addEventListener('keydown', function (e) {
      if (modal.hidden) return;
      if (e.key === 'Escape') { e.preventDefault(); close(); }
      if (e.key === 'Tab') {
        var f = focusables();
        if (!f.length) return;
        var first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  });

  /* ---------- 12. Accordion Delegação × Estruturação (goal 6a §8, só T2) ---------- */

  (function initAccordionFamilias() {
    var headers = document.querySelectorAll('.familia-header');
    if (!headers.length) return;
    headers.forEach(function (h) {
      h.addEventListener('click', function () {
        var expanded = h.getAttribute('aria-expanded') === 'true';
        headers.forEach(function (other) {
          other.setAttribute('aria-expanded', 'false');
          var b = document.getElementById(other.getAttribute('aria-controls'));
          if (b) b.hidden = true;
          var item = other.closest('.familia-item');
          if (item) item.removeAttribute('data-open');
        });
        if (!expanded) {
          h.setAttribute('aria-expanded', 'true');
          var body = document.getElementById(h.getAttribute('aria-controls'));
          if (body) body.hidden = false;
          var self = h.closest('.familia-item');
          if (self) self.setAttribute('data-open', 'true');
        }
      });
    });
    var primeira = document.querySelector('.familia-item[data-familia="delegacao"] .familia-header');
    if (primeira && primeira.getAttribute('aria-expanded') === 'true') {
      var body = document.getElementById(primeira.getAttribute('aria-controls'));
      if (body) body.hidden = false;
      var item = primeira.closest('.familia-item');
      if (item) item.setAttribute('data-open', 'true');
    }
  })();

  /* ---------- 13. Gerador PCTFL inline (goal 6b §4/§5) ---------- */

  (function initGeradorPCTFL() {
    var gerador = document.querySelector('.gerador-pctfl');
    if (!gerador) return;

    var modo = gerador.getAttribute('data-modo') || 't1';
    var preview = gerador.querySelector('#pctfl-preview');
    var campos = gerador.querySelectorAll('.gerador-campo textarea');
    var STORAGE_KEY = 'm2-gerador-pctfl-' + modo;

    // Padrão único de 6 elementos (goal 6a3 §3.1): PCTFL + Critério de Sucesso. Critério Negativo saiu.
    // data-modo permanece só pra escolher o exemplo canônico (DDS × briefing) e a chave de localStorage.
    var TEMPLATE = [
      { chave: 'papel', label: '# PAPEL' },
      { chave: 'contexto', label: '# CONTEXTO' },
      { chave: 'tarefa', label: '# TAREFA' },
      { chave: 'formato', label: '# FORMATO' },
      { chave: 'limites', label: '# LIMITAÇÕES' },
      { chave: 'sucesso', label: '# CRITÉRIO DE SUCESSO' }
    ];

    var EXEMPLOS = {
      t1: {
        papel: 'Você é um técnico de segurança do trabalho experiente em fábrica de eletroportáteis.',
        contexto: 'Vou conduzir o DDS (Diálogo Diário de Segurança) de segunda-feira na área de montagem. Tema: uso correto de EPI — luvas e óculos. Motivo: na semana passada houve 2 registros de operadores sem óculos na bancada de rebarbação. Equipe: 14 pessoas, turno da manhã. Já falamos deste tema no mês passado — não pode ficar repetitivo.',
        tarefa: 'Escreva o roteiro do DDS de no máximo 5 minutos de fala, com uma pergunta para abrir conversa com o time e um fechamento que peça compromisso prático.',
        formato: '3 blocos: Abertura (com a pergunta) · Mensagem central (com exemplo concreto) · Fechamento (com o compromisso). Máximo 20 linhas. Linguagem falada, direta.',
        limites: 'Se faltar informação, pergunte. Não invente.\nNão cite norma ou número de NR — se precisar, eu confirmo na fonte e acrescento.',
        sucesso: 'Consigo apresentar o DDS em 5 minutos sem ler, e o time entende o compromisso final sem perguntar de novo.'
      },
      t2: {
        papel: 'Você é um controller sênior com experiência em indústria de manufatura no Brasil.',
        contexto: 'Fechamento de junho de uma fabricante de eletroportáteis. Dados FICTÍCIOS do meu resumo:\n- Orçado total: R$ 8,2 mi · Realizado: R$ 8,9 mi (desvio +8,5%)\n- Frete: orçado R$ 620 mil, realizado R$ 840 mil (3º mês seguido acima)\n- Energia: orçado R$ 410 mil, realizado R$ 465 mil (bandeira, pontual)\n- Manutenção: orçado R$ 380 mil, realizado R$ 510 mil (parada não programada da injetora 7)\n- Demais rubricas dentro de ±2%',
        tarefa: 'Redija o briefing de desvios para a reunião de diretoria: separe desvio estrutural de pontual, explique o direcionador de cada um e sugira 1 ação por desvio relevante.',
        formato: '1 página: parágrafo de abertura com o número total e a mensagem central · tabela (Rubrica | Desvio | Estrutural ou Pontual | Direcionador | Ação sugerida) · fechamento com os 2 pontos que exigem decisão da diretoria.',
        limites: 'Se faltar informação, pergunte. Não invente.\nUse apenas os números do contexto — não crie projeção que os dados não sustentam.',
        sucesso: 'A diretoria decide sobre os 2 pontos finais sem abrir o relatório completo.'
      }
    };

    function render() {
      var linhas = TEMPLATE.map(function (item) {
        var textarea = gerador.querySelector('[data-campo="' + item.chave + '"]');
        var valor = textarea && textarea.value.trim() ? textarea.value : '[preencha ao lado]';
        return item.label + '\n' + valor;
      });
      preview.textContent = linhas.join('\n\n');
      salvar();
    }

    function salvar() {
      var estado = {};
      campos.forEach(function (t) { estado[t.getAttribute('data-campo')] = t.value; });
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(estado)); } catch (e) {}
    }

    function restaurar() {
      try {
        var raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;
        var estado = JSON.parse(raw);
        campos.forEach(function (t) {
          var k = t.getAttribute('data-campo');
          if (estado[k]) t.value = estado[k];
        });
      } catch (e) {}
    }

    function carregarExemplo() {
      var exemplo = EXEMPLOS[modo];
      campos.forEach(function (t) {
        var k = t.getAttribute('data-campo');
        if (exemplo[k]) t.value = exemplo[k];
      });
      render();
    }

    function limpar() {
      campos.forEach(function (t) { t.value = ''; });
      render();
    }

    function copiar() {
      var texto = preview.textContent;
      function feedback() {
        preview.classList.add('pctfl-copiado');
        setTimeout(function () { preview.classList.remove('pctfl-copiado'); }, 1200);
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(texto).then(feedback).catch(function () { selecionar(); });
      } else {
        selecionar();
      }
    }

    function selecionar() {
      var range = document.createRange();
      range.selectNode(preview);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }

    restaurar();
    render();
    campos.forEach(function (t) { t.addEventListener('input', render); });
    var btnCarregar = gerador.querySelector('[data-acao="carregar"]');
    var btnLimpar = gerador.querySelector('[data-acao="limpar"]');
    var btnCopiar = gerador.querySelector('[data-acao="copiar"]');
    if (btnCarregar) btnCarregar.addEventListener('click', carregarExemplo);
    if (btnLimpar) btnLimpar.addEventListener('click', limpar);
    if (btnCopiar) btnCopiar.addEventListener('click', copiar);
  })();

  /* ---------- 14. Entregável-list com localStorage (goal 6b §7) ---------- */

  (function initEntregavelList() {
    var listas = document.querySelectorAll('.entregavel-list[data-storage-key]');
    listas.forEach(function (lista) {
      var key = lista.getAttribute('data-storage-key');
      try {
        var estado = JSON.parse(localStorage.getItem(key) || '{}');
        lista.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
          if (estado[cb.getAttribute('data-item')]) cb.checked = true;
        });
      } catch (e) {}
      lista.addEventListener('change', function () {
        var estado = {};
        lista.querySelectorAll('input[type="checkbox"]').forEach(function (cb) {
          if (cb.checked) estado[cb.getAttribute('data-item')] = true;
        });
        try { localStorage.setItem(key, JSON.stringify(estado)); } catch (e) {}
      });
    });
  })();
})();

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

  /* ---------- 4. IA aninhada — hover/foco das camadas atualiza descrição ---------- */

  document.querySelectorAll('.ia-aninhada').forEach(function (root) {
    var circles = root.querySelectorAll('.ia-aninhada-svg circle[data-layer]');
    var desc = root.querySelector('.ia-aninhada-desc');
    var titleEl = desc && desc.querySelector('strong');
    var textEl = desc && desc.querySelector('.desc-text');

    function updateDesc(c) {
      if (!desc) return;
      circles.forEach(function (o) { o.classList.remove('active'); });
      c.classList.add('active');
      if (titleEl) titleEl.textContent = c.getAttribute('data-title') || '';
      if (textEl) textEl.textContent = c.getAttribute('data-desc') || '';
    }

    circles.forEach(function (c) {
      c.setAttribute('tabindex', '0');
      c.addEventListener('mouseenter', function () { updateDesc(c); });
      c.addEventListener('focus', function () { updateDesc(c); });
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

  /* ---------- 9. Simulador dos 3 modos (goal 5f) ---------- */

  document.querySelectorAll('.modos-simulador').forEach(function (root) {
    var dados = window.M1_SIMULADOR;
    if (!dados) return;
    var input = root.querySelector('#simulador-tarefa');
    var opcoes = root.querySelectorAll('.simulador-opcao');
    var out = root.querySelector('.simulador-resultado');
    if (!out || !opcoes.length) return;

    function render(modo) {
      var d = dados[modo];
      if (!d) return;
      opcoes.forEach(function (o) { o.classList.toggle('selected', o.getAttribute('data-modo') === modo); });
      var tarefa = (input && input.value.trim()) || '';
      var box = document.createElement('div');
      box.className = 'resultado-box modo-' + modo;
      box.innerHTML =
        '<p class="resultado-titulo">' + d.titulo + '</p>' +
        '<dl>' +
          '<dt>O modo</dt><dd>' + d.modo + '</dd>' +
          '<dt>Exemplo Mallory canônico</dt><dd>' + d.exemplo + '</dd>' +
        '</dl>' +
        '<div class="resultado-alerta"><strong>Sinal de alerta:</strong> <span class="alerta-texto"></span></div>' +
        '<button class="btn-testar-outro" type="button">Testar outro modo</button>';
      var alertaEl = box.querySelector('.alerta-texto');
      if (alertaEl) {
        if (tarefa) {
          alertaEl.appendChild(document.createTextNode('Sua tarefa "'));
          var strong = document.createElement('strong');
          strong.textContent = tarefa;
          alertaEl.appendChild(strong);
          alertaEl.appendChild(document.createTextNode('" — ' + d.alerta));
        } else {
          alertaEl.textContent = d.alerta;
        }
      }
      out.innerHTML = '';
      out.appendChild(box);
      var btnOutro = box.querySelector('.btn-testar-outro');
      if (btnOutro) btnOutro.addEventListener('click', function () {
        if (input) input.focus();
        out.innerHTML = '';
        opcoes.forEach(function (o) { o.classList.remove('selected'); });
        try { localStorage.removeItem('m1-simulador-modo'); } catch (e) {}
      });
      try { localStorage.setItem('m1-simulador-modo', modo); } catch (e) {}
    }

    opcoes.forEach(function (o) {
      o.addEventListener('click', function () { render(o.getAttribute('data-modo')); });
    });
    if (input) {
      input.addEventListener('input', function () {
        try { localStorage.setItem('m1-simulador-tarefa', input.value); } catch (e) {}
      });
      try { var st = localStorage.getItem('m1-simulador-tarefa'); if (st) input.value = st; } catch (e) {}
    }
    try { var sm = localStorage.getItem('m1-simulador-modo'); if (sm && dados[sm]) render(sm); } catch (e) {}
  });

  /* ---------- 10. Explorador WYSIATI · 3 zonas (goal 5f) ---------- */

  document.querySelectorAll('.wysiati-explorer').forEach(function (root) {
    var zonas = window.M1_ZONAS;
    if (!zonas) return;
    var cards = root.querySelectorAll('.zona-card');
    var out = root.querySelector('.zona-detalhe');
    if (!out || !cards.length) return;

    function render(zona) {
      var z = zonas[zona];
      if (!z) return;
      cards.forEach(function (c) {
        var on = c.getAttribute('data-zona') === zona;
        c.classList.toggle('active', on);
        c.setAttribute('aria-expanded', on ? 'true' : 'false');
      });
      out.innerHTML =
        '<div class="detalhe-box">' +
          '<h4>' + z.cabecalho + '</h4>' +
          '<p>' + z.corpo + '</p>' +
          '<div class="detalhe-exemplo"><strong>Exemplo Mallory:</strong> ' + z.exemplo + '</div>' +
          '<span class="detalhe-modo">Modo típico: ' + z.modo + '</span>' +
        '</div>';
      try { localStorage.setItem('m1-wysiati-zona', zona); } catch (e) {}
    }

    cards.forEach(function (c) {
      c.addEventListener('click', function () { render(c.getAttribute('data-zona')); });
    });
    try { var sz = localStorage.getItem('m1-wysiati-zona'); if (sz && zonas[sz]) render(sz); } catch (e) {}
  });

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
})();

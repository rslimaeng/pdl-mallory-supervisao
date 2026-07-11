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
})();

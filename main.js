(function () {
  'use strict';



  var pages = {};
  document.querySelectorAll('.rfgc .page').forEach(function (el) {
    pages[el.id.replace('page-', '')] = el;
  });

  var drawer = document.getElementById('rfgc-drawer');
  var burger = document.getElementById('rfgc-burger');
  var oppBtn = document.getElementById('rfgc-opp');
  var oppMenu = document.getElementById('rfgc-opp-menu');

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('rfgc-locked');
  }
  function closeOpp() {
    if (oppMenu) oppMenu.classList.remove('open');
    if (oppBtn) oppBtn.setAttribute('aria-expanded', 'false');
  }

  function goTo(key, frag) {
    if (!pages[key]) return;
    Object.keys(pages).forEach(function (k) {
      pages[k].classList.toggle('visible', k === key);
    });
    document.querySelectorAll('.rfgc .tab, .rfgc .dlink').forEach(function (t) {
      t.classList.toggle('active', t.dataset.nav === key);
    });
    closeDrawer();
    closeOpp();
    if (frag) {
      window.scrollTo(0, 0);
      setTimeout(function () {
        var target = document.getElementById(frag);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-nav]');
    if (link) {
      e.preventDefault();
      goTo(link.dataset.nav, link.dataset.frag);
      return;
    }
    var toc = e.target.closest('.toc-link');
    if (toc) {
      e.preventDefault();
      document.querySelectorAll('.rfgc .toc-link').forEach(function (l) { l.classList.remove('active'); });
      toc.classList.add('active');
      var sec = document.getElementById(toc.dataset.target);
      if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    var send = e.target.closest('.form-panel .btn-primary');
    if (send) {
      e.preventDefault();
      var panel = send.closest('.form-panel');
      var tick = panel.querySelector('input[type="checkbox"]');
      if (tick && !tick.checked) { alert('Please tick the privacy notice box before sending.'); tick.focus(); return; }
      var lines = [];
      panel.querySelectorAll('input:not([type="checkbox"]), textarea').forEach(function (el) {
        if (el.value.trim()) lines.push(el.getAttribute('aria-label') + ': ' + el.value.trim());
      });
      var head = panel.parentNode.querySelector('h2');
      window.location.href = 'mailto:angie.doble@viverehotel.com.ph?subject=' +
        encodeURIComponent('RFGC website - ' + (head ? head.textContent : 'Inquiry')) +
        '&body=' + encodeURIComponent(lines.join('\n'));
      return;
    }
    var pick = e.target.closest('.audience-pick button');
    if (pick) {
      pick.parentNode.querySelectorAll('button').forEach(function (b) { b.classList.remove('active'); });
      pick.classList.add('active');
      return;
    }
    if (oppMenu && !oppMenu.contains(e.target) && e.target !== oppBtn && !oppBtn.contains(e.target)) {
      closeOpp();
    }
  });

  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = drawer.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('rfgc-locked', open);
    });
  }
  var closeBtn = document.getElementById('rfgc-drawer-close');
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  if (oppBtn && oppMenu) {
    oppBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = oppMenu.classList.toggle('open');
      oppBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { closeDrawer(); closeOpp(); }
  });

  /* ---- mobile carousels ---- */
  ['.vcards', '.icards', '.why-grid', '.ncards', '.pgrid', '.div-grid', '.track-grid', '.supply-steps', '.milestones'].forEach(function (sel) {
    document.querySelectorAll('.rfgc ' + sel).forEach(function (row) {
      row.classList.add('m-car');
      var items = row.children;
      if (items.length < 2) return;
      var dots = document.createElement('div');
      dots.className = 'm-dots';
      for (var i = 0; i < items.length; i++) {
        var b = document.createElement('button');
        b.type = 'button';
        b.setAttribute('aria-label', 'Slide ' + (i + 1));
        (function (n) {
          b.addEventListener('click', function () {
            row.scrollTo({ left: items[n].offsetLeft - items[0].offsetLeft, behavior: 'smooth' });
          });
        })(i);
        dots.appendChild(b);
      }
      row.parentNode.insertBefore(dots, row.nextSibling);
      var mark = function () {
        var x = row.scrollLeft, best = 0, d = Infinity;
        for (var i = 0; i < items.length; i++) {
          var dd = Math.abs(items[i].offsetLeft - items[0].offsetLeft - x);
          if (dd < d) { d = dd; best = i; }
        }
        if (row.scrollLeft + row.clientWidth >= row.scrollWidth - 4) best = items.length - 1;
        Array.prototype.forEach.call(dots.children, function (b, i) { b.classList.toggle('on', i === best); });
      };
      row.addEventListener('scroll', function () { window.requestAnimationFrame(mark); }, { passive: true });
      mark();
    });
  });
})();

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
})();

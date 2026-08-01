(function(){
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if(toggle && links){
    function close(){ links.classList.remove('open'); toggle.setAttribute('aria-expanded','false'); }
    function open(){ links.classList.add('open'); toggle.setAttribute('aria-expanded','true'); }
    toggle.addEventListener('click', function(){
      links.classList.contains('open') ? close() : open();
    });
    links.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', close); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
  }

  var root = document.documentElement;
  var themeBtn = document.querySelector('.theme-toggle');
  var stored = localStorage.getItem('intendsys-theme');
  if(stored){ root.setAttribute('data-theme', stored); }
  if(themeBtn){
    themeBtn.addEventListener('click', function(){
      var current = root.getAttribute('data-theme');
      var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var isDark = current ? current === 'dark' : prefersDark;
      var next = isDark ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('intendsys-theme', next);
    });
  }
})();

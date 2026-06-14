/* ===================================================================
   Navbar – responsive navigation with desktop dropdown & mobile menu
   =================================================================== */

function Navbar(container) {
  var isOpen = false;

  var groupItems = Object.keys(GroupSlugToEnum).map(function (slug) {
    return {
      href: '#products/' + slug,
      label: ProductGroupLabels[GroupSlugToEnum[slug]],
    };
  });

  function buildDesktopGroupLinks() {
    return groupItems.map(function (g) {
      return '<li><a href="' + g.href + '">' + g.label + '</a></li>';
    }).join('');
  }

  function buildMobileLinks() {
    var navItems = [
      { label: 'Ana Sayfa', href: '#home' },
      { label: 'Hakkımızda', href: '#about' },
      { label: 'Ürünlerimiz', href: '#products' },
      { label: 'Blog', href: '#blog' },
      { label: 'SSS', href: '#faq' },
      { label: 'İletişim', href: '#contact' },
    ];

    return navItems.map(function (item) {
      var subLinks = '';
      if (item.href === '#products') {
        subLinks = '<ul class="sub-links">' +
          groupItems.map(function (g) {
            return '<li><a href="' + g.href + '">' + g.label + '</a></li>';
          }).join('') +
          '</ul>';
      }
      return '<li><a href="' + item.href + '">' + item.label + '</a>' + subLinks + '</li>';
    }).join('');
  }

  function render() {
    container.innerHTML =
      '<nav class="navbar" aria-label="Main navigation">' +
        '<a href="#home" class="navbar-brand" aria-label="Probiyom ana sayfa">' +
          '<img src="images/logo.svg" alt="Probiyom logo">' +
          '<span>Probiyom</span>' +
        '</a>' +

        /* Desktop links */
        '<ul class="navbar-links">' +
          '<li><a href="#home">Ana Sayfa</a></li>' +
          '<li><a href="#about">Hakkımızda</a></li>' +
          '<li class="nav-dropdown">' +
            '<a href="#products" class="nav-dropdown-trigger">' +
              '<span>Ürünlerimiz</span>' +
              '<span class="nav-dropdown-arrow" aria-hidden="true">▾</span>' +
            '</a>' +
            '<div class="nav-dropdown-menu">' +
              '<div class="nav-dropdown-panel">' +
                '<ul>' + buildDesktopGroupLinks() + '</ul>' +
              '</div>' +
            '</div>' +
          '</li>' +
          '<li><a href="#blog">Blog</a></li>' +
          '<li><a href="#faq">SSS</a></li>' +
          '<li><a href="#contact">İletişim</a></li>' +
        '</ul>' +

        /* Mobile button */
        '<button type="button" class="navbar-mobile-btn" aria-label="Menüyü aç/kapat">' +
          '<span>Menü</span>' +
        '</button>' +

        /* Mobile menu */
        '<div class="mobile-menu' + (isOpen ? ' is-open' : '') + '">' +
          '<div class="mobile-menu-panel">' +
            '<ul>' + buildMobileLinks() + '</ul>' +
          '</div>' +
        '</div>' +
      '</nav>';

    /* Events */
    var btn = container.querySelector('.navbar-mobile-btn');
    if (btn) {
      btn.addEventListener('click', function () {
        isOpen = !isOpen;
        var menu = container.querySelector('.mobile-menu');
        if (menu) {
          menu.classList.toggle('is-open', isOpen);
        }
      });
    }

    /* Close mobile menu when a link is clicked */
    var mobileLinks = container.querySelectorAll('.mobile-menu a');
    for (var i = 0; i < mobileLinks.length; i++) {
      mobileLinks[i].addEventListener('click', function () {
        isOpen = false;
        var menu = container.querySelector('.mobile-menu');
        if (menu) menu.classList.remove('is-open');
      });
    }
  }

  render();

  /* Close mobile menu on desktop resize */
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768 && isOpen) {
      isOpen = false;
      var menu = container.querySelector('.mobile-menu');
      if (menu) menu.classList.remove('is-open');
    }
  });
}

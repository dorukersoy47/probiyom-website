/* ===================================================================
   Reusable UI Components – vanilla JS
   Each component is a function that returns an HTMLElement or
   renders into a given container.
   =================================================================== */

/* ---------- ImageSlider ---------- */
function ImageSlider(container, slides, durationMs) {
  if (!slides || slides.length === 0) return;
  durationMs = durationMs || SLIDER_DURATION_MS;

  var activeIndex = 0;
  var timer = null;

  function render() {
    var slide = slides[activeIndex];

    var imageContainer = '<div class="slider-image-container">' +
      '<img src="' + slide.src + '" alt="' + slide.alt + '">' +
      '</div>';

    var titleHtml = slide.title
      ? '<div class="slider-title"><p>' + slide.title + '</p></div>'
      : '';

    var innerContent = imageContainer + titleHtml;

    var frameContent;
    if (slide.link) {
      frameContent = '<a href="' + slide.link + '">' + innerContent + '</a>';
    } else {
      frameContent = innerContent;
    }

    var dotsHtml = '';
    for (var i = 0; i < slides.length; i++) {
      var cls = 'slider-dot' + (i === activeIndex ? ' is-active' : '');
      dotsHtml += '<button type="button" class="' + cls + '" aria-label="Slayt ' + (i + 1) + '" data-index="' + i + '"></button>';
    }

    container.innerHTML =
      '<div class="slider-wrapper">' +
        '<div class="slider-frame">' + frameContent + '</div>' +
        '<div class="slider-dots">' + dotsHtml + '</div>' +
      '</div>';

    var dots = container.querySelectorAll('.slider-dot');
    for (var j = 0; j < dots.length; j++) {
      dots[j].addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-index'), 10);
        goTo(idx);
      });
    }
  }

  function goTo(idx) {
    activeIndex = idx;
    clearTimeout(timer);
    render();
    scheduleNext();
  }

  function scheduleNext() {
    if (slides.length <= 1) return;
    timer = setTimeout(function () {
      activeIndex = (activeIndex + 1) % slides.length;
      render();
      scheduleNext();
    }, durationMs);
  }

  render();
  scheduleNext();

  return {
    destroy: function () {
      clearTimeout(timer);
    },
  };
}

/* ---------- Navbar ---------- */
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
          '<img src="logo.svg" alt="Probiyom logo">' +
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

/* ---------- Footer ---------- */
function Footer(container) {
  container.innerHTML =
    '<div class="footer">' +
      '<small>&copy; ' + new Date().getFullYear() + ' Probiyom</small>' +
    '</div>';
}

/* ---------- ContactMap ---------- */
function ContactMap(container, lon, lat, zoom) {
  zoom = zoom || 15;

  container.innerHTML =
    '<div class="map-container">' +
      '<div class="map-inner">' +
        '<div id="ol-map"></div>' +
      '</div>' +
    '</div>';

  var mapDiv = container.querySelector('#ol-map');

  var center = ol.proj.fromLonLat([lon, lat]);

  var markerFeature = new ol.Feature({
    geometry: new ol.geom.Point(center),
  });

  markerFeature.setStyle(
    new ol.style.Style({
      image: new ol.style.Circle({
        radius: 10,
        fill: new ol.style.Fill({ color: '#22577A' }),
        stroke: new ol.style.Stroke({ color: '#FFFFFF', width: 2 }),
      }),
    })
  );

  var vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      features: [markerFeature],
    }),
  });

  var map = new ol.Map({
    target: mapDiv,
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM(),
      }),
      vectorLayer,
    ],
    view: new ol.View({
      center: center,
      zoom: zoom,
    }),
    controls: [],
  });

  /* Fix map sizing */
  requestAnimationFrame(function () {
    map.updateSize();
    requestAnimationFrame(function () {
      map.updateSize();
    });
  });

  window.addEventListener('resize', function () {
    map.updateSize();
  });

  return map;
}

/* ---------- ContactForm ---------- */
function ContactForm(container) {
  var form = {
    fullName: '',
    email: '',
    phone: '+90',
    productGroup: '',
    subject: '',
    message: '',
  };

  var submitted = false;

  function formatPhoneInput(raw) {
    var digits = raw.replace(/\D/g, '');
    var rest = digits.indexOf('90') === 0 ? digits.slice(2, 12) : digits.slice(0, 10);

    var a = rest.slice(0, 3);
    var b = rest.slice(3, 6);
    var c = rest.slice(6, 8);
    var d = rest.slice(8, 10);

    var out = '+90';
    if (a.length > 0) out += ' (' + a;
    if (a.length === 3) out += ')';
    if (b.length > 0) out += ' ' + b;
    if (c.length > 0) out += ' ' + c;
    if (d.length > 0) out += ' ' + d;

    return out;
  }

  function isValid() {
    return (
      form.fullName.trim().length > 0 &&
      form.email.trim().length > 0 &&
      form.productGroup !== '' &&
      form.subject !== ''
    );
  }

  function buildGroupOptions() {
    var opts = '<option value="" disabled selected>Seçiniz</option>';
    var values = Object.values(ProductGroup);
    for (var i = 0; i < values.length; i++) {
      var val = values[i];
      var label = ProductGroupLabels[val];
      var sel = form.productGroup == val ? ' selected' : '';
      opts += '<option value="' + val + '"' + sel + '>' + label + '</option>';
    }
    return opts;
  }

  function buildSubjectOptions() {
    var opts = '<option value="" disabled selected>Seçiniz</option>';
    for (var i = 0; i < MessageSubjects.length; i++) {
      var sel = form.subject === MessageSubjects[i] ? ' selected' : '';
      opts += '<option value="' + MessageSubjects[i] + '"' + sel + '>' + MessageSubjects[i] + '</option>';
    }
    return opts;
  }

  function render() {
    var successHtml = submitted
      ? '<div class="form-success"><p>E-mail uygulamanız açıldı. Mesajı göndererek bizimle iletişime geçebilirsiniz.</p></div>'
      : '';

    container.innerHTML =
      '<section class="card card-lg">' +
        '<h2 class="text-brand">Bize Ulaşın</h2>' +
        '<p style="margin-top: 0.75rem;" class="max-w-4xl">' +
          'Merak ettiğiniz her konuda bizi arayabilirsiniz. IDOL Invest Ekibi olarak size yardımcı olmaktan mutluluk duyarız.' +
        '</p>' +
        '<form class="contact-form" id="contact-form">' +
          '<div class="form-row">' +
            '<label class="form-field">' +
              '<span>Adınız <span class="text-red">*</span></span>' +
              '<input type="text" placeholder="Ad Soyad" required value="' + escapeAttr(form.fullName) + '" data-field="fullName">' +
            '</label>' +
            '<label class="form-field">' +
              '<span>E-mail <span class="text-red">*</span></span>' +
              '<input type="email" placeholder="ornek@eposta.com" required value="' + escapeAttr(form.email) + '" data-field="email">' +
            '</label>' +
          '</div>' +
          '<label class="form-field">' +
            '<span>İrtibat No</span>' +
            '<input type="tel" placeholder="+90 (5xx) xxx xx xx" value="' + escapeAttr(form.phone) + '" data-field="phone">' +
          '</label>' +
          '<div class="form-row">' +
            '<label class="form-field">' +
              '<span>Ürün grubu <span class="text-red">*</span></span>' +
              '<select required data-field="productGroup">' + buildGroupOptions() + '</select>' +
            '</label>' +
            '<label class="form-field">' +
              '<span>Mesaj konusu <span class="text-red">*</span></span>' +
              '<select required data-field="subject">' + buildSubjectOptions() + '</select>' +
            '</label>' +
          '</div>' +
          '<label class="form-field">' +
            '<span>Mesajınız</span>' +
            '<textarea placeholder="Mesajınızı yazınız" data-field="message">' + escapeHtml(form.message) + '</textarea>' +
          '</label>' +
          '<div class="form-actions">' +
            '<p><span class="text-red">*</span> ile işaretli alanlar zorunludur.</p>' +
            '<button type="submit" class="btn-submit"' + (isValid() ? '' : ' disabled') + '>E-mail Uygulamasında Aç</button>' +
          '</div>' +
          successHtml +
        '</form>' +
      '</section>';

    bindEvents();
  }

  function bindEvents() {
    var inputs = container.querySelectorAll('input, select, textarea');
    for (var i = 0; i < inputs.length; i++) {
      var input = inputs[i];
      var field = input.getAttribute('data-field');
      if (!field) continue;

      input.addEventListener('input', (function (f, el) {
        return function () {
          submitted = false;
          if (f === 'phone') {
            form[f] = formatPhoneInput(el.value);
            el.value = form[f];
          } else {
            form[f] = el.value;
          }
          updateSubmitButton();
        };
      })(field, input));

      if (input.tagName === 'SELECT') {
        input.addEventListener('change', (function (f, el) {
          return function () {
            submitted = false;
            form[f] = el.value;
            updateSubmitButton();
          };
        })(field, input));
      }
    }

    var formEl = container.querySelector('#contact-form');
    if (formEl) {
      formEl.addEventListener('submit', function (e) {
        e.preventDefault();
        if (!isValid()) return;

        var mailSubject = 'İletişim Formu: ' + form.subject;
        var bodyLines = [
          'Ad: ' + form.fullName,
          'E-mail: ' + form.email,
        ];
        if (form.phone.trim().length > 0) bodyLines.push('İrtibat No: ' + form.phone);
        bodyLines.push('Ürün grubu: ' + (ProductGroupLabels[form.productGroup] || form.productGroup));
        bodyLines.push('Mesaj konusu: ' + form.subject);
        bodyLines.push('');
        bodyLines.push('Mesaj:');
        bodyLines.push(form.message.trim().length > 0 ? form.message : '(Mesaj yok)');

        var params = new URLSearchParams();
        params.set('subject', mailSubject);
        params.set('body', bodyLines.join('\n'));
        var mailto = 'mailto:' + SiteData.email + '?' + params.toString();

        window.location.href = mailto;

        submitted = true;
        form = {
          fullName: '',
          email: '',
          phone: '+90',
          productGroup: '',
          subject: '',
          message: '',
        };
        render();
      });
    }
  }

  function updateSubmitButton() {
    var btn = container.querySelector('.btn-submit');
    if (btn) btn.disabled = !isValid();
  }

  render();
}

/* ---------- ProductGrid ---------- */
function ProductGrid(container, groupProducts) {
  if (!groupProducts || groupProducts.length === 0) {
    container.innerHTML = '<div class="empty-state">Bu grupta henüz ürün eklenmedi.</div>';
    return;
  }

  var html = '<div class="grid-product-cards">';
  for (var i = 0; i < groupProducts.length; i++) {
    var p = groupProducts[i];
    var badgeClass = p.isAvailable ? 'available' : 'upcoming';
    var badgeText = p.isAvailable ? 'Mevcut' : 'Yakında';

    var bulletsHtml = '';
    if (p.bullets && p.bullets.length > 0) {
      bulletsHtml = '<ul>';
      for (var j = 0; j < p.bullets.length; j++) {
        bulletsHtml += '<li>' + escapeHtml(p.bullets[j]) + '</li>';
      }
      bulletsHtml += '</ul>';
    }

    var imageHtml = '';
    if (p.imageDir) {
      var src = p.imageDir.indexOf('/') === 0 ? p.imageDir : p.imageDir;
      imageHtml = '<div class="product-card-image"><img src="' + src + '" alt="' + escapeAttr(p.name) + '"></div>';
    }

    html +=
      '<article class="product-card">' +
        '<div class="product-card-header">' +
          '<h3>' + escapeHtml(p.name) + '</h3>' +
          '<span class="product-badge ' + badgeClass + '">' + badgeText + '</span>' +
        '</div>' +
        '<p>' + escapeHtml(p.description) + '</p>' +
        bulletsHtml +
        imageHtml +
      '</article>';
  }
  html += '</div>';

  container.innerHTML = html;
}

/* ---------- Helpers ---------- */
function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

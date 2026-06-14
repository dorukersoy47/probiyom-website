/* ===================================================================
   Hash-based Router
   Routes: #home, #about, #products, #products/<slug>, #contact
   =================================================================== */

var Router = (function () {
  var mainContainer = null;
  var currentSlider = null;
  var pageCache = {};

  function init(container) {
    mainContainer = container;
    window.addEventListener('hashchange', onRoute);
    onRoute();
  }

  function onRoute() {
    var hash = window.location.hash.replace(/^#\/?/, '') || 'home';
    var parts = hash.split('/');
    var page = parts[0];

    /* Scroll to top on navigation */
    window.scrollTo(0, 0);

    /* Destroy previous slider if any */
    if (currentSlider && currentSlider.destroy) {
      currentSlider.destroy();
      currentSlider = null;
    }

    switch (page) {
      case 'home':
        loadPage('pages/home.html', initHomePage);
        break;
      case 'about':
        loadPage('pages/about.html', initAboutPage);
        break;
      case 'products':
        if (parts.length > 1 && parts[1]) {
          loadPage('pages/product-group.html', function () {
            initProductGroupPage(parts[1]);
          });
        } else {
          loadPage('pages/products.html', initProductsPage);
        }
        break;
      case 'contact':
        loadPage('pages/contact.html', initContactPage);
        break;
      case 'faq':
        loadPage('pages/faq.html', initFaqPage);
        break;
      case 'blog':
        loadPage('pages/blog.html', initBlogPage);
        break;
      default:
        loadPage('pages/not-found.html');
        break;
    }
  }

  function loadPage(url, callback) {
    if (pageCache[url]) {
      mainContainer.innerHTML = pageCache[url];
      if (callback) callback();
      return;
    }

    fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('Page not found');
        return res.text();
      })
      .then(function (html) {
        pageCache[url] = html;
        mainContainer.innerHTML = html;
        if (callback) callback();
      })
      .catch(function () {
        mainContainer.innerHTML = '<section class="page-section"><h1 class="text-brand">Sayfa yüklenemedi</h1></section>';
      });
  }

  /* ---- Page initializers ---- */

  function initHomePage() {
    var sliders = [];
    var homeSliderEl = document.getElementById('home-slider');
    if (homeSliderEl) {
      sliders.push(ImageSlider(homeSliderEl, homeSlides, SLIDER_DURATION_MS));
    }
    var productsSliderEl = document.getElementById('products-slider');
    if (productsSliderEl) {
      sliders.push(ImageSlider(productsSliderEl, productSlides, SLIDER_DURATION_MS));
    }
    currentSlider = {
      destroy: function () {
        sliders.forEach(function (s) { if (s && s.destroy) s.destroy(); });
      }
    };
  }

  function initProductsPage() {
    var sliderEl = document.getElementById('products-slider');
    if (sliderEl) {
      currentSlider = ImageSlider(sliderEl, productSlides, SLIDER_DURATION_MS);
    }
  }

  function initProductGroupPage(slug) {
    var groupEnum = GroupSlugToEnum[slug];
    if (groupEnum === undefined) {
      mainContainer.innerHTML = pageCache['pages/not-found.html'] ||
        '<section class="page-section"><h1 class="text-brand">404</h1><p>Ürün grubu bulunamadı.</p></section>';
      return;
    }

    var groupTitle = ProductGroupLabels[groupEnum];
    var groupIntro = ProductGroupIntroText[groupEnum];
    var groupProducts = products.filter(function (p) {
      return p.group === groupEnum;
    });

    /* Build header */
    var headerEl = document.getElementById('group-header');
    if (headerEl) {
      var headerHtml = '<h1 class="text-brand">' + escapeHtml(groupTitle) + '</h1>';

      if (groupIntro) {
        var introTextHtml =
          '<div class="group-intro-text max-w-5xl">' +
            '<p class="heading">' + escapeHtml(groupIntro.heading) + '</p>' +
            '<ul>';

        for (var i = 0; i < groupIntro.bullets.length; i++) {
          introTextHtml += '<li>' + escapeHtml(groupIntro.bullets[i]) + '</li>';
        }

        introTextHtml += '</ul>' +
          '<p>' + escapeHtml(groupIntro.paragraph) + '</p>';

        if (groupIntro.warning) {
          introTextHtml += '<p class="warning">' + escapeHtml(groupIntro.warning) + '</p>';
        }

        introTextHtml += '</div>';

        var introImageHtml = '';
        if (groupIntro.imageDir) {
          var imgAlt = groupIntro.imageName || groupTitle;
          introImageHtml =
            '<div class="group-intro-image">' +
              '<div class="group-intro-image-inner">' +
                '<img src="' + escapeAttr(groupIntro.imageDir) + '" alt="' + escapeAttr(imgAlt) + '">' +
              '</div>' +
            '</div>';
        }

        headerHtml += '<div class="grid-product-intro">' + introTextHtml + introImageHtml + '</div>';
      }

      headerEl.innerHTML = headerHtml;
    }

    /* Build product grid */
    var productsEl = document.getElementById('group-products');
    if (productsEl) {
      ProductGrid(productsEl, groupProducts);
    }
  }

  function initAboutPage() {
    var addressEl = document.getElementById('about-address');
    if (addressEl) {
      addressEl.innerHTML = SiteData.address1 + '<br>' + SiteData.address2;
    }

    var phoneEl = document.getElementById('about-phone');
    if (phoneEl) {
      phoneEl.href = 'tel:' + SiteData.phone;
      phoneEl.textContent = SiteData.phone;
    }

    var emailEl = document.getElementById('about-email');
    if (emailEl) {
      emailEl.href = 'mailto:' + SiteData.email;
      emailEl.textContent = SiteData.email;
    }

    var socialEl = document.getElementById('about-social');
    if (socialEl) {
      socialEl.innerHTML =
        '<a href="' + SiteData.instagram + '" target="_blank" rel="noopener">Instagram</a>' +
        ' &middot; ' +
        '<a href="' + SiteData.x + '" target="_blank" rel="noopener">Twitter / X</a>';
    }
  }

  function initFaqPage() {
    var listEl = document.getElementById('faq-list');
    if (listEl) {
      FaqList(listEl, faqs);
    }
  }

  function initBlogPage() {
    var listEl = document.getElementById('blog-list');
    if (listEl) {
      BlogList(listEl, blogPosts);
    }
  }

  function initContactPage() {
    /* Fill contact info */
    var addressEl = document.getElementById('contact-address');
    if (addressEl) {
      addressEl.innerHTML = SiteData.address1 + '<br>' + SiteData.address2;
    }

    var phoneEl = document.getElementById('contact-phone');
    if (phoneEl) {
      phoneEl.href = 'tel:' + SiteData.phone;
      phoneEl.textContent = SiteData.phone;
    }

    var emailEl = document.getElementById('contact-email');
    if (emailEl) {
      emailEl.href = 'mailto:' + SiteData.email;
      emailEl.textContent = SiteData.email;
    }

    var instagramEl = document.getElementById('contact-instagram');
    if (instagramEl) {
      instagramEl.href = SiteData.instagram;
      instagramEl.textContent = SiteData.instagram;
    }

    var xEl = document.getElementById('contact-x');
    if (xEl) {
      xEl.href = SiteData.x;
      xEl.textContent = SiteData.x;
    }

    var linkedinEl = document.getElementById('contact-linkedin');
    if (linkedinEl) {
      linkedinEl.href = SiteData.linkedin;
      linkedinEl.textContent = SiteData.linkedin;
    }

    /* Map */
    var mapEl = document.getElementById('contact-map');
    if (mapEl) {
      ContactMap(mapEl, SiteData.lon, SiteData.lat, 15);
    }

    /* Contact form */
    var formEl = document.getElementById('contact-form-container');
    if (formEl) {
      ContactForm(formEl);
    }
  }

  return { init: init };
})();

/* ===================================================================
   ProductGrid – renders a grid of product cards for a product group
   =================================================================== */

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

/* ===================================================================
   Footer – contact info + copyright
   =================================================================== */

function Footer(container) {
  container.innerHTML =
    '<div class="footer">' +
      '<div class="footer-body">' +
        '<div class="footer-col">' +
          '<span class="footer-label">Adres</span>' +
          '<span>' + SiteData.address1 + '</span>' +
          '<span>' + SiteData.address2 + '</span>' +
        '</div>' +
        '<div class="footer-col">' +
          '<span class="footer-label">İletişim</span>' +
          '<a href="tel:' + SiteData.phone + '">' + SiteData.phone + '</a>' +
          '<a href="mailto:' + SiteData.email + '">' + SiteData.email + '</a>' +
        '</div>' +
        '<div class="footer-col">' +
          '<span class="footer-label">Sosyal Medya</span>' +
          '<a href="' + SiteData.instagram + '" target="_blank" rel="noopener">Instagram</a>' +
          '<a href="' + SiteData.x + '" target="_blank" rel="noopener">X</a>' +
          '<a href="' + SiteData.linkedin + '" target="_blank" rel="noopener">LinkedIn</a>' +
          '<a href="' + SiteData.youtube + '" target="_blank" rel="noopener">YouTube</a>' +
        '</div>' +
      '</div>' +
      '<div class="footer-copy">' +
        '<small>&copy; ' + new Date().getFullYear() + ' Probiyom</small>' +
      '</div>' +
    '</div>';
}

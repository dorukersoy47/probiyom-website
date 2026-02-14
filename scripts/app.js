/* ===================================================================
   App entry – initialises layout and starts router
   =================================================================== */

(function () {
  document.addEventListener('DOMContentLoaded', function () {
    /* Render navbar */
    var navContainer = document.getElementById('navbar-container');
    if (navContainer) {
      Navbar(navContainer);
    }

    /* Render footer */
    var footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
      Footer(footerContainer);
    }

    /* Start router */
    var mainContainer = document.getElementById('page-content');
    if (mainContainer) {
      Router.init(mainContainer);
    }
  });
})();

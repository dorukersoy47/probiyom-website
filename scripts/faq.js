/* ===================================================================
   FaqList – renders an accordion of question/answer items
   =================================================================== */

function FaqList(container, items) {
  if (!items || items.length === 0) {
    container.innerHTML = '<div class="empty-state">Henüz soru eklenmedi.</div>';
    return;
  }

  var html = '<ul class="faq-list">';
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    html +=
      '<li class="faq-item">' +
        '<button type="button" class="faq-question" aria-expanded="false" data-index="' + i + '">' +
          '<span>' + escapeHtml(item.question) + '</span>' +
          '<span class="faq-arrow" aria-hidden="true">▾</span>' +
        '</button>' +
        '<div class="faq-answer" role="region">' +
          '<div class="faq-answer-inner">' +
            '<p>' + escapeHtml(item.answer) + '</p>' +
          '</div>' +
        '</div>' +
      '</li>';
  }
  html += '</ul>';

  container.innerHTML = html;

  var buttons = container.querySelectorAll('.faq-question');
  for (var j = 0; j < buttons.length; j++) {
    buttons[j].addEventListener('click', function () {
      var item = this.parentNode;
      var isOpen = item.classList.toggle('is-open');
      this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
}

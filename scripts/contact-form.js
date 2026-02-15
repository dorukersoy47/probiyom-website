/* ===================================================================
   ContactForm – mailto-based contact form with validation
   =================================================================== */

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

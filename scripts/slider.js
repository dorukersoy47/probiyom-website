/* ===================================================================
   ImageSlider – auto-advancing image carousel with dot navigation
   =================================================================== */

function ImageSlider(container, slides, durationMs) {
  if (!slides || slides.length === 0) return;
  durationMs = durationMs || SLIDER_DURATION_MS;

  var activeIndex = 0;
  var timer = null;
  var isPaused = false;

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

    /* Pause auto-advance while pressing on the slider frame */
    var frame = container.querySelector('.slider-frame');
    if (frame && slides.length > 1) {
      var pressStart = function () {
        isPaused = true;
        clearTimeout(timer);
        frame.classList.add('is-pressing');
      };
      var pressEnd = function () {
        if (!isPaused) return;
        isPaused = false;
        frame.classList.remove('is-pressing');
        scheduleNext();
      };
      frame.addEventListener('mousedown', pressStart);
      frame.addEventListener('mouseup', pressEnd);
      frame.addEventListener('mouseleave', pressEnd);
      frame.addEventListener('touchstart', pressStart, { passive: true });
      frame.addEventListener('touchend', pressEnd);
      frame.addEventListener('touchcancel', pressEnd);
    }
  }

  function goTo(idx) {
    activeIndex = idx;
    clearTimeout(timer);
    render();
    if (!isPaused) scheduleNext();
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

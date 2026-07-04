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

    /* Pause / resume toggle button on the top-right of the image */
    var pauseBtnHtml = '';
    if (slides.length > 1) {
      var pauseIcon = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1"></rect><rect x="14" y="5" width="4" height="14" rx="1"></rect></svg>';
      var playIcon = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M7 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 7 5.5z"></path></svg>';
      pauseBtnHtml = '<button type="button" class="slider-pause" aria-label="' +
        (isPaused ? 'Slaytı devam ettir' : 'Slaytı duraklat') + '">' +
        (isPaused ? playIcon : pauseIcon) + '</button>';
    }

    var dotsHtml = '';
    for (var i = 0; i < slides.length; i++) {
      var cls = 'slider-dot' + (i === activeIndex ? ' is-active' : '');
      dotsHtml += '<button type="button" class="' + cls + '" aria-label="Slayt ' + (i + 1) + '" data-index="' + i + '"></button>';
    }

    container.innerHTML =
      '<div class="slider-wrapper">' +
        '<div class="slider-frame">' + frameContent + pauseBtnHtml + '</div>' +
        '<div class="slider-dots">' + dotsHtml + '</div>' +
      '</div>';

    var dots = container.querySelectorAll('.slider-dot');
    for (var j = 0; j < dots.length; j++) {
      dots[j].addEventListener('click', function () {
        var idx = parseInt(this.getAttribute('data-index'), 10);
        goTo(idx);
      });
    }

    /* Toggle auto-advance when the pause icon is clicked */
    var pauseBtn = container.querySelector('.slider-pause');
    if (pauseBtn) {
      pauseBtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        togglePause();
      });
    }
  }

  function togglePause() {
    isPaused = !isPaused;
    if (isPaused) {
      clearTimeout(timer);
    } else {
      scheduleNext();
    }
    render();
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

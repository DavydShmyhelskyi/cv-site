function parallaxHeight() {
  var scrollTop = $(window).scrollTop();
  var headerHeight = $(".sample-header-section").outerHeight();

  $(".sample-section").css("margin-top", headerHeight);
  $(".sample-header").css("height", headerHeight - scrollTop);
}
window.onload = function() {
  parallaxHeight();
};
// Initial setup
parallaxHeight();

// Adjust height on scroll and resize
$(window).on("scroll resize", parallaxHeight);


function scrollToSection(sectionId) {
  const targetSection = document.getElementById(sectionId);
  if (!targetSection) return;

  // Отримати поточну позицію та позицію секції
  const startPosition = window.pageYOffset;
  const targetPosition = targetSection.getBoundingClientRect().top + startPosition;

  // Тривалість анімації (в мілісекундах)
  const duration = 800;

  // Час початку анімації
  const startTime = performance.now();

  function animateScroll(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1); // Не більше 1

    // Застосування ease-in-out функції для згладжування
    const easing = progress < 0.5 
      ? 2 * progress * progress 
      : -1 + (4 - 2 * progress) * progress;

    // Обчислення нової позиції
    const scrollPosition = startPosition + (targetPosition - startPosition) * easing;
    window.scrollTo(0, scrollPosition);

    // Якщо не завершено, продовжуємо
    if (progress < 1) {
      requestAnimationFrame(animateScroll);
    }
  }

  // Запуск анімації
  requestAnimationFrame(animateScroll);
}



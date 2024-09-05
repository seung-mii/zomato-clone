function initializeSwipers(event) {
  const collectionSwiper = new Swiper('.collections_background .swiper-container', {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 1,
    navigation: {
      prevEl: '.collections_background .swiper-prev',
      nextEl: '.collections_background .swiper-next'
    }
  });
}

document.addEventListener('DOMContentLoaded', initializeSwipers);
const swiper = new Swiper('.swiper-container', {
  loop: true,       
  spaceBetween: 20, 
  slidesPerView: 6, 
  slidesPerGroup: 1, 
  navigation: { 
    prevEl: '.swiper-prev', 
    nextEl: '.swiper-next' 
  }
})

$('.swiper-container').hover(
  function () {
  swiper.autoplay.stop();
}, function(){
  swiper.autoplay.start();
});
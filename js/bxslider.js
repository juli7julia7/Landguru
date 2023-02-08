

const slider = $('.meet__block').bxSlider({
   pager: false,
   // mode: 'fade',
   controls: false,
   infiniteLoop: true,
   touchEnabled: true,
   hideControlOneEnd: false,
});

$('.button--prev').click((e) => {
   e.preventDefault();
   slider.goToPrevSlide();
});

$('.button--next').click((e) => {
   e.preventDefault();
   slider.goToNextSlide();
});

$('.question__item > div').on('click', function () {
   $(this).children('.question__img').toggleClass('question__img--min-icon');
   $(this).next('.question__info').slideToggle(300)
});
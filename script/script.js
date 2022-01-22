
//-------слайдер---------------------------------------------//
$(document).ready(function () {
   $('.block__title').click(function (event) {
      if ($('.block').hasClass('one')) {
         $('.block__title').not($(this)).removeClass('active');
         $('.block__text').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active').next().slideToggle(300);
   });
});
//----------------------------------------------------------//
//--------------бургер------------------------------//
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger,.header__Menu').toggleClass('active1')
      $('.header__Menu').toggleClass('active2')
   });
});


$(document).ready(function () {
   $('.block__title_defends').click(function (event) {
      if ($('.block').hasClass('one')) {
         $('.block__title_defends').not($(this)).removeClass('active3');
         //$('.block__text_defends').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('active3').next().slideToggle(300);
   });
});
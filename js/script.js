
var ul = document.querySelector('.slider__list');
document.querySelector('.slider__button--next').addEventListener('click', function() {
  ul.insertBefore(ul.lastElementChild, ul.firstElementChild);
});
document.querySelector('.slider__button--prev').addEventListener('click', function() {
  ul.insertBefore(ul.firstElementChild, ul.lastElementChild);
});

// Бургер и выпадающее меню
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
burger.addEventListener('click', function() {
    menu.classList.toggle('menu--opened');
    burger.classList.toggle('burger--opened');
})

// Вкладки "наше меню"
const tabLinks = document.querySelectorAll('[data-tab]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabLinks.forEach(function(item) {
    item.addEventListener('click', function() {

        // item.classList.remove('ourmenu-tab__link--active');
        item.classList.remove('ourmenu-tab__link--active');
        
        tabContents.forEach(function(item) {
            item.classList.add('hidden');
        })

        const tabContent = document.querySelector('#' + this.dataset.tab);
        tabContent.classList.remove('hidden');
    })
})

// События кнопок "наше меню"
const food = document.querySelector('#food');
const drinks = document.querySelector('#drinks');

food.addEventListener('click', function() {
    drinks.classList.remove('ourmenu-tab__link--active');
    food.classList.add('ourmenu-tab__link--active');
})
drinks.addEventListener('click', function() {
    food.classList.remove('ourmenu-tab__link--active');
    drinks.classList.add('ourmenu-tab__link--active');
})


// Слайдер
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });

  // Модальное окно
let wrapper = document.querySelector('.wrapper');
let btnOrder = document.querySelector('#order');
let modal = document.querySelector('.popup-fade');

btnOrder.addEventListener('click', function() {
    wrapper.classList.add('wrapper--modal');
    modal.classList.add('popup-fade--active');
})

let btnClose = document.querySelector('.btn-pop-close');

btnClose.addEventListener('click', function() {
    wrapper.classList.remove('wrapper--modal');
    modal.classList.remove('popup-fade--active');
})

modal.addEventListener('click', function() {
    wrapper.classList.remove('wrapper--modal');
    modal.classList.remove('popup-fade--active');
})

let popupWindow = modal.querySelector('.popup-window');
popupWindow.addEventListener('click', function(event) {
    event.stopPropagation();
})


// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


// var iconMenu = document.querySelector('.icon-menu');
// if (iconMenu) {
//   iconMenu.addEventListener('click', function() {
//     iconMenu.classList.toggle('_open-menu');
//   });
// }

// Находим элементы, с которыми будем работать
const footer = document.querySelector('.footer');
const html = document.documentElement;
if (footer) {
  // Опции Intersection Observer
  const options = {
    root: null, // Используем viewport как root
    rootMargin: '0px',
    threshold: 0.5 // Когда более 50% .footer видно во viewport
  };
  // Функция, которая вызывается при изменении видимости .footer
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // .footer виден, добавляем класс
        html.classList.add('_footer-show');
      } else {
        // .footer не виден, удаляем класс
        html.classList.remove('_footer-show');
      }
    });
  }
  // Создаем экземпляр Intersection Observer и начинаем отслеживать .footer
  const observer = new IntersectionObserver(handleIntersection, options);
  observer.observe(footer);
}
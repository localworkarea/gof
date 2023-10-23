// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


var iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
  iconMenu.addEventListener('click', function() {
    iconMenu.classList.toggle('_open-menu');
  });
}

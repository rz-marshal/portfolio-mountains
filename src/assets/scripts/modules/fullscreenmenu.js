//  открытие/закрытие полноэкранного меню "по клику на гамбургер меню в адаптивах"
const hamburger = document.querySelector (".hamburger-menu");
const fullScreenMenu = document.querySelector ('.fullscreenmenu');
const closeMenu = document.querySelector (".fullscreenmenu__btn");
const closeMenu2 = document.querySelectorAll (".fullscreenmenu__link");

hamburger.addEventListener ('click', function (){
    fullScreenMenu.style.display = "flex";
    document.body.classList.add('blocked-scroll');
    });

closeMenu.addEventListener ('click', function (){
    fullScreenMenu.style.display = "none";
    document.body.classList.remove('blocked-scroll');
    });


closeMenu2.forEach(function(item) {
    item.addEventListener('click', function() {
        fullScreenMenu.style.display = "none";
        document.body.classList.remove('blocked-scroll');
    });
});
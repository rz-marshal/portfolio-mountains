const parralax = (function () {
    const bg = document.querySelector('.header__background');
    
    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var style = block.style;
            style.top = strafe;
        },

        init: function (wScroll) {
            this.move(bg, wScroll, 45);
        }
    }
})();

window.onscroll = function () {
    const wScroll = window.pageYOffset;

    parralax.init(wScroll);
}
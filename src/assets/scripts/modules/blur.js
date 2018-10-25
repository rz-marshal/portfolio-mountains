const blurelwraper = document.querySelector('.feedback__blur'),
      blurelem = document.querySelector('.feedback__blur-elem'),
      formelem = document.querySelector('.feedback-form');

const width = getComputedStyle(formelem).width;
const height = getComputedStyle(formelem).height;

blurelwraper.style.width = width;
blurelwraper.style.height = height;

const reviewsbg = document.querySelector('.reviews');
const bgwidth = getComputedStyle(reviewsbg).width;
const bgheight = getComputedStyle(reviewsbg).height;

blurelem.style.backgroundSize = bgwidth;

var blur = (function () {
    
    return {
        set: function (){
            var posLeft = -blurelwraper.offsetLeft,
                posTop = -blurelwraper.offsetTop,
                imgWidth = bgwidth,
                imgHeight = bgheight,
                blurCSS = blurelem.style;
            
            blurCSS.backgroundPosition = `${posLeft}px ${posTop}px`;
            blurCSS.backgroundSize = `${imgWidth}px ${imgHeight}px`;

        }
    }
})();

blur.set();
window.onresize = function(){
    blur.set();
}

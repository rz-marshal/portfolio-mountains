(function () {

    const preloader = document.querySelector('.preloader'),
        preloaderText = document.querySelector('.preloader__text'),
        preloaderImg1 = document.querySelector('.preloader__svg-img--1'),
        preloaderImg2 = document.querySelector('.preloader__svg-img--2'),
        preloaderImg3 = document.querySelector('.preloader__svg-img--3'),
        imgs = document.getElementsByTagName('img'),
        imgsNumber = imgs.length,
        strokeDasharray1 = 100.48,
        strokeDasharray2 = 94.2,
        strokeDasharray3 = 94.2;

    let lengthSector1 = strokeDasharray1 / (imgsNumber - 1);
    let lengthSector2 = strokeDasharray2 / (imgsNumber - 1);
    let lengthSector3 = strokeDasharray3 / (imgsNumber - 1);
    let percentStep = Math.floor(100 / (imgsNumber - 1));
    let currentSDO1 = lengthSector1;
    let currentSDO2 = lengthSector2;
    let currentSDO3 = lengthSector3;
    let currentPercent = percentStep;

    for (let i = 1; i < imgsNumber; i++) {
        imgs[i].addEventListener('load', () => {
            preloaderImg1.style.strokeDashoffset = strokeDasharray1 - currentSDO1;
            preloaderText.innerHTML = `${currentPercent}`;
            currentSDO1 += lengthSector1;
            currentPercent += percentStep;
        });
    }
    for (let i = 1; i < imgsNumber; i++) {
        imgs[i].addEventListener('load', () => {
            preloaderImg2.style.strokeDashoffset = strokeDasharray2 - currentSDO2;
            currentSDO2 += lengthSector2;
        });
    }
    for (let i = 1; i < imgsNumber; i++) {
        imgs[i].addEventListener('load', () => {
            preloaderImg3.style.strokeDashoffset = strokeDasharray3 - currentSDO3;
            currentSDO3 += lengthSector3;
        });
    }
    window.onload = function () {
        setTimeout(() => {
            preloader.classList.remove('preloader--active');
        }, 500);
    }
    return;

})();
'use strict';

const getUrl = (function(){
    const hash = window.location.href.slice(window.location.href.indexOf('?')+1);
    console.log(hash);

            if (hash == 'auth') {
        var card = document.querySelector('.user--front');
                card.classList.add('js-toggle');
        var cardBack = document.querySelector('.user--back');
                cardBack.classList.remove('js-toggle');
    }
})();

module.exports = getUrl;

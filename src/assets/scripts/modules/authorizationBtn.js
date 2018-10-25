const authBtns = document.querySelectorAll('.js-toggleBtn'),
    cards = document.querySelectorAll('.user');
    // authBtnDisp = document.querySelector('.authbtn');

authBtns.forEach(function (authBtn) {
    authBtn.addEventListener('click', function (e) {
        e.preventDefault();
        cards.forEach(function (card) {
            if (!card.classList.contains('js-toggle')) {
                card.classList.add('js-toggle');
            } else {
                card.classList.remove('js-toggle');
            }
        })
    });
});
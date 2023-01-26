'use strict';

const openModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.Close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');


for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener('click', function () {
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
};

overlay.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
closeModal.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
    }
})
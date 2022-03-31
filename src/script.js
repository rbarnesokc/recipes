const burg = document.querySelector('#burg');
const menu = document.querySelector('#menu');

burg.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }
})
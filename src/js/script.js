document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');

    document.querySelector('.hamburger').addEventListener('click', e => {
        menu.classList.toggle('active');
    });

    document.querySelector('.menu__close').addEventListener('click', e => {
        menu.classList.toggle('active');
    });
});
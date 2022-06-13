document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu');

    document.querySelector('.hamburger').addEventListener('click', e => {
        menu.classList.toggle('active');
    });

    document.querySelector('.menu__close').addEventListener('click', e => {
        menu.classList.toggle('active');
    });

    configurepercentageSkills();
});

function configurepercentageSkills() {
    const items = document.querySelectorAll('.skills__progress-item');

    items.forEach(el => {
        const percentage = el.querySelector('.skills__progress-persantage');
        const result = el.querySelector('.skills__progress-result');

        result.style.width = percentage.dataset.value + '%';
    });
}
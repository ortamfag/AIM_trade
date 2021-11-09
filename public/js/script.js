const g2020 = document.querySelector('.g2020');
const g2021 = document.querySelector('.g2021');
const g2025 = document.querySelector('.g2025');

const burger = document.querySelector('.y2020');
const y2021 = document.querySelector('.y2021');
const y2025 = document.querySelector('.y2025');


burger.addEventListener('click', () => y2020.classList.toggle('analysis__inner-itemgreen'));
burger.addEventListener('click', () => g2020.classList.toggle('g2020'));

y2021.addEventListener('click', () => y2021.classList.toggle('analysis__inner-itemgreen'));
y2021.addEventListener('click', () => g2021.classList.toggle('g2021'));

y2025.addEventListener('click', () => y2025.classList.toggle('analysis__inner-itemgreen'));
y2025.addEventListener('click', () => g2025.classList.toggle('g2025'));
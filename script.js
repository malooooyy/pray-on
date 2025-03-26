// --- Эффект глитча при наведении на H1 главной страницы ---
const glitchElement = document.querySelector('.hero h1.glitch');

if (glitchElement) {
    glitchElement.addEventListener('mouseover', () => {
        glitchElement.style.animationDuration = '0.5s, 0.8s'; // Ускоряем анимацию
    });
    glitchElement.addEventListener('mouseout', () => {
       glitchElement.style.animationDuration = '2s, 3s'; // Возвращаем нормальную скорость
    });
}

// Код плавной прокрутки удален

console.log("Скрипт index.html загружен. Сайт готов к хаосу!");
// Скрипт для обработки формы, если необходимо
document.addEventListener('DOMContentLoaded', function() {
    // Пример обработки отправки формы
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Обработка отправки формы (например, AJAX запрос)
        alert('Форма отправлена!');
    });
});

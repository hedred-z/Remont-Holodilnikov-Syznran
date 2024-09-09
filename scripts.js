document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем стандартное действие формы

        // Получаем данные из формы
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            message: formData.get('message')
        };

        // Формируем текст сообщения для Telegram
        const text = `
            Новый запрос:
            Имя: ${data.name}
            Телефон: ${data.phone}
            Проблема: ${data.message}
        `;

        // Отправляем запрос в Telegram бот
        fetch('https://api.telegram.org/bot7369787047:AAGPnedvVkimxsNuK8tLVaqFPcZJ90rjSeE/sendMessage', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: '-1002396877462',
                text: text
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Заявка отправлена успешно!');
                form.reset(); // Сброс формы
            } else {
                alert('Произошла ошибка при отправке заявки.');
                console.error('Ошибка:', data);
            }
        })
        .catch(error => {
            alert('Произошла ошибка при отправке заявки.');
            console.error('Ошибка:', error);
        });
    });
});

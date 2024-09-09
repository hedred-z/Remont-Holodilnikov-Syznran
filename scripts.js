document.addEventListener('DOMContentLoaded', () => {
    const popup = document.querySelector('.popup');
    const contactUsButton = document.getElementById('contactUs');
    const callUsButton = document.getElementById('callUs');
    const form = document.querySelector('#contactForm');

    // Показать всплывающее окно через 3 секунды после загрузки страницы
    setTimeout(() => {
        popup.style.display = 'flex';
    }, 3000);

    // Обработчик отправки формы
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const issue = formData.get('issue');

        const message = `Новая заявка:\nИмя: ${name}\nТелефон: ${phone}\nПроблема: ${issue}`;
        const telegramBotToken = '7369787047:AAGPnedvVkimxsNuK8tLVaqFPcZJ90rjSeE'; // Ваш API токен
        const telegramChatId = '-1002396877462'; // Ваш чат ID

        try {
            const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: telegramChatId,
                    text: message,
                }),
            });

            if (response.ok) {
                alert('Заявка отправлена успешно!');
                form.reset(); // Очистить форму
            } else {
                alert('Произошла ошибка при отправке заявки.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Произошла ошибка при отправке заявки.');
        }
    });

    // Показать форму для связи при нажатии на кнопку "Связаться с нами"
    contactUsButton.addEventListener('click', () => {
        window.location.href = '#contact-us';
    });

    // Открыть приложение для звонков при нажатии на кнопку "Позвонить"
    callUsButton.addEventListener('click', () => {
        window.location.href = 'tel:+89270295842';
    });
});

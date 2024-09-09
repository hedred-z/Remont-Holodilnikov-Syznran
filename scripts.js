document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('#contactForm');
    const callButton = document.querySelector('#callUs');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const issue = formData.get('issue');

        const message = `Новая заявка:\nИмя: ${name}\nТелефон: ${phone}\nПроблема: ${issue}`;
        const telegramBotToken = '7369787047:AAGPnedvVkimxsNuK8tLVaqFPcZJ90rjSeE';
        const telegramChatId = '-1002396877462';

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
                alert('Ваше сообщение было отправлено!');
                form.reset();  // Очистка формы после отправки
            } else {
                alert('Ошибка при отправке сообщения. Пожалуйста, попробуйте позже.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            alert('Ошибка при отправке сообщения. Пожалуйста, попробуйте позже.');
        }
    });

    callButton.addEventListener('click', () => {
        window.location.href = 'tel:+89270295842'; // Заменен на реальный номер телефона
    });
});

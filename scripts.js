document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let problem = document.getElementById('problem').value;

    let message = `Имя: ${name}\nТелефон: ${phone}\nПроблема: ${problem}`;
    
    fetch('https://api.telegram.org/bot7369787047:AAGPnedvVkimxsNuK8tLVaqFPcZJ90rjSeE/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: '-1002396877462',
            text: message
        })
    }).then(response => response.json())
      .then(data => {
          alert('Ваша заявка отправлена!');
          document.querySelector('form').reset();
      })
      .catch(error => console.error('Ошибка:', error));
});

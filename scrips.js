document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obține datele din formular
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Validare simplă
    if (name === '' || message === '') {
        displayMessage('Toate câmpurile sunt obligatorii.', 'error');
        return;
    }

    // Exemplu de mesaj de succes
    displayMessage('Mulțumim pentru feedback-ul tău!', 'success');

    // Resetare formular
    document.getElementById('feedbackForm').reset();
});

function displayMessage(msg, type) {
    const messageBox = document.getElementById('messageBox');
    messageBox.innerHTML = msg;
    messageBox.className = type;
    messageBox.style.display = 'block';
}

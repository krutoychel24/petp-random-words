function displayMessage() {
    let test = Math.floor(Math.random()*15);
    let message = '';

    if (test > 3) {
        message = 'lol';
    } else {
        message = 'kek';
    }

    document.getElementById('output').innerText = message;
}

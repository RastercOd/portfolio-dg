const textToType = "Elevando meus estudos para outro nível.";
const typedTextElement = document.getElementById('typed-text');
const cursorElement = document.getElementById('cursor');

let index = 0;

function typeText() {
    if (index < textToType.length) {
        typedTextElement.innerHTML += textToType.charAt(index);
        index++;
        setTimeout(typeText, 80); // Ajuste o tempo para a velocidade de digitação desejada
    } else {
        cursorElement.style.display = 'none'; // Esconde o cursor após a digitação
    }
}

typeText();

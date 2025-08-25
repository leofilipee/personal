// Seleciona os botões principais
const mainButtons = document.querySelectorAll('#mainButtons .option');

// Caminho do áudio
const clickSound = new Audio('audio/click-in.mp3');

// Adiciona o evento mouseup a cada botão
mainButtons.forEach(button => {
    button.addEventListener('mouseup', () => {
        clickSound.play();
    });
});
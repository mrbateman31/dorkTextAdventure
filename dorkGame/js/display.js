// Style and display elements 
const changeBg = () => {
    const bgElement = document.getElementById('container');
    bgElement.style.backgroundImage = "url('imgs/church.jpg')";
}

const changeText = () => {
    let text = document.querySelector('.game-text');
    text.classList.remove('typewriter');
    text.classList.add('typewriter');
    text.textContent = textNodes[0].text;
}

const helpMenu = document.getElementById('help');

const showHelp = () => {
    helpMenu.classList.toggle('showHelp');
}

const hideHelp = () => {
    helpMenu.addEventListener('click', () => {
        helpMenu.classList.remove('showhelp');
    })
}

const textNodes = [
    {
        text: "You wake up in a strange place. There is a key and a door."
    },
]
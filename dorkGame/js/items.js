let inventory = [];

let gameItems = [
    {
        name: 'key',
        onUse: function() {
            openDoor();
        },
        location: textNodes[0],
        description: 'It might have something to do with the DOOR.'
    }
]

let gameObjects = [
    {
        name: 'door',
        reqForUse: gameItems[0],
        location: textNodes[0],
        description: 'Maybe it needs KEY?'
    }
]

const takeItem = (gameItems, inventory) => {

}

const useItem = (gameItems, inventory, gameObjects) => {

}

const describeThing = () => {
    if()
    let text = document.querySelector('.game-text');
    text.classList.remove('typewriter');
    text.classList.add('typewriter');
    text.textContent = gameItems[0].description;
}

import Game from './classes/game.js';

const load = () => {
    
    let emos = ["🐶", "🐱", "🐭", "🐹", "🐰", "🐻"];
    let game = new Game(emos);
    game.play();

    }

document.addEventListener("DOMContentLoaded", load);


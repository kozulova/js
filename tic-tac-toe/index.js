(function (){

let table = Array(9).fill(null);
let result;

class Player {
    constructor(sign) {
        this.sign = sign;
    }
    makeStep = (pos) => {
        table[pos] = `${this.sign}`;
        return table;
    }
}


const checkFreeSlots = () => {
    let freeSlots = table.map((sl, index) => sl === null ? index : -1).filter(index => index !== -1);
    return freeSlots;
}

let prevStep = 0;

const play = () => {
    
    let player1 = new Player("0");
    let player2 = new Player("x");
        
    checkWin();

    let slots = checkFreeSlots();
    if (slots.length == 0) {
        if (result === undefined) {
            result = "draw"
        }

        return;
    }

    let rndPos = slots[Math.floor(Math.random() * slots.length)];

    if (prevStep === 1) {
        player2.makeStep(rndPos);
        prevStep = 2;
    }
    else {
        player1.makeStep(rndPos);
        prevStep = 1;
    }

    renderGameboard();

    while (result === undefined) {
        play()
    }

}

const checkWin = () => {

    if (table[0] !== null && table[0] === table[4] && table[0] === table[8]) {
        console.log("Win", table[0]);
        result = table[0];
    }
    else if (table[2] !== null && table[2] === table[4] && table[2] === table[6]) {
        result = table[2];
    }
    else {
        for (let i = 0; i < table.length; i += 3) {
            if (table[i] !== null && table[i] === table[i + 1] && table[i] === table[i + 2]) {
                result = table[i];
            }
        }

        for (let i = 0; i < 3; i++) {
            if (table[i] !== null && table[i] === table[i + 3] && table[i] === table[i + 6]) {
                result = table[i];
            }
        }
    }
}

const renderGameboard = () => {

    let game_board = document.querySelector(".game_board")
    let show_result = document.querySelector(".result");
    game_board.innerHTML = "";

    table.forEach(item => {
        let div = document.createElement("div");
        div.className = "square";
        div.innerText = item;
        game_board.appendChild(div);
    })

    show_result.innerText = `${result} won the game`;

}

play();

document.addEventListener("DOMContentLoaded", renderGameboard());

})();
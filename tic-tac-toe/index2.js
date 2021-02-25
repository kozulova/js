const gameBoard = (()=>{
    const table = Array(9).fill(null);
    let freeSlots = table.map((slot, index)=>index);
    let prevPlayerMove = undefined;
    let result = undefined;


    const play = () => {

        const player1 = playerFactory("0");
        const player2 = playerFactory("x");    

        const game = () =>{
            checkWin();
            
            if(prevPlayerMove === undefined || prevPlayerMove === 2){
                player1.makeMove();
                prevPlayerMove = 1;
            }
            else{
                player2.makeMove();
                prevPlayerMove = 2;
            }

        }

        while(freeSlots.length > 0 && result === undefined){
            
            game();  
            
         }
        
    }; 

    const checkWin = () => {


        if (table[0] !== null && table[0] === table[4] && table[0] === table[8]) {
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

        if(freeSlots.length === 0 && result===undefined){
            result = "draw";  
            console.log(result, table);           
        }

        if(result!==undefined){
            console.log(result, table);
        }
    }

    const playerFactory = (sign) => {

        const makeMove = () => {
            let rndPos = freeSlots[Math.floor(Math.random()*freeSlots.length)]
            table[rndPos] = sign;
            freeSlots = freeSlots.filter(slot=>slot!=rndPos)
            return sign;
        }


        return {makeMove}
    }

    return {
        play
    }
})();

gameBoard.play();
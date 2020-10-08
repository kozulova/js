import {openModal, closeModal} from './modal.js';

import Game from './game.js';

class Timer{
    timer = document.getElementById("timer");
    secs = 60;
    timerInterval = null;
    
    setTimer(){
        let self = this;
        timer.innerHTML = "";
        timer.innerHTML += this.secs;    
        this.timerInterval = setInterval(addTimer, 1000); 
        

        function addTimer(){   
            self.secs = self.secs - 10;
            timer.innerHTML = self.secs;
            console.log(self.secs);
            self.checkLoose();
        }
    }

    checkLoose(){
        if(this.isTimerOf()){
            openModal("loose");
            this.clearTimer();
        }
    }

    clearTimer(){
        clearInterval(this.timerInterval);
        this.secs = 60;
    }  

    isTimerOf(){
        if(this.secs == 0){
            return true;
        }
        else{
            return false;
        }
    }  
}

 export default Timer;   
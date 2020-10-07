const load = () => {
let emos = ["🐶", "🐱", "🐭", "🐹", "🐰", "🐻"];
let game = new Game(emos);
game.play();

}

document.addEventListener("DOMContentLoaded", load);

class Game{

    constructor(cards){
        this.cards = cards.concat(cards);
    }

    matchCards = [];
    gameStart = 0;

    play(){
        this.showCards();
        this.handleClick();
    }


    showCards(){
        this.matchCards = [];
        let el = document.getElementById("list");
        el.innerHTML = "";
        this.cards.sort(() => Math.random() - 0.5).forEach((card, i)=>{
            let div = new Card(card, i);
            div.className = i;
            el.appendChild(div.addCard());
        })
    }

    setTimer(){
        let self = this;
        let timerInterval = null;
        timer.innerHTML="";
        let secs = 60;
        timer.innerHTML +=secs;
        timerInterval = setInterval(addTimer, 1000);

        function addTimer(){
            secs = secs - 1;
            timer.innerHTML = secs;
            if(secs===0){
                clearInterval(timerInterval);
                self.openModal("Loose");
                self.playAgain();
            }
            else if(self.checkWin()){
                clearInterval(timerInterval);
                self.openModal("win");
                self.playAgain();
            }
        }
    }

    openModal(message){
        let modal = document.getElementById("modal");
        let title = document.querySelector("h2");
        title.innerHTML = message;
        modal.style.display = "block";
    }
    closeModal(){
        let modal = document.getElementById("modal");
        modal.style.display = "none";
    }

    checkWin(){
        if(this.matchCards.length === this.cards.length/2){
            return true;
        }
        else {
          return  false};
    }

    playAgain(){
        let self = this;
        let playAgainButton = document.querySelector(".playAgain");
        playAgainButton.addEventListener("click", function(){
            self.gameStart = 0;
            self.play();
            self.closeModal();
        });
    }

    handleClick(){
    let openedCards = [];
    let self = this; 
    let cards = document.querySelectorAll('.card');
    cards.forEach(item=>{
        clickListenter(item);
    })

    function clickListenter(card){  
     
        card.addEventListener('click',     function(){ 

            if(self.gameStart===0){
                self.setTimer();
                self.gameStart++;
            }

            flip(this);

            if(isSame(this)){
                removeCardfromOpened(this);
            }
            else if(isMatch(this)){
                matchStyle(this);
            }
            else{     
                addCardToOpened(this);
            }
      console.log(openedCards);
    })
    }

    function flip(card){
        isFlipped(card)?card.classList.remove("flipped"):card.classList.add("flipped"); 
    }

    function isFlipped(card){
       return  card.classList.contains("flipped")?true:false;
    }

    function addCardToOpened(card){
        if(openedCards.length===2){ 
            removeAllIfOpennedTwo();   
        } 
        openedCards.push(card);
        if(openedCards.length>=2){
            cardIsNotMatchingStyle();
        }
        
    }

    function removeAllIfOpennedTwo(){
        openedCards.forEach(item=>flip(item));
        openedCards = [];
    }

    function removeCardfromOpened(card){
       openedCards = openedCards.filter(item=>item.getAttribute("id")!==card.getAttribute("id"));
    }

    function cardIsNotMatchingStyle(card){
        openedCards.forEach(item=>!item.classList.contains("miss")?item.classList.add("miss"):item);
    }

    function isSame(card){
        openedCards.find(item=>item.getAttribute("id")===card.getAttribute("id"))?true:false;
    }

    function isMatch(card){
        return openedCards.some(item=>item.innerText===card.innerText)?true:false;
    }

    function matchStyle(card){
        let match = [];

        let matchElement = openedCards.find(item=>item.innerText===card.innerText);
        removeCardfromOpened(matchElement);
        removeCardfromOpened(card);
        match.push(card, matchElement);

        match.forEach(item=>{
            item.classList.contains("miss")?item.classList.remove("miss"):item;
           // item.classList.remove("missed");
            item.classList.add("match");
            item.style.pointerEvents = "none";
        })
        self.matchCards.push(match);
        console.log(self.matchCards);
    }
    }
}


class Card{
    constructor(emo, i){
        this.emo = emo;
        this.i = i;
    }
    addCard(){
        let div = document.createElement("div");
            div.className = "card";
            div.setAttribute("id", this.i);
            div.innerHTML = `
            <div class="card_face"></div>
            <div class="card_back"><span>${this.emo}</span></div>`;
        return div;    
    }
}
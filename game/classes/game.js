import Card from './card.js';
import {openModal, closeModal} from './modal.js';
import Timer from './timer.js';

export default class Game{

    constructor(cards){
        this.cards = cards.concat(cards);
    }
    cards = this.cards;
    matchCards = [];
    gameInit = 0;
    timer = new Timer();

    play(){
        this.showCards();
        this.handleClick();
        this.playAgain();
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

    startGame(){
        if(this.gameInit===0){
           this.timer.setTimer();
           this.gameInit++;
        }

    }

    checkWin(){
        if(this.matchCards.length === this.cards.length/2){
            openModal("Win");
            this.timer.clearTimer();
            this.gameInit = 0;
        }
    }

    playAgain(){
        let self = this;
        let playAgainButton = document.querySelector(".playAgain");
        playAgainButton.addEventListener("click", function(){
            self.gameStart = 0;
            self.play();
            closeModal();
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
           self.startGame();
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
      self.checkWin();
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
            item.classList.add("match");
            item.style.pointerEvents = "none";
        })
        self.matchCards.push(match);
        console.log(self.matchCards);
    }
    }
}
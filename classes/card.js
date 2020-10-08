export default class Card{
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
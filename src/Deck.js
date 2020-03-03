export default class Deck {
    constructor() {
        this.deck = [];
    }
   
    generateDeck(){
        let card = (suit, value) => {
            let name = `${value} of ${suit}`;
            return { 'value': value, 'name': name, 'suit': suit}
        }

        let values = ['2', '3','4','5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ['Clubs', 'Diamonds', 'Spades', 'Hearts'];
        
        for(let s = 0; s < suits.length; s++){
            for(let v = 0; v < values.length; v++){
                this.deck.push(card(suits[s], values[v]));
            }
        }
    }

    shuffle () {
        let currentIndex = this.deck.length, tempVal, randIndex;

        while(0 != currentIndex) {
            randIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -=1;
            tempVal = this.deck[currentIndex];
            this.deck[currentIndex] = this.deck[randIndex];
            this.deck[randIndex] = tempVal;
        }
    }

    deal() {
        return this.deck.shift();
    }

    ui(cardToShow, str) { 

        let node = document.createElement("div");
        let symbol = this.blackORred(cardToShow.suit);
        let cardUI
        if(str !== 'hide') {
            cardUI = `
                        <div class="card__inner">
                            <div class="card__front">
                                <img src="./../img/card_back.png" alt="back card" width="75px" height="100px">
                            </div>
  
                         <div class="card__back">
                             <span class="card__suit card__suit--top">${symbol.symbol}</span>
                             <span class="card__number">${cardToShow.value} </span>
                            <span class="card__suit card__suit--bottom">${symbol.symbol}</span>
                         </div>
                        </div>
        `;
        }else {
            cardUI = `
                        <div class="card__inner-back">
                            <div class="card__front">
                                <img src="./../img/card_back.png" alt="back card" width="75px" height="100px">
                            </div>
  
                         <div class="card__back">
                             <span class="card__suit card__suit--top">${symbol.symbol}</span>
                             <span class="card__number">${cardToShow.value} </span>
                            <span class="card__suit card__suit--bottom">${symbol.symbol}</span>
                         </div>
                        </div>
        `;
        }


        node.classList.add("card");
        node.classList.add(`${symbol.color}`);
        node.innerHTML = cardUI;
        if(str === 'user') {
            document.querySelector(".player").appendChild(node);
        }else {
            document.querySelector(".dealer").appendChild(node);
        }
 

        setTimeout(() => {
            node.style.backgroundColor = "#fff";
        }, 1500);
    }

    removeUI() {
        setTimeout(() => {
            document.querySelector(".player").innerHTML = '';
            document.querySelector(".dealer").innerHTML = '';
        }, 5000);
        
    }

    flipHideCard(){
        let hideCard =  document.querySelector('.card__inner-back');
        hideCard.classList.remove("card__inner-back")
        hideCard.classList.add("card__inner")
    }

    blackORred(suit) {
        if(suit === "Clubs") {
            return{ 
                symbol: '♣',
                color: 'black',
            } 
        }else if (suit === "Diamonds") {
            return {
                symbol: '♦',
                color: 'red'
            }
        }else if (suit === "Spades") {
            return {
                symbol: '♠',
                color: 'black'
            }
            
        }else {
            return {
                symbol: '♥',
                color: 'red'
            }
            
        }
    }
}





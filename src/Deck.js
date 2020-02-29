export default class Deck {
    constructor() {
        this.deck = [];
		this.dealt_cards = [];
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

    printDeck () {
		if (this.deck.length === 0) {
			// console.log('Deck has not been generated. Call generate_deck() on deck object before continuing.')
		}
		else {
			for ( let c = 0; c < this.deck.length; c++ ) {
	       			// console.log(this.deck[c])
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
        let dealCrad = this.deck.shift();
        this.dealt_cards.push(dealCrad);
        //return dealCrad
        this.ui(dealCrad)
    }

    ui(cardToShow) {

        let symbol = this.blackORred(cardToShow.suit);

        let cardUI = `<div class="card">
                        <div class="card__inner">
                            <div class="card__front">
                                <img src="./../card_back.png" alt="back card" width="75px" height="100px">
                            </div>
  
                         <div class="card__back">
                             <span class="card__suit card__suit--top">${symbol.symbol}</span>
                             <span class="card__number">${cardToShow.value} </span>
                            <span class="card__suit card__suit--bottom">${symbol.symbol}</span>
                         </div>
                        </div>
                      </div>`;

        //edit where to add innerHTML
        document.querySelector("body").innerHTML = cardUI;

        let card = document.querySelector(".card");
        card.classList.add(`${symbol.color}`);
    }

    //check  the color of the card
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





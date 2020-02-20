class Deck {
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
			console.log('Deck has not been generated. Call generate_deck() on deck object before continuing.')
		}
		else {
			for ( let c = 0; c < this.deck.length; c++ ) {
	       			console.log(this.deck[c])
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

        let suitTop = document.querySelector(".card__suit--top");
        let suitBottom = document.querySelector(".card__suit--bottom");
        let cardNum = document.querySelector(".card__number");
        let card = document.querySelector(".card");
        let symbol = this.blackORred(cardToShow.suit);

        suitTop.innerHTML = symbol.symbol;
        suitBottom.innerHTML = symbol.symbol;
        card.classList.add(`${symbol.color}`)
        cardNum.innerHTML = cardToShow.value;
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


let  deck = new Deck();

deck.generateDeck();
deck.printDeck()
deck.shuffle()
deck.deal();
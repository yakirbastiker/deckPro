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

    }

    ui() {

        let cardToShow = this.deck[15];
        let suitTop = document.querySelector(".card__suit--top");
        let suitBottom = document.querySelector(".card__suit--bottom");
        let cardNum = document.querySelector(".card__number");
        let card = document.querySelector(".card");
        let symbol,color;

        if(cardToShow.suit === "Clubs") {
            symbol = '♣';
            color = 'black';
        }else if (cardToShow.suit === "Diamonds") {
            symbol = '♦';
            color = 'red';
        }else if (cardToShow.suit === "Spades") {
            symbol = '♠';
            color = 'black';
        }else {
            symbol = '♥'
            color = 'red';
        }

        suitTop.innerHTML = symbol;
        suitBottom.innerHTML = symbol;
        card.classList.add(`${color}`)
        cardNum.innerHTML = cardToShow.value;
    }
}


let  deck = new Deck();

deck.generateDeck();
deck.printDeck()
deck.ui()
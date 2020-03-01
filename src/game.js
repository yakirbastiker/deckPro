import "./../sass/main.scss";
import Deck from './Deck';
import * as  checkCardValue from './checkCardValue';
import { playingUser, playingDealer, bet, money, playerTurn, dealerTurn } from './variable';
import betControl from './betControl';
import actionControl from './actionControl';

let  deck = new Deck();

//actionControl();

function game() {
    //init deck
    deck.generateDeck();
    deck.printDeck()
    deck.shuffle()
    
    //add evet show msg place bet 
    betControl();
    //when start bet and bet > 0 add event to start btn 
    //click on start and deal cards to player and dealer 

}
game()


function checkAinHand(str) {
    if(str === 'user') {

    }else {
        
    }
}

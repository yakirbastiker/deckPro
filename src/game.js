import "./../sass/main.scss";
import Deck from './Deck';
import { playingUser, playingDealer, bet, money, playerTurn, dealerTurn } from './variable';
import { showMoney } from './variable';
import betControl from './betControl';
import actionControl from './actionControl';
import {check21} from "./check21";
let  deck = new Deck();

export {deck};

function initDeck() {
    deck.generateDeck();
    deck.shuffle()   
}

export  function startHand () {  
    playingUser.push(deck.deal());
    playingUser.push(deck.deal());
    deck.ui(playingUser[0], 'user');
    deck.ui(playingUser[1], 'user');
    check21('user');

    playingDealer.push(deck.deal());
    playingDealer.push(deck.deal());
    deck.ui(playingDealer[0], 'dealer')
    deck.ui(playingDealer[1], 'hide')
}


function game() {
    showMoney();
    initDeck();
    betControl();
    actionControl();
}

game()
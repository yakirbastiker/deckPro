import { startHand } from './game';
import { deck } from "./game";
import showMSG from './showMSG';
import { checkCardValue } from "./checkCardValue";
import { removeChip } from "./showChip";
import { showChip } from "./showChip";
import { editChip } from "./showChip";
import { dealerPlay } from "./dealerPlay";
let playingUser = [];
let playingDealer = [];
let bet = 0; 
let money = 1000;
let playerTurn = false;
let dealerTurn = false;

export  {playingUser, playingDealer, bet, money, playerTurn, dealerTurn}


export function playerBet (value) {
        bet = value;
        money = money - bet;
        showMoney();    
        playerTurn = true;
        startHand()
}

export function doubleUpdate(){
    money = money - bet;
    bet = bet * 2;
    showMoney();
    editChip()
    turnChange();
}

export function turnChange(){
    playerTurn = !playerTurn;
    dealerTurn = !dealerTurn;
}

export function endOfHand(){
    bet = 0;
    dealerTurn = false;
    playerTurn = false;
    playingUser = [];
    playingDealer = [];
    deck.removeUI();
    removeChip();
}

export function playerWonHand(){ 
    money = money + (bet * 2);  
    showChip(bet);
    showMoney();
    endOfHand();
}


export function dealerStart(){
    if(dealerTurn){
        dealerPlay()
    }
}




export function showMoney() {
    let moneyDom = document.querySelector("#money");
    moneyDom.innerHTML = money;
}


export function checkWhoWon() {
    let sumPlayer = 0;
    let sumDealer = 0;
    for(let card =0; card < playingUser.length; card++){
        sumPlayer = sumPlayer + parseInt(checkCardValue(playingUser[card].value)); 
    }

    for(let card =0; card < playingDealer.length; card++){
        sumDealer = sumDealer + parseInt(checkCardValue(playingDealer[card].value));
    }

    if(sumPlayer > sumDealer) {
        playerWonHand();
        showMSG("player won the round");
    } else if(sumDealer > sumPlayer) {
        showMSG("player lose the round");
        endOfHand();
    }else {
        showMSG("its a tie");
        money = money + bet;
        showMoney();
        endOfHand();
    }
}

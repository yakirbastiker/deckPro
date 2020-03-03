import { playingUser, playerTurn } from './variable';
import { turnChange } from './variable';
import { doubleUpdate } from './variable';
import { dealerStart } from './variable';
import { deck } from "./game";
import { check21 } from "./check21";
import { dealerPlay } from "./dealerPlay";
import showMSG from './showMSG';

export default function actionControl() {

    let btnHit = document.querySelector("#hit");
    let btnStand = document.querySelector("#stand");
    let btnDouble = document.querySelector("#double");

    btnHit.addEventListener("click", function(){
        if(playerTurn) {
            let nextCard = deck.deal()
            playingUser.push(nextCard);
            deck.ui(nextCard, 'user');
            check21('user');
        }
    });

    btnStand.addEventListener("click", function(){
        if(playerTurn) {
            showMSG("Dealer turn")
            turnChange();
            dealerPlay();
        }
    });

    btnDouble.addEventListener("click", function(){
        if(playerTurn) {
            showMSG("double!,  Dealer turn")
            let nextCard = deck.deal()
            playingUser.push(nextCard);
            deck.ui(nextCard, 'user');
            doubleUpdate();
            check21('user'); 
            dealerStart();
        }
        
    });
}
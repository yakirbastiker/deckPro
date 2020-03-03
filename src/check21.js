import { playingUser,  playingDealer } from './variable';
import { checkWhoWon } from "./variable";
import { endOfHand } from "./variable";
import showMSG from './showMSG';
import {checkCardValue} from './checkCardValue';
import { checkAinHand } from './checkAinHand';
import { playerWonHand } from './variable';
import { dealerDraw } from "./dealerPlay";
export function check21 (str) {
    let num = 0;
    if(str === 'user') {
        for(let card =0; card < playingUser.length; card++){
            num = num + parseInt(checkCardValue(playingUser[card].value)); 
        }
    }else {
        for(let card =0; card < playingDealer.length; card++){
            num = num + parseInt(checkCardValue(playingDealer[card].value));
        }
    }

    if(str === 'user') {
        if(num > 21) { 
            checkAinHand(str);
            if(num > 21) {
                checkAinHand(str);
                num = 0;
                for(let card =0; card < playingUser.length; card++){
                    num = num + parseInt(checkCardValue(playingUser[card].value)); 
                }
                if(num > 21) {
                    showMSG("player lose. over 21");
                    endOfHand();
                   
                }

            }
        }else if(num === 21) {
            showMSG("user have blackjeck !!!");
            playerWonHand();
            
        }
    }
    else {
        if(num > 21){

            checkAinHand(str);
            if(num > 21) {
                checkAinHand(str);
                num = 0;
                for(let card =0; card < playingDealer.length; card++){
                    num = num + parseInt(checkCardValue(playingDealer[card].value)); 
                }
                if(num > 21) {
                    showMSG("Dealer lose over 21, player won the round");
                    playerWonHand();
                }

            }

        }else if(num === 21) {
            showMSG("dealer blackjeck, Player lose the round");
            endOfHand();  
        }else if(num <= 16) {
            setTimeout(() => {
                dealerDraw();
            }, 1500);
        }else {//check for A
            checkWhoWon();
        }
    }

}
import { deck } from "./game";
import {check21} from "./check21";
import { playingDealer, dealerTurn } from "./variable";

export function dealerPlay() {
    if(dealerTurn){
        deck.flipHideCard()
        check21("dealer");
    }
}

export function dealerDraw() {
    let nextCard = deck.deal();
    playingDealer.push(nextCard);
    deck.ui(nextCard, "dealer");
    check21("dealer");
}

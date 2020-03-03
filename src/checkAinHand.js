import { playingUser, playingDealer } from "./variable";
export function checkAinHand(str) {
    
    if(str === 'user') {
       let index = playingUser.findIndex(function(card){ return card.value === "A"});
       if(index >= 0) {
        playingUser[index].value = 1;
       }
    }else {
        let index = playingDealer.findIndex(function(card){ card.value === "A"});
        if(index >=0) {
            playingDealer[index].value = 1;
        }
    }
}
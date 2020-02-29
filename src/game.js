

import "./../sass/main.scss";
import Deck from './Deck';
import * as  checkCardValue from './checkCardValue';

import betControl from './betControl';
import actionControl from './actionControl';

let  deck = new Deck();

//array to push the card 
let playingUser = ['J', 'A'];
let playingDealer = ['J', 'A', 2];
let bet; // the bet in the round
let money = 1000;
betControl(money)

actionControl()




function game() {
    deck.generateDeck();
    deck.printDeck()
    deck.shuffle()
    deck.deal();
    console.log(deck)
}



function check21 (str) {
    let num = 0;
    //check 
    if(str === 'user') {
        for(let card =0; card < playingUser.length; card++){
            num += checkCardValue(playingUser[card]); // get val of card
        }
    }else {
        for(let card =0; card < playingDealer.length; card++){
            num += checkCardValue(playingDealer[card]);
        }
    }

    if(str === 'user') {
        if(num > 21) {
            console.log('user lose over 21');
            //check if A in hand to change to 1
        }else if(num === 21) {
            console.log('user blackjeck');
        }else {
            console.log('user keep play');
        }
    }else {
        //dealer
        if(num > 21){
            console.log('dealer lose over 21');
        }else if(num === 21) {
            console.log('dealer blackjeck');
        }else if(num <= 16) {
            console.log('dealer take more card');
        }else {
            console.log('dealer stand over 17 less 21');
        }
    }
    console.log(num)
}



function checkAinHand(str) {
    if(str === 'user') {

    }else {
        
    }
}
// check21("user")
// check21("dealer")
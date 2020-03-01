import rxjs from "rxjs";

let playingUser = ['J', 'A'];
let playingDealer = ['J', 'A', 2];
let bet = 0; // the bet in the round
let money = 1000;
let playerTurn = false;
let dealerTurn = false;
//add rxjs to all
//send all as object 
export {playingUser, playingDealer, bet, money, playerTurn, dealerTurn}
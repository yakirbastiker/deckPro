import { money,playerTurn, dealerTurn } from './variable';
import showMSG from './showMSG';
import {showChip} from './showChip';
import { playerBet } from './variable';
export default function betControl() {

    let sum = 0;
    let sumDom = document.querySelector("#sum");
    sumDom.innerHTML = sum;
    let btnRise = document.querySelector("#rise");
    let btnDecrease = document.querySelector("#decrease");
  
    btnRise.addEventListener("click", function() {
        if(!playerTurn && !dealerTurn) {
            if(sum >= money) {
                sum = money;
            }else {
                sum = sum + 100;
            }      
            sumDom.innerHTML = sum;            
        }     
    })
    
    btnDecrease.addEventListener('click', function(){
        if(!playerTurn && !dealerTurn) {
            if(sum <= 0) {
                sum = 0;
            }else {
                sum = sum - 100;
            }
            sumDom.innerHTML = sum;
        }
    })

    let btnStart = document.querySelector(".start");
    btnStart.addEventListener("click", function(){
        if(!playerTurn && !dealerTurn) {
            if(sum > 0){
                showChip(sum);
                playerBet(sum);
                sum = 0;    
                sumDom.innerHTML = sum;
            }else{
                showMSG("You need to bet before you start playing ");      
            }
        }
    })
}

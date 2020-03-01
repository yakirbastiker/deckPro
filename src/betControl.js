import { money, bet } from './variable';
import showMSG from './showMSG';
export default function betControl() {

    //get element
    let sum = 0;
    let sumDom = document.querySelector("#sum");
    sumDom.innerHTML = sum;
    let btnRise = document.querySelector("#rise");
    let btnDecrease = document.querySelector("#decrease");

    //add event    
    btnRise.addEventListener("click", function() {
    
        if(sum >= money) {
            alert("cant");
            sum = money;
        }else {
            sum = sum + 100;
        }      
        sumDom.innerHTML = sum;
        // bet = sum;
        //show num on chip
    })
    
    btnDecrease.addEventListener('click', function(){
        if(sum <= 0) {
            sum = 0;
            alert("cant")
        }else {
            sum = sum - 100;
        }
        sumDom.innerHTML = sum;
        // bet = sum; //error
    })

    let btnStart = document.querySelector(".start");
    btnStart.addEventListener("click", function(){
        if(sum > 0){
            //start game
        }else{
            showMSG("bet");      
        }
    })
}

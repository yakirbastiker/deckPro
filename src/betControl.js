export default function betControl(money) {
    // build controll
    let element = `<div class="bet__control">
    <div class="bet__control__rise"><a href="#" class="bet__control__rise-btn" id="rise">+</a></div>
    <div class="bet__control__sum" id="sum">0</div>
    <div class="bet__control__decrease"><a href="#" class="bet__control__decrease-btn" id="decrease">-</a></div>
    </div>`;
    document.querySelector("body").innerHTML += element;  

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
    })
    
    btnDecrease.addEventListener('click', function(){
        if(sum <= 0) {
            sum = 0;
            alert("cant")
        }else {
            sum = sum - 100;
        }
        sumDom.innerHTML = sum;
    })
}

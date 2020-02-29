export default function actionControl() {
    let el = `<div class="action__control">
        <div class="action__control_hit" id="hit">hit</div>
        <div class="action__control_stand" id="stand">stand</div>
        <div class="action__control_double" id="double">double</div>
        </div>`;

    document.querySelector("body").innerHTML += el;

    //get element
    let btnHit = document.querySelector("#hit");
    let btnStand = document.querySelector("#stand");
    let btnDouble = document.querySelector("#double");

    //add event

    btnHit.addEventListener("click", function(){
        console.log('hit')
    });

    btnStand.addEventListener("click", function(){
        console.log('stand')
    });

    btnDouble.addEventListener("click", function(){
        console.log('double')
    });
}
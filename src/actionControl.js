export default function actionControl() {
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
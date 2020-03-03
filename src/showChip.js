export function showChip (bet) {
    let node = document.createElement("div");
    node.classList.add("dashed-circle");
    let msg = document.createTextNode(bet);
    node.appendChild(msg);

    let chipDom = document.querySelector(".chip");
    chipDom.appendChild(node);
}

export function editChip() {
    let chip = document.querySelector(".dashed-circle");
    let num = chip.innerHTML;
    chip.innerHTML = `${num * 2}`;
}

export function removeChip(){
    setTimeout(() => {
        let chipDom = document.querySelector(".chip");
        chipDom.innerHTML = '';
    }, 5000);
}

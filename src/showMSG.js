export default function (text) {
    let node = document.createElement("div");
    node.classList.add("msg");
    let msg = document.createTextNode(text);
    node.appendChild(msg);
    
    let table = document.querySelector(".table");
    table.appendChild(node);

    setTimeout(() => {
        table.removeChild(node)
    }, 3000);
}
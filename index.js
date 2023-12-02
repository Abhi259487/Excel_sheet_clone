const header = document.getElementById("header");
const snoContainer = document.getElementById("sno");
const cellContainer = document.getElementById("cell-container");

const column = 27, rows = 100;
for(let i=0; i<column; i++){
    const headCell = document.createElement("div");
    headCell.className = "head-cell";
    if(i!=0){
        headCell.innerText = String.fromCharCode(64 + i);
    }
    header.appendChild(headCell);
}

for(let i=1; i<=rows; i++){
    const snoCell = document.createElement("div");
    snoCell.className = "sno-cell";

    snoCell.innerText = i;

    snoContainer.appendChild(snoCell);
}
for(let row=1; row<=rows; row++){
 const rowElement = document.createElement("div");
 rowElement.className = "row";
 for(let col=1; col<column; col++){
    const bodyCell = document.createElement("div");
    bodyCell.className = "cell";
    bodyCell.contentEditable= "true";
    bodyCell.id = `${String.fromCharCode(64 + col)} ${row}`;
    rowElement.appendChild(bodyCell);
    bodyCell.addEventListener("focus", onFocusCell)
}
 cellContainer.appendChild(rowElement);
 
}

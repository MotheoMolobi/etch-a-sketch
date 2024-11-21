const gridContainer = document.querySelector(".grid-container");
const input = document.querySelector("#input");
const setBtn = document.querySelector("#set-btn");
const black = document.querySelector("#black-color")
const random = document.querySelector("#random-color")

setBtn.addEventListener("click", setGrid);

black.addEventListener("focus", () => {
    let columns = document.getElementsByClassName("column");
        for (let i = 0; i < columns.length; i++) {
            columns[i].addEventListener("mouseover", colorBlack);
        }
});

random.addEventListener("focus", () => {
    let columns = document.getElementsByClassName("column");
        for (let i = 0; i < columns.length; i++) {
            columns[i].addEventListener("mouseover", randomColor);
        }
});


function setGrid() {
    let number = input.value

    for(let i = 0; i < number; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        gridContainer.appendChild(row);

        for(let k = 0; k < number; k++) {
            let column = document.createElement("div");
            column.classList.add("column");
            row.appendChild(column);
        }
    }
    input.value = ""
    
}

function colorBlack() {
    this.style.backgroundColor = '#2e2b2b';
}
function randomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
}



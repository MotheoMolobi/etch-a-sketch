const gridContainer = document.querySelector(".grid-container");
const input = document.querySelector("#input");
const setBtn = document.querySelector("#set-btn");
const black = document.querySelector("#black-color")
const random = document.querySelector("#random-color")
const eraser = document.querySelector("#eraser")
const display = document.querySelector("#display")
const clearBtn = document.querySelector("#clear-btn")

setBtn.addEventListener("click", setGrid);
input.addEventListener("keyup", displayText);
clearBtn.addEventListener("click", clear);

function displayText() {
    let number = input.value
    display.textContent = "Grid size: " + number + " x " + number;
}

gridContainer.addEventListener("mouseover", () => {
    let columns = document.querySelectorAll(".column");
        for (let i = 0; i < columns.length; i++) {
            columns[i].addEventListener("mouseover", changeColor);
        }
});

function setGrid() {
    /** Removing all of the columns and rows in the grid **/
    document.querySelectorAll(".column").forEach(el => el.remove());
    document.querySelectorAll(".row").forEach(el => el.remove());

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
    input.value = "";
}

function changeColor() {
    if(black.checked) {
        this.style.backgroundColor = '#2e2b2b';
    }
    else if(random.checked) {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        this.style.backgroundColor = "#" + randomColor;
    }
    else if(eraser.checked) {
        this.style.backgroundColor = 'white';
    }
}

function clear() {
    let columns = document.querySelectorAll(".column");
    for (let i = 0; i < columns.length; i++) {
        columns[i].style.backgroundColor = 'white';
    }
}

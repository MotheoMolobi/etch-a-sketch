const gridContainer = document.querySelector(".grid-container");
const input = document.querySelector("#input");
const setBtn = document.querySelector("#set-btn");

setBtn.addEventListener("click", setGrid);

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


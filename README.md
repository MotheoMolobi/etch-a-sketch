Made an algo which uses nested for loops

for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
        const div = document.createElement('div');
        div.className = 'grid-cell';
        container.appendChild(div);
    }
}

making divs which will be used to colour the grid as the mouse hovers over them

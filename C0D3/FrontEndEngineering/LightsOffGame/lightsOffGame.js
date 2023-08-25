let gameStart = document.getElementById('game-start-btn');
gameStart.onclick = () => {
    initializeGame(2);
}


/**
 * 
 * @param {number} size the size of the lightTable
 */
function initializeGame(size){
    // hide game start button each time starting the game.
    gameStart.hidden = true;    

    // create light table with size
    let lightTable = document.getElementsByClassName('light-table')[0];
    populateLightTable(size, lightTable);

    // click to light on/off
    lightTable.onclick = (e)=>{
        if (e.target.classList.contains('light-on')) {
            e.target.classList.toggle('light-on');

            toggleNeighbors(e.target, lightTable);   
        }
        
        checkGameWin(lightTable);
    };
}


function populateLightTable(size, lightTable){
    for (let i = 0; i < size; i++) {
        let row = lightTable.insertRow(i);

        for (let j = 0; j < size; j++) {
            let cell = row.insertCell(j);
            cell.classList.add('light');
        }
    }

    lightTable.rows[0].cells[0].classList.add('light-on');
}

/**
 * toggle neighbor light of the lit that is clicked
 * @param {HTMLTableCellElement} lit (the lit being clicked)
 * @param {HTMLTableElement} lightTable 
 */
function toggleNeighbors(lit, lightTable) {
    let rowIndex = lit.closest('tr').rowIndex;
    let cellIndex = lit.cellIndex;
    
    rowIndex > 0 ? toggleNeighborLight(rowIndex-1, cellIndex, lightTable) : null;
    rowIndex < lightTable.rows.length-1 ? toggleNeighborLight(rowIndex+1, cellIndex, lightTable) : null;
    
    cellIndex > 0 ? toggleNeighborLight(rowIndex, cellIndex-1, lightTable) : null;
    cellIndex < lightTable.rows[rowIndex].cells.length-1 ? toggleNeighborLight(rowIndex, cellIndex+1, lightTable) : null;
}

/**
 * 
 * @param {number} rowIndex 
 * @param {number} cellIndex 
 * @param {HTMLTableElement} lightTable 
 */
function toggleNeighborLight(rowIndex, cellIndex, lightTable){
    lightTable.rows[rowIndex].cells[cellIndex].classList.toggle('light-on');
}

function checkGameWin(lightTable){
    let lightOn = document.getElementsByClassName('light-on');

    if(lightOn.length) return;          // if there are light on, continue the game.

    let size = +prompt('You won! Play again with different size? 0 to stop playing')
    
    cleanCurrentGame(lightTable);

    !size || initializeGame(size);      // if size is not zero, start a new round with the size.
}

/**
 * 
 * @description clean the lightTable 
 * @param {HTMLTableElement} lightTable
 */
function cleanCurrentGame(lightTable) {
    lightTable.onclick = '';
    lightTable.innerHTML = '';

    gameStart.hidden = false;
}

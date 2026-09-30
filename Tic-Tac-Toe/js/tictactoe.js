let activePlayer = "X"; //sets whose turn it is
let selectedSquares = []; //stores all the moves so far
let gameOver = false; //blocks moves if the game's finished


//the main function runs when the square is clicked
function placeXorO(squareNr) {
    if (gameOver) { return false; } //ignores clicks after the game has ended

    //check if the square is free using .some() method
    if (!selectedSquares.some(element => element.includes(squareNr))) {
        let select = document.getElementById(squareNr); //finds the table cell by id
        //set the background image to x or o
        if (activePlayer === "X") {
            select.style.backgroundImage = 'url("images/x_alt.png")';
        } else {
            select.style.backgroundImage = 'url("images/o_alt.png")';
        }

        //add the selected square to the taken list and record the move 
        // by concat the player and square id
        selectedSquares.push(squareNr + activePlayer);

        //check if the move ended the game 
        checkWinConditions();
        if (gameOver) { return true; }

        //switches players
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        //plays audio on placement
        audio('./media/R2D2f.mp3');

        //if computer is playing, the user cannot play
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //return true if the move was made;
        // if the square was taken, returns nothing and counts it as false
        return true;
    }

    //computer pick a random value between 0-8 and selects that square
    function computersTurn() {
        let success = false;
        let pickSquare;

        while (!success) {
            pickSquare = String(Math.floor(Math.random() * 9));

            if (placeXorO(pickSquare)) {
                success = true; //exits the loop
            }
        }
    }
}

//check for all possible winning conditions
// - does the array include sets below
//and if so, draw a line by listed pixel coordinates
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    else if (selectedSquares.length >= 9) {
        gameOver = true; //tie ends the game
        audio('./media/R2D2c.mp3'); //play sounds for tie
        setTimeout(function () { resetGame(); }, 500);
    }

    //are all three strings in the array? if yes, execute the draw line else if
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);

        if (a === true && b === true && c === true) { return true; }
    }
}

//disables click so the computer can take its turn
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//plays the audio on placement
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

//animates drawn lines on the canvas
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines'); //access HTML canvas
    const c = canvas.getContext('2d'); //get the drawing tools

    //sets up 'pen' coords
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;

    //stroke settings 
    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 12;
        c.strokeStyle = 'rgba(111, 22, 255, 0.8)';
        c.stroke();

        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }

        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    //clear after game's done
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

    gameOver = true; //stop accepting moves
    disableClick(); //freeze mouse click for 1s 
    audio('./media/R2D2.mp3'); //play sound
    animateLineDrawing(); //start the line animation
    setTimeout(function () { clear(); resetGame(); }, 2000); //after 2 second wipe the line and reset the game
}


//reset each square to empty by looping through its id, refresh
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }

    selectedSquares = [];
    activePlayer = "X";
    gameOver = false;
}

//simple button function changing displayed text on click
function btnFunction() {
    var press = "You pressed the button!";
    document.getElementById("Button_Text").innerHTML = press;
}

//concatenate on click
function glueWords() {
    var part1 = "What a day";
    part1 += " to be learning javascript";
    document.getElementById("parag").innerHTML = part1;
}

//change color on hover
function changeColor() {
    document.getElementById("parag").style.color = "blue";
}

//revert back to original color when mouse out
function reverseColor() {
    document.getElementById("parag").style.color = "black";
}
//this function gets the inputs
function getSentence() {
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;

    return first.concat(" ", second);
}

//this function concats the inputs
function glueMe() {
    var glued = getSentence();
    document.getElementById("concat").innerHTML = glued;
    return glued;
}

//this functions slices the output
function sliceMe() {
    var sentence = getSentence();
    var sliced = sentence.slice(0, 10);

    document.getElementById("slicer").innerHTML =
        "Here are the first 10 characters of your sentence: " + sliced;
    return sliced;
}

//this function changes letters to uppercase
function upIt() {
    var text = getSentence();
    document.getElementById("big").innerHTML = text.toUpperCase();
    return text;
}

//this function searches for a word "cat" and uses toString() method
function letsCheck() {
    var input = getSentence();
    var position = input.search("cat");
    if (position > 0) {
        document.getElementById("word").innerHTML = "You found my favorite word, it is at " + position.toString();
    } else {
        document.getElementById("word").innerHTML = "My favorite word is cat and this time you did not find it!"
    }
}

//this function uses toPrecision() method
function cropMe() {
    var depth = document.getElementById("prox").value;
    var X = Math.PI;
    document.getElementById("short").innerHTML = X.toPrecision(depth);
}

//block-scoped variable to be used with toFixed() method
let X = Math.PI;
    document.getElementById("fix").innerHTML = 
    "Here, Pi rounded to: " + "<br>" +
    "two decimal points: " + X.toFixed(2) + "<br>" +
    "three decimal points: " + X.toFixed(3) + "<br>" +
    "or five decimal points: " + X.toFixed(5) + "<br>";
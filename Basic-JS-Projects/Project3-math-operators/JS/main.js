function getFirstTwoNumbers() {
    return {
        firstNumber: Number(document.getElementById("firstNumber").value),
        secondNumber: Number(document.getElementById("secondNumber").value)
    };
}

//addition

function mathFunction1(event) {
    event.preventDefault();

    var numbers = getFirstTwoNumbers();
    var addition = numbers.firstNumber + numbers.secondNumber;

    document.getElementById("math").textContent = "The result is " + addition;
    return addition;
}

//subtraction
function mathFunction2() {

    var numbers = getFirstTwoNumbers();
    var subtraction = numbers.firstNumber - numbers.secondNumber;

    document.getElementById("math2").textContent = "The result is " + subtraction;
    return subtraction;
}

//multiplification
function mathFunction3() {

    var numbers = getFirstTwoNumbers();
    var multi = numbers.firstNumber * numbers.secondNumber;

    document.getElementById("math3").textContent = "The result is " + multi;
    return multi;
}

//division
function mathFunction4() {

    var numbers = getFirstTwoNumbers();
    var divide = numbers.firstNumber / numbers.secondNumber;

    document.getElementById("math4").textContent = "The result is " + divide;
    return divide;
}

//mix them all
function mathFunction5() {

    var numbers = getFirstTwoNumbers();
    var all = (numbers.firstNumber + numbers.secondNumber) * numbers.firstNumber / numbers.secondNumber - numbers.firstNumber;

    document.getElementById("math5").textContent = "The number rollercoaster equals " + all;
    return all;
}

//modulus
function mathFunction6(event) {
    event.preventDefault();

    var thirdNumber = Number(document.getElementById("thirdNumber").value);
    var fourthNumber = Number(document.getElementById("fourthNumber").value);
    var modulus = thirdNumber % fourthNumber;

    document.getElementById("math6").textContent = "We just calculated the modulus, the result is " + modulus;
    return modulus;
}

//unary negation
function mathFunction7(event) {
    event.preventDefault();

    var fifthNumber = Number(document.getElementById("fifthNumber").value);

    document.getElementById("math7").textContent = "Negative of your dream number is " + -fifthNumber;
}

//increment

function mathFunction8() {

    var fifthNumber = Number(document.getElementById("fifthNumber").value);
    fifthNumber++;

    document.getElementById("math8").textContent = "Look at that: " + fifthNumber;
}

//decrement
function mathFunction9() {

    var fifthNumber = Number(document.getElementById("fifthNumber").value);
    fifthNumber--;

    document.getElementById("math9").textContent = "Look at that: " + fifthNumber;
}

//random & another math method
function mathFunction10() {

    var luckyNumber = (Math.random() * 31);

    document.getElementById("math10").textContent = "If today is day " + Math.trunc(luckyNumber) + " of the month, it's your lucky day!";
}
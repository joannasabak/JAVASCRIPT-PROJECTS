const Calculator = {
    displayValue: '0', //display 0 on the screen
    firstOperand: null, //holds the first operand for any expressions
    waitSecondOperand: false, //checks for a second operand
    operator: null, //holds the operator
};

//modify values each time btn click
function inputDigit(digit) {
    const { displayValue, waitSecondOperand } = Calculator;

    if (waitSecondOperand === true) {
        Calculator.displayValue = digit; //display input value of the first operand
        Calculator.waitSecondOperand = false;
    } else { //overwrite display value if 0 or adds to it
        Calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
}

//handle decimal points
function inputDecimal(dot) {
    if (Calculator.waitSecondOperand === true) return; //no accidental decimal pt clicks
    if (!Calculator.displayValue.includes(dot)) {
        Calculator.displayValue += dot; //if the display value doesn't contain a decimal point, we want to add one
    }
}

//operator handling
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = Calculator;
    //when operator key pressed, convert the string version of display into a number and store the result 
    const valueOfInput = parseFloat(displayValue);
    //check if the operator already exists and if waitSecondOperand is true to update the operator and exit function
    if (operator && Calculator.waitSecondOperand) {
        Calculator.operator = nextOperator;
        return;
    }

    if (firstOperand == null) {
        Calculator.firstOperand = valueOfInput;
    } else if (operator) { //does it already exist
        const valueNow = firstOperand || 0;
        let result = performCalculation[operator](valueNow, valueOfInput);
        result = Number(result).toFixed(9);
        result = (result * 1).toString();
        Calculator.displayValue = parseFloat(result);
        Calculator.firstOperand = parseFloat(result);
    }

    Calculator.waitSecondOperand = true;
    Calculator.operator = nextOperator;
}

//calculation
const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand,
};

//reset the calculator to initial state
function calculatorReset() {
    Calculator.displayValue = '0';
    Calculator.firstOperand = null;
    Calculator.waitSecondOperand = false;
    Calculator.operator = null;
}

//update screen with displayed value
function updateDisplay() {
    const display = document.querySelector(".calculator-screen");
    //display the whole operation so the user can track
    const { displayValue, firstOperand, operator, waitSecondOperand } = Calculator;

    if (firstOperand === null || operator === null || operator === '=') {
        display.value = displayValue;
        return;
    }

    const symbol = { '*': '×', '/': '÷' }[operator] ?? operator;

    display.value = waitSecondOperand
        ? `${firstOperand} ${symbol}`
        : `${firstOperand} ${symbol} ${displayValue}`;
}

updateDisplay();

const keys = document.querySelector(".calculator-keys");
keys.addEventListener("click", (event) => {
    const { target } = event;
    if (!target.matches("button")) {
        return;
    }

    if (target.classList.contains("operator")) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if (target.classList.contains("decimal")) {
        inputDecimal(target.value);
        updateDisplay()
        return;
    }

    if (target.classList.contains("all-clear")) {
        calculatorReset();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();

})
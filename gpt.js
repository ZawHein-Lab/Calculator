// Get the display field
let display = document.calcForm.display;

// Append a number or operator to the display
function appendToDisplay(value) {
    display.value += value;
}

// Clear the display
function clearDisplay() {
    display.value = '';
}

// Perform the calculation without eval()
function calculateResult() {
    const expression = display.value;
    const result = compute(expression);
    display.value = result;
}

// Core function to compute the result from the expression
function compute(expression) {
    const tokens = expression.match(/\d+|\+|\-|\*|\//g); // Tokenize the expression

    let index = 0;
    function nextToken() {
        return tokens[index++];
    }
    // console.log(nextToken());
    // Parse multiplication and division
    function parseFactor() {
        let result = parseFloat(nextToken());
        // console.log(nextToken());
        while (tokens[index] === '*' || tokens[index] === '/') {
            const operator = nextToken();
            const nextValue = parseFloat(nextToken());
            if (operator === '*') result *= nextValue;
            if (operator === '/') result /= nextValue;
        }
        return result;
    }
    
    // Parse addition and subtraction
    function parseExpression() {
        let result = parseFactor();
        while (tokens[index] === '+' || tokens[index] === '-') {
            const operator = nextToken();
            const nextValue = parseFactor();
            if (operator === '+') result += nextValue;
            if (operator === '-') result -= nextValue;
        }
        return result;
    }

    return parseExpression();
    // return parseFactor();
    
}

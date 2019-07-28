calculator();


function calculator() {
    var a = getUserInput("Enter first number", validateNumber);
    if (a === null) {
        cancel();
        return;
    }

    var operation = getUserInput("Enter operation", validateOperation);
    if (operation === null) {
        cancel();
        return;
    }

    var b = getUserInput("Enter second number", validateNumber);
    if (b === null) {
        cancel();
        return;
    }

    document.write("<p>" + a + " " + operation + " " + b + " = " +
            calculate(a, operation, b)+ "</p>");
}

function getUserInput(request, validator) {
    var userInput;

    do {
        userInput = prompt(request);
        if (userInput === null) {
            return null;
        }
    } while (!validator(userInput));

    return userInput;
}

function validateNumber(number) {
    return isNaN(+number);
}

function validateOperation(operation) {
    return (operation === "+" || operation === "-" || operation === "*"
        || operation === "/" || operation === "%" || operation === "^");
}

function cancel() {
    document.write("<p style='color: red'>Operation cancelled by user</p>");
}

function calculate(a, operation, b) {
    a = +a;
    b = +b;

    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        case "%":
            return a % b;
        case "^":
            return Math.pow(a, b);
        default:
            return null;
    }
}
'use strict';
let firstNumber = 10;
let secondNumber = 5;
let operationType = 2;

function calculating(firstNumber, secondNumber, operationType){
    if (operationType === '+') {
        return firstNumber + secondNumber;
    } else if (operationType === '-') {
        return firstNumber - secondNumber;
    } else if (operationType === '*') {
        return firstNumber * secondNumber;
    } else if (operationType === '/') {
        return firstNumber / secondNumber;
    }
}

function inputAsking() {
    firstNumber = prompt("write first number", `${firstNumber}`);
    firstNumber = parseFloat(firstNumber);

    secondNumber = prompt("Write second number", `${secondNumber}`);
    secondNumber = parseFloat(secondNumber);

    operationType = prompt("Write operation");
}
function inputChecking() {
    while (true) {
        if(Number.isInteger(firstNumber) && Number.isInteger(secondNumber)){
            alert("You wrote correct value. All is fine.");
            return;
        } else {
            alert("Write integer value");
            inputAsking();
        }
    }
}
function resulting () {
    let result = calculating(firstNumber, secondNumber, operationType);
    alert(result);
}

inputAsking();
inputChecking();
calculating();
resulting();
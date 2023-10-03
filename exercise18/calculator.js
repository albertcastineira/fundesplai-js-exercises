"use strict";
let currentValue = 0;
let newValue = 0;
let lastOperationResult = 0;
let lastValue = 0;
let lastOperation;
let currentOperation;
let currentValueHasDecimals = false;
let lastUpdateWasResult = false;
let currentInputString = "";
var Operation;
(function (Operation) {
    Operation["Addition"] = "+";
    Operation["Substraction"] = "-";
    Operation["Multiplication"] = "*";
    Operation["Division"] = "/";
})(Operation || (Operation = {}));
// Calculator
const calculator = document.querySelector(".calculator");
// Display
const calcDisplay = document.querySelector("#calcDisplay");
function initCalculator() {
    updateCalcDisplay(currentValue.toString());
    currentOperation = "";
    if (window.innerWidth > 500) {
        calculator.style.width = `350px`;
    }
    else {
        calculator.style.width = `${window.innerWidth - window.innerWidth / 0.5}px`;
    }
}
function updateCalcDisplay(value) {
    calcDisplay.value = value.toString();
}
function updateCurrent(value) {
    clearLastValues();
    if (lastUpdateWasResult) {
        currentInputString = "";
        lastUpdateWasResult = false;
    }
    if (!currentOperation) {
        currentInputString = `${currentInputString}${value}`;
        currentValue = Number(currentInputString);
        updateCalcDisplay(currentValue.toString());
    }
    else {
        if (newValue != 0) {
            currentInputString = `${currentInputString}${value}`;
            newValue = Number(currentInputString);
        }
        else {
            currentInputString = `${value}`;
            newValue = Number(currentInputString);
        }
        updateCalcDisplay(newValue.toString());
    }
}
function decimalPoint() {
    if (!currentValueHasDecimals) {
        currentInputString = `${currentInputString}.`;
        updateCalcDisplay(currentInputString.toString());
        currentValueHasDecimals = true;
    }
}
function clearCurrent() {
    currentValue = 0;
    currentInputString = "0";
    updateCalcDisplay(currentValue.toString());
}
function setOperation(operation) {
    currentOperation = operation;
    currentValueHasDecimals = false;
}
function resetCalcValues() {
    currentValue = 0;
    newValue = 0;
    currentOperation = "";
    currentValueHasDecimals = false;
}
function checkLastOperaiton() {
    return (lastOperationResult != 0);
}
function storeLastValues() {
    lastValue = newValue;
    lastOperation = currentOperation;
    lastOperationResult = currentValue;
}
function clearLastValues() {
    lastValue = 0;
    lastOperation = 0;
    lastOperationResult = 0;
}
function delLastDigit() {
    if (checkLastOperaiton()) {
        currentInputString = currentInputString.substring(0, currentInputString.length - 1);
        newValue = Number(currentInputString);
        updateCalcDisplay(newValue.toString());
    }
    else {
        currentInputString = currentInputString.substring(0, currentInputString.length - 1);
        currentValue = Number(currentInputString);
        updateCalcDisplay(currentValue.toString());
    }
}
function calculate() {
    if (checkLastOperaiton()) {
        currentValue = lastOperationResult;
        newValue = lastValue;
        currentOperation = lastOperation;
    }
    if (currentOperation && newValue != 0) {
        switch (currentOperation) {
            case Operation.Addition:
                currentValue = currentValue + newValue;
                storeLastValues();
                break;
            case Operation.Substraction:
                currentValue = currentValue - newValue;
                storeLastValues();
                break;
            case Operation.Multiplication:
                currentValue = currentValue * newValue;
                storeLastValues();
                break;
            case Operation.Division:
                currentValue = currentValue / newValue;
                storeLastValues();
                break;
            default:
                break;
        }
    }
    updateCalcDisplay(currentValue.toString());
    resetCalcValues();
    lastUpdateWasResult = true;
}
initCalculator();

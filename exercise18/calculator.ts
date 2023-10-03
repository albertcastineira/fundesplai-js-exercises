let currentValue : number = 0;
let newValue : number = 0;
let lastOperationResult : number = 0;
let lastValue : number = 0 ;
let lastOperation : string;
let currentOperation : string;
let currentValueHasDecimals : boolean = false;
let lastUpdateWasResult : boolean = false;

let currentInputString : string = "";

enum Operation {
    Addition = "+",
    Substraction = "-",
    Multiplication = "*",
    Division = "/"
}

// Calculator
const calculator = document.querySelector(".calculator") as HTMLDivElement;

// Display
const calcDisplay = document.querySelector("#calcDisplay") as HTMLInputElement;

function initCalculator(): void {
    updateCalcDisplay(currentValue.toString());
    currentOperation = "";
    if(window.innerWidth > 500) {
        calculator.style.width = `350px`;
    } else {
        calculator.style.width = `${window.innerWidth - window.innerWidth/0.5}px`;
    }
    
}

function updateCalcDisplay(value: string): void {
    calcDisplay.value = value.toString();
}

function updateCurrent(value : string): void {
    clearLastValues();
    if(lastUpdateWasResult) {
        currentInputString = "";
        lastUpdateWasResult = false;
    }
    if(!currentOperation) {
        currentInputString = `${currentInputString}${value}`;
        currentValue = Number(currentInputString);    
        updateCalcDisplay(currentValue.toString());
    } else {
        if(newValue != 0) {
            currentInputString = `${currentInputString}${value}`; 
            newValue = Number(currentInputString);
        } else {
            currentInputString = `${value}`; 
            newValue = Number(currentInputString);
        }
        updateCalcDisplay(newValue.toString());
    }
    
}

function decimalPoint() {
    if(!currentValueHasDecimals){
        currentInputString = `${currentInputString}.`;
        updateCalcDisplay(currentInputString.toString());
        currentValueHasDecimals = true;
    }
}

function clearCurrent(): void {
    currentValue = 0;
    currentInputString = "0";
    updateCalcDisplay(currentValue.toString());
}

function setOperation(operation : string): void {
    currentOperation = operation;
    currentValueHasDecimals = false;
    
}

function resetCalcValues(): void {
    currentValue = 0;
    newValue = 0;
    currentOperation = "";
    currentValueHasDecimals = false;
}

function checkLastOperaiton(): boolean {
    return (lastOperationResult != 0);
}

function storeLastValues(): void {
    lastValue = newValue;
    lastOperation = currentOperation;
    lastOperationResult = currentValue;
}

function clearLastValues(): void {
    lastValue = 0;
    lastOperation = "";
    lastOperationResult = 0;
}

function delLastDigit(): void {
    if(checkLastOperaiton()) {
        currentInputString = currentInputString.substring(0, currentInputString.length - 1);
        newValue = Number(currentInputString);
        updateCalcDisplay(newValue.toString());
    } else {
        currentInputString = currentInputString.substring(0, currentInputString.length - 1);
        currentValue = Number(currentInputString);
        updateCalcDisplay(currentValue.toString());
    }
    
}

function calculate(): void {

    if(checkLastOperaiton()) {
        currentValue = lastOperationResult;
        newValue = lastValue;
        currentOperation = lastOperation;
    }

    if(currentOperation && newValue != 0) {
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
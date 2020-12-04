/* 
Sign누르고 Num누르고 Sign누르면 계산결과 반환
Num누르고 Num누르면 string더하기 결과 반환
*/

const numBtn = document.querySelectorAll(".numBtn"),
    signBtn = document.querySelectorAll(".js-sign"),
    dotBtn = document.getElementById("dot"),
    cBtn = document.getElementById("c"),
    backSpaceBtn = document.getElementById("ce");

const mainScreen = document.getElementById("main-screen"),
    progressWindow = document.getElementById("progress-window");

let signPressed = true, canZero = false, signNeedCalce = false, numberDisplay = "", dotPressed = false,
    operand = "", displayOperand = "", canContinue;

function resetting() {
    signPressed = true, canZero = false, signNeedCalce = false, numberDisplay = "", dotPressed = false,
        operand = "", displayOperand = "", canContinue;
}

function displayMainScreen() {
    if (numberDisplay.length === 0) {
        mainScreen.innerHTML = "0";
        canZero = false;
    } else {
        mainScreen.innerHTML = numberDisplay;
    }
}

function displayProgressWindow() {
    if (displayOperand.length === 0) {
        progressWindow.innerHTML = "Progress";
    } else {
        progressWindow.innerHTML = displayOperand;
    }
}

let signProcess = {
    verification: (event) => {
        let valueIS = false, Equal = false;
        if (signPressed === false) {
            const sign = event.target.id;
            signPressed = true;
            if (numberDisplay[numberDisplay.length - 1] === ".") {
                numberDisplay = numberDisplay.slice(0, -1);
            }
            while (numberDisplay[numberDisplay.length - 1] === "0" && dotPressed === true) {
                numberDisplay = numberDisplay.slice(0, -1);
            }
            switch (sign) {
                case "times":
                    if (signNeedCalce === true) {
                        value = operand + numberDisplay;
                        valueIS = eval(value);
                    }
                    operand = operand + numberDisplay + "*";
                    console.log(operand);
                    displayOperand = displayOperand + numberDisplay + "×";
                    displayProgressWindow();
                    break;
                case "minus":
                    if (signNeedCalce === true) {
                        value = operand + numberDisplay;
                        valueIS = eval(value);
                    }
                    operand = operand + numberDisplay + "-";
                    console.log(operand);
                    displayOperand = displayOperand + numberDisplay + "−";
                    displayProgressWindow();
                    break;
                case "plus":
                    if (signNeedCalce === true) {
                        const value = operand + numberDisplay;
                        valueIS = eval(value);
                    }
                    operand = operand + numberDisplay + "+";
                    console.log(operand);
                    displayOperand = displayOperand + numberDisplay + "+";
                    displayProgressWindow();
                    break;
                case "division":
                    if (signNeedCalce === true) {
                        value = operand + numberDisplay;
                        valueIS = eval(value);
                    }
                    operand = operand + numberDisplay + "/";
                    console.log(operand);
                    displayOperand = displayOperand + numberDisplay + "÷";
                    displayProgressWindow();
                    break;
                case "equal":
                    if (signNeedCalce === true) {
                        value = operand + numberDisplay;
                        valueIS = eval(value);
                    }
                    displayOperand = displayOperand + numberDisplay;
                    console.log(operand);
                    displayProgressWindow();
                    Equal = true;
                    break;
                default:
                    break;
            }
            signNeedCalce = true;
            if (valueIS !== false) {
                numberDisplay = String(valueIS);
                canContinue = false;
            } else {
                numberDisplay = "";
            }
            if (Equal === true) {
                displayMainScreen();
                resetting();
            } else {
                displayMainScreen();
                dotPressed = false;
            }
        }
    }
}

let Numbering = {
    numProgress: (event) => {
        const number = event.target.id;
        if (canContinue !== true) {
            if (isNaN(parseFloat(operand[operand.length - 1])) === true && operand[operand.length - 1] !== undefined) {
                numberDisplay = "";
                canContinue = true;
            }
        }
        if (number === "0") {
            if (canZero === true) {
                numberDisplay = numberDisplay + number;
            }
        } else {
            canZero = true;
            numberDisplay = numberDisplay + number;
            signPressed = false;
        }
        displayMainScreen();
    },
    dotProgress: (event) => {
        if (canContinue !== true) {
            if (isNaN(parseFloat(operand[operand.length - 1])) === true && operand[operand.length - 1] !== undefined) {
                numberDisplay = "";
                canContinue = true;
            }
        }
        if (signPressed === true) {
            numberDisplay = "";
        }
        if (dotPressed === false) {
            const number = ".";
            if (numberDisplay === "") {
                numberDisplay = "0" + number
            } else {
                numberDisplay = numberDisplay + number;
            }
            displayMainScreen()
            dotPressed = true;
            canZero = true;
        }
    },
    backSpaceProgress: (event) => {
        if (numberDisplay[numberDisplay.length - 1] === ".") {
            dotPressed = false
        }
        numberDisplay = numberDisplay.slice(0, -1);
        displayMainScreen()
        if (numberDisplay.length > 0) {
            signPressed = false;
        }
    },
    cProgress: (event) => {
        location.reload();
    }
}
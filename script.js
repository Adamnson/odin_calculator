let firstNumber = 0;
let secondNumber = 0;
let operator = '';
let overwriteFlag = 0;


function operate (n1, n2, sign)
{
    let ans = 0;
    switch (sign) {
        case '+':
            ans = add(n1, n2);
            break;
        case '-':
            ans = subtract(n1, n2);
            break;
        case 'x':
            ans = multiply(n1, n2);
            break;
        case '/':
            ans = divide(n1, n2);
            break;
        default:
            console.log("Operation not valid");
    }
    // #debug
    // console.log(ans);
    return ans;
}

function addToDisplay(value) {
    let dispVal = document.getElementById('display').value;
    if (overwriteFlag) {clearDisplay();}
    if ( (value != '.') || ((value === '.') && !dispVal.includes('.') )) {
        document.getElementById('display').value += value;
        // #debug
        // console.log(document.getElementById('display').value);
    }
}

  function clearDisplay() {
    document.getElementById('display').value = '';
    if (overwriteFlag) { overwriteFlag = 0;}
}

function backspace() {
    let dispVal = document.getElementById('display').value;
    dispVal = dispVal.substring(0, dispVal.length-1);
    document.getElementById('display').value = dispVal;
}

function pushOperate(symbol) {
    push();
    switch (symbol) {
        case '/':
            operator = '/';
            break;
        case 'x':
            operator = 'x';
            break;
        case '-':
            operator = '-';
            break;
        case '+':
            operator = '+';
            break;
    }
    // #debug
    // console.log("opeartor :", operator);
}

function push() {
   firstNumber = parseFloat(document.getElementById('display').value);
   overwriteFlag = 1;
   // #debug
   // console.log("first number :", firstNumber);
}

function calculate() {
    secondNumber = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = operate(firstNumber, secondNumber, operator);
    overwriteFlag = 1;
}

function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return (b!=0) ? a/b : false ;
}
const firstNumber = 3;
const secondNumber = 5;
const operator = '+';


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
    console.log(ans);
}

function addToDisplay(value) {
    document.getElementById('display').value += value;
}

  function clearDisplay() {
    document.getElementById('display').value = '';
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
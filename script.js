let num1, num2 = '';
let operator = null;

function add(a,b){
    return a + b;
}
function substract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    return a/b;
}

function operate (operator, a, b){
    switch (operator) {
        case '+':
            return add(a,b);
        case '-':
            return substract(a,b);
        case '*':
            return multiply(a,b);
        default:
            return divide(a,b);

    }
}

const operands = document.querySelector('#operands');
function createOperands (){
    for (let i=9; i>=0;i--){
        const operand = document.createElement('button');
        operand.classList.add(`${i}`);
        operand.textContent = `${i}`;
        operands.appendChild(operand);
    }
}
createOperands();

const operators = document.querySelectorAll('#operators');
function setOperator(op){
    if(operator === null) return 
    num1=textfield.textContent;
    operator = op;
    textfield.textContent = `${num1}${operator}`;
}

console.log(operators);
const textfield = document.querySelector('#textfield');
function populateDisplay(){

}
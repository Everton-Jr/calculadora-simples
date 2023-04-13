var input = document.querySelector('#mainInput');
var botoes = document.querySelector('#numButtons');
var operations = document.querySelector('#operButtons');

var mathed = false;

// operadores usados
var operators = ['+', '-', '/', '*'];

// CREATE NUMBERS
for (let i=0; i<=9; i++) {
    var v = i+1;
    if (v == 10) {
        v = 0;
        botoes.innerHTML+=`<input id="zero" type="button" value="${v}" onclick="AddValue(${v})">`;
    } else {
        botoes.innerHTML+=`<input type="button" value="${v}" onclick="AddValue(${v})">`;
    }
}
// CREATE OPERATIONS
for (let i=0; i<operators.length; i++) {
    operations.innerHTML+=`<input type="button" value="${operators[i]}" onclick="AddValue('${operators[i]}')">`;
}

//função para procurar valores em array ou strings
function findValue(array, value) {
    for (let i=0; i<array.length; i++) {
        if (value == array[i]) {
            return value;
        }
    }
}

//faz a operação entre os números
function Mathing(nums, operator) {
    var operation = 0;
    switch (operator) {
        case '+':
            operation = Number(nums[0]) + Number(nums[1]);
            break;
        case '-':
            operation = Number(nums[0]) - Number(nums[1]);
            break;
        case '*':
            operation = Number(nums[0]) * Number(nums[1]);
            break;
        case '/':
            operation = Number(nums[0]) / Number(nums[1]);
            break;
    }
    return operation;
}

//adiciona o número ou operador no input
function AddValue(num) {
    if (mathed && (typeof num) == 'number') {
        mathed = false;
        Clear();
    }
    var oper = findValue(operators, num);
    if (oper) {
        for (let i=0; i<operators.length; i++) {
            var found = findValue(input.value, operators[i]);
        }
    }
    input.value += num;
}

//verifica se é um operador
function isOperator(value, power) {
    for (let i=0; i<operators.length; i++) {
        if (value == operators[i]) {
            return value;
        }
    }
}

//limpa o input
function Clear() {
    input.value = '';
}

//faz o calculo do input
function Calc() {
    var iVal = input.value;
    for (let i=0; i<iVal.length; i++) {
        input.value = eval(iVal);
    }
    mathed = true;
}

//deleta o último valor
function Delete() {
    var iVal = input.value;
    input.value = iVal.substring(0, iVal.length-1);
}
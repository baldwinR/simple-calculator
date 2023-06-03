const nums = document.querySelectorAll('.num');
const ops = document.querySelectorAll('.op');

let display = document.getElementById('results');
let opIsSelected = false;
let opSelected = '';
let num1 = '';
let num2 = '';
let result = 0;
let opAgain = false;

document.addEventListener('load', addListener());

function addListener() {
    for(i=0; i<nums.length; i++) {
        nums[i].addEventListener('click', (event) => {
            if (result != 0 && opIsSelected == false) {
                clear();
            }
            if(opIsSelected){
                if(num2 == 0){
                    num2 = '';
                }
                num2 += event.srcElement.innerText;
                display.innerText = num2;
            } else {
                num1 += event.srcElement.innerText;
                display.innerText = num1;
            }
            
        })
    }
    for(i=0; i<ops.length; i++) {
        ops[i].addEventListener('click', operator);
    }

    document.getElementById('clear').addEventListener('click', clear);
    document.getElementById('equal').addEventListener('click', equals);
}

function getNum() {
    return display.innerText;
}

function operator() {
    if(display.innerText == ''){
        opIsSelected = false;
    } else {
         opIsSelected = true;
         if(result != 0){
            num1 = result.toString();
         }
         
         if(num2 != ''){
            equate(num1, num2);
            num1 = result;
            result = 0;
         } else {
            num2 = 0;
         }
         opSelected = event.srcElement.innerText;
    }
}

function equate(firstNum, secNum){
    if(opSelected == '+'){
        result = parseFloat(firstNum) + parseFloat(secNum);
        display.innerText = result;
    } else if(opSelected == '-') {
        result = parseFloat(firstNum) - parseFloat(secNum);
        display.innerText = result;
    } else if(opSelected == '*') {
        result = parseFloat(firstNum) * parseFloat(secNum);
        display.innerText = result;
    } else if(opSelected == '/') {
        result = parseFloat(firstNum) / parseFloat(secNum);
        display.innerText = result;
    } else {
        display.innerText = getNum();
    }
    num2 = '';
}

function equals(){
    equate(num1, num2);
    opIsSelected = false;
    opSelected = '';
}

function clear(){
    display.innerText = '';
    opIsSelected = false;
    result = 0;
    num1 = '';
    num2 = '';
}
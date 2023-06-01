const nums = document.querySelectorAll('.num');
const ops = document.querySelectorAll('.op');

let display = document.getElementById('results');
let opIsSelected = false;
let opSelected = '';
let num = 0;
let result = 0;

document.addEventListener('load', addListener());

function addListener() {
    for(i=0; i<nums.length; i++) {
        nums[i].addEventListener('click', (event) => {
            if(opIsSelected){
                display.innerText = event.srcElement.innerText;
                opIsSelected = false;
            } else {
                display.innerText += event.srcElement.innerText;
            }
            
        })
    }
    for(i=0; i<ops.length; i++) {
        ops[i].addEventListener('click', operator);
    }

    document.getElementById('clear').addEventListener('click', clear);
    document.getElementById('equal').addEventListener('click', equate);
}

function getNum() {
    return display.innerText;
}

function operator() {
    
    if(display.innerText == ''){
        opIsSelected = false;
    } else {
         opIsSelected = true;
         opSelected = event.srcElement.innerText;

         num = getNum();
         
    }
}

function equate(){
    if(opSelected == '+'){
        result = parseFloat(num) + parseFloat(getNum());
        display.innerText = result;
    } else if(opSelected == '-') {
        result = parseFloat(num) - parseFloat(getNum());
        display.innerText = result;
    } else if(opSelected == '*') {
        result = parseFloat(num) * parseFloat(getNum());
        display.innerText = result;
    } else if(opSelected == '/') {
        result = parseFloat(num) / parseFloat(getNum());
        display.innerText = result;
    } else {
        display.innerHTML = getNum();
    }
}

function clear(){
    display.innerText = '';
    opIsSelected = false;
    result = 0;
    num = 0;
}
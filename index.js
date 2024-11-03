let display=document.querySelector('.input input');

let total;
let firstNum="";
let secondNum="";
let operator="";

function button_number(value){
    display.value+=value;
    if(operator === ""){
        firstNum+=value;
    }else{
        secondNum+=value;
    }
}

function button_clear(){
    display.value=" ";
    firstNum=" ";
    secondNum=" ";
    operator="";

}

function set_operator(op){
    if(firstNum!== ""){
        operator=op;
        display.value+=op;
    }
}

function button_equals(){
    if(firstNum!=="" && secondNum!=="" && operator!==""){
        calculate(firstNum,secondNum,operator);
        display.value=total;
        firstNum=total.toString();
        secondNum="";
        operator="";
    }
}

function calculate(num1,num2,operator){
    if(operator === '+'){
        total=parseInt(num1)+parseInt(num2);
    }
    else if(operator === '-'){
        total=parseInt(num1)-parseInt(num2);
    }
    else if(operator === '*'){
        total=parseInt(num1)*parseInt(num2);
    }
    else if(operator === '/'){
        total=parseInt(num1)/parseInt(num2);
    }
}

/* Script */

let my_form = document.getElementById('my_form');
let input1 = document.getElementById('calorie');
let input2 = document.getElementById('user_weight');
let result= document.getElementById('result');
let btn_clear = document.getElementById('btn_clear');

let all_selects = document.querySelectorAll('select');
for(let elem of all_selects){
    elem.addEventListener('change',getValue);
}

function getValue(){
input1.value = this.value;
this.classList.add('active');
}


let all_radio = document.querySelectorAll('[type=radio]');
for(let elem1 of all_radio){
    elem1.addEventListener('click', calculation);
    
 }
    

function calculation(){
if (getValue){
result_calculation = Math.round(input1.value/(input2.value*this.value));
let result1 = result_calculation;
if (result1 < 60){
    result.value = result1 + ' min';
} else if (result1 > 60){
    result.value = Math.trunc(result1/60 )+ ' hours' + ' '+ result1 % 60 + ' min';
} else if (result1 === 60){
    result.value = result1 + ' hour';
}
}
}

btn_clear.addEventListener('click', clearInputs);
function clearInputs(){
input1.value = '';
input2.value = '';
result.value='';
}
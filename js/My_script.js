/* Script */

let my_form = document.getElementById('my_form');
let input1 = document.getElementById('calorie');


let btn_result = document.getElementById('btn_result');

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
let input2 = document.getElementById('user_weight');
let result= document.getElementById('result');
result.value = Math.round(input1.value/(input2.value*this.value));
}
}
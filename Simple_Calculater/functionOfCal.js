const clearInput=function(){
input.value='';
}
const deleteInput=function(){
    inputV=document.getElementById('inputId').value;
    document.getElementById('inputId').value= inputV.substring(0,inputV.length -1);
  
}
function percentInput(event){
    input.value+=event.target.dataset.test;
}
function divideInput(event){
    input.value+= '/';
}

function sevenInput(event){
    input.value+=event.target.dataset.test;
}
function eightInput(event){
    input.value+=8;
}
function nineInput(event){
    input.value+=9;
}
function multpleInput(event){
    input.value+="*";
}

function fourInput(event){
    input.value+=4;
}
function fiveInput(event){
    input.value+=5;
}
function sixInput(event){
    input.value+=6;
}
function minusInput(event){
    input.value+="-";
}

function oneInput(event){
    input.value+=1;
}
function twoInput(event){
    input.value+=2;
}
function threeInput(event){
    input.value+=3;
}
function plusInput(event){
    input.value+="+";
}


function dotInput(event){
    input.value+=".";
}
function zeroInput(event){
    input.value+=0;
}
function zeroZeroInput(event){
    input.value+="00";
}

equalResult=function(event){
   input.value=eval(input.value)
}
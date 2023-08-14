const input=document.getElementById('inputId');
const cl=document.getElementById('cl');
const del=document.getElementById('del');
const percent=document.getElementById('%');
const divide=document.getElementById('/');

const seven=document.getElementById('7');
const eight=document.getElementById('8');
const nine=document.getElementById('9');
const multple=document.getElementById('*');

const four =document.getElementById('4');
const five =document.getElementById('5');
const six =document.getElementById('6');
const plus =document.getElementById('+');

const one =document.getElementById('1');
const two =document.getElementById('2');
const three =document.getElementById('3');
const minus =document.getElementById('-');

const dot =document.getElementById('.');
const zero =document.getElementById('0');
const zeroZero =document.getElementById('00');
const equal =document.getElementById('=');


cl.addEventListener('click',clearInput);
del.addEventListener('click',deleteInput);
percent.addEventListener('click',percentInput);
divide.addEventListener('click',divideInput);

seven.addEventListener('click',sevenInput);
eight.addEventListener('click',eightInput);
nine.addEventListener('click',nineInput);
multple.addEventListener('click',multpleInput);

four.addEventListener('click',fourInput);
five.addEventListener('click',fiveInput);
six.addEventListener('click',sixInput);
plus.addEventListener('click',plusInput);

one.addEventListener('click',oneInput);
two.addEventListener('click',twoInput);
three.addEventListener('click',threeInput);
minus.addEventListener('click',minusInput);

dot.addEventListener('click',dotInput);
zero.addEventListener('click',zeroInput);
zeroZero.addEventListener('click',zeroZeroInput);
equal.addEventListener('click',equalResult);
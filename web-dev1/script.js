
const clickLogin=document.querySelector('.click-login');
const reset=document.querySelector('.reset');
const showPassword=document.getElementById('showpassword');




clickLogin.addEventListener('click',openForm)
reset.addEventListener('click',closeform)
showPassword.addEventListener('onclick', showPasswordHidden)



function openForm(){
  document.querySelector('#form').style.display='block';
  document.getElementById('backdrop').style.display='block';
}
function closeform(){
  document.querySelector('#form').style.display='none';
  document.getElementById('backdrop').style.display='none';
}
function showPasswordHidden(){
  if(this.ckecked){
    document.getElementById('password').type='text';
  }else{
    document.getElementById('password').type='password';
  }
}

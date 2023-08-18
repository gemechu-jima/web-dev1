
const clickLogin=document.querySelector('.click-login');
const reset=document.querySelector('.reset');
const showPassword=document.getElementById('showpassword');
const header=document.querySelector('.main-header');
const arrow=document.querySelector('.arrow');
const innerBar=document.querySelector(".inner-bar");
const hiddenSection=document.querySelector('.hidden-section');
const inner=document.querySelector('.inner');
const links=document.querySelectorAll('.links');




clickLogin.addEventListener('click',openForm)
reset.addEventListener('click',closeform)
showPassword.addEventListener('onclick', showPasswordHidden)
innerBar.addEventListener('click',function(){
  hiddenSection.classList.toggle('show-hidden-section');
})
inner.addEventListener('click',function(){
  hiddenSection.classList.remove('show-hidden-section');
})


window.addEventListener('scroll',function(){
const scrollHeight=window.pageYOffset;
const headerHeight=header.getBoundingClientRect().height

if(scrollHeight>headerHeight){
  header.classList.add('header');
}else{
  header.classList.remove('header');
}
if(scrollHeight>500){
  arrow.classList.add('show-arrow');
}else{
  arrow.classList.remove('show-arrow');
}


})

links.forEach(function(link){
  link.addEventListener('click',function(ev){
    ev.preventDefault();
    const id=ev.currentTarget.getAttribute('href').slice(1);
    const element=document.getElementById(id);
    const headerHeight=header.getBoundingClientRect().height
   const fixedheader=header.classList.contains('header')
    let position=element.offsetTop-headerHeight;
    console.log(position);
    window.scrollTo({
      left:0,
      top:position
    })
  });
});


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

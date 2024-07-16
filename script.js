let menu=document.querySelector('#menu-bar');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>
    {
        menu.classList.toggle('bx-times');
        navbar.classList.toggle('active');
    }
    window.onscroll=()=>{
        menu.classList.remove('bx-times');
        navbar.classList.remove('active');
    }
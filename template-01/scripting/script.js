let Mymenu = document.querySelector("#menu-btn");
let Mynavbar = document.querySelector(".navbar");

Mymenu.onclick =()=>{
  Mymenu.classList.toggle('fa-times');
  Mynavbar.classList.toggle('activation');
}
window.onscroll = () =>{
    Mymenu.classList.remove('fa-times');
    Mynavbar.classList.remove('activation');
  }
  
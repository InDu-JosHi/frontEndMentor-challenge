const hamburger = document.querySelector(".hamburger");
const closeHamburger = document.querySelector(".close-hamburger");
const nav = document.querySelector("nav");
const img12 = document.querySelector(".img12");
const body = document.querySelector("body");

hamburger.addEventListener("click",()=>{
    nav.style.display ="block";
    hamburger.classList.toggle("active");
    hamburger.style.display="none";
    closeHamburger.style.display="block";
    img12.style.display ="none";
    body.style.backgroundColor = "rgba(0,0,0,.5)";
})
closeHamburger.addEventListener("click",()=>{
    nav.style.display ="none";
    closeHamburger.classList.toggle("active");
    hamburger.style.display="block";
    closeHamburger.style.display="none";
    img12.style.display ="block";
    body.style.backgroundColor = "transparent";
})

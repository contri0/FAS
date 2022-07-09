
// ANIMATED MENU BUTTON 



const menuBtn = document.querySelector('.menu-btn');
let menuOpen = true;

    document.getElementById("menu-btn").addEventListener("click",function(){
      document.getElementsByClassName("sec")[0].classList.add("nav-active");
    });
    menuBtn.classList.remove('open');
    menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(menuOpen) {
    document.getElementById("menu-btn").addEventListener("click",function(){
      document.getElementsByClassName("sec")[0].classList.add("nav-active");
    });
    menuBtn.classList.remove('open');
    menuOpen = false;
    
  } else {
    document.getElementById("menu-btn").addEventListener("click",function(){
      document.getElementsByClassName("sec")[0].classList.remove("nav-active");
    });
    menuBtn.classList.add('open');
    menuOpen = true;
  }
});

// Navigation bar

/*
const navSlide = () => {
  const menubtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.sec');

  menubtn.addEventListener('click', () => {
    nav.classlist.toggle("nav-active");
  })
}

navSlide();
*/



// clock

const deg = 6;
    const hr = document.querySelector("#hr");
    const mn = document.querySelector("#mn");
    const sc = document.querySelector("#sc");

    setInterval(() => {

      let day = new Date();
      let hh = day.getHours() * 30;
      let mm = day.getMinutes() * deg;
      let ss = day.getSeconds() * deg;

      hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
      sc.style.transform = `rotateZ(${ss}deg)`;

    })


 

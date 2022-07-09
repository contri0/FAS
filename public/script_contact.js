// ANIMATION FOR LOGIN POPUP

document.getElementById("open-popup-btn").addEventListener("click",function(){
  document.getElementsByClassName("popup")[0].classList.add("active");
  document.getElementsByClassName("container")[0].classList.add("active1");
});
 
document.getElementById("dismiss-popup-btn").addEventListener("click",function(){
  document.getElementsByClassName("popup")[0].classList.remove("active");
  document.getElementsByClassName("container")[0].classList.remove("active1");
});

document.getElementById("open-popup-btn-2").addEventListener("click",function(){
  document.getElementsByClassName("popup")[0].classList.remove("active");
  document.getElementsByClassName("container")[0].classList.remove("active1");
  document.getElementsByClassName("popup1")[0].classList.add("active2");
  document.getElementsByClassName("container")[0].classList.add("active3");
});

// ANIMATION FOR SIGNUP POPUP

document.getElementById("open-popup-btn1").addEventListener("click",function(){
  document.getElementsByClassName("popup1")[0].classList.add("active2");
  document.getElementsByClassName("container")[0].classList.add("active3");
});
 
document.getElementById("dismiss-popup-btn1").addEventListener("click",function(){
  document.getElementsByClassName("popup1")[0].classList.remove("active2");
  document.getElementsByClassName("container")[0].classList.remove("active3");
});

document.getElementById("open-popup-btn1-2").addEventListener("click",function(){
  document.getElementsByClassName("popup1")[0].classList.remove("active2");
  document.getElementsByClassName("container")[0].classList.remove("active3");
  document.getElementsByClassName("popup")[0].classList.add("active");
  document.getElementsByClassName("container")[0].classList.add("active1");
});

function fun(){
  document.getElementById("global-content").style.display="flex";
  document.getElementById("botton-global").style.display="none";
}
function disable(){
  document.getElementById("global-content").style.display="none";
}
function fun1(){
  document.getElementById("global-content1").style.display="flex";
  document.getElementById("botton-global1").style.display="none";
}
function disable1(){
  document.getElementById("global-content1").style.display="none";
}
window.addEventListener('load',function(){
  var load = document.querySelector(".load");
  setTimeout(() => {
    load.classList.add('opacity-0','invisible');
  }, 2000);
})

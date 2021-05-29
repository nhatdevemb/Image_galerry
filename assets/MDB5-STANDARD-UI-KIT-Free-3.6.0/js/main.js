var love = document.getElementById("love");
var no_love =document.getElementById("no-love");

love.addEventListener("click", myFunction);
function myFunction(){
 alert('Bạn là người thông thái')
}

no_love.addEventListener("mouseover",lovefunction);
function lovefunction(){
   no_love.classList.toggle('move')
}


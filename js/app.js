//responzívna navigácia
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click",myNav);
function myNav(){
    var menu = document.querySelector(".main-menu");
    menu.classList.toggle("responsive");
}

//akordeón
const accordion = document.getElementsByClassName('accordion');
for (var a of accordion){
  a.addEventListener('click', function (){
    this.classList.toggle('active');
  });
}

//alert
if( window.location.href.indexOf('poslat_dokument.html') !== -1 ){
  alert('Tu môžete zadať svoju objednávku.');
}







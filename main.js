var burger = document.querySelector('.burger')
var overlay = document.querySelector('.overlay');
var show = document.querySelector('.show')

burger.addEventListener('click', function() {
    burger.classList.toggle('crossed');
    overlay.classList.toggle('visible')
    mobilemodal.classList.toggle('show') 
   
})
const slider2 = document.querySelector('#slider__imgen2');
let sliderSec2 = document.querySelectorAll('.slidersection2');
let sliderLast2 = sliderSec[sliderSec.length -1];

const btnRe = document.querySelector('#btn__R');
const btnLe = document.querySelector('#btn__L');

slider2.insertAdjacentElement('afterbegin',sliderLast2);

function Next(){
    let sliderFirst2 = document.querySelectorAll(".slidersection2")[0];
    slider2.style.marginLeft = "-200%";
    slider2.style.transition = "all 0.6s";

    setTimeout(function(){
        slider2.style.transition = "none";
        slider2.insertAdjacentElement('beforeend', sliderFirst2);
        slider2.style.marginLeft = "-100%";
    },600);
}

function preve(){
    let sliderSec2 = document.querySelectorAll('.slidersection2');
    let sliderLast2 = sliderSec2[sliderSec2.length -1];    
    slider2.style.marginLeft = "0";
    slider2.style.transition = "all 0.6s";

    setTimeout(function(){
        slider2.style.transition = "none";
        slider2.insertAdjacentElement('afterbegin',sliderLast2);
        slider2.style.marginLeft = "-100%";
    },600);
}

btnRe.addEventListener('click', function(){
    Next();
});

btnLe.addEventListener('click', function(){
    preve();
});


setInterval(function(){
    Next();
},5000);


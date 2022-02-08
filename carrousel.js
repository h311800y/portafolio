const slider = document.querySelector('#slider__imgen');
let sliderSec = document.querySelectorAll('.slider__section');
let sliderLast = sliderSec[sliderSec.length -1];

const btnR = document.querySelector('#btn__rig');
const btnL = document.querySelector('#btn__lef');

slider.insertAdjacentElement('afterbegin',sliderLast);

function moverNext(){
    let sliderFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.6s";

    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderFirst);
        slider.style.marginLeft = "-100%";
    },600);
}

function prev(){
    let sliderSec = document.querySelectorAll('.slider__section');
    let sliderLast = sliderSec[sliderSec.length -1];    
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.6s";

    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin',sliderLast);
        slider.style.marginLeft = "-100%";
    },600);
}

btnR.addEventListener('click', function(){
    moverNext();
});

btnL.addEventListener('click', function(){
    prev();
});


setInterval(function(){
    moverNext();
},5000);


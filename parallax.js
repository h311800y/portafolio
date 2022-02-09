

document.addEventListener('mouseover', parallax);

function parallax(e){
    this.querySelectorAll('.img').forEach(img => {
        const speed = img.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/20
        const y = (window.innerHeight - e.pageY*speed)/20

        img.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}




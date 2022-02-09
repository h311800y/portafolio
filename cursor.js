const cursor = document.querySelector('.cursor');
const cursor2 = document.querySelector('.cursor2');

const isLinkHoveredClass = 'is-link-hovered';
const hasCustomCursorClass = 'has-custom-cursor';
const isHiddenClass = 'is-hidden';


const addEventListener = ()=>{
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onmouseleave);
}

const onMouseEnter = ()=>{
    cursor.classList.remove(isHiddenClass);
}

const onmouseleave = ()=>{
    cursor.classList.add(isHiddenClass);
}

document.addEventListener('mousemove' ,(e) =>{
    cursor.style.left = e.pageX  + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX  + 'px';
    cursor2.style.top = e.pageY + 'px';
})


function isTouchDevice(){
    return(('ontouchstart' in window)||
          (navigator.maxTouchPoints> 0)||
          (navigator.maxTouchPoints> 0)
    );
}

const handleLinkHoverEvents = () => {
    document.querySelectorAll('nav, button, .js-link, input[type="button"], input[type="submit"]').forEach((el) => {
        el.addEventListener("mouseover", () => cursor.classList.add(isLinkHoveredClass) );
        el.addEventListener("mouseout", () => cursor.classList.remove(isLinkHoveredClass) );
    });
};

const isTouch = isTouchDevice();


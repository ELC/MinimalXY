let prevScrollpos = window.pageYOffset;

let delta = 50;

let component = document.querySelectorAll('nav')[0];

window.onscroll = () => {

    if (window.matchMedia("(min-width: 768px)").matches) {
        return;
    }

    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos > currentScrollPos + delta) {
        component.style.top = "0";
        prevScrollpos = currentScrollPos;
    } 
    
    if (prevScrollpos < currentScrollPos - delta) {
        component.style.top = `-${component.offsetHeight+15}px`;
        prevScrollpos = currentScrollPos;
    }

}
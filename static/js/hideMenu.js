let prevScrollpos = window.pageYOffset;

let delta = 70;

let navBtn = document.getElementById('nav-menu-btn');

let component = document.getElementsByClassName('nav-bar')[0];

document.getElementsByTagName("body")[0].addEventListener("click", hideOnClick);

function hideOnClick(e){

    if (! component.contains(e.target) && navBtn.checked ){
        event.preventDefault();
        navBtn.checked = false;
    } 
}

function hideMenu() {

    if (window.matchMedia("(min-width: 768px)").matches) {
        return;
    }

    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos + delta) {
        component.style.top = "0";
        prevScrollpos = currentScrollPos;
    }

    if (prevScrollpos < currentScrollPos - delta) {
        component.style.top = `-${component.offsetHeight}px`;

        navBtn.checked = false;

        prevScrollpos = currentScrollPos;
    }
}


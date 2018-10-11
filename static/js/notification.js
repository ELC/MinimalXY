function launch_toast(message) {
    
    var x = document.getElementById("toast")
    
    x.className = "show";

    component = document.getElementById('desc');

    setTimeout(() => {
        component.innerHTML = message;
    }, 650);
    

    setTimeout(() => {
        component.innerHTML = '';
    }, 4000);


    setTimeout(() => {
        x.className = x.className.replace("show", "");
    }, 5000);
}
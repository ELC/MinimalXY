

function launch_toast(message) {
    
    let toast = document.getElementById("toast");
    
    toast.className = "show";

    let toastDescription = document.getElementById('toast--desc');

    setTimeout(() => {
        toastDescription.innerHTML = message;
    }, 600);
    

    setTimeout(() => {
        toastDescription.innerHTML = '';
    }, 4500);


    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 6000);
}
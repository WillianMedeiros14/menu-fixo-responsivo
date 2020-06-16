

function clickMenu() {
    var menu = document.getElementById("menu");

    if (menu.style.display == "none") {
        menu.classList.remove("menu");

    } else {

        menu.classList.toggle("menu");
    }



}
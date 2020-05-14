
/*Parallax*/

    function scrollFunction2() {
    var scroll = window.scrollY;
    var outer = document.getElementById("bg");
    var m = -0.2;
	var b = 0;
    var newTop = m*scroll + b;
    outer.style.backgroundPositionY = newTop + "px";
}

/*Scrollfire*/

    function scrollFunction() {
    var scroll = window.scrollY;
    var newimg = document.getElementById("fallingcoffee");
    if (scroll > 1000) {
    newimg.style.opacity = "2";
}
}
 

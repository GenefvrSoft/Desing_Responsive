window.onscroll = function(){

    var posicion = window.pageYOffset || document.documentElement.scrollTop;

    var elemento1 = document.getElementById("parallax");

    elemento1.style.bottom = (posicion * 0.2) - 600 + "px" ;

}
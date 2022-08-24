$(document).ready(function(){
    $(".hide").hide(); //Hace que todos los divs e imagenes con la clase "hide" estén ocultos. Hasta que se indique lo contrario.
    
    //Funcion que se ejecuta al hacer click en el circulo "Tatooine" en el mapa.
    $(".tatooine-marker").click(function(){
      $(".hide").hide(); //Hace que todos los divs e imagenes con la clase "hide" estén ocultos. Hasta que se indique lo contrario.
      $(".tatooine-img").fadeIn(300); //Muestra el bloque de texto para el planeta "Tatooine".
      $(".tatooine-txt").fadeIn(300); //Muestra la imágen para el planeta "Tatooine".
    });

    //Funcion que se ejecuta al hacer click en el circulo "Coruscant" en el mapa.
    $(".coruscant-marker").click(function(){
        $(".hide").hide(); //Hace que todos los divs e imagenes con la clase "hide" estén ocultos. Hasta que se indique lo contrario.
        $(".coruscant-img").fadeIn(300); //Muestra el bloque de texto para el planeta "Coruscant".
        $(".coruscant-txt").fadeIn(300); //Muestra la imágen para el planeta "Coruscant".
    });

    //Funcion que se ejecuta al hacer click en el circulo "Naboo" en el mapa.
    $(".naboo-marker").click(function(){
        $(".hide").hide(); //Hace que todos los divs e imagenes con la clase "hide" estén ocultos. Hasta que se indique lo contrario.
        $(".naboo-img").fadeIn(300); //Muestra el bloque de texto para el planeta "Naboo".
        $(".naboo-txt").fadeIn(300); //Muestra la imágen para el planeta "Naboo".
    });
    
    //Funcion que se ejecuta al hacer click en el circulo "Kashyyyk" en el mapa.
    $(".kashyyyk-marker").click(function(){
        $(".hide").hide(); //Hace que todos los divs e imagenes con la clase "hide" estén ocultos. Hasta que se indique lo contrario.
        $(".kashyyyk-img").fadeIn(300); //Muestra el bloque de texto para el planeta "Kashyyyk".
        $(".kashyyyk-txt").fadeIn(300); //Muestra la imágen para el planeta "Kashyyyk".
    });

    //Funcion que se ejecuta al hacer click en el circulo "Geonosis" en el mapa.
    $(".geonosis-marker").click(function(){
        $(".hide").hide(); //Hace que todos los divs e imagenes con la clase "hide" estén ocultos. Hasta que se indique lo contrario.
        $(".geonosis-img").fadeIn(300); //Muestra el bloque de texto para el planeta "Geonosis".
        $(".geonosis-txt").fadeIn(300); //Muestra la imágen para el planeta "Geonosis".
    });
    
    //Funcion que se ejecuta al hacer click en el circulo "Mustafar" en el mapa.
    $(".mustafar-marker").click(function(){
        $(".hide").hide(); //Hace que todos los divs e imagenes con la clase "hide" estén ocultos. Hasta que se indique lo contrario.
        $(".mustafar-img").fadeIn(300); //Muestra el bloque de texto para el planeta "Mustafar".
        $(".mustafar-txt").fadeIn(300); //Muestra la imágen para el planeta "Mustafar".
    });

    //Funcion que se ejecuta al hacer click en el circulo "Hoth" en el mapa.
    $(".hoth-marker").click(function(){
        $(".hide").hide(); //Hace que todos los divs e imagenes con la clase "hide" estén ocultos. Hasta que se indique lo contrario.
        $(".hoth-img").fadeIn(300); //Muestra el bloque de texto para el planeta "Hoth".
        $(".hoth-txt").fadeIn(300); //Muestra la imágen para el planeta "Hoth".
    });

    //Funcion que se ejecuta al hacer click en el circulo "Endor" en el mapa.
    $(".endor-marker").click(function(){
        $(".hide").hide(); //Hace que todos los divs e imagenes con la clase "hide" estén ocultos. Hasta que se indique lo contrario.
        $(".endor-img").fadeIn(300); //Muestra el bloque de texto para el planeta "Endor".
        $(".endor-txt").fadeIn(300); //Muestra la imágen para el planeta "Endor".
    });

    //Funcion que se ejecuta al hacer click en el circulo "Yavin" en el mapa.
    $(".yavin-marker").click(function(){
        $(".hide").hide(); //Hace que todos los divs e imagenes con la clase "hide" estén ocultos. Hasta que se indique lo contrario.
        $(".yavin-img").fadeIn(300); //Muestra el bloque de texto para el planeta "Yavin".
        $(".yavin-txt").fadeIn(300); //Muestra la imágen para el planeta "Yavin".
    });

    //Funcion que se ejecuta al hacer click en el circulo "Kamino" en el mapa.
    $(".kamino-marker").click(function(){
        $(".hide").hide(); //Hace que todos los divs e imagenes con la clase "hide" estén ocultos. Hasta que se indique lo contrario.
        $(".kamino-img").fadeIn(300); //Muestra el bloque de texto para el planeta "Kamino".
        $(".kamino-txt").fadeIn(300); //Muestra la imágen para el planeta "Kamino".
    });
    
    //Funcion que permite esconder el div mostrado en el mapa al hacer click en el.
    $(".hide").click(function(){
        $(".hide").hide();
    });
  });
var menu = document.getElementById('menu'); //Declaración de a quien tiene que realizar las modificaciones
var altura = menu.offsetTop;// Calcula o mide la distacia que hay entre el inicio y el final de la pagina

    window.addEventListener('scroll', function(){ //Cuando la entana haga scroll realize:
        if ( window.pageYOffset > altura ){ //Si la distancia total de la pagina supera la altura o lo que es lo mismo el punto deonde te encuentres de la pagina
            menu.classList.add('menu-fixed'); // añade al menu la clase menu-fixed
        } else { //sino
            menu.classList.remove('menu-fixed'); // sino es asi que se quite la clase
        }
    });
ESCUCHAR EVETOS EN JS   

los eventos son las acciones que realiza el usuario como hacer click o teclear

podemos poner diractamente el codigo en "onclick="codigo"... pero se va a hacer un chorizo enorme y feo, es mala practica
asi que lo que hay q hacer para q cada vez q queramos hacer algo con algun evento tenemos que armar una funcion y dentro de "onclick" solo llamamos la fx

tenemos 2 input y vamos a hacer q se imprimar en la consola primero...

        function btnOnClick () {
            console.log (input1.value + input2.value);
        }

        
const h1 = document.querySelector('h1');
const form  = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// btn.addEventListener('click', btnOnClick);
// // 1° el selector, elemento html estamos hablando  
// // 2° el escuchador del evento
// // 3° ya dentro de parentesis, a que funcion queremos que reaccione
// // 4° la funcion que queremos que ejecute... OJO! aca va sin parenctesis porque este "addEv..." ya agrega esos parentesis de manera tasita



// // se coloca el numeral antes de poner el ID de esta manera le estamos diciendo que llame a un ID

// function btnOnClick() {
//     const sumaImputs = input1.value + input2.value;
//     pResult.innerText = "Resultado: " + sumaImputs;
// }

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    console.log({event})
        // este console es para ver todo lo relacionado con el evento submit
    event.preventDefault();
        // este es para quitarle la funcion por defecto que tiene el evento para q recargue la pag o envie a un nueva url
    const sumaImputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaImputs;
}

// ahora lo q que tambien podemos hacer es, creo yo q es lo mas facil, es cambiarle el tipo al button directamente, le ponemos q es de tipo button

// asi : <button type="button" id="bntCalcular">Calcular</button> de esta manera ya no es submit

const name = "Bruno";
let lastName = "Balza";
const user = "Pony";
const age = 31;
const mail = "bruno@bruno.com";
const adult = true;
const moneySaved = 10000;
const debs = 5000;

console.log ('Mi nombre completo es ${name} ${lastName}');

let totalMoney = moneySaved - debs;
console.log ('El capital total es de: $${totalMoney}'); 

// punto 2 de funciones
;
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

function data (completeName, nickname) {
    return console.log('Mi nombre es' + completeName + ' , pero prefiero que me digas ' + nickname);
};

//  2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

const tipoDeSuscripcion = "Basic";
switch (tipoDeSuscripcion) {
case"Free":
       console.log("Solo puedes tomar los cursos gratis");
break;
case"Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
break;
case"Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
break;
case"ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
break;
}

const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar cursos gratis");
}
else if (tipoDeSuscripcion == "Basic") {
    console.log ("Solo puedes tomar curos por un mes");
}

else if (tipoDeSuscripcion == "Expert") {
    console.log ("Puedes tomar cursos por un año");
}

else if (tipoDeSuscripcion == "Expert Duo") {
    console.log ("Tu y alguien mas puede tomar cursos por un año");
}

// Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
// 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏

let typeSuscripción = [
    "Free",
    "Basic", 
    "Expert", 
    "ExpertPlus"
    ];

let infoSuscripción = [
    "solo puedes tomar los cursos gratis", 
    "puedes tomar casi todos los cursos de Platzi durante un mes", 
    "puedes tomar casi todos los cursos de Platzi durante un año", 
    "tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
let userSuscription = "Expert";
for (let i=0; i < typeSuscripción.length; i++) {
    if (userSuscription == typeSuscripción[i]) {
        console.log(`Si estas suscrito al plan ${typeSuscripción[i]} en el cual ${infoSuscripción[i]}`)
    }
}

// 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
//   solucion

let i = 0;
while (i < 5) {
  i++;
  console.log(`El valor de i es: ${i}`)
}
let i = 10;
while (i >= 2) {
  i--;
  console.log(`El valor de i es: ${i}`)
}

// 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//  Solucion al 2 de ciclos

let i = 0;
while (i < 5) {
  i++;
  console.log(`El valor de i es: ${i}`)
}
let i = 10;
while (i >= 2) {
  i--;
  console.log(`El valor de i es: ${i}`)
}

// 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

//Basic Math Quiz

let num = 10;
let num2 = 10;
const result = num + num2;
let questions = {
  q1: `Cuanto es ${num} + ${num2}`
}
functionQuizzer() {
  let userInput = prompt(questions.q1);
  if (userInput == result) {
    alert("Felicitaciones, respondiste correctamente el desafio 😎");
  } else {
    alert("lamentablemente, tu respuesta es incorrecta, sigue practicando ❌!");
  }
}
Quizzer();
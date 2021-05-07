// Operaciones
const sumaDosNumeros = () => {
  let num1 = parseInt(prompt("Ingresa el numero 1"));
  let num2 = parseInt(prompt("Ingresa el numero 2"));
  console.log(num1, num2);
  let resultado = num1 + num2;
  console.log(resultado);
};
// resta
const restaDosNumeros = () => {
  let num1 = parseInt(prompt("Ingresa el numero 1"));
  let num2 = parseInt(prompt("Ingresa el numero 2"));
  console.log(num1, num2);
  let resultado = num1 - num2;
  console.log(resultado);
};
// multiplicacion
const multDosNumeros = () => {
  let num1 = parseInt(prompt("Ingresa el numero 1"));
  let num2 = parseInt(prompt("Ingresa el numero 2"));
  console.log(num1, num2);
  let resultado = num1 * num2;
  console.log(resultado);
};
// division
const dividirDosNumeros = () => {
  let num1 = parseInt(prompt("Ingresa el numero 1"));
  let num2 = parseInt(prompt("Ingresa el numero 2"));
  console.log(num1, num2);
//   if (num2 == 0) {
//     console.log("no se puede dividir por cero");
//   } else {
//     let resultado = num1 / num2;
//     console.log("Prueba 1: " + resultado);
//   }

  let resultado = num2 == 0 ? console.log("no se puede dividir por cero") : console.log(num1 / num2);
};

/**
 * Ejercicio 9
 * Día de la semana
 */
let dia = prompt("Ingresa día de la semana");


// if (dia == "lunes" || dia == "martes" || dia == "miercoles" || dia == "jueves" || dia == "viernes" ) {

// } else {

// }
// if (dia == null) {
//     console.log("Por favor ingresar un día a la semana");
// } else {
//     dia = dia.toLowerCase(); // toUpperCase() Mayusculas
//     if (dia == "sabado" || dia == "domingo") {
//         console.log("Es fin de semana");
//       } else {
//         if (
//           dia == "lunes" ||
//           dia == "martes" ||
//           dia == "miercoles" ||
//           dia == "jueves" ||
//           dia == "viernes"
//         ) {
//           console.log("día entre semana");
//         } else {
//           console.log("Ingresa un dia a la semana valido");
//         }
//       }
// }

switch (dia) {
    case null:
        console.log("Por favor ingresar un día a la semana");
        break;
    case "sabado":
    case "domingo":
        console.log("Es fin de semana");
    break;

    default:
        console.log("Ingresa un dia a la semana valido");
        break;
}




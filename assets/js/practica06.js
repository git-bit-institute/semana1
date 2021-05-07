// MiniCalculadora
const miniCalculadora = () => {
  // creamos opcion de menu
  let op = prompt(
    "Escriba la opcion correspondiente a la operacion: \n A - Suma \n B - Resta \n C - Multiplica \n D - Divide "
  );
  if (op == null) {
    alert("Debe ingresar algun dato");
  } else {
    op = op.toLowerCase();
    if (op != "a" && op != "b" && op != "c" && op != "d") {
      alert("1: Deber ser una opcion entre A y D");
    } else {
      let num1 = parseFloat(prompt("ingresa el numero 1"));
      let num2 = parseFloat(prompt("ingresa el numero 2"));
      let resultado = 0;
      if (op == "a") resultado = num1 + num2;
      if (op == "b") resultado = num1 - num2;
      if (op == "c") resultado = num1 * num2;
      if (op == "d") {
        if (num2 === 0) {
            return alert("no se puede dividir por cero");
        } else {
           resultado = num1 / num2;
        }
      }
      alert("El resultado es: " + resultado);
    }
  }

  //   switch (op) {
  //     // null
  //     case "a":
  //       op = op.toLowerCase();
  //       break;
  //     case "b":
  //       op = op.toLowerCase();
  //       break;
  //     case "c":
  //       op = op.toLowerCase();
  //       break;
  //     case "d":
  //       op = op.toLowerCase();
  //       break;
  //     default:
  //       alert("2: Deber ser una opcion entre A y D");
  //       break;
  //   }
};

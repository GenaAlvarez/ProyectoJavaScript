let nombre =  prompt("Ingrese su nombre:");

const mensaje = "Hola me llamo " +  nombre + ".";
alert(mensaje);

let edad = prompt ("ingrese su edad...")

if(edad >= 18){
  alert("Eres mayor de edad puedes acceder al sitio.");
}else if(edad > 14 && edad < 18){
  alert("Puedes ingresar con autorización de tus padres.");
}else{
  alert("No puedes entrar al sitio.");
}



let intentos = 3;
let didWin = false;
while (intentos != 0) {
  let unNumero = parseInt(prompt("Adivina el número del 1 al 10, tienes " + intentos + " intentos restantes." ));
  switch (unNumero) {
    case 5:
      alert("Ganaste felicitaciones");
      didWin = true;
      break;
    case 1:
    case 2:
    case 3:
    case 7:
    case 8:
    case 9:
    case 10:
      alert("Estas demasiado lejos");
      break;
    case 4:
    case 6:
      alert("Estas cerca sigue así");
      break;   

      default:
         alert("sos malardo");
         break;

  }
  intentos--;
}
if(!didWin){
   alert("Te quedaste sin intentos ")
}





const numA = parseInt(prompt("Ingrese un número..."))
const numB = parseInt(prompt("Ingrese su segundo número..."))
const operation = prompt("Ingrese una operación valida por ejemplo +, -, *, /,")

function calculator(a, b, operation){
  switch(operation){
    case "+":
          return a + b; 
     

    case "-":
          return a - b;
     
    

    case "/":
          return a / b;
     
    

    case "*":
          return a * b;
      
     

    default:
           return 0;
      
  }
}
console.log(calculator(numA, numB, operation));
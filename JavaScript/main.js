// let nombre =  prompt("Ingrese su nombre:");

// const mensaje = "Hola me llamo " +  nombre + ".";
// alert(mensaje);

// let edad = prompt ("ingrese su edad...")

// if(edad >= 18){
//   alert("Eres mayor de edad puedes acceder al sitio.");
// }else if(edad > 14 && edad < 18){
//   alert("Puedes ingresar con autorización de tus padres.");
// }else{
//   alert("No puedes entrar al sitio.");
// }



// let intentos = 3;
// let didWin = false;
// while (intentos != 0) {
//   let unNumero = parseInt(prompt("Adivina el número del 1 al 10, tienes " + intentos + " intentos restantes." ));
//   switch (unNumero) {
//     case 5:
//       alert("Ganaste felicitaciones");
//       didWin = true;
//       break;
//     case 1:
//     case 2:
//     case 3:
//     case 7:
//     case 8:
//     case 9:
//     case 10:
//       alert("Estas demasiado lejos");
//       break;
//     case 4:
//     case 6:
//       alert("Estas cerca sigue así");
//       break;   

//       default:
//          alert("sos malardo");
//          break;

//   }
//   intentos--;
// }
// if(!didWin){
//    alert("Te quedaste sin intentos ")
// }





// const numA = parseInt(prompt("Ingrese un número..."))
// const numB = parseInt(prompt("Ingrese su segundo número..."))
// const operation = prompt("Ingrese una operación valida por ejemplo +, -, *, /,")

// function calculator(a, b, operation){
//   switch(operation){
//     case "+":
//           return a + b; 
     

//     case "-":
//           return a - b;
     
    

//     case "/":
//           return a / b;
     
    

//     case "*":
//           return a * b;
      
     

//     default:
//            return 0;
      
//   }
// }
// console.log(calculator(numA, numB, operation));

// function imprimePropiedad(property){
//       const persona1 = {
//         name:"pepe",
//         lastName:"Argento",
//         age:25,
//       }
//       console.log(persona1[property]);
// }
// const property = prompt("ingrese la propiedad");
// imprimePropiedad(property)
//OBJETO LITERAL
// const persona1 = {
//     name: "Gena",
//     lastName:"Alvarez",
//     age: 19,
// }



//FUNCIÓN CONSTRUCTORA
// function Persona(nombre, apellido, edad){
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.edad = edad;
// }
// //LE DAMOS UTILIDAD AL MOLDE DE LA SIGUIENTE FORMA
// const persona2 = new Persona("gena", "alva", 19);
// // LA EJECUTAMOS DE LA SIGUIENTE MANERA
// console.log(persona2);





//DECLARAR CON CLASES
// class person{
//     constructor(name, lastName, age){
//         this.name = name;
//         this.lastName = lastName;
//         this.age = age;
//     }
        //this.talk = function(){
        //  console.log("Hello i am " + this.name);
        //  }
    
//  }  
 
// const person1 = new person("Homer", "Simp", 38);
// const person2 = new person("Bartolo", "Singular", 18);

// console.log(person1);
// console.log(person1.talk);

// console.log(persona1);
// DE ESTA FORMA SE DECLACARA CON LA PROGRAMACIÓN ORIENTADA A OBJETOS



// function person(name, lastName, age){
//         this.name = name;
//         this.lastName = lastName;
//         this.age = age;
//         this.talk = function(){console.log("Hello i am " + this.name );}   
// }
// const person1 = new person("Homer", "Simpson", 39 );
// const person2 = new person("Marge", "Simpson", 15);

// console.log(person1);

// person1.talk();


// console.log(person1);

// ARRAYS
// const frutas = ["manzana","pera", "naranja","frutilla"]

// console.log(frutas[1]);
// const verCanasta = () =>{
//         for (let i = 0; i < frutas.length; i++){
//                 console.log(frutas);
//         }
// }
// const nuevaFruta = prompt("Ingrese su fruta favorita...")
// frutas.push(nuevaFruta)
// console.log(frutas);

// const canasta = [];
// const cantidad = Number(prompt("Cuantas frutas quiere agregar?"));

// for(let i = 0; i < cantidad; i++){
//         const nuevaFruta = prompt("ingrese el nombre de la fruta a agregar en la canasta...");
//         const cantidadEnCanasta = canasta.push(nuevaFruta);
//         console.log("Actualmente tiene " + cantidadEnCanasta + " frutas en la canasta, los valores son: " + canasta.join(" - "));
// }

//ARRAYS DE OBJETOS

const person1 = {
        nombre: "tito",
        apellido:"WEP",
        edad:44,
}
const person2 = {
        nombre: "tito",
        apellido:"WEP",
        edad:44,
}

const personas = [person1, person2]
console.log(personas);
personas.push("hello");
console.log(personas);
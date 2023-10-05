
// const precios = [];
// const precioJuego = parseInt(prompt("Cuanto juegos quieres calcular.."));

// for(let i = 0; i < precioJuego; i++){
//         const nuevoJuego = parseInt(prompt("Ingrese el precio de esos juegos..."));
//         const cantidadDeJuegos = precios.push(nuevoJuego);
//         console.log("Actualmente tiene " + cantidadDeJuegos + "precios. Los precios son los siguientes " + precios.join(" - ") );
// };


// const precioConImpuestos = precios.map((precioFinal) => {
//         const precioConImpuestos = precioFinal * 1.75;
//         return "$ " + precioConImpuestos;
// });
// const impuestosAgregados = precioConImpuestos.filter(precioFinal =>{
//         const valor = precioFinal.split(" ");
//         return Number(valor[1])
// });

// console.log(impuestosAgregados);


// function person(name, lastName, age){
//         this.name = name;
//         this.lastName = lastName;
//         this.age = age;
//         this.talk = function(){console.log("Hello i am " + this.name );}   
// }


// const person1 = new person("Juan", "Alvarez", 19 );
// const person2 = new person("Pepe", "Grillo", 95);

// console.log(person1);
// person1.talk();


// console.log(person2);
// person2.talk();}



// const pantalla = document.querySelector(".pantalla");
// const botones = document.querySelectorAll(".btn");
// const historial = document.getElementById("historialUl")


// botones.forEach(boton => {
//       boton.addEventListener("click", () => {
//         const botonApretado = boton.textContent;

//         if (boton.id === "c"){
//                 pantalla.textContent = "0";
//                 return;
//         }

//         if (boton.id === "borrar"){
//                 if(pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
//                         pantalla.textContent = "0"
//                 }else{
//                         pantalla.textContent = pantalla.textContent.slice(0, -1);
//                 }        
//                 return;
//         }

//         if (boton.id === "igual"){
//                 try{
//                         pantalla.textContent = eval(pantalla.textContent);
//                         const calculation = {
//                                 expression: pantalla,
//                                 result:pantalla.textContent     
//                         };
//                         let calculations = JSON.parse(localStorage.getItem("history")) || [];
//                         if (!Array.isArray(calculations)) {
//                                 calculations = [];
//                         }
//                         calculations.push(calculation);
//                         localStorage.setItem("history", JSON.stringify(calculations));
                        
//                 } catch{
//                         pantalla.textContent = "Error!";
//                 }              
//                 return;
//         }

//         if (pantalla.textContent === "0" || pantalla.textContent === "Error!"){
//                 pantalla.textContent = botonApretado;
               
//         } else{
//                 pantalla.textContent += botonApretado;
//         }

//       })  

// })

// function loadHistory(){
//         const history = JSON.parse(localStorage.getItem("history"));
//         return history;
// }

// function updateHistoryList() {
//         historial.innerHTML = " ";
//         const history = loadHistory();
//         for (const calculation of history) {
//                 const listItem = document.createElement("li");
//                 listItem.textContent = `${calculation.expression} = ${calculation.result}`;
//                 historial.appendChild(listItem);
//         }
//          }
//          updateHistoryList();

const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");
const historial = document.getElementById("historialUl");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent;

        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "igual") {
            try {
                const resultado = eval(pantalla.textContent);
                if (!isNaN(resultado)) {
                    const calculation = {
                        expression: pantalla.textContent,
                        result: resultado
                    };
                    let calculations = JSON.parse(localStorage.getItem("history")) || [];
                    if (!Array.isArray(calculations)) {
                        calculations = [];
                    }
                    calculations.push(calculation);
                    localStorage.setItem("history", JSON.stringify(calculations));
                    pantalla.textContent = resultado;
                    
                    updateHistoryList();
                } else {
                    pantalla.textContent = "Error!";
                }
                return;
            } catch {
                pantalla.textContent = "Error!";
                return;
            }
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    })
})

function loadHistory() {
    const history = JSON.parse(localStorage.getItem("history"));
    return history;
}

function updateHistoryList() {
    historial.innerHTML = " ";
    const history = loadHistory();
    for (const calculation of history) {
        const listItem = document.createElement("li");
        listItem.style.textAlign = "center";
        listItem.style.fontSize = "25px";
        listItem.style.padding = "10px";
        listItem.style.color = "#d889ff";
        listItem.style.listStyle = "none";
        listItem.textContent = `${calculation.expression} = ${calculation.result}`;
        historial.appendChild(listItem);
    }
}
updateHistoryList();
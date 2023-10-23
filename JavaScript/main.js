const borrarHistorial = document.getElementById("borrarHistorial")
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
                    Toastify({
                        text: "Calculo guardado exitosamente",
                        className: "info",
                        style: {
                          background: "#d889ff"
                        }
                      }).showToast();
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
        listItem.style.color = "#fff";
        listItem.style.listStyle = "none";
        listItem.textContent = `${calculation.expression} = ${calculation.result}`;
        historial.appendChild(listItem);
    }
}
updateHistoryList();    
borrarHistorial.addEventListener("click", () =>{
        localStorage.removeItem("history");
        historial.innerHTML = "";
        
        Toastify({
            text: "Historial limpiado exitosamente",
            className: "info",
            style: {
                background: "#d889ff"
            },
        }).showToast();
} );






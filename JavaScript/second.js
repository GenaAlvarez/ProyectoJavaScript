const btn = document.getElementById("btnTrucos");
const btnLimpiar = document.getElementById("btnClearTrucos")
btn.addEventListener("click", () => {
    fetch("../JavaScript/datos.json")
        .then((response) => response.json())
        .then((data) => {
            const item = document.getElementById("item"); // Corregir esta línea
            data.forEach((truco) => { // Recorre los datos
                const container = document.createElement('article');
                container.className = "trucos";
                container.innerHTML = `
                    <h4>${truco.titulo}</h4>
                    <p>${truco.respuesta}</p>
                    <p>${truco.pasos}</p>
                `;
              item.appendChild(container)
            });
            Toastify({
                text: "Los trucos fueron cargados exitosamente",
                className: "info",
                style: {
                  background: "#d889ff"
                }
              }).showToast();

        })
        .catch((error) => {
            Toastify({
                text: "Se produjo un error al cargar los datos",
                className: "info",
                style: {
                  background: "#d889ff"
                }
              }).showToast();
        });
        btnLimpiar.addEventListener("click", () => {
          const item = document.getElementById("item");
          // Elimina todos los elementos hijos de 'item'
          while (item.firstChild) {
              item.removeChild(item.firstChild);
          }
          Toastify({
            text: "Los items fueron eliminados correctamente",
            className: "info",
            style: {
              background: "#d889ff"
            }
          }).showToast();
      });
});

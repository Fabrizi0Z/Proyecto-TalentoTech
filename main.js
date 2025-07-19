
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function actualizarContador() {
    const contador = document.getElementById("contador-carrito");
    if (contador) {
        contador.textContent = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }
}

function agregarAlCarrito(producto) {
    const existente = carrito.find(p => p.id === producto.id);
    if (existente) {
        existente.cantidad += 1;
    } else {
        carrito.push({ ...producto, cantidad: 1 });
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    alert(`Agregaste "${producto.nombre}" al carrito 🛒`);
    actualizarContador();
}


document.addEventListener("DOMContentLoaded", () => {
    actualizarContador();

    const botones = document.querySelectorAll(".btn-agregar");
    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            const producto = {
                id: btn.getAttribute("data-id"),
                nombre: btn.getAttribute("data-nombre"),
                precio: parseFloat(btn.getAttribute("data-precio"))
            };
            agregarAlCarrito(producto);
        });
    });
});


const productosDisponibles = [
    { id: "1", nombre: "Latte", precio: 3500 },
    { id: "2", nombre: "Latte machiatto", precio: 4000 },
    { id: "3", nombre: "Espresso", precio: 3000 },
    { id: "4", nombre: "Capuccino", precio: 4500 },
    { id: "5", nombre: "Iced coffe", precio: 4500 },
    { id: "6", nombre: "Te Oolong", precio: 4000 },
    { id: "7", nombre: "Tostado de campo", precio: 4000 },
    { id: "8", nombre: "Croissant", precio: 900 },
    { id: "9", nombre: "Alfajor de maicena", precio: 1500 },
    { id: "10", nombre: "Chocotorta", precio: 3500 }, // Corregido id repetido
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function actualizarContador() {
    const contador = document.getElementById("contador-carrito");
    if (contador) {
        const total = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
        contador.textContent = total;
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
    alert(`✅ Agregaste "${producto.nombre}" al carrito`);
    actualizarContador();
}

document.addEventListener("DOMContentLoaded", () => {
    actualizarContador();

    const botones = document.querySelectorAll(".btn-agregar");
    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.getAttribute("data-id");
            const producto = productosDisponibles.find(p => p.id === id);
            if (producto) {
                agregarAlCarrito(producto);
            } else {
                console.error("Producto no encontrado para id:", id);
            }
        });
    });
});

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function actualizarContador() {
  const contador = document.getElementById("contador-carrito");
  const total = carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  if (contador) contador.textContent = total;
}

function mostrarCarrito() {
  const contenedor = document.getElementById("carrito-contenido");
  if (!contenedor) return;

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p style='text-align:center'>El carrito está vacío.</p>";
    return;
  }

  let tabla = `
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Subtotal</th>
        </tr>
      </thead>
      <tbody>
  `;

  let total = 0;

  carrito.forEach(prod => {
    const subtotal = prod.precio * prod.cantidad;
    total += subtotal;
    tabla += `
      <tr>
        <td>${prod.nombre}</td>
        <td>$${prod.precio}</td>
        <td>${prod.cantidad}</td>
        <td>$${subtotal}</td>
      </tr>
    `;
  });

  tabla += `
      </tbody>
    </table>
    <p class="total-final">Total: $${total}</p>
  `;

  contenedor.innerHTML = tabla;
}

function vaciarCarrito() {
  carrito = [];
  localStorage.removeItem("carrito");
  actualizarContador();
  mostrarCarrito();
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarCarrito();
  actualizarContador();
});

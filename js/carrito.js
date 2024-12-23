// Contador del Carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
function actualizarContadorCarrito() {
    const contadorCarrito = document.getElementById("contador-carrito");
    if (contadorCarrito){
    const total = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    contadorCarrito.textContent = total;
    }
}
actualizarContadorCarrito();

// Funcion para mostror los productos en el Carrito
function mostrarCarrito() {
const carritoContainer = document.getElementById("carrito-container");
const totalElement = document.getElementById("total");
if (!carritoContainer || !totalElement) return;
    carritoContainer.innerHTML = "";
    let total = 0;
    carrito.forEach((producto,index) => {
        total += producto.precio * producto.cantidad;
        carritoContainer.innerHTML += `
        <div class="carrito-item">
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <p>Cantidad: ${producto.cantidad}</p>
        <button onclick="editarCantidad(${index}, 'sumar')">+</button>
        <button onclick="editarCantidad(${index}, 'restar')">-</button>
        <button onclick="eliminarProducto(${index})">Eliminar</button>
        </div>
        `;
    });
    totalElement.textContent = `Total: $${total}`;
}
// Function para editar la cantidd de un producto
function editarCantidad(index,accion){
if (accion === "sumar") {
     carrito[index].cantidad++;
 } else if (accion === "restar") {
     carrito[index].cantidad--;
if (carrito[index].cantidad ===0) {
    carrito.splice(index, 1);
}
 }
 localStorage.setItem("carrito", JSON.stringify(carrito));
 mostrarCarrito();
actualizarContadorCarrito();
}
//function eliminar producto
function eliminarProducto(index) {
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
carrito.splice(index, 1);
localStorage.setItem("carrito", JSON.stringify(carrito));
mostrarCarrito()
actualizarContadorCarrito;
}
//manejar el formulario de compra
document.getElementById("formulario-compra").addEventListener("submit", (e) => {
    e.preventDefault();
    const direccionInput = document.getElementById("direccion").value;
    const mensajeConfirmacion = document.getElementById("mensaje-confirmacion");
    const direccionConfirmada = document.getElementById("direccion-confirmada");
    //mostrar mensaje de confirmacion
    direccionConfirmada.textContent = `${direccionInput}`;
    mensajeConfirmacion.style.display = "block";
    //vaciar el carrito
    localStorage.removeItem("carrito");
    carrito = [];
    actualizarContadorCarrito();
    mostrarCarrito();
});
//ìnicializacion del carrito
document.addEventListener("DOMContentLoaded", () => {
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    mostrarCarrito();
    actualizarContadorCarrito();
});
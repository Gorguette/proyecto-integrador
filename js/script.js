// Menu Desplegable
fetch("header.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header-container").innerHTML = data;
const menuIcon = document.getElementById("menu-icon");
const menuDespleglabe = document.getElementById("menu-desplegable");
if (menuIcon && menuDespleglabe){
menuIcon.addEventListener("click", () => {
    menuDespleglabe.classList.toggle("activo");
});
}else {
    console.error("Error: No se encontro el elemento con el ID 'menu-icon' o 'menu-desplegable'");
}
actualizarContadorCarrito();
})
.catch(error => console.error("Error cargando el header", error));
document.addEventListener("DOMContentLoaded", () => {
    mostrarCarrito();
});
// Contador del Carrito
function actualizarContadorCarrito() {
try {
    const contadorCarrito = document.getElementById("contador-carrito");
    if (contadorCarrito){
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    contadorCarrito.textContent = total;
    }
} catch (error) {
    console.error("error al actualizar el carrito:", error);
}
}

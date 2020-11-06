//Clases
import Interfaz from './classes/interfaz.js';
import Inventario from './classes/inventario.js';
import Producto from './classes/producto.js';
//Botones
const btnAgregar = document.querySelector('#btnAgregar');
const btnAgregar1 = document.querySelector('#btnAgregar1');
const btnEliminar = document.querySelector('#btnEliminar');
const btnEliminar1 = document.querySelector('#btnEliminar1');
const btnBuscar = document.querySelector('#btnBuscar');
const btnLimpiar = document.querySelector('#btnLimpiar');
//checkbox
const cboxInsertar = document.querySelector('#cboxInsertar');
//Interfaz
var interfaz = new Interfaz
//Varaibles
var producto;
//Lista
var inventario = new Inventario();
console.log(inventario);
btnAgregar.addEventListener('click', () => {
    console.clear();
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let cantidad = document.getElementById('cantidad').value;
    let costo = document.getElementById('costo').value;
    if (inventario.inicio == null) {
        producto = new Producto(codigo, nombre, descripcion, cantidad, costo);
        inventario.agregarProducto(producto);
    } else {
        var aux = new Producto(codigo, nombre, descripcion, cantidad, costo);
        inventario.agregarProducto(producto, aux);
        producto = aux;
    }
    console.log(inventario);
});
btnAgregar1.addEventListener('click', () => {
    console.clear();
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let cantidad = document.getElementById('cantidad').value;
    let costo = document.getElementById('costo').value;
    if (inventario.inicio == null) {
        producto = new Producto(codigo, nombre, descripcion, cantidad, costo);
        inventario = new Inventario();
        inventario.agregarProductoInicio(producto);
    } else {
        var aux = new Producto(codigo, nombre, descripcion, cantidad, costo);
        inventario.agregarProductoInicio(aux);
    }
    console.log(inventario);
});
btnEliminar.addEventListener('click', () => {
    console.clear();
    let codigo = document.getElementById('codigo').value;
    var producto = new Producto(codigo, '', '', '', '');
    inventario.eliminarProducto(producto);
    console.log(inventario);
});
btnEliminar1.addEventListener('click', () => {
    console.clear();
    inventario.eliminarProductoInicio();
    console.log(inventario);
});
btnBuscar.addEventListener('click', () => {
    console.clear();
    let codigo = document.getElementById('codigo').value;
    var producto = new Producto(codigo, '', '', '', '');
    producto = inventario.buscarProducto(producto);
    console.log(inventario);
    console.log(producto);
});
btnLimpiar.addEventListener('click', () => {
    console.clear();
    let codigo = document.getElementById('codigo');
    let nombre = document.getElementById('nombre');
    let descripcion = document.getElementById('descripcion');
    let cantidad = document.getElementById('cantidad');
    let costo = document.getElementById('costo');
    let cboxInsertar = document.getElementById('cboxInsertar');
    let casilla = document.getElementById('casilla');
    interfaz.limpiar(codigo, nombre, descripcion, cantidad, costo, cboxInsertar, casilla);
    console.log(inventario);
});
cboxInsertar.addEventListener('click', () => {
    console.clear();
    interfaz.mostrarInsertar(cboxInsertar);
    console.log(inventario);
});
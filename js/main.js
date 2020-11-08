//Clases
import Interfaz from './classes/interfaz.js';
import Inventario from './classes/inventario.js';
import Producto from './classes/producto.js';
//Interfaz
var interfaz = new Interfaz;
//Botones
const btnAgregar = document.querySelector('#btnAgregar');
const btnAgregar1 = document.querySelector('#btnAgregar1');
const btnEliminar = document.querySelector('#btnEliminar');
const btnEliminar1 = document.querySelector('#btnEliminar1');
const btnBuscar = document.querySelector('#btnBuscar');
const btnLimpiar = document.querySelector('#btnLimpiar');
//checkbox
const cboxInsertar = document.querySelector('#cboxInsertar');
//Varaibles
var producto;
var inventario = new Inventario();
console.log(inventario);
btnAgregar.addEventListener('click', () => {
    console.clear();
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let cantidad = document.getElementById('cantidad').value;
    let costo = document.getElementById('costo').value;
    var casilla = document.getElementById('casilla');
    if (inventario.inicio == null) {
        producto = new Producto(codigo, nombre, descripcion, cantidad, costo);
        inventario.agregarProducto(producto);
    } else {
        if (casilla) {
            if (casilla.value) {
            var aux = new Producto(codigo, nombre, descripcion, cantidad, costo);
            inventario.insertarProducto(aux, casilla.value);
            producto = aux;
        }
        } else {
            var aux = new Producto(codigo, nombre, descripcion, cantidad, costo);
            inventario.agregarProducto(producto, aux);
            producto = aux;
        }
    }
    console.log(inventario);
    inventario.listarProductos(interfaz);
    inventario.listarProductosInverso(interfaz);
    interfaz.mostrarRegistro('Agregar', producto);
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
        interfaz.mostrarRegistro('Agregar 1°', producto);
    } else {
        var aux = new Producto(codigo, nombre, descripcion, cantidad, costo);
        inventario.agregarProductoInicio(aux);
        interfaz.mostrarRegistro('Agregar 1°', aux);
    }
    console.log(inventario);
    inventario.listarProductos(interfaz);
    inventario.listarProductosInverso(interfaz);
});
btnEliminar.addEventListener('click', () => {
    console.clear();
    let codigo = document.getElementById('codigo').value;
    var producto = new Producto(codigo, '', '', '', '');
    producto = inventario.eliminarProducto(producto);
    console.log(inventario);
    inventario.listarProductos(interfaz);
    inventario.listarProductosInverso(interfaz);
    if (producto != null) {
        interfaz.mostrarRegistro('Eliminar', producto);
    }
});
btnEliminar1.addEventListener('click', () => {
    console.clear();
    producto = inventario.eliminarProductoInicio();
    console.log(inventario);
    inventario.listarProductos(interfaz);
    inventario.listarProductosInverso(interfaz);
    if (producto != null) {
        interfaz.mostrarRegistro('Eliminar 1°', producto);
    }
});
btnBuscar.addEventListener('click', () => {
    console.clear();
    let codigo = document.getElementById('codigo').value;
    var producto = new Producto(codigo, '', '', '', '');
    producto = inventario.buscarProducto(producto);
    console.log(inventario);
    if (producto == undefined) {
        console.log(`Producto no encontrado`);
    } else {
        interfaz.mostrarArticulo(producto);
        interfaz.mostrarRegistro('Buscar', producto);
        console.log(producto);
    }
});
btnLimpiar.addEventListener('click', () => {
    let codigo = document.getElementById('codigo');
    let nombre = document.getElementById('nombre');
    let descripcion = document.getElementById('descripcion');
    let cantidad = document.getElementById('cantidad');
    let costo = document.getElementById('costo');
    let cboxInsertar = document.getElementById('cboxInsertar');
    let casilla = document.getElementById('casilla');
    interfaz.limpiar(codigo, nombre, descripcion, cantidad, costo, cboxInsertar, casilla);
});
cboxInsertar.addEventListener('click', () => {
    interfaz.mostrarInsertar(cboxInsertar);
});
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
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let cantidad = document.getElementById('cantidad').value;
    let costo = document.getElementById('costo').value;
    var casilla = document.getElementById('casilla');
    if (codigo != '' && nombre != '' && descripcion != '' && cantidad != '' && costo != '') {
        console.clear();
        if (inventario.inicio == null) {
            if (casilla) {
                interfaz.mostrarAlerta('🚫 Error 🚫', 'No puedes insertar productos si el inventario esta vacío');
            } else {
                producto = new Producto(codigo, nombre, descripcion, cantidad, costo);
                inventario.agregarProducto(producto);
                interfaz.mostrarRegistro('Agregar', producto);
            }
        } else {
            if (casilla) {
                if (casilla.value != '') {
                    console.log(casilla.value)
                    var aux = new Producto(codigo, nombre, descripcion, cantidad, costo);
                    inventario.insertarProducto(aux, casilla.value);
                    producto = aux;
                    interfaz.mostrarRegistro('Insertar', producto);
                } else {
                    interfaz.mostrarAlerta('🚫 Error 🚫', 'Por favor ingresa la casilla en la que se insertará el producto');
                }
            } else {
                var aux = new Producto(codigo, nombre, descripcion, cantidad, costo);
                inventario.agregarProducto(producto, aux);
                producto = aux;
                interfaz.mostrarRegistro('Agregar', producto);
            }
        }
        inventario.listarProductos(interfaz);
        inventario.listarProductosInverso(interfaz);
        console.log(inventario);
    } else {
        interfaz.mostrarAlerta('🚫 Error 🚫', 'Por favor llena todos los campos');
    }
});
btnAgregar1.addEventListener('click', () => {
    let codigo = document.getElementById('codigo').value;
    let nombre = document.getElementById('nombre').value;
    let descripcion = document.getElementById('descripcion').value;
    let cantidad = document.getElementById('cantidad').value;
    let costo = document.getElementById('costo').value;
    if (codigo != '' && nombre != '' && descripcion != '' && cantidad != '' && costo != '') {
        console.clear();
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
        inventario.listarProductos(interfaz);
        inventario.listarProductosInverso(interfaz);
        console.log(inventario);
    } else {
        interfaz.mostrarAlerta('🚫 Error 🚫', 'Por favor llena todos los campos');
    }
});
btnEliminar.addEventListener('click', () => {
    let codigo = document.getElementById('codigo').value;
    if (codigo != '') {
        if (inventario.inicio != null) {
            console.clear();
            var aux = new Producto(codigo, '', '', '', '');
            aux = inventario.eliminarProducto(aux);
            inventario.listarProductos(interfaz);
            inventario.listarProductosInverso(interfaz);
            console.log(inventario);
            if (aux != null) {
                interfaz.mostrarRegistro('Eliminar', aux);
            } else {
                interfaz.mostrarAlerta('🚫 Error 🚫', 'Producto no encontrado');
            }
        } else {
            interfaz.mostrarAlerta('🚫 Error 🚫', 'No quedan productos en el inventario');
        }
    } else {
        interfaz.mostrarAlerta('🚫 Error 🚫', 'Por favor indica el código del producto a eliminar');
    }
});
btnEliminar1.addEventListener('click', () => {
    console.clear();
    producto = inventario.eliminarProductoInicio();
    inventario.listarProductos(interfaz);
    inventario.listarProductosInverso(interfaz);
    console.log(inventario);
    if (producto != null) {
        interfaz.mostrarRegistro('Eliminar 1°', producto);
    } else {
        interfaz.mostrarAlerta('🚫 Error 🚫', 'No quedan productos en el inventario');
    }
});
btnBuscar.addEventListener('click', () => {
    let codigo = document.getElementById('codigo').value;
    if (codigo != '') {
        console.clear();
        var producto = new Producto(codigo, '', '', '', '');
        producto = inventario.buscarProducto(producto);
        console.log(inventario);
        if (producto == undefined) {
            interfaz.ocultarArticulo();
            interfaz.mostrarAlerta('🚫 Error 🚫', 'Producto no encontrado');
            console.log(`Producto no encontrado`);
        } else {
            interfaz.mostrarArticulo(producto);
            interfaz.mostrarRegistro('Buscar', producto);
            console.log(producto);
        }
    } else {
        interfaz.mostrarAlerta('🚫 Error 🚫', 'Por favor indica el código del producto a buscar');
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
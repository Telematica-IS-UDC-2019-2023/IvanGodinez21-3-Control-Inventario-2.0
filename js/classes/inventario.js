import Producto from './producto.js';
export default class Inventario {
    /**
     * @param {object} lista
     */
    constructor() {
        this.inicio = null;
    }
    agregarProducto(producto, productoNuevo) {
        if (this.inicio == null) {
            this.inicio = producto;
        } else {
            producto.siguiente = productoNuevo;
        }
    }
    eliminarProducto(producto) {
        let aux = this.inicio;
        if (this.inicio != null) {
        if (this.inicio.codigo == producto.codigo) {
            this.inicio = this.inicio.siguiente;
            return new Producto(aux.codigo, aux.nombre, aux.descripcion, aux.costo)
        } else {
            try {
                while (aux.siguiente.codigo != producto.codigo) {
                    aux = aux.siguiente;
                }
                if (aux.siguiente.codigo == producto.codigo) {
                    let producto = new Producto(aux.siguiente.codigo, aux.siguiente.nombre, aux.siguiente.descripcion, aux.siguiente.costo)
                    aux.siguiente = aux.siguiente.siguiente
                    return producto
                }
            } catch (error) {}
        }
    }
    }
    buscarProducto(producto) {
        let aux = this.inicio;
        if (aux) {
            try {
                while (aux.codigo != producto.codigo) {
                    aux = aux.siguiente;
                }
                if (aux.codigo == producto.codigo) {
                    return aux;
                }
            } catch (error) {}
        }
    }
    listarProductos(interfaz, table) {
        let aux = this.inicio;
        interfaz.mostrarLista(aux, table);
    }
    listarProductosInverso(interfaz, tableinvertida) {
        let aux = this.inicio;
        interfaz.mostrarListaInversa(aux, tableinvertida);
    }
    insertarProducto() {}
    agregarProductoInicio(producto) {
        if (this.inicio === null) {
            this.inicio = producto;
        } else {
            let aux = this.inicio;
            this.inicio = producto;
            producto.siguiente = aux;
        }
    }
    eliminarProductoInicio() {
        if (this.inicio != null) {
            let producto = new Producto(this.inicio.codigo, this.inicio.nombre, this.inicio.descripcion, this.inicio.costo);
            this.inicio = this.inicio.siguiente;
            return producto
        }
    }
}
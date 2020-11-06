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
            productoNuevo.anterior = producto;
        }
    }
    eliminarProducto(producto) {
        let aux = this.inicio;
        while (aux.codigo != producto.codigo) {
            aux = aux.siguiente;
        }
        if (aux.codigo == producto.codigo) {
            if (aux.anterior != null) {
                aux.anterior.siguiente = aux.siguiente;
            }
            if (aux.siguiente != null) {
                aux.siguiente.anterior = aux.anterior;
            }
        }
        if (aux.codigo == this.inicio.codigo) {
            this.inicio = null;
        }
    }
    buscarProducto() {}
    listarProductos() {}
    listarProductosInverso() {}
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
        this.inicio = this.inicio.siguiente
    }
}
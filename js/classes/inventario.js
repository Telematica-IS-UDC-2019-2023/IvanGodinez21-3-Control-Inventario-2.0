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
        if (this.inicio.codigo == producto.codigo) {
            this.inicio = this.inicio.siguiente;
        } else {
            try {
                while (aux.siguiente.codigo != producto.codigo) {
                    aux = aux.siguiente;
                }
                if (aux.siguiente.codigo == producto.codigo) {
                    aux.siguiente = aux.siguiente.siguiente
                }
            } catch (error) {}
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
        if (this.inicio != null) {
            this.inicio = this.inicio.siguiente
        }
    }
}
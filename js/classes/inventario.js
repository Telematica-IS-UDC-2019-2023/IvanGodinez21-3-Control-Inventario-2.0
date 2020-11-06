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
        //Error
        let aux = this.inicio;
        if (aux) {
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
    }
    buscarProducto(producto) {
        let aux = this.inicio;
        if (aux) {
            while (aux.codigo != producto.codigo) {
                aux = aux.siguiente;
            }
            if (aux.codigo == producto.codigo) {
                return aux;
            }
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
        //Error
        this.inicio = this.inicio.siguiente
        this.inicio.anterior = null
    }
}
export default class Interfaz {
    mostrarPrompt() {}
    mostrarArticulo() {}
    mostrarLista() {}
    mostrarListaInversa() {}
    mostrarRegistro() {}
    mostrarInsertar(cboxInsertar) {
        if (cboxInsertar.checked == true) {
            let divinsertar = document.getElementById('divinsertar');
            divinsertar.innerHTML = '<input name="casilla" type="number" placeholder="Casilla" id="casilla" />';
        } else if (cboxInsertar.checked == false) {
            let casilla = document.querySelector('#casilla');
            casilla.remove();
        }
    }
    limpiar(codigo, nombre, descripcion, cantidad, costo, cboxInsertar, casilla) {
        codigo.value = ''
        nombre.value = ''
        descripcion.value = ''
        cantidad.value = ''
        costo.value = ''
        cboxInsertar.checked = false
        if (casilla) {
            casilla.remove()
        }
    }
}
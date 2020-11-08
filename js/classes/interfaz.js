export default class Interfaz {
    mostrarPrompt() {}
    mostrarArticulo() {}
    mostrarLista(aux, table) {
        table.innerHTML = '';
        let cabecera = table.insertRow(-1);
        let titulo1 = cabecera.insertCell(0);
        let titulo2 = cabecera.insertCell(1);
        titulo1.textContent = 'Código';
        titulo2.textContent = 'Nombre';
        while (aux != null) {
            let fila = table.insertRow(-1);
            let celda1 = fila.insertCell(0);
            let celda2 = fila.insertCell(1);
            celda1.textContent = aux.codigo;
            celda2.textContent = aux.nombre;
            aux = aux.siguiente;
        }
    }
    mostrarListaInversa(aux, tableinvertida) {
        tableinvertida.innerHTML = '';
        let cabecera = tableinvertida.insertRow(0);
        let titulo1 = cabecera.insertCell(0);
        let titulo2 = cabecera.insertCell(1);
        titulo1.textContent = 'Código';
        titulo2.textContent = 'Nombre';
        while (aux != null) {
            let fila = tableinvertida.insertRow(1);
            let celda1 = fila.insertCell(0);
            let celda2 = fila.insertCell(1);
            celda1.textContent = aux.codigo;
            celda2.textContent = aux.nombre;
            aux = aux.siguiente;
        }
    }
    mostrarRegistro(evento, producto, tableactividad) {
        let fila = tableactividad.insertRow(-1);
        let celda1 = fila.insertCell(0);
        let celda2 = fila.insertCell(1);
        let celda3 = fila.insertCell(2);
        celda1.textContent = evento;
        celda2.textContent = producto.codigo;
        celda3.textContent = producto.nombre;
    }
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
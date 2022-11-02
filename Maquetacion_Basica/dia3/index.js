let array = []
function solicitarInfo() {
    let info = {
        nombre: document.getElementById("nombre").value,
        origen: document.getElementById("origen").value,
        destino: document.getElementById("destino").value,
        numPersonas: document.getElementById("numPersonas").value,
        fecha: document.getElementById("fecha").value
    }
    array.push(info)
    console.log(array)


}

function filtrarInfo() {

    let completeString = "";

    for (let i = 0; i < array.length; i++) {
        if (array[i].destino.toUpperCase() === "CANARIAS" || array[i].destino.toUpperCase() === "MALLORCA" || array[i].destino.toUpperCase() === "GALICIA") {
            console.log(array[i])
            completeString += `<br><br>Nombre:\t${array[i].nombre}
            <br>Origen:\t${array[i].origen}
            <br>Destino:\t${array[i].destino}
            <br>Numero de personas:\t${array[i].numPersonas}
            <br>Fecha:\t${array[i].fecha}`
            document.getElementById("centerText").innerHTML = completeString
        }
    }
}
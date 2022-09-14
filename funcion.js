let arbolito = new q_tree()

function actualizador(xval, yval){
    arbolito.insertar(xval, yval)
    calculator.removeExpressions(calculator.getExpressions())
    arbolito.print_desmos()

    let elemento = document.createElement("li");
    let date = new Date()
    elemento.innerHTML = `(${xval.toFixed(0)}, ${yval.toFixed(0)}) ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    //elemento.innerHTML = `(${xval.toFixed(2)}, ${yval.toFixed(2)}) ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    document.getElementById("lista_inserts").appendChild(elemento)
}

document.getElementById("coordenada").onsubmit = (e) => {
    e.preventDefault()
    const x_val = parseInt(document.getElementById("x_val").value)
    const y_val = parseInt(document.getElementById("y_val").value)
    
    actualizador(x_val, y_val)
}

elt.addEventListener('click', function (evt) {
    var rect = elt.getBoundingClientRect();
    var x = evt.clientX - rect.left;
    var y = evt.clientY - rect.top;
    // Note, pixelsToMath expects x and y to be referenced to the top left of
    // the calculator's parent container.
    var mathCoordinates = calculator.pixelsToMath({x: x, y: y});
    
    if (!inRectangle(mathCoordinates, calculator.graphpaperBounds.mathCoordinates)) return;
    
    actualizador(mathCoordinates.x, mathCoordinates.y)
});
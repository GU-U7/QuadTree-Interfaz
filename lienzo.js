var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt, {
    expressions:false,
    lockViewport: true,
    zoomButtons: false,
    settingsMenu: false,
    showGrid: false,
    showXAxis: false,
    showYAxis: false
});
calculator.setMathBounds({
    left: 0,
    right: 500,
    bottom: 0,
    top: 500
});

function inRectangle(point, rect) {
    return (
    point.x >= rect.left &&
    point.x <= rect.right &&
    point.y <= rect.top &&
    point.y >= rect.bottom
    )
}


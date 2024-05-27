document.getElementById('calculateButton').addEventListener('click', function() {
    // Obtener valores de los campos del formulario
    const areaTotal = parseFloat(document.getElementById('areaTotal').value);
    const distanciaEntreSurcos = parseFloat(document.getElementById('distanciaEntreSurcos').value);
    const distanciaEntrePlantas = parseFloat(document.getElementById('distanciaEntrePlantas').value);

    // Validar que los valores no estén vacíos y sean mayores que cero
    if (areaTotal > 0 && distanciaEntreSurcos > 0 && distanciaEntrePlantas > 0) {
        // Realizar los cálculos
        const numeroSurcos = areaTotal / distanciaEntreSurcos;
        const numeroPlantas = (areaTotal / distanciaEntreSurcos) * (distanciaEntreSurcos / distanciaEntrePlantas);

        // Redondear y formatear el número sin decimales
        const numeroSurcosFormateado = Math.round(numeroSurcos).toLocaleString('es-ES');
        const numeroPlantasFormateado = Math.round(numeroPlantas).toLocaleString('es-ES');

        // Mostrar el resultado
        document.getElementById('result').textContent = `Densidad de siembra: ${numeroPlantasFormateado} de su plantación`;
    } else {
        document.getElementById('result').textContent = 'Por favor, ingrese valores válidos.';
    }
});

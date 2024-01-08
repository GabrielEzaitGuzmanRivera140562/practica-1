// Inicializar variables
let potencia = 1;
let fraccion = 1;
let suma = 1;

// Mostrar encabezado de las columnas
console.log("Potencia   | Fracción  | Suma");

// Iterar para las primeras 6 potencias
for (let i = 1; i <= 6; i++) {
    // Mostrar la información en cada iteración
    console.log(potencia + "         | " + fraccion + "        | " + suma);

    // Calcular la siguiente potencia
    potencia *= 2;

    // Calcular la siguiente fracción
    fraccion /= 2;

    // Actualizar la suma acumulada
    suma += fraccion;
}
// Pedir al usuario que ingrese la cantidad de números que quiere comparar
var n = prompt("Ingresa cuántos números quieres leer:");

// Crear un array para almacenar los números ingresados por el usuario
var numeros = [];
for (var i = 0; i < n; i++) {
    var numero = prompt("Ingresa el número:");
    numeros.push(parseInt(numero));
}

// Pedir al usuario que ingrese el valor con el cual comparar
var x = prompt("Ingresa el valor con el que comparar:");

// Contar cuántos números son mayores que x
var cont = 0;
for (var j = 0; j < numeros.length; j++) {
    if (numeros[j] > x) {
        cont++;
    }
}

// Mostrar el resultado
alert("De tu lista, " + cont + " valores son mayores a " + x + ".");
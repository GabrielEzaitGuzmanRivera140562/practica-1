function verificarSudoku(sudoku) {
    // Verificar filas
    for (let i = 0; i < 9; i++) {
        let fila = [];
        for (let j = 0; j < 9; j++) {
            if (fila.includes(sudoku[i][j])) {
                return false;
            } else {
                fila.push(sudoku[i][j]);
            }
        }
    }

    // Verificar columnas
    for (let i = 0; i < 9; i++) {
        let columna = [];
        for (let j = 0; j < 9; j++) {
            if (columna.includes(sudoku[j][i])) {
                return false;
            } else {
                columna.push(sudoku[j][i]);
            }
        }
    }

    // Verificar regiones
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            let region = [];
            for (let k = i; k < i + 3; k++) {
                for (let l = j; l < j + 3; l++) {
                    if (region.includes(sudoku[k][l])) {
                        return false;
                    } else {
                        region.push(sudoku[k][l]);
                    }
                }
            }
        }
    }

    return true; // Si todas las verificaciones pasan, el sudoku es correcto
}

// Ejemplo de un sudoku resuelto
let sudokuCorrecto = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

if (verificarSudoku(sudokuCorrecto)) {
    console.log("La solución del sudoku es correcta.");
} else {
    console.log("La solución del sudoku es incorrecta.");
}
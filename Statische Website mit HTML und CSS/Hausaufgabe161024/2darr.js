/*4. Zweidimensionale Arrays
Verständnis und Manipulation von zweidimensionalen Arrays.
● Erstelle ein 2D-Array, das eine 3x3-Matrix repräsentiert, die mit den Zahlen 1
bis 9 gefüllt ist.

● Schreibe eine Funktion, die die Diagonalsumme der Matrix (von oben links
nach unten rechts) berechnet.
● Verwandle die Matrix in eine 3x3 Matrix mit Nullen in den Ecken.*/


// Erstelle eine 3x3-Matrix
let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Funktion zur Berechnung der Diagonalsumme (von oben links nach unten rechts)
function calculateDiagonalSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        sum += matrix[i][i];
    }
    return sum;
}

console.log("Diagonalsumme:", calculateDiagonalSum(matrix1)); // Ausgabe: 15

// Funktion zum Umwandeln der Matrix mit Nullen in den Ecken
function transformMatrixToZerosInCorners(matrix) {

    let transformedMatrix = matrix.map(row => [...row]); // Kopiere die Matrix

    transformedMatrix[0][0] = 0;  // Oben links
    transformedMatrix[0][2] = 0;  // Oben rechts
    transformedMatrix[2][0] = 0;  // Unten links
    transformedMatrix[2][2] = 0;  // Unten rechts

    return transformedMatrix;
}

let matrixWithZerosInCorners = transformMatrixToZerosInCorners(matrix1);
console.log("Matrix mit Nullen in den Ecken:");
console.log(matrixWithZerosInCorners);

// Zusätzliche Console Logs zur Veranschaulichung
console.log(matrix1[0][0]);  // 1
console.log(matrix1[0][2]);  // 3
console.log(matrix1[1][1]);  // 5
console.log(matrix1[2][2]);  // 9

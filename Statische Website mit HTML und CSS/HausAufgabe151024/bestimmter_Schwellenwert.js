/*Erstelle eine Funktion, die die Anzahl der Elemente in einem Array zählt, die größer als ein
vorgegebener Schwellenwert sind.
Vorgegebene Daten:
● Verwendet das folgende Array: [10, 23, 35, 47, 52, 66, 71, 88, 90]
● Der Schwellenwert sei 50
Implementiere die Funktion in einer for-Schleife
Implementiere die Funktion in einer while-Schleife
Implementiere die Funktion in einer do-while-Schleife
Hinweis: Alle drei Schleifenarten können in eine Datei geschrieben werden!*/
function countElementsAboveThresholdFor(arr, threshold) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > threshold) {
            count++;
        }
    }
    return count;
}

// Implementiere die Funktion in einer while-Schleife
function countElementsAboveThresholdWhile(arr, threshold) {
    let count = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > threshold) {
            count++;
        }
        i++;
    }
    return count;
}

// Implementiere die Funktion in einer do-while-Schleife
function countElementsAboveThresholdDoWhile(arr, threshold) {
    let count = 0;
    let i = 0;
    do {
        if (arr[i] > threshold) {
            count++;
        }
        i++;
    } while (i < arr.length);
    
    return count;
}

const zahlenArray = [10, 23, 35, 47, 52, 66, 71, 88, 90];
const schwellenwert = 50;

const ergebnisFor = countElementsAboveThresholdFor(zahlenArray, schwellenwert);
console.log("For-Schleife: Anzahl der Elemente größer als " + schwellenwert + ": " + ergebnisFor);

const ergebnisWhile = countElementsAboveThresholdWhile(zahlenArray, schwellenwert);
console.log("While-Schleife: Anzahl der Elemente größer als " + schwellenwert + ": " + ergebnisWhile);

const ergebnisDoWhile = countElementsAboveThresholdDoWhile(zahlenArray, schwellenwert);
console.log("Do-While-Schleife: Anzahl der Elemente größer als " + schwellenwert + ": " + ergebnisDoWhile);

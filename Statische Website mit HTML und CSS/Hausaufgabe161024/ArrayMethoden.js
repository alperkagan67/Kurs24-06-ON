/*● Erstelle ein Array mit den Zahlen 1 bis 10.
● Füge die Zahl 11 am Ende des Arrays hinzu.
● Entferne die erste Zahl aus dem Array.
● Finde und gib die Position der Zahl 5 im Array aus.
● Überprüfe, ob die Zahl 7 im Array enthalten ist.*/
const numbers = [1, 2, 3, 4, 5, 6, 8, 9, 10];
numbers.push(11);
numbers.shift();
console.log(numbers);

const index5 = numbers.indexOf(5);

if (numbers.includes(7)) {
    console.log("Die Zahl 7 ist im Array enthalten.");
} else {
    console.log("Die Zahl 7 ist im Array nicht enthalten.");
}

// Ausgabe: [2, 3, 4, 5, 6, 8, 9, 10, 11]

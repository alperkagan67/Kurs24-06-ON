/*3. Filterung und Extra

Verwenden von filter() und reduce().
● Erstelle ein Array mit zufälligen Zahlen zwischen 1 und 100 (mindestens 20
Zahlen).
● Filtern Sie alle geraden Zahlen in einem neuen Array heraus.
● Berechne die Summe aller gefilterten geraden Zahlen.*/

const numbers = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1); 
/*Erstellt ein Array mit 20 zufälligen Zahlen zwischen 1 und 100.
  const numbers = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);

  // Filterz alle geraden Zahlen in einem neuen Array heraus.

  const evenNumbers = numbers.filter(number => number % 2 === 0);

  // Berechnzet die Summe aller gefilterten geraden Zahlen.
  const sum = evenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(evenNumbers);
  console.log(sum);
  // Output:
  // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]
  // 220
  // */
 /*

*/

const evenNumbers = numbers.filter(number => number % 2 === 0);

const sum = evenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(evenNumbers);

console.log(sum);

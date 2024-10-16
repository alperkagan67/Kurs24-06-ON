/*2. Arbeiten mit Schleifen und Arrays
Arrays iterieren und deren Elemente verarbeiten.
● Erstelle ein Array mit den Namen von fünf verschiedenen Städten.
● Iteriere über das Array und gib jede Stadt in Großbuchstaben aus.
● Erstelle ein neues Array, das die Anzahl der Buchstaben in jedem Stadtnamen
speichert.*/
const cities = ["Berlin", "Hamburg", "München", "Stuttgart", "Düsseldorf"];

// Iteration über das Array und Ausgabe in Großbuchstaben

for (let i = 0; i < cities.length; i++) {
    console.log(cities[i].toUpperCase());
}

// Array mit Anzahl der Buchstaben

const cityLengthArray = [];

for (let i = 0; i < cities.length; i++) {
    cityLengthArray.push(cities[i].length);
}

console.log(cityLengthArray);


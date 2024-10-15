/*
1. Summiere gerade Zahlen
Erstelle eine Funktion, die alle geraden Zahlen von 1 bis einschließlich 100 summiert.
● Verwende eine do-while-Schleife, um durch die Zahlen von 1 bis 100 zu iterieren.
● Prüfe innerhalb des Schleifenblocks, ob eine Zahl gerade ist, und addiere sie zur
Summe*/
function sumEvenNumbers() {
    let sum = 0;
    let i = 1;
    do {
        if (i % 2 === 0) {
            sum += i;
            }
            i++;
            } while (i <= 100);
            return sum;
            }
            console.log(sumEvenNumbers());
            //  2550
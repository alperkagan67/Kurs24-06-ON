/*2. Ziffernsumme einer Zahl
Erstelle eine Funktion, die die Ziffernsumme einer gegebenen positiven ganzen Zahl
berechnet.
● Verwende eine do-while-Schleife, um die Summe zu ermitteln.
● Implementiere die Funktion so, dass sie für jede Ziffer der Zahl berechnet und zur
Summe addiert.
● Bsp.: 248 = 2 + 4 + 8 = 14*/
function ziffernSumme(zahl) {
    let summe = 0;
    let zahlString = zahl.toString();
    let i = 0;
    do {
        summe += parseInt(zahlString[i]);
        i++;
        } while (i < zahlString.length);
        return summe;
        }
        console.log(ziffernSumme(248)); // Ausgabe: 14
        
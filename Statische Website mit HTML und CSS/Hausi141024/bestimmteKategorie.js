/*1. Schreibe eine If-Else-Anweisung
Erstelle eine Funktion bestimmeKategorie(), die ein Alter als Parameter erhält und
bestimmt, zu welcher Alterskategorie eine Person gehört. Die Kategorien sind wie
folgt definiert:
● "Kind" für Personen im Alter von 0 bis 12 Jahren.
● "Jugendlicher" für Personen im Alter von 13 bis 17 Jahren.
● "Erwachsener" für Personen im Alter von 18 bis 64 Jahren.
● "Senior" für Personen ab 65 Jahren.
Verwende eine if-else Anweisung für die Implementierung.*/
function bestimmeKategorie(Alter) {
    if (Alter <= 12) {
        return "Kind";
        } else if (Alter <= 17) {
            return "Jugendlicher";
            } else if (Alter <= 64) {
                return "Erwachsener";
                } else {
                    return "Senior";
                    }
                    }
                    
                    console.log(bestimmeKategorie(10)); // Ausgabe: "Kind"
                    console.log(bestimmeKategorie(15)); // Ausgabe: "Jugendlicher
    

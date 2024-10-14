/*2. Schreibe eine switch-case Anweisung
Schreibe eine Funktion interpretiereWetter, die einen String mit der Bezeichnung
einer Wetterlage erhält und eine entsprechende Aktivität vorschlägt. Die Wetterlagen
und Aktivitäten sind wie folgt:
● "Sonnig" soll "Gehe spazieren" vorschlagen.
● "Regnerisch" soll "Bleibe zu Hause und lese ein Buch" vorschlagen.
● "Schnee" soll "Baue einen Schneemann" vorschlagen.
● "Windig" soll "Fliege einen Drachen" vorschlagen.
Verwende eine switch-case Anweisung zur Implementierung.*/
function interpretiereWetter(wetterlage) {
    switch (wetterlage) {
        case "Sonnig":
            return "Gehe spazieren";
            case "Regnerisch":
                return "Bleibe zu Hause und lese ein Buch";
                case "Schnee":
                    return "Baue einen Schneemann";
                    case "Windig":
                        return "Fliege einen Drachen";
                        default:
                            return "Keine passende Aktivität gefunden.";
                            }
                            }
                            console.log(interpretiereWetter("Sonnig")); // Ausgabe: Gehe sp
                            console.log(interpretiereWetter("Regnerisch")); // Ausgabe: Bleibe zu
                            
/////////////////////////////////////////////////////
/*Aufgabe 1: Benutzerverwaltung mit Map

1. Erstellen Sie eine Map namens benutzerVerwaltung , die Benutzernamen als
Schlüssel und Objekte als Werte speichert. Die Objekte sollen folgende
Eigenschaften enthalten:

email (z.B. 'benutzer123@example.com' )
rolle (z.B. 'Admin' , 'User' oder 'Gast' )
2. Fügen Sie mindestens drei Benutzer zur Map hinzu.
3. Erstellen Sie eine Funktion zeigeBenutzer , die alle Benutzer und deren Details im
Format "Benutzername: E-Mail, Rolle" ausgibt.
Hinweis: Nutzen Sie .set() , .get() und .forEach() .*/


let benutzerVerwaltung = new Map();

benutzerVerwaltung.set('benutzer123', { email: 'benutzer123@example.com', rolle: 'Admin' });
benutzerVerwaltung.set('benutzer456', { email: 'benutzer456@example.com', rolle: 'User' });
benutzerVerwaltung.set('benutzer789', { email: 'benutzer789@example.com', rolle: 'Gast' });

// 3. Erstellen Sie eine Funktion zeigeBenutzer
function zeigeBenutzer() {
    benutzerVerwaltung.forEach(function(benutzer, benutzername) {
        console.log(`${benutzername}: ${benutzer.email}, ${benutzer.rolle}`);
    });
}

zeigeBenutzer();
///////////////////////////////////
/*Aufgabe 2: Eindeutige Einträge mit Set

1. Erstellen Sie ein Set namens besuchteSeiten , um die Namen von Seiten zu
speichern, die ein Benutzer besucht hat (z.B. 'Startseite' , 'Profil' ,
'Einstellungen' ).
2. Fügen Sie mindestens fünf Seitennamen zum Set hinzu, wobei zwei Namen
dupliziert sein sollten.
3. Geben Sie die Anzahl der eindeutigen Seiten aus.
4. Schreiben Sie eine Funktion zeigeSeiten , die alle Seitennamen im Format
"Besuchte Seite: [Name]" ausgibt.

Tipp: Verwenden Sie .add() , .has() , und .size .*/

let besuchteSeiten = new Set(['Startseite', 'Profil', 'Einstellungen', 'Startseite', 'Profil']);

// 2. Fügen Sie mindestens fünf Seitennamen zum Set hinzu

besuchteSeiten.add('Startseite');
besuchteSeiten.add('Profil');
besuchteSeiten.add('Einstellungen');
besuchteSeiten.add('Impressum');
besuchteSeiten.add('Impressum');

// 3. Geben Sie die Anzahl der eindeutigen Seiten aus

console.log(besuchteSeiten.size); // Ausgabe: 5

// 4. Schreiben Sie eine Funktion zeigeSeiten

function zeigeSeiten() {
    besuchteSeiten.forEach(function(seite) {
        console.log(`Besuchte Seite: ${seite}`);
    });
}

zeigeSeiten();

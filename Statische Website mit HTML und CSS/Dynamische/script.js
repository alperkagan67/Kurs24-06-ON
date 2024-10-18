/* füge nach jeder aufgabe //////////////// hinzu.*/
/*Aufgabe 1: Textelement auswählen und ändern

Ziel: Nutze JavaScript, um den Text eines Elements zu ändern.

Aufgabe: Füge ein <h2> -Element mit dem Text "Willkommen" in dein HTML-
Dokument ein. Verwende JavaScript, um diesen Text zu "Herzlich Willkommen!" zu

ändern.
Tipp: Nutze document.getElementById() .*/
let heading = document.getElementById("welcome-text");
heading.textContent = "Herzlich Willkommen!";

/*Aufgabe 2: Stile ändern

Ziel: Ändere das Styling eines Elements.
Aufgabe: Erstelle einen <button> mit dem Text "Ändere Farbe". Wenn auf den
Button geklickt wird, soll der Hintergrund des Buttons zu einer zufälligen Farbe
wechseln.
Tipp: Verwende style.backgroundColor und eine Funktion, die zufällige Farben
generiert.*/
let button = document.getElementById("change-color-button");

button.addEventListener("click", function () {
  let randomColor = getRandomColor();
  button.style.backgroundColor = randomColor;
});

function getRandomColor() {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/*Aufgabe 3: Liste von Elementen erstellen

Ziel: Arbeite mit einer HTMLCollection.
Aufgabe: Erstelle eine Liste ( <ul> ) mit drei <li> -Elementen (z.B. "Apfel",
"Banane", "Orange"). Verwende JavaScript, um den Text des zweiten Elements in
"Mango" zu ändern.
Tipp: Nutze document.getElementsByTagName() .*/
let list = document.getElementsByTagName("li");
list[1].textContent = "Mango";

//////////////////////////
/*Aufgabe 4: Dynamisch ein Element hinzufügen

Ziel: Lerne, wie man Elemente dynamisch erstellt und dem DOM hinzufügt.
Aufgabe: Erstelle eine leere <div> -Box in deinem HTML. Füge mithilfe von
JavaScript ein neues <p> -Element hinzu, das den Text "Dies ist ein neuer Absatz"
enthält.
Tipp: Verwende document.createElement() und appendChild() .*/

let div = document.getElementById("dynamic-element");
let newParagraph = document.createElement("p");
newParagraph.textContent = "Dies ist ein neuer Absatz";
div.appendChild(newParagraph);

////////////////////////////////
/*Aufgabe 5: Element mit einem Event Listener
versehen

Ziel: Lerne, wie man Event Listener einsetzt.
Aufgabe: Erstelle ein <button> mit dem Text "Klick mich". Wenn der Button
geklickt wird, soll ein neues <p> -Element mit dem Text "Button wurde geklickt!"
unterhalb des Buttons erscheinen.
Tipp: Nutze addEventListener() und appendChild() .*/

let button2 = document.getElementById("event-listener-button");
button2.addEventListener("click", function () {
  let newParagraph2 = document.createElement("p");
  newParagraph2.textContent = "Button wurde geklickt!";
  document.body.appendChild(newParagraph2);
});
    ////////////////////////////////////

/*Aufgabe 6: Interaktive Farbänderung

Ziel: Dynamische Manipulation von Elementen basierend auf
Benutzerinteraktionen.
Aufgabe: Erstelle eine <div> -Box mit der Klasse "box" und einer Größe von
100x100 Pixeln. Wenn die Maus über die Box fährt, soll sie ihre Farbe ändern. Wenn
die Maus die Box verlässt, soll die Farbe wieder zur Ausgangsfarbe wechseln.
Tipp: Nutze mouseover und mouseout Events.*/

let box = document.querySelector(".box");
let initialColor = "lightgray";  // Feste Ausgangsfarbe

box.addEventListener("mouseover", function () {
  box.style.backgroundColor = getRandomColor();
});

box.addEventListener("mouseout", function () {
  box.style.backgroundColor = initialColor;
});
/////////////////////////////
/*Aufgabe 7: Eingabewert auslesen und anzeigen

Ziel: Arbeite mit Formular- und Eingabeelementen.
Aufgabe: Erstelle ein <input> -Feld und einen <button> mit dem Text "Absenden".
Wenn der Button geklickt wird, soll der eingegebene Text unterhalb des Buttons in
einem neuen <p> -Element angezeigt werden.
Tipp: Verwende getAttribute() und textContent .*/

let input = document.getElementById("input-text"); // Korrigierte ID des Input-Feldes
let submitButton = document.getElementById("show-input-button"); // Korrigierte ID des Buttons

submitButton.addEventListener("click", function () {
  let newParagraph3 = document.createElement("p");
  newParagraph3.textContent = input.value; // Verwende "value", um den aktuellen Eingabewert zu erhalten
  document.body.appendChild(newParagraph3);
});


    /////////////////////////////
    /*Aufgabe 8: Elemente anhand von Klasse auswählen
und manipulieren
Ziel: Übe den Umgang mit getElementsByClassName() .
Aufgabe: Füge drei <div> -Elemente mit der Klasse "box" hinzu. Schreibe ein
Skript, das die Hintergrundfarbe aller Boxen GLEICHZEITIG(GANZ WICHTIG) auf blau ändert, wenn auf
eine beliebige Box geklickt wird.
Tipp: Nutze eine Schleife, um über die HTMLCollection zu iterieren.*/

let boxes = document.getElementsByClassName("box");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("click", function () {
    for (let j = 0; j < boxes.length; j++) {
      boxes[j].style.backgroundColor = "blue";
    }
    this.style.backgroundColor = "lightblue"; // Verwende "this", um das aktuelle Element zu referenzieren
  });
}

    /////////////////////////////
    /*Aufgabe 9: Neues Element vor einem bestehenden
hinzufügen

Ziel: Lerne, wie man Elemente gezielt an bestimmten Stellen im DOM einfügt.
Aufgabe: Erstelle eine <ul> -Liste mit zwei <li> -Elementen ("Item 1" und "Item
2"). Verwende JavaScript, um ein neues <li> -Element mit dem Text "Neues Item"
vor "Item 1" einzufügen.
Tipp: Verwende insertBefore() .

*/

let list2 = document.getElementById("ordered-list");
let newItem = document.createElement("li");
newItem.textContent = "Neues Item";

let firstItem = list2.getElementsByTagName("li")[0];

list2.insertBefore(newItem, firstItem);


    /////////////////////////////

/*Aufgabe 10: Mini-Game: Zufällige Zahlen vergleichen

Ziel: Programmieren mit Logik und DOM-Manipulation kombinieren.
Aufgabe: Erstelle ein Spiel, bei dem der Benutzer eine Zahl zwischen 1 und 10 in
ein Eingabefeld eingibt und auf "Überprüfen" klickt. Das Programm generiert eine
zufällige Zahl zwischen 1 und 10 und zeigt an, ob der Benutzer richtig geraten hat
oder nicht. Verwende ein <p> -Element, um das Ergebnis anzuzeigen.
Tipp: Verwende Math.random() , getElementById() und textContent .
html:?
    <h1>Zufällige Zahl vergleichen</h1>
    <input type="number" id="guess-input" placeholder="Zahl eingeben">
    <button id="guess-button">Überprüfen</button>
    <p id="result-paragraph"></p>
    <script src="script.js"></script>
    
*/

let guessButton = document.getElementById("guess-button");
let inputField = document.getElementById("guess-input");
let resultParagraph = document.getElementById("result-paragraph");

guessButton.addEventListener("click", function () {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let userGuess = parseInt(inputField.value);

  if (userGuess === randomNumber) {
    resultParagraph.textContent = "Richtig! Die Zahl war " + randomNumber;
  } else {
    resultParagraph.textContent = "Leider falsch! Die Zahl war " + randomNumber;
  }
});

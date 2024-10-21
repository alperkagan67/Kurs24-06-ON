import logo from './logo.svg';
import './App.css';

/*3. Füge neue Inhalte hinzu:
Erstelle im return-Block eine H1-Überschrift, die z.B. „Willkommen zu meiner ersten React-App“ anzeigt.
Definiere eine Variable über dem return-Block, die z.B. den aktuellen Tag oder eine einfache Begrüßung enthält. Diese Variable soll im return-Block in einem H2-Tag verwendet werden. Achte darauf, dass du die beiden Elemente (H1 und H2) mit einem sogenannten Fragment umschließt, damit React die Struktur erkennt. Ein Fragment sieht so aus: <> ... </>.
Füge ein weiteres Element hinzu, zum Beispiel einen H3-Tag, der eine einfache Berechnung wie eine Addition macht und das Ergebnis anzeigt.*/
function App() {
  return (
    <>
      <h1>Willkommen zu meiner ersten React-App</h1>
      <h2>Aktueller Tag: {new Date().toLocaleDateString()}</h2>
      <h3>Ergebniss: {2 + 3}</h3>
    </>
    
  );
}

export default App;

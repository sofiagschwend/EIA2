namespace MemoryAufgabe2Verbessert {

    /*Aufgabe: Aufgabe 2 - Memory
      Name: Sofia Gschwend
      Matrikel: 257664
      Datum: 17.04.18
      Dieser Code wurde in Zusammenarbeit mit Abreitsgruppe Grün und unter Anleitung von Melvin B erstellt.
      */
    /******************************************************************************************************************************
    Code Reihenfolge: a) alle Variablen deklarieren b) Hauptfunktionen und Hauptablauf=Funktionsaufruf coden c) functions schreiben
    ******************************************************************************************************************************/
    
    document.addEventListener("DOMContentLoaded", main);

    // Variablen deklarieren
    let cardContent: string[] = ["Tag", "Nacht", "Wolke", "Sonne", "Mond", "Sterne", "Herbst", "Sommer", "Frühling", "Winter"];

    let cardArray: HTMLElement[] = [];
    // leeres Array, in das die für das Spiel benötigten Karten als divs hineingespeichert werden

    let numPairs: number;
    let numPlayers: number;

    let playerInfo: HTMLElement; // HTMLElement ist komplexer Datentyp - string/number sind einfache Datentypen
    let cardField: HTMLElement;

    let score: number = 0; //score wird später zählen, 0 ist Platzhalter
    let name: string = "Spieler ";

   
    function main(): void {

        // Funktionsaufruf
        cardPairs();
        // Funktionsaufruf
        numsPlayer();

        // Informationen sollen in HTML eingefügt werden -> DOM abhängige Varaiblen erstellen = HTMLElement
        playerInfo = document.getElementById("player-info"); // Stelle in HTML = Verknüpfung in HTML
        cardField = document.getElementById("card-div");

        // Spielkarten erzeugen - 2 mal createCard => 1Kartenpaar
        // randomState - zufälliger STATUS der Karte
        for (let i: number = 0; i < numPairs; i++) {
            createCard(cardContent[i], randomState());
            // cardContent an der Stelle i - wird als Übergabeparameter mitgegeben
            createCard(cardContent[i], randomState());
            // cardContent an der Stelle i - wird als Übergabeparameter mitgegeben
        }

        // Funktionsaufruf
        randomMix(cardArray);

        // Karten dem Spielbrett in cardField hinzufügen
        for (let i: number = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
            // dem Spielbrett hinzufügen
        }

        // Spieler Anzeige generieren -> ersetzt class von Melvin
        for (let i: number = 0; i < numPlayers; i++) {
            createPlayer(score, name + [i + 1]);
            // Aufruf der Funktion - score wird mitgegeben und die Variable name + Nummer des Spielers, die hochzählt | [i+1] damit Anzeigestart mit 1 nicht 0
        }
    }/****************** main function schließen*******************/
    
    
        // parseInt wandelt string in number um weil numPairs number erwartet
        // 10 am Ende legt Dezimalsystem für Eingabe fest
    function cardPairs(): void {
        numPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare festlegen", "5 - 10 Kartenpaare"), 10);
        if (numPairs < 5 || numPairs > 10) {
            cardPairs();
            // Bei falscher Angabe erscheint das PopUp-Fenster erneut
        }
    }

    function numsPlayer(): void {
        numPlayers = parseInt(prompt("Bitte die Anzahl der Spieler festlegen", "1 - 4 Spieler"), 10);
        if (numPlayers > 4 || numPlayers < 1) {
            numsPlayer();
            // Bei falscher Angabe erscheint das PopUp-Fenster erneut
        }
    }

    function createCard(_textDerAufDieKarteSoll: string, _state: string): void { // Unterstrich = Parameter siehe CodingStyleGuide 
        let card: HTMLElement = document.createElement("div");
        // div erzeugen
        card.innerText = _textDerAufDieKarteSoll;
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card " + _state);
        // Attribut zu div hinzufügen: class = CSS; card = zugehöriger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher für alle erzeugten Karten, die durch ".push" hinzugefügt werden
    }

    function createPlayer(_score: number, _name: string): void {
        let player: HTMLElement = document.createElement("div");
        let scoreField: HTMLElement = document.createElement("div");
        // Umwandeln einer number in string - _score: number soll als string in scorefield angezeigt werden.
        let n: string = _score.toString();
        player.innerText = _name; //name ist Variable von oben = global
        // deshalb ist scoreField = n
        scoreField.innerText = n;
        playerInfo.appendChild(player);
        playerInfo.appendChild(scoreField);
    }
    
    // Shuffle Arrays
    function randomMix(_array: HTMLElement[]): HTMLElement[] {
        // _array = das Array, das durchmischt werden soll
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe -> das Array ist jetzt durchgemischt
    }

    // Zufallsgenerator als eigene funktion
    function randomState(): string {
        let randomState: number = Math.random();
        // zufällige Zahl rein speichern, mit ganz vielen Kommastellen zwischen 0 und 1
        if (randomState <= .5) {
            // 50%ige Wahrscheinlichkeit, dass die Karte den Status: "hidden" hat
            return "hidden";
            // Status = hidden
        } else if (randomState > .5 && randomState <= .75) {
            // oder wenn: wenn Zahl größer als 0,5 und kleiner gleich 0,75 - dann Status: "taken"
            return "taken";
        } else if (randomState > .75) {
            // oder wenn: Wenn Zahl größer als 0,75 - dann Status: "visible"
            return "visible";
        }
    }


}
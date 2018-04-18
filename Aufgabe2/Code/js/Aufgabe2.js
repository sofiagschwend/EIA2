var MemoryAufgabe2Verbessert;
(function (MemoryAufgabe2Verbessert) {
    /*Aufgabe: Aufgabe 2 - Memory
      Name: Sofia Gschwend
      Matrikel: 257664
      Datum: 17.04.18
      Dieser Code wurde in Zusammenarbeit mit Abreitsgruppe Gr�n und unter Anleitung von Melvin B erstellt.
      */
    /******************************************************************************************************************************
    Code Reihenfolge: a) alle Variablen deklarieren b) Hauptfunktionen und Hauptablauf=Funktionsaufruf coden c) functions schreiben
    ******************************************************************************************************************************/
    document.addEventListener("DOMContentLoaded", main);
    // Variablen deklarieren
    let cardContent = ["Tag", "Nacht", "Wolke", "Sonne", "Mond", "Sterne", "Herbst", "Sommer", "Fr�hling", "Winter"];
    let cardArray = [];
    // leeres Array, in das die f�r das Spiel ben�tigten Karten als divs hineingespeichert werden
    let numPairs;
    let numPlayers;
    let playerInfo; // HTMLElement ist komplexer Datentyp - string/number sind einfache Datentypen
    let cardField;
    let score = 0; //score wird sp�ter z�hlen, 0 ist Platzhalter
    let name = "Spieler ";
    function main() {
        // Funktionsaufruf
        cardPairs();
        // Funktionsaufruf
        numsPlayer();
        // Informationen sollen in HTML eingef�gt werden -> DOM abh�ngige Varaiblen erstellen = HTMLElement
        playerInfo = document.getElementById("player-info"); // Stelle in HTML = Verkn�pfung in HTML
        cardField = document.getElementById("card-div");
        // Spielkarten erzeugen - 2 mal createCard => 1Kartenpaar
        // randomState - zuf�lliger STATUS der Karte
        for (let i = 0; i < numPairs; i++) {
            createCard(cardContent[i], randomState());
            // cardContent an der Stelle i - wird als �bergabeparameter mitgegeben
            createCard(cardContent[i], randomState());
        }
        // Funktionsaufruf
        randomMix(cardArray);
        // Karten dem Spielbrett in cardField hinzuf�gen
        for (let i = 0; i < cardArray.length; i++) {
            cardField.appendChild(cardArray[i]);
        }
        // Spieler Anzeige generieren -> ersetzt class von Melvin
        for (let i = 0; i < numPlayers; i++) {
            createPlayer(score, name + [i + 1]);
        }
    } /****************** main function schlie�en*******************/
    // parseInt wandelt string in number um weil numPairs number erwartet
    // 10 am Ende legt Dezimalsystem f�r Eingabe fest
    function cardPairs() {
        numPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare festlegen", "5 - 10 Kartenpaare"), 10);
        if (numPairs < 5 || numPairs > 10) {
            cardPairs();
        }
    }
    function numsPlayer() {
        numPlayers = parseInt(prompt("Bitte die Anzahl der Spieler festlegen", "1 - 4 Spieler"), 10);
        if (numPlayers > 4 || numPlayers < 1) {
            numsPlayer();
        }
    }
    function createCard(_textDerAufDieKarteSoll, _state) {
        let card = document.createElement("div");
        // div erzeugen
        card.innerText = _textDerAufDieKarteSoll;
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card " + _state);
        // Attribut zu div hinzuf�gen: class = CSS; card = zugeh�riger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher f�r alle erzeugten Karten, die durch ".push" hinzugef�gt werden
    }
    function createPlayer(_score, _name) {
        let player = document.createElement("div");
        let scoreField = document.createElement("div");
        // Umwandeln einer number in string - _score: number soll als string in scorefield angezeigt werden.
        let n = _score.toString();
        player.innerText = _name; //name ist Variable von oben = global
        // deshalb ist scoreField = n
        scoreField.innerText = n;
        playerInfo.appendChild(player);
        playerInfo.appendChild(scoreField);
    }
    // Shuffle Arrays
    function randomMix(_array) {
        // _array = das Array, das durchmischt werden soll
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe -> das Array ist jetzt durchgemischt
    }
    // Zufallsgenerator als eigene funktion
    function randomState() {
        let randomState = Math.random();
        // zuf�llige Zahl rein speichern, mit ganz vielen Kommastellen zwischen 0 und 1
        if (randomState <= .5) {
            // 50%ige Wahrscheinlichkeit, dass die Karte den Status: "hidden" hat
            return "hidden";
        }
        else if (randomState > .5 && randomState <= .75) {
            // oder wenn: wenn Zahl gr��er als 0,5 und kleiner gleich 0,75 - dann Status: "taken"
            return "taken";
        }
        else if (randomState > .75) {
            // oder wenn: Wenn Zahl gr��er als 0,75 - dann Status: "visible"
            return "visible";
        }
    }
})(MemoryAufgabe2Verbessert || (MemoryAufgabe2Verbessert = {}));
//# sourceMappingURL=Aufgabe2.js.map
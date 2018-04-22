var MemoryAufgabe3;
(function (MemoryAufgabe3) {
    /*Aufgabe: Aufgabe 3 - Events
      Name: Sofia Gschwend
      Matrikel: 257664
      Datum: 20.04.18
      Dieser Code wurde in Zusammenarbeit mit Alena Hurst und Franziska Hei� geschrieben wurde.
      */
    /******************************************************************************************************************************
    Code Reihenfolge: a) alle Variablen deklarieren b) Hauptfunktionen und Hauptablauf=Funktionsaufruf coden c) functions schreiben
    ******************************************************************************************************************************/
    document.addEventListener("DOMContentLoaded", main);
    // Variablen deklarieren
    let cardContent = ["Tag", "Nacht", "Wolke", "Sonne", "Mond", "Sterne", "Herbst", "Sommer", "Fr�hling", "Winter"];
    let cardArray = [];
    // leeres Array, in das die f�r das Spiel ben�tigten Karten als divs hineingespeichert werden
    /**Variablen f�r Events***/
    let openArray = []; // leeres Array, in das der Karteninhalt zwischen gespeichert wird    
    let openCards = 0;
    let numPairs;
    let numPlayers;
    let playerInfo; // HTMLElement ist komplexer Datentyp - string/number sind einfache Datentypen
    let cardField;
    let score = 0; // score wird sp�ter z�hlen, 0 ist Platzhalter
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
        for (let i = 0; i < numPairs; i++) {
            createCard(cardContent[i]);
            // cardContent an der Stelle i - wird als �bergabeparameter mitgegeben
            createCard(cardContent[i]);
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
        cardField.addEventListener("click", clickHandler); // Eventlistener liegt auf cardField
        // Verweis auf die Funktion clickHandler
    } /****************** main function schlie�en*******************/
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
    function createPlayer(_score, _name) {
        let player = document.createElement("div");
        let scoreField = document.createElement("div"); // Umwandeln einer number in string - _score: number soll als string in scorefield angezeigt werden.
        let n = _score.toString();
        player.innerText = _name; //name ist Variable von oben = global
        // deshalb ist scoreField = n
        scoreField.innerText = n;
        playerInfo.appendChild(player);
        playerInfo.appendChild(scoreField);
    }
    function createCard(_textDerAufDieKarteSoll) {
        let card = document.createElement("div"); // div erzeugen
        card.innerHTML = `<span>${_textDerAufDieKarteSoll}</span>`; //  innerHTML erwartet string `` | span = HTMLElement Kontainer mit spezifischer Zuweisung | $ = 'string' + variable + 'string'
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card hidden");
        // Attribut zu div hinzuf�gen: class = CSS; card = zugeh�riger Wert aus dem CSS Dokument
        cardArray.push(card); // cardArray = Array vom Anfang; Speicher f�r alle erzeugten Karten, die durch ".push" hinzugef�gt werden
    }
    function randomMix(_array) {
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array; // Ausgabe -> das Array ist jetzt durchgemischt
    }
    function clickHandler(_event) {
        let cardClass = _event.target; // Gibt das HTMLElement zur�ck, das den Event ausgel�st hat
        if (cardClass.classList.contains("card")) {
            openCards++; // Counter
            if (cardClass.classList.contains("hidden")) {
                cardClass.classList.remove("hidden"); // Klassen-Namen "hidden" wird gel�scht
                cardClass.classList.add("visible"); // Klassen-Namen wird auf "visible" gesetzt
            }
        }
        if (openCards == 2) {
            setTimeout(cardsCompare, 1500); // Timeout f�r 2000 ms bzw. 1,5 Sekunden
        }
        if (openCards > 2) {
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }
    function cardsCompare() {
        let openArray = filterCardsByClass("visible"); // Definition des openArray, solle Funktion filterCardsByClass ausf�hren
        if (openArray[0].children[0].innerHTML == openArray[1].children[0].innerHTML) {
            for (let f = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible"); // "visible" wird entfernt
                openArray[f].classList.add("taken"); // und durch "taken" ersetzt
            }
        }
        else {
            for (let f = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible"); // "visible" wird entfernt
                openArray[f].classList.add("hidden"); // und durch "hidden" ersetzt
            }
        }
        congratAlert(); // Funktionsaufruf
        openArray = []; // leeres openArray - Array wird aufgerufen
        openCards = 0; // openCards auf 0 setzen
    }
    function filterCardsByClass(_filter) {
        return cardArray.filter(card => card.classList.contains(_filter)); // gibt dem cardArray einen Filter mit, der nach der CSS-Klasse filtert |  card (aus dem CSS-Dokument)
    }
    function congratAlert() {
        let cardsTaken = filterCardsByClass("hidden");
        if (cardsTaken.length == 0) {
            alert("Mensch bist du gut!");
        }
        cardsTaken = [];
    }
})(MemoryAufgabe3 || (MemoryAufgabe3 = {})); // namespace schlie�en
//# sourceMappingURL=Aufgabe3.js.map
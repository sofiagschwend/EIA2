namespace MemoryAufgabe3 {

    /*Aufgabe: Aufgabe 3 - Events
      Name: Sofia Gschwend
      Matrikel: 257664
      Datum: 20.04.18
      Dieser Code wurde in Zusammenarbeit mit Alena Hurst und Franziska Heiß geschrieben wurde.
      */
    /******************************************************************************************************************************
    Code Reihenfolge: a) alle Variablen deklarieren b) Hauptfunktionen und Hauptablauf=Funktionsaufruf coden c) functions schreiben
    ******************************************************************************************************************************/
    
    document.addEventListener("DOMContentLoaded", main);

    // Variablen deklarieren
    let cardContent: string[] = ["Tag", "Nacht", "Wolke", "Sonne", "Mond", "Sterne", "Herbst", "Sommer", "Frühling", "Winter"];

    let cardArray: HTMLElement[] = [];
    // leeres Array, in das die für das Spiel benötigten Karten als divs hineingespeichert werden
    
    /**Variablen für Events***/
    let openArray: string[] = [];        // leeres Array, in das der Karteninhalt zwischen gespeichert wird    
    let openCards: number = 0;

    let numPairs: number;
    let numPlayers: number;

    let playerInfo: HTMLElement;         // HTMLElement ist komplexer Datentyp - string/number sind einfache Datentypen
    let cardField: HTMLElement;

    let score: number = 0;               // score wird später zählen, 0 ist Platzhalter
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
        for (let i: number = 0; i < numPairs; i++) {
            createCard(cardContent[i]);
            // cardContent an der Stelle i - wird als Übergabeparameter mitgegeben
            createCard(cardContent[i]);
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
        
        cardField.addEventListener("click", clickHandler); // Eventlistener liegt auf cardField
        // Verweis auf die Funktion clickHandler
        
    }/****************** main function schließen*******************/
    
    
        
    function cardPairs(): void {                                                // parseInt wandelt string in number um weil numPairs number erwartet  ;10 am Ende legt Dezimalsystem für Eingabe fest
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
    
    function createPlayer(_score: number, _name: string): void {
        let player: HTMLElement = document.createElement("div");
        let scoreField: HTMLElement = document.createElement("div");        // Umwandeln einer number in string - _score: number soll als string in scorefield angezeigt werden.
        let n: string = _score.toString();
        player.innerText = _name; //name ist Variable von oben = global
        // deshalb ist scoreField = n
        scoreField.innerText = n;
        playerInfo.appendChild(player);
        playerInfo.appendChild(scoreField);
    }

    function createCard(_textDerAufDieKarteSoll: string): void {                // Unterstrich = Parameter siehe CodingStyleGuide 
        let card: HTMLElement = document.createElement("div");                  // div erzeugen
        
        card.innerHTML = `<span>${_textDerAufDieKarteSoll}</span>`;             //  innerHTML erwartet string `` | span = HTMLElement Kontainer mit spezifischer Zuweisung | $ = 'string' + variable + 'string'
                                                                                // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card hidden");
                                                                                // Attribut zu div hinzufügen: class = CSS; card = zugehöriger Wert aus dem CSS Dokument
        cardArray.push(card);                                                   // cardArray = Array vom Anfang; Speicher für alle erzeugten Karten, die durch ".push" hinzugefügt werden
    }
    
    function randomMix(_array: HTMLElement[]): HTMLElement[] {              // _array = das Array, das durchmischt werden soll
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;                                                      // Ausgabe -> das Array ist jetzt durchgemischt
    }
    
    function clickHandler (_event: MouseEvent) : void {
        let cardClass: HTMLElement = <HTMLElement>_event.target;                // Gibt das HTMLElement zurück, das den Event ausgelöst hat
        if (cardClass.classList.contains("card")) {                             // classList = gibt den Klassen Namen eines Elements zurück, es können CSS Klassen hinzugefügt und zurückgesetzt werden (w3Schools)
        openCards ++;                                                           // Counter
            if (cardClass.classList.contains("hidden")) {                       // Wenn das Element den Klassen-Namen "hidden" hat, dann:
                cardClass.classList.remove("hidden");                           // Klassen-Namen "hidden" wird gelöscht
                cardClass.classList.add("visible");                             // Klassen-Namen wird auf "visible" gesetzt
            }
        }

        if (openCards == 2) {                                                   // wenn zwei Karten offen daliegen, dann:
            setTimeout(cardsCompare, 1500);                                     // Timeout für 2000 ms bzw. 1,5 Sekunden
        }

        if (openCards > 2) {                                                    // es können nicht mehr als 2 Karten angeklickt werden, bzw. sie werden nicht "visible"
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }
    
    function cardsCompare () : void {
        let openArray : HTMLElement[] = filterCardsByClass("visible");        // Definition des openArray, solle Funktion filterCardsByClass ausführen

        if (openArray[0].children[0].innerHTML == openArray[1].children[0].innerHTML) {   // wenn das Kind an der Stelle [0] und das Kind der Stelle [1] gleich sind, dann:
            for (let f: number = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible");                    // "visible" wird entfernt
                openArray[f].classList.add("taken");                         // und durch "taken" ersetzt
            }
        }
        else {                                                               // wenn die Kinder des Arrays nicht identisch sind, dann:
            for (let f: number = 0; f < openArray.length; f++) {
                openArray[f].classList.remove("visible");                    // "visible" wird entfernt
                openArray[f].classList.add("hidden");                        // und durch "hidden" ersetzt
            }
        }

        congratAlert();                                                      // Funktionsaufruf

        openArray = [];                                                      // leeres openArray - Array wird aufgerufen
        openCards = 0;                                                       // openCards auf 0 setzen
    }
    
    function filterCardsByClass (_filter : string) : HTMLElement[] {
        return cardArray.filter(card => card.classList.contains(_filter));      // gibt dem cardArray einen Filter mit, der nach der CSS-Klasse filtert |  card (aus dem CSS-Dokument)
        
        }
    
    function congratAlert(): void {
        let cardsTaken: HTMLElement[] = filterCardsByClass("hidden");
        if (cardsTaken.length == 0) {                                        // wenn alle Karten den Status "taken" haben, dann erscheint ein PopUp Fenster
            alert("Mensch bist du gut!");
        }
        cardsTaken = [];
    }

} // namespace schließen
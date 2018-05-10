/*Aufgabe: Aufgabe 4 - Memory Interface
      Name: Sofia Gschwend
      Matrikel: 257664
      Datum: 05.05.18
      Dieser Code wurde in Zusammenarbeit mit Alena Hurst und Franziska Heiß geschrieben wurde.
*/

namespace Aufgabe4 {

    window.addEventListener("load", main);

    
    //Variablen deklarieren

    // leeres Array, in das die für das Spiel benötigten Karten als divs hineingespeichert werden
    let cardArray: HTMLElement[] = []; // HTMLElement = komplexer Datentyp

    let openCards: number = 0;
    let openArray: HTMLElement[] = []; // HTMLElement = komplexer Datentyp

    let checkContent: HTMLElement[] = []; // HTMLElement = komplexer Datentyp
    let stepperAmount: number = 1;

    let playerCounter: number = 1;
    let PlayerScore: number = 0;

    let playerInfo: HTMLElement; // HTMLElement = komplexer Datentyp
    let cardField: HTMLElement;

    // Event-Listener auf jeweiligen Elementen (Buttons, etc.)
    function main(): void {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("addplayer").addEventListener("click", addPlayer);
        document.getElementById("removeplayer").addEventListener("click", removePlayer);
        document.getElementById("stepperinfo").addEventListener("change", createStepper);
    }

    // Spieler hinzufügen bei Klick auf Button
    function addPlayer(): void {
        if (playerCounter < 4) {
        // wenn die Anzahl der Spieler kleiner 4 ist, dann:
            let player: HTMLElement = document.createElement("input");
            // input-Feld erzeugen, mit folgenden Attributen:
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen eingeben");
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "15");
            player.setAttribute("class", "player");
            document.getElementById("names").appendChild(player);
            // über die ID wird das Input-Feld dem "player" hinzugefügt
            playerCounter++;
            // playerCounter zÃ¤hlt eins hoch
        }
    }

    // Spieler entfernen bei KLick auf Button
    function removePlayer(): void {
        let allPlayer: NodeListOf<Element> = document.getElementsByClassName("player");
        let lastPlayer: HTMLInputElement = <HTMLInputElement>allPlayer[allPlayer.length -1];
        lastPlayer.remove();
        playerCounter--;
        // playerCounter zÃ¤hlt eins runter
    }

    // Stepper erzeugen zur Auswahl der Anzahl an Kartenpaaren
    function createStepper(): void {
        if (stepperAmount == 1) {
        // wenn stepperAmount 1 entspricht, dann:
            let stepper: HTMLElement = document.createElement("input");
            // Erzeugen eines input-Elements mit den folgenden Eigenschaften:
            stepper.setAttribute("type", "number");
            stepper.setAttribute("value", "5");
            stepper.setAttribute("min", "5");
            stepper.setAttribute("max", decks[document.getElementsByTagName("select").item(0).value].cardBatch);
            // die maximale mögliche Anzahl an Karten (unterschiedlich je Kartendeck) wird eingefügt
            stepper.setAttribute("step", "1");
            stepper.setAttribute("id", "stepper");
            document.getElementById("stepperbox").appendChild(stepper);
            stepperAmount++;
            // stepperAmount wird hochgezÃ¤hlt
        }

        else {
            stepperUpdate();
            // Funktionsaufruf von stepperUpdate
        }
    }

    function stepperUpdate(): void {
        document.getElementById("stepper").remove();
        // Der Stepper wird aktualisiert
        stepperAmount--;
        createStepper();
        // Funktionsaufruf von createStepper
    }

    //Karte initialisieren
    function createCard(_cardContent: string): void {
        let card: HTMLElement = document.createElement("div");
        // div erzeugen
        card.innerHTML = "<p>" + _cardContent + "</p>";
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card hidden");
        // Attribut hinzufügen: class = Welches Attribut (hier eine Klasse); card = zugehöriger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher für alle erzeugten Karten, die durch ".push" hinzugefügt werden
        checkContent.push(card);
        // Alle Karten werden in checkContent-Array gepusht
        card.addEventListener("click", clickHandler);
    }

    function clickHandler (_event: MouseEvent) : void {
        //Event-Handler
        let cardClass: HTMLElement = <HTMLElement>_event.target;
        // Gibt das HTMLElement zurück, das den Event ausgelöst hat
        if (cardClass.classList.contains("card")) {
        // classList = gibt den Klassen Namen eines Elements zurück, es können CSS Klassen hinzugefügt und zurückgesetzt werden (w3Schools)
        openCards ++;
        // Counter
            if (cardClass.classList.contains("hidden")) {
            // Wenn das Element den Klassen-Namen "hidden" hat, dann:
                cardClass.classList.remove("hidden");
                // Klassen-Namen "hidden" wird gelöscht
                cardClass.classList.add("visible");
                // Klassen-Namen wird auf "visible" gesetzt
                openArray.push(cardClass);
                // wenn die Karten "visible" sind, dann werden sie in das openArray gepusht
            }
        }

        if (openCards == 2) {
            // wenn zwei Karten offen daliegen, dann:
            setTimeout(cardsCompare, 1500);
            // Timeout für 2000 ms bzw. 1,5 Sekunden
        }

        if (openCards > 2) {
            // es können nicht mehr als 2 Karten angeklickt werden, bzw. sie werden nicht "visible"
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }

    function cardsCompare(): void {
        if (openArray[0].innerHTML == openArray[1].innerHTML) {
        // wenn die beiden Karten im openArray identisch sind, dann:
            for (let i: number = 0; i < 2; i++) {
            // Status "visible" wird zu "taken"
                openArray[i].classList.remove("visible");
                openArray[i].classList.add("taken");
            }

            checkContent.splice(0, 2);
            // Karten werden aus dem checkContent entfernt
            // angefangen zu zÃ¤hlen innerhalb des Arrays bei Stelle 0, 2 = 2 Elemente werden entfernt
        }

        else {
        // Ansonsten wird der Status von "visible" auf "hidden" geÃ¤ndert
            for (let i: number = 0; i < openArray.length; i++) {
                openArray[i].classList.remove("visible");
                openArray[i].classList.add("hidden");
            }
        }

        congratAlert();
        // Funktionsaufruf von congratAlert

        openArray = [];
        openCards = 0;
    }

    function congratAlert(): void {
        if (checkContent.length == 0) {
        // wenn checkContent leer ist, dann:
            alert("Wow - Bist du gut!");
        }
    }

    // Shuffle-Array
    function randomMix(_array: HTMLElement[]): HTMLElement[] {
    // _array = das Array, das durchmischt werden soll
        for (let i: number = _array.length - 1; i > 0; i--) {
            const j: number = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe -> das Array ist jetzt durchgemischt
    }

    // Funktion zum Anzeigen der Spielerinfo und des Memories
    function start(): void {
        document.getElementById("userinterface").style.display = "none";
        // Das Userinterface ist nicht mehr sichtbar
        document.getElementById("player-info").style.display = "block";
        document.getElementById("card-field").style.display = "block";

        let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
        let numPairs: number = parseInt((<HTMLInputElement>document.getElementById("stepper")).value);

        // Spieler Anzeige generieren
        for (let i: number = 0; i < playerCounter; i++) {
            let playerDiv: HTMLDivElement = document.createElement("div");
            document.getElementById("player-info").appendChild(playerDiv);
            playerDiv.innerHTML = inputs[i].value + ": " + PlayerScore + " Punkte";
        }

        //Karten erzeugen
        for (let i: number = 0; i < numPairs; i++) {
            createCard(decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
            createCard(decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
        }

        //Aufruf des Shuffle Algorithmus
        randomMix(cardArray);

        for (let i: number = 0; i < cardArray.length; i++) {
            document.getElementById("card-div").appendChild(cardArray[i]);
        }

        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");

    }
}

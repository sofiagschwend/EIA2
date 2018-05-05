/*Aufgabe: Aufgabe 4 - Memory Interface
      Name: Sofia Gschwend
      Matrikel: 257664
      Datum: 05.05.18
      Dieser Code wurde in Zusammenarbeit mit Alena Hurst und Franziska Hei� geschrieben wurde.
*/
var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", main);
    //Variablen deklarieren
    // leeres Array, in das die f�r das Spiel ben�tigten Karten als divs hineingespeichert werden
    let cardArray = []; // HTMLElement = komplexer Datentyp
    let openCards = 0;
    let openArray = []; // HTMLElement = komplexer Datentyp
    let checkContent = []; // HTMLElement = komplexer Datentyp
    let stepperAmount = 1;
    let playerCounter = 1;
    let PlayerScore = 0;
    let playerInfo; // HTMLElement = komplexer Datentyp
    let cardField;
    // Event-Listener auf jeweiligen Elementen (Buttons, etc.)
    function main() {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("addplayer").addEventListener("click", addPlayer);
        document.getElementById("removeplayer").addEventListener("click", removePlayer);
        document.getElementById("stepperinfo").addEventListener("change", createStepper);
    }
    // Spieler hinzuf�gen bei Klick auf Button
    function addPlayer() {
        if (playerCounter < 4) {
            // wenn die Anzahl der Spieler kleiner 4 ist, dann:
            let player = document.createElement("input");
            // input-Feld erzeugen, mit folgenden Attributen:
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen eingeben");
            player.setAttribute("name", "player");
            player.setAttribute("maxlength", "15");
            player.setAttribute("id", "player");
            document.getElementById("names").appendChild(player);
            // �ber die ID wird das Input-Feld dem "player" hinzugef�gt
            playerCounter++;
        }
    }
    // Spieler entfernen bei KLick auf Button
    function removePlayer() {
        document.getElementById("player").remove();
        playerCounter--;
        // playerCounter zählt eins runter
    }
    // Stepper erzeugen zur Auswahl der Anzahl an Kartenpaaren
    function createStepper() {
        if (stepperAmount == 1) {
            // wenn stepperAmount 1 entspricht, dann:
            let stepper = document.createElement("input");
            // Erzeugen eines input-Elements mit den folgenden Eigenschaften:
            stepper.setAttribute("type", "number");
            stepper.setAttribute("value", "5");
            stepper.setAttribute("min", "5");
            stepper.setAttribute("max", Aufgabe4.decks[document.getElementsByTagName("select").item(0).value].cardBatch);
            // die maximale m�gliche Anzahl an Karten (unterschiedlich je Kartendeck) wird eingef�gt
            stepper.setAttribute("step", "1");
            stepper.setAttribute("id", "stepper");
            document.getElementById("stepperbox").appendChild(stepper);
            stepperAmount++;
        }
        else {
            stepperUpdate();
        }
    }
    function stepperUpdate() {
        document.getElementById("stepper").remove();
        // Der Stepper wird aktualisiert
        stepperAmount--;
        createStepper();
        // Funktionsaufruf von createStepper
    }
    //Karte initialisieren
    function createCard(_cardContent) {
        let card = document.createElement("div");
        // div erzeugen
        card.innerHTML = "<p>" + _cardContent + "</p>";
        // Text aus dem Array soll auf eine Karte
        card.setAttribute("class", "card hidden");
        // Attribut hinzuf�gen: class = Welches Attribut (hier eine Klasse); card = zugeh�riger Wert aus dem CSS Dokument
        cardArray.push(card);
        // cardArray = Array vom Anfang; Speicher f�r alle erzeugten Karten, die durch ".push" hinzugef�gt werden
        checkContent.push(card);
        // Alle Karten werden in checkContent-Array gepusht
        // card.addEventListener("click", clickHandler);
    }
    function clickHandler(_event) {
        //Event-Handler
        let cardClass = _event.target;
        // Gibt das HTMLElement zur�ck, das den Event ausgel�st hat
        if (cardClass.classList.contains("card")) {
            // classList = gibt den Klassen Namen eines Elements zur�ck, es k�nnen CSS Klassen hinzugef�gt und zur�ckgesetzt werden (w3Schools)
            openCards++;
            // Counter
            if (cardClass.classList.contains("hidden")) {
                // Wenn das Element den Klassen-Namen "hidden" hat, dann:
                cardClass.classList.remove("hidden");
                // Klassen-Namen "hidden" wird gel�scht
                cardClass.classList.add("visible");
                // Klassen-Namen wird auf "visible" gesetzt
                openArray.push(cardClass);
            }
        }
        if (openCards == 2) {
            // wenn zwei Karten offen daliegen, dann:
            setTimeout(cardsCompare, 1500);
        }
        if (openCards > 2) {
            // es k�nnen nicht mehr als 2 Karten angeklickt werden, bzw. sie werden nicht "visible"
            cardClass.classList.remove("visible");
            cardClass.classList.add("hidden");
        }
    }
    function cardsCompare() {
        if (openArray[0].innerHTML == openArray[1].innerHTML) {
            // wenn die beiden Karten im openArray identisch sind, dann:
            for (let i = 0; i < 2; i++) {
                // Status "visible" wird zu "taken"
                openArray[i].classList.remove("visible");
                openArray[i].classList.add("taken");
            }
            checkContent.splice(0, 2);
        }
        else {
            // Ansonsten wird der Status von "visible" auf "hidden" geändert
            for (let i = 0; i < openArray.length; i++) {
                openArray[i].classList.remove("visible");
                openArray[i].classList.add("hidden");
            }
        }
        congratAlert();
        // Funktionsaufruf von congratAlert
        openArray = [];
        openCards = 0;
    }
    function congratAlert() {
        if (checkContent.length == 0) {
            // wenn checkContent leer ist, dann:
            alert("Wow - Bist du gut!");
        }
    }
    // Shuffle-Array
    function randomMix(_array) {
        // _array = das Array, das durchmischt werden soll
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
        // Ausgabe -> das Array ist jetzt durchgemischt
    }
    // Funktion zum Anzeigen der Spielerinfo und des Memories
    function start() {
        document.getElementById("userinterface").style.display = "none";
        // Das Userinterface ist nicht mehr sichtbar
        document.getElementById("player-info").style.display = "block";
        document.getElementById("card-field").style.display = "block";
        let inputs = document.getElementsByTagName("input");
        let numPairs = parseInt(document.getElementById("stepper").value);
        // Spieler Anzeige generieren
        for (let i = 0; i < playerCounter; i++) {
            let playerDiv = document.createElement("div");
            document.getElementById("player-info").appendChild(playerDiv);
            playerDiv.innerHTML = inputs[i].value + ": " + PlayerScore + " Punkte";
        }
        //Karten erzeugen
        for (let i = 0; i < numPairs; i++) {
            createCard(Aufgabe4.decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
            createCard(Aufgabe4.decks[document.getElementsByTagName("select").item(0).value].cardContent[i]);
        }
        //Aufruf des Shuffle Algorithmus
        randomMix(cardArray);
        for (let i = 0; i < cardArray.length; i++) {
            document.getElementById("card-div").appendChild(cardArray[i]);
        }
        playerInfo = document.getElementById("player-info");
        cardField = document.getElementById("card-div");
        cardField.addEventListener("click", clickHandler);
        // Verweis auf die Funktion clickHandler
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Aufgabe4.js.map
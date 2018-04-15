var Aufgabe2;
(function (Aufgabe2) {
    //Variablen deklarieren
    let words = ["Tag", "Nacht", "Wolke", "Sonne", "Mond", "Sterne", "Herbst", "Sommer", "Fr�hling", "Winter"];
    let cards = [];
    let numberCardPairs;
    let numberPlayers;
    let gameInfo;
    let gameBoard;
    // Klasse Karte
    class Card {
        constructor(_cardContent) {
            this.cardContent = _cardContent;
            /* zuf�lliger Kartenstatus generieren */
            let randomStatus = Math.random();
            if (randomStatus <= .5) {
                this.cardStatus = "hidden";
            }
            else if (randomStatus > .5 && randomStatus <= .75) {
                this.cardStatus = "taken";
            }
            else if (randomStatus > .75) {
                this.cardStatus = "visible";
            }
        }
        createCard() {
            this.card = document.createElement("div");
            this.card.innerText = this.cardContent;
            this.card.setAttribute("class", "card " + this.cardStatus);
            cards.push(this.card);
            return cards;
        }
    }
    // Klasse Spieler
    class Player {
        constructor(_name) {
            this.name = _name;
            this.score = 0;
        }
        scoreUp() {
            this.score += 10;
            return this.score;
        }
        show() {
            this.player = document.createElement("div");
            this.player.innerHTML = `
        <span class="player-name">${this.name}</span>
        <span class="player-score">Punkte: ${this.score}</span>`;
            gameInfo.appendChild(this.player);
        }
    }
    // Shuffle Array: Fisher-Yates Algorhitmus
    function shuffleArray(_array) {
        for (let i = _array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [_array[i], _array[j]] = [_array[j], _array[i]];
        }
        return _array;
    }
    function main() {
        // Anzahl der Kartenpaare erfragen
        numberCardPairs = parseInt(prompt("Bitte die Anzahl der Kartenpaare eingeben", "5 - 10 Kartenpaare"), 10);
        if (numberCardPairs < 5 || numberCardPairs > 10) {
            numberCardPairs = 8;
        }
        // Anzahl der Spieler erfragen
        numberPlayers = parseInt(prompt("Bitte die Anzahl der Spieler eingeben", "nicht mehr als 4 Spieler"), 10);
        numberPlayers > 4 ? numberPlayers = 4 : numberPlayers = numberPlayers;
        // DOM abh�ngige Variablen initialisieren
        gameInfo = document.getElementById("game-info");
        gameBoard = document.getElementById("card-container");
        // Karten erzeugen
        for (let i = 0; i < numberCardPairs; i++) {
            let card = new Card(words[i]);
            card.createCard();
            let pair = new Card(words[i]);
            pair.createCard();
        }
        // Karten mischen
        shuffleArray(cards);
        // Karten anzeigen
        for (let i = 0; i < cards.length; i++) {
            gameBoard.appendChild(cards[i]);
        }
        // Spieler Anzeige generieren
        for (let i = 0; i < numberPlayers; i++) {
            let player = new Player("Spieler " + (i + 1));
            player.show();
        }
    }
    document.addEventListener("DOMContentLoaded", main);
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=Aufgabe2.js.map
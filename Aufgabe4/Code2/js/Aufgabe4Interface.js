var Aufgabe4;
(function (Aufgabe4) {
    ;
    // Definieren der einzelnen Kartendecks
    Aufgabe4.decks = {};
    Aufgabe4.deck = {
        cardContent: ["Tag", "Nacht", "Wolke", "Sonne", "Mond", "Sterne", "Herbst", "Sommer", "Fr�hling", "Winter"],
        cardColor: "green",
        cardFont: "sans-serif",
        cardBatch: "10"
    };
    Aufgabe4.decks["nature"] = Aufgabe4.deck;
    // �ber den Namen "photography" wird das entsprechende deck aufgerufen
    Aufgabe4.deck = {
        cardContent: ["K�nguru", "Delfin", "Hund", "Katze", "Maus", "Pinguin", "Hase", "Seestern", "Storch", "Marienk�fer", "Biene", "Gecko", "Kuh", "Schaf", "Ziege"],
        cardColor: "brown",
        cardFont: "sans-serif",
        cardBatch: "15"
    };
    Aufgabe4.decks["animals"] = Aufgabe4.deck;
    // �ber den Namen "cities" wird das entsprechende deck aufgerufen
    Aufgabe4.deck = {
        cardContent: ["K&aumlnguru", "Pinguin", "Marc-Uwe-Kling", "Herta", "Gott", "Krapotke", "Julia M&uumlller", "Friedrich-Wilhelm", "Der Psychiater", "Otto-Von", "Der Lektor", "Barbie", "Der Schredder", "J&oumlrg Dwigs", "Bartholom&aumlus", "Maria-Theresia", "Sissi", "Schmidtchen"],
        cardColor: "yellow",
        cardFont: "sans-serif",
        cardBatch: "18"
    };
    //� = &auml | � = &ouml | � = &uuml
    Aufgabe4.decks["characters"] = Aufgabe4.deck;
    Aufgabe4.scoreboard = [];
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=Aufgabe4Interface.js.map
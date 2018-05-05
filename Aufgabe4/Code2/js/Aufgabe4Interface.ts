 namespace Aufgabe4 {
     
     // Interface einer Karte bestimmen
     export interface CardDeck {
            cardContent: string[];
            cardColor: string;
            cardFont: string;
            cardBatch: string;
     }
    
     export let deck: CardDeck;
    
     export interface CardPacket {
            [cardName: string]: CardDeck;
     };
    
     // Definieren der einzelnen Kartendecks
     export let decks: CardPacket = {};
            deck = {
                cardContent: ["Tag", "Nacht", "Wolke", "Sonne", "Mond", "Sterne", "Herbst", "Sommer", "Fr�hling", "Winter"],
                cardColor: "green",
                cardFont: "sans-serif",
                cardBatch: "10"
      };
    
      decks["nature"] = deck;
      // �ber den Namen "photography" wird das entsprechende deck aufgerufen
    
      deck = {
                cardContent: ["K�nguru", "Delfin", "Hund", "Katze", "Maus", "Pinguin", "Hase", "Seestern", "Storch", "Marienk�fer", "Biene", "Gecko", "Kuh", "Schaf", "Ziege"],
                cardColor: "brown",
                cardFont: "sans-serif",
                cardBatch: "15"
      };
    
      decks["animals"] = deck;
        // �ber den Namen "cities" wird das entsprechende deck aufgerufen
    
      deck = {
                cardContent: ["K&aumlnguru", "Pinguin", "Marc-Uwe-Kling", "Herta", "Gott", "Krapotke", "Julia M&uumlller", "Friedrich-Wilhelm", "Der Psychiater", "Otto-Von", "Der Lektor", "Barbie", "Der Schredder", "J&oumlrg Dwigs", "Bartholom&aumlus", "Maria-Theresia", "Sissi", "Schmidtchen"],
                cardColor: "yellow",
                cardFont: "sans-serif",
                cardBatch: "18"
        };
     
     //� = &auml | � = &ouml | � = &uuml
    
      decks["characters"] = deck;
      // �ber den Namen "html-tags" wird das entsprechende deck aufgerufen
    
       // Interface der Spieleranzeige definieren
     export interface Scoreboard {
                player: string;
                score: number;
      }
    
     export let scoreboard: Scoreboard[] = [];

}
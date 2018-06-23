var Aufgabe10_Canvas;
(function (Aufgabe10_Canvas) {
    // Klasse f�r die erste Luftblasengruppe
    class BubblesGroupOne {
        move() {
            // Bewegung nur in Richtung der y-Achse (horizontal)
            this.x += 0;
            this.y -= 2;
            // If-Abfrage: Wenn y kleiner als 0 ist, dann soll y wieder 510 sein
            if (this.y < 0) {
                this.y = 510;
            }
        }
        draw() {
            Aufgabe10_Canvas.crc2.beginPath();
            Aufgabe10_Canvas.crc2.arc(this.x, this.y, this.scale, 0, 3 * Math.PI);
            Aufgabe10_Canvas.crc2.stroke();
            Aufgabe10_Canvas.crc2.fillStyle = "rgb(0, 0, 139, 0.6)"; // F�llung darkblue
            Aufgabe10_Canvas.crc2.strokeStyle = "rgb(0, 0, 139, 0.6)"; // Linienstyle
            Aufgabe10_Canvas.crc2.fill();
        }
    }
    Aufgabe10_Canvas.BubblesGroupOne = BubblesGroupOne;
    // Klasse f�r die zweite Luftblasengruppe
    class BubblesGroupTwo {
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 550;
            }
        }
        draw() {
            Aufgabe10_Canvas.crc2.beginPath();
            Aufgabe10_Canvas.crc2.arc(this.x, this.y, this.scale, 0, 3 * Math.PI);
            Aufgabe10_Canvas.crc2.stroke();
            Aufgabe10_Canvas.crc2.fillStyle = "rgb(0, 0, 139, 0.6)"; // F�llung darkblue
            Aufgabe10_Canvas.crc2.strokeStyle = "rgb(0, 0, 139, 0.6)"; // Linienstyle
            Aufgabe10_Canvas.crc2.fill();
        }
    }
    Aufgabe10_Canvas.BubblesGroupTwo = BubblesGroupTwo;
    // Klasse f�r die dritte Luftblasengruppe
    class BubblesGroupThree {
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 490;
            }
        }
        draw() {
            Aufgabe10_Canvas.crc2.beginPath();
            Aufgabe10_Canvas.crc2.arc(this.x, this.y, this.scale, 0, 3 * Math.PI);
            Aufgabe10_Canvas.crc2.stroke();
            Aufgabe10_Canvas.crc2.fillStyle = "rgb(0, 0, 139, 0.6)"; // F�llung darkblue
            Aufgabe10_Canvas.crc2.strokeStyle = "rgb(0, 0, 139, 0.6)"; // Linienstyle
            Aufgabe10_Canvas.crc2.fill();
        }
    }
    Aufgabe10_Canvas.BubblesGroupThree = BubblesGroupThree;
})(Aufgabe10_Canvas || (Aufgabe10_Canvas = {}));
//# sourceMappingURL=Bubbles.js.map
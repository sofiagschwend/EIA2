var Aufgabe11_Canvas;
(function (Aufgabe11_Canvas) {
    //rechts
    class BubbleOne extends Aufgabe11_Canvas.Superclass {
        constructor() {
            super();
            this.setRandomPosition();
        }
        setRandomPosition() {
            this.x = Math.random() * (730 - 760) + 760;
            this.y = Math.random() * 550;
            this.scale = Math.random() * 10;
        }
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
            Aufgabe11_Canvas.crc2.beginPath();
            Aufgabe11_Canvas.crc2.arc(this.x, this.y, this.scale, 0, 3 * Math.PI);
            Aufgabe11_Canvas.crc2.stroke();
            Aufgabe11_Canvas.crc2.fillStyle = "rgb(0, 0, 139, 0.6)"; // F�llung darkblue
            Aufgabe11_Canvas.crc2.strokeStyle = "rgb(0, 0, 139, 0.6)"; // Linienstyle
            Aufgabe11_Canvas.crc2.fill();
        }
    }
    Aufgabe11_Canvas.BubbleOne = BubbleOne;
})(Aufgabe11_Canvas || (Aufgabe11_Canvas = {}));
//# sourceMappingURL=BubblesOne.js.map
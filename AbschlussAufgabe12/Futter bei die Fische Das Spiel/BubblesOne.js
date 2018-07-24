var FutterNemo;
(function (FutterNemo) {
    //rechts
    class BubbleOne extends FutterNemo.Superclass {
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
            FutterNemo.crc2.beginPath();
            FutterNemo.crc2.arc(this.x, this.y, this.scale, 0, 3 * Math.PI);
            FutterNemo.crc2.stroke();
            FutterNemo.crc2.fillStyle = "rgb(0, 0, 139, 0.6)"; // F�llung darkblue
            FutterNemo.crc2.strokeStyle = "rgb(0, 0, 139, 0.6)"; // Linienstyle
            FutterNemo.crc2.fill();
        }
    }
    FutterNemo.BubbleOne = BubbleOne;
})(FutterNemo || (FutterNemo = {}));
//# sourceMappingURL=BubblesOne.js.map
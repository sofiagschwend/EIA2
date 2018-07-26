var FutterNemo;
(function (FutterNemo) {
    class Shark extends FutterNemo.Superclass {
        constructor() {
            super();
            this.setRandomPosition();
        }
        move() {
            if (this.x > FutterNemo.canvas.width) {
                this.x = -100; // beginne auf x Achse vor Bildschirm
                if (this.y < FutterNemo.canvas.height - 570) {
                    this.setRandompositionY();
                }
                else if (this.y > FutterNemo.canvas.height - 30) {
                    this.setRandompositionY();
                }
            }
            else {
                this.x += 2; // Geschwindigkeit um 2px nach rechts ist +x
            }
        }
        // Random Sharks anzeigen
        setRandomPosition() {
            this.x = Math.random() * FutterNemo.crc2.canvas.width;
            this.y = Math.random() * FutterNemo.crc2.canvas.height - 200;
        }
        // Sharks in Sichtfeld anzeigen
        setRandompositionY() {
            this.y = Math.random() * FutterNemo.crc2.canvas.height - 200;
        }
        ;
        // funktion um Shark Position auszulesen X und Y einzeln
        checkPositionShark() {
            let positionX = this.x;
            let positionY = this.y;
            let sharkFinalPosition = positionX + positionY;
            return sharkFinalPosition; // ist zusammengez�hlte Zahl in Canvas.ts als positionShark
        }
        ;
        draw() {
            // Hai K�rper start an Mund
            FutterNemo.crc2.beginPath();
            FutterNemo.crc2.moveTo(this.x + 150, this.y + 60);
            FutterNemo.crc2.quadraticCurveTo(this.x + 100, this.y + 10, this.x + 30, this.y + 80);
            FutterNemo.crc2.lineTo(this.x + 30, this.y + 40);
            FutterNemo.crc2.quadraticCurveTo(this.x + 100, this.y + 110, this.x + 150, this.y + 60);
            FutterNemo.crc2.closePath();
            FutterNemo.crc2.fillStyle = "rgb(81, 85, 91)";
            FutterNemo.crc2.strokeStyle = "rgb(81, 85, 91)";
            FutterNemo.crc2.stroke();
            FutterNemo.crc2.fill();
            // Hai Flosse
            FutterNemo.crc2.moveTo(this.x + 87, this.y + 41); // 87, 50
            FutterNemo.crc2.lineTo(this.x + 90, this.y + 20); // 90, 20
            FutterNemo.crc2.lineTo(this.x + 115, this.y + 40.5); // 125, 50
            FutterNemo.crc2.fillStyle = "rgb(81, 85, 91)";
            FutterNemo.crc2.strokeStyle = "rgb(81, 85, 91)";
            FutterNemo.crc2.stroke();
            FutterNemo.crc2.fill();
            // Hai Auge
            FutterNemo.crc2.beginPath();
            FutterNemo.crc2.arc(this.x + 130, this.y + 55, 2, 0, 2 * Math.PI); // 130, 55
            FutterNemo.crc2.fillStyle = "rgb(171, 4, 51)";
            FutterNemo.crc2.strokeStyle = "rgb(171, 4, 51)";
            FutterNemo.crc2.stroke();
            FutterNemo.crc2.fill();
        }
    }
    FutterNemo.Shark = Shark; // class Shark zu
})(FutterNemo || (FutterNemo = {})); //namespace zu
//# sourceMappingURL=Shark.js.map
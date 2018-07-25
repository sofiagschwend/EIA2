var FutterNemo;
(function (FutterNemo) {
    class Nemo extends FutterNemo.Superclass {
        constructor() {
            super();
            this.setRandomPosition();
        }
        // funktion um Nemo nach oben / unten zu bewegen durch Mausklick in positionNemo < Bereich / positionNemo  Bereich
        /* move(): void {
             this.x -= 2;
             this.y += 0;
             if (this.x < -200) {
                 this.x = crc2.canvas.width;
                 this.y += 0;
             }
             if (this.y < 0) {
                 this.y = crc2.canvas.height;
                 this.x -= 2;
             }
         }*/
        // Bereich in der Sich Nemo auf halten darf
        setRandomPosition() {
            this.x = Math.random() * (800 - 600) + 600; // Math.random() * (max - min) + min
            this.y = Math.random() * (550 - 50) + 50;
        }
        // Nemo zeichnen in orange
        draw() {
            FutterNemo.crc2.beginPath();
            FutterNemo.crc2.moveTo(this.x, this.y);
            FutterNemo.crc2.quadraticCurveTo(this.x + 30, this.y - 35, this.x + 80, this.y + 20);
            FutterNemo.crc2.lineTo(this.x + 80, this.y - 10);
            FutterNemo.crc2.quadraticCurveTo(this.x + 30, this.y + 35, this.x, this.y);
            FutterNemo.crc2.fillStyle = "orange";
            FutterNemo.crc2.strokeStyle = "orange";
            FutterNemo.crc2.stroke();
            FutterNemo.crc2.fill();
        }
        // Check Position von Nemo
        checkPositionNemo() {
            //let newPositionX: number = _event.clientX;
            // let newPositionY: number = _event.clientY;
        }
        // Check Position von Shark
        checkPositionShark() {
        }
    }
    FutterNemo.Nemo = Nemo; // class  Nemo schlie�en
})(FutterNemo || (FutterNemo = {})); //namespace zu
//# sourceMappingURL=Nemo.js.map
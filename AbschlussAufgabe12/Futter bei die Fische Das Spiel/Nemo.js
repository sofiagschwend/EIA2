var FutterNemo;
(function (FutterNemo) {
    class Nemo extends FutterNemo.Superclass {
        constructor() {
            super();
            this.setRandomPosition();
        }
        // Bereich in der Sich Nemo aufhalten darf
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
        // move Nemo nach Mausklick
        moveNemo(_clickPositionY) {
            if (_clickPositionY <= this.y) {
                this.y -= 15;
            }
            else {
                this.y += 15;
            }
        }
        checkNemo() {
            let position = this.x + this.y;
            return position;
        }
        ;
        collision() {
            for (let i = 0; i < FutterNemo.arraySharks.length; i++) {
                let distanceX = this.x - FutterNemo.arraySharks[i].x;
                let distanceY = this.y - FutterNemo.arraySharks[i].y;
                console.log("x: " + distanceX);
                console.log("y: " + distanceY);
                if (distanceX < 70 && distanceX > -40) {
                    if (distanceY < 20 && distanceY > -20) {
                        this.gameOver();
                        console.log("treffer");
                    }
                }
            }
        }
        gameOver() {
            window.alert("Oh nein, Nemo wurde gefressen!");
            if (window.alert) {
                //start();
                location.reload();
            }
        }
    }
    FutterNemo.Nemo = Nemo; // class  Nemo schlie�en
})(FutterNemo || (FutterNemo = {})); //namespace zu
//# sourceMappingURL=Nemo.js.map
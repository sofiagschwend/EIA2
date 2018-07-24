var FutterNemo;
(function (FutterNemo) {
    class Shark extends FutterNemo.Superclass {
        constructor() {
            super();
            this.setRandomPosition();
        }
        move() {
            if (this.x > FutterNemo.canvas.width) {
                this.x = -80; // beginne auf x Achse vor Bildschirm
                this.y += Math.random() * ((FutterNemo.crc2.canvas.height - 10) - 0) + 1; // Math.random() * (max - min) + min
            }
            else {
                this.x += 2; // Geschwindigkeit um 2px nach rechts ist +x
            }
            ;
        }
        setRandomPosition() {
            this.x = Math.random() * FutterNemo.crc2.canvas.width;
            this.y = Math.random() * FutterNemo.crc2.canvas.height - 200;
        }
        draw() {
            FutterNemo.crc2.beginPath();
            FutterNemo.crc2.moveTo(this.x + 30, this.y + 40); // x=30, y=40
            FutterNemo.crc2.lineTo(this.x + 30, this.y + 80); // 30, 80
            FutterNemo.crc2.quadraticCurveTo(this.x + 100, this.y + 10, this.x + 150, this.y + 60); // 100, 10, 150, 60
            FutterNemo.crc2.quadraticCurveTo(this.x + 100, this.y + 110, this.x + 30, this.y + 40); // 100, 110, 30, 40
            FutterNemo.crc2.moveTo(this.x + 87, this.y + 50); // 87, 50
            FutterNemo.crc2.lineTo(this.x + 90, this.y + 20); // 90, 20
            FutterNemo.crc2.lineTo(this.x + 125, this.y + 50); // 125, 50
            FutterNemo.crc2.fillStyle = "rgb(52, 56, 58)";
            FutterNemo.crc2.strokeStyle = "black";
            FutterNemo.crc2.stroke();
            FutterNemo.crc2.fill();
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
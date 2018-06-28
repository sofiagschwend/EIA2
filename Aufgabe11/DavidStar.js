var Aufgabe11;
(function (Aufgabe11) {
    class DavidStar {
        constructor(_color) {
            this.setRandomPosition();
            this.color = _color;
        }
        setRandomPosition() {
            this.x = Math.random() * Aufgabe11.crc2.canvas.width;
            this.y = Math.random() * Aufgabe11.crc2.canvas.height;
        }
        // declare method without keyword function
        move() {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y - 20);
            Aufgabe11.crc2.lineTo(this.x + 20, this.y + 10);
            Aufgabe11.crc2.lineTo(this.x - 20, this.y + 10);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.moveTo(this.x, this.y + 20);
            Aufgabe11.crc2.lineTo(this.x + 20, this.y - 10);
            Aufgabe11.crc2.lineTo(this.x - 20, this.y - 10);
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
    }
    Aufgabe11.DavidStar = DavidStar;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=DavidStar.js.map
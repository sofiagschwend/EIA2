var Aufgabe11_Canvas;
(function (Aufgabe11_Canvas) {
    class Fish extends Aufgabe11_Canvas.Superclass {
        constructor() {
            super();
            this.setRandomPosition();
        }
        move() {
            this.x -= 2;
            this.y += 0;
            if (this.x < -200) {
                this.x = Aufgabe11_Canvas.crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = Aufgabe11_Canvas.crc2.canvas.height;
                this.x -= 2;
            }
        }
        // Fische schwimmen 'hinter' dem Futter = Bereich der �ber Sand liegt
        setRandomPosition() {
            this.x = Math.random() * Aufgabe11_Canvas.crc2.canvas.width;
            this.y = Math.random() * Aufgabe11_Canvas.crc2.canvas.height - 200;
        }
        draw() {
            Aufgabe11_Canvas.crc2.beginPath();
            Aufgabe11_Canvas.crc2.moveTo(this.x, this.y);
            Aufgabe11_Canvas.crc2.quadraticCurveTo(this.x + 30, this.y - 35, this.x + 80, this.y + 20);
            Aufgabe11_Canvas.crc2.lineTo(this.x + 80, this.y - 10);
            Aufgabe11_Canvas.crc2.quadraticCurveTo(this.x + 30, this.y + 35, this.x, this.y);
            Aufgabe11_Canvas.crc2.fillStyle = "orange";
            Aufgabe11_Canvas.crc2.strokeStyle = "orange";
            Aufgabe11_Canvas.crc2.stroke();
            Aufgabe11_Canvas.crc2.fill();
        }
    }
    Aufgabe11_Canvas.Fish = Fish;
})(Aufgabe11_Canvas || (Aufgabe11_Canvas = {})); //namespace zu
//# sourceMappingURL=Fish.js.map
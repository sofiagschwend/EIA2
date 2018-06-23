var Aufgabe10_Canvas;
(function (Aufgabe10_Canvas) {
    class Fish {
        move() {
            this.x -= 2;
            this.y += 0;
            if (this.x < -200) {
                this.x = Aufgabe10_Canvas.crc2.canvas.width;
                this.y += 0;
            }
            if (this.y < 0) {
                this.y = Aufgabe10_Canvas.crc2.canvas.height;
                this.x -= 2;
            }
        }
        draw() {
            Aufgabe10_Canvas.crc2.beginPath();
            Aufgabe10_Canvas.crc2.moveTo(this.x, this.y);
            Aufgabe10_Canvas.crc2.quadraticCurveTo(this.x + 30, this.y - 35, this.x + 80, this.y + 20);
            Aufgabe10_Canvas.crc2.lineTo(this.x + 80, this.y - 10);
            Aufgabe10_Canvas.crc2.quadraticCurveTo(this.x + 30, this.y + 35, this.x, this.y);
            Aufgabe10_Canvas.crc2.fillStyle = "orange";
            Aufgabe10_Canvas.crc2.strokeStyle = "orange";
            Aufgabe10_Canvas.crc2.stroke();
            Aufgabe10_Canvas.crc2.fill();
        }
    }
    Aufgabe10_Canvas.Fish = Fish;
})(Aufgabe10_Canvas || (Aufgabe10_Canvas = {}));
//# sourceMappingURL=Fish.js.map
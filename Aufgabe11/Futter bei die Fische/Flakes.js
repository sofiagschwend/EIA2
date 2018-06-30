var Aufgabe11_Canvas;
(function (Aufgabe11_Canvas) {
    class Flake extends Aufgabe11_Canvas.Superclass {
        constructor(newPositionX, newPositionY) {
            super();
            this.setRandomColor();
            this.x = newPositionX;
            this.y = newPositionY;
            this.radius = 4;
            this.stop = Math.random() * (690 - 640) + 640; // Bereich in dem Futter liegt
        }
        move() {
            this.x += 0;
            this.y += 1;
            if (this.y > this.stop) {
                this.y = this.stop;
            }
        }
        draw() {
            Aufgabe11_Canvas.crc2.fillStyle = this.color;
            Aufgabe11_Canvas.crc2.beginPath();
            Aufgabe11_Canvas.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            Aufgabe11_Canvas.crc2.closePath();
            Aufgabe11_Canvas.crc2.fill();
            Aufgabe11_Canvas.crc2.strokeStyle = "transparent";
            Aufgabe11_Canvas.crc2.stroke();
        }
        setRandomColor() {
            let c = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#696969";
                    break;
                case 1:
                    this.color = " #DEB887";
                    break;
                case 2:
                    this.color = "#808000";
            }
        }
    }
    Aufgabe11_Canvas.Flake = Flake;
})(Aufgabe11_Canvas || (Aufgabe11_Canvas = {})); //namespace zu
//# sourceMappingURL=Flakes.js.map
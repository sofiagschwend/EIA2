var Aufgabe11;
(function (Aufgabe11) {
    class Circle extends Aufgabe11.DavidStar {
        constructor(_color) {
            super(_color);
        }
        draw() {
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.arc(this.x - 30, this.y - 30, 20, 0, 2 * Math.PI);
            Aufgabe11.crc2.stroke();
            Aufgabe11.crc2.fill();
        }
        move() {
            this.x += Math.random() * 4 - 6;
            this.y += Math.random() * 4 - 3;
        }
    }
    Aufgabe11.Circle = Circle; //extends DavidStar zu
})(Aufgabe11 || (Aufgabe11 = {})); // namespace zu
//# sourceMappingURL=Circle.js.map
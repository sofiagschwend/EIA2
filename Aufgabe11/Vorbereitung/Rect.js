var Aufgabe11;
(function (Aufgabe11) {
    class Rect extends Aufgabe11.DavidStar {
        constructor(_color) {
            super(_color);
        }
        draw() {
            Aufgabe11.crc2.fillStyle = this.color;
            Aufgabe11.crc2.fillRect(this.x - 20, this.y - 20, 40, 40);
        }
    }
    Aufgabe11.Rect = Rect;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Rect.js.map
var FutterNemo;
(function (FutterNemo) {
    class Flake extends FutterNemo.Superclass {
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
            FutterNemo.crc2.fillStyle = this.color;
            FutterNemo.crc2.beginPath();
            FutterNemo.crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            FutterNemo.crc2.closePath();
            FutterNemo.crc2.fill();
            FutterNemo.crc2.strokeStyle = "transparent";
            FutterNemo.crc2.stroke();
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
    FutterNemo.Flake = Flake;
})(FutterNemo || (FutterNemo = {})); //namespace zu
//# sourceMappingURL=Flakes.js.map
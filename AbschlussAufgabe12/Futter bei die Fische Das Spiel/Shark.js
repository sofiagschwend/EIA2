var FutterNemo;
(function (FutterNemo) {
    class Shark extends FutterNemo.Superclass {
        constructor() {
            super();
            this.setRandomPosition();
        }
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
        // Fische schwimmen 'hinter' dem Futter = Bereich der �ber Sand liegt
        setRandomPosition() {
            this.x = Math.random() * FutterNemo.crc2.canvas.width;
            this.y = Math.random() * FutterNemo.crc2.canvas.height - 200;
        }
        draw() {
            FutterNemo.crc2.beginPath();
            /*crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x + 30, this.y - 35, this.x + 80, this.y + 20);
            crc2.lineTo(this.x + 80, this.y - 10);
            crc2.quadraticCurveTo(this.x + 30, this.y + 35, this.x, this.y);
            crc2.fillStyle = "orange";
            crc2.strokeStyle = "orange";*/
            FutterNemo.crc2.stroke();
            FutterNemo.crc2.fill();
        }
    }
    FutterNemo.Shark = Shark;
})(FutterNemo || (FutterNemo = {})); //namespace zu
//# sourceMappingURL=Shark.js.map
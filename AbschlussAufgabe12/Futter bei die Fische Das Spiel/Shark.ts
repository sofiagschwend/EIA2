namespace FutterNemo { //neuer nc

    export class Shark extends Superclass {


        constructor() {
            super();
            this.setRandomPosition();
        }

        move(): void {
            this.x += 2;
            this.y += 0;
            if (this.x > canvas.width) {
                this.x = -80;
                this.y += Math.random() * crc2.canvas.height - 10;
            }
            /*if (this.y < 0) {
                this.y = crc2.canvas.height;
                this.x += 2;
            }*/
        }

        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height - 200;
        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x + 30, this.y + 40); // x=30, y=40
            crc2.lineTo(this.x + 30, this.y + 80); // 30, 80
            crc2.quadraticCurveTo(this.x + 100, this.y + 10, this.x + 150, this.y + 60); // 100, 10, 150, 60
            crc2.quadraticCurveTo(this.x + 100, this.y + 110, this.x + 30, this.y + 40);       // 100, 110, 30, 40
            crc2.moveTo(this.x + 87, this.y + 50); // 87, 50
            crc2.lineTo(this.x + 90, this.y + 20); // 90, 20
            crc2.lineTo(this.x + 125, this.y + 50); // 125, 50
            crc2.fillStyle = "rgb(52, 56, 58)";
            crc2.strokeStyle = "black";
            crc2.stroke();
            crc2.fill();

            crc2.beginPath();
            crc2.arc(this.x + 130, this.y + 55, 2, 0, 2 * Math.PI); // 130, 55
            crc2.fillStyle = "rgb(171, 4, 51)";
            crc2.strokeStyle = "rgb(171, 4, 51)";
            crc2.stroke();
            crc2.fill();
        }
    }// class Shark zu

}//namespace zu
namespace FutterNemo { //neuer nc
    
    export class Fish extends Superclass {
        
        
        constructor() {
            super();
            this.setRandomPosition();
        }

        move(): void {
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
        }

        // Fische schwimmen 'hinter' dem Futter = Bereich der über Sand liegt
        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height - 200;
        }

        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.quadraticCurveTo(this.x + 30, this.y - 35, this.x + 80, this.y + 20);
            crc2.lineTo(this.x + 80, this.y - 10);
            crc2.quadraticCurveTo(this.x + 30, this.y + 35, this.x, this.y);
            crc2.fillStyle = "orange";
            crc2.strokeStyle = "orange";
            crc2.stroke();
            crc2.fill();
        }
    }

}//namespace zu
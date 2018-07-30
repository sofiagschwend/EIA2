namespace FutterNemo {

    export class Nemo extends Superclass {
        
        constructor() {
            super();
            this.setRandomPosition();
        }

        // Bereich in der Sich Nemo aufhalten darf
        setRandomPosition(): void {
            this.x = Math.random() * (800 - 600) + 600;                     // Math.random() * (max - min) + min
            this.y = Math.random() * (550 - 50) + 50;
        }

        // Nemo zeichnen in orange
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

        // move Nemo nach Mausklick
        moveNemo(_clickPositionY: number): void {

            if (_clickPositionY <= this.y) {                               // falls click ÜBER Nemo
                this.y -= 15;
            } else {                                                       // alles andere an clicks move down (click UNTER Nemo)
                this.y += 15;
            }
        }

        checkNemo(): number {
            let position: number = this.x + this.y;

            return position;
        };
//
    } // class  Nemo schließen

}//namespace zu
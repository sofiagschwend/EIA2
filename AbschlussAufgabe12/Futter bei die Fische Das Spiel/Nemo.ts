namespace FutterNemo { //neuer nc

    export class Nemo extends Superclass {
        direction: number;


        constructor() {
            super();
            this.setRandomPosition();
        }

        // Bereich in der Sich Nemo aufhalten darf
        setRandomPosition(): void {
            this.x = Math.random() * (800 - 600) + 600;       // Math.random() * (max - min) + min
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
            console.log(_clickPositionY);
            if (_clickPositionY <= this.y) { // falls click ‹BER Nemo
                this.y -= 15;
            } else { // alles andere an clicks move down (click UNTER Nemo)
                this.y += 15;
            }
        }


        // Check Position von Shark
//        checkPositionShark(): void {
//            let test = Shark.x;
//        }

        // Vergleiche Position von Nemo & MouseDown
        // move Nemo hoch runter

        // Vergleiche POsition Nemo & Shark

        // *** if distance near to 10px GAME OVER -> Alert Box Gamer Over
        // Alert Box: <button> Reload Game <button>

        


    } // class  Nemo schlieﬂen

}//namespace zu
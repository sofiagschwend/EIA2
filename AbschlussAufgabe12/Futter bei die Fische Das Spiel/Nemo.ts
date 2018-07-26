namespace FutterNemo { //neuer nc

    export class Nemo extends Superclass {
        direction: number;


        constructor() {
            super();
            this.setRandomPosition();
        }

        // Bereich in der Sich Nemo aufhalten darf
        setRandomPosition(): void {
            this.x = Math.random() * (800 - 600) + 600;              // Math.random() * (max - min) + min
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

            if (_clickPositionY <= this.y) {                        // falls click ‹BER Nemo
                this.y -= 15;
            } else {                                                // alles andere an clicks move down (click UNTER Nemo)
                this.y += 15;
            }
        }

        checkNemo(): number {
            let position: number = this.x + this.y;

            return position;
        };

        collision() {
            for (let i = 0; i < arraySharks.length; i++) {
                let calc = arraySharks[i].y + 60;
                let distanceX = this.x - arraySharks[i].x;
                let distanceY = this.y - calc;
                //console.log("Shark: " + arraySharks[i].x);
                //console.log("Shark: " + arraySharks[i].y);
               console.log("y: " + calc);
                
                if (distanceX < 90 && distanceX > - 20) {

                    if (distanceY < 30 && distanceY > -40) {
                        this.gameOver();
                        console.log("treffer");
                    }
                }
            }
        }

        gameOver(): void {
            window.alert("Oh nein, Nemo wurde gefressen!");
            if (window.alert) {
                init();
                location.reload();
            }
        }


        // KONZEPT
        // Check Position von Shark
        //        checkPositionShark(): void {
        //            let test = Shark.x;
        //        }

        // Vergleiche Position von Nemo & MouseDown
        // move Nemo hoch runter

        // Vergleiche POsition Nemo & Shark

        // *** if distance near to 10px GAME OVER -> Alert Box Gamer Over
        // Alert Box: <button> ame <button>




    } // class  Nemo schlieﬂen

}//namespace zu
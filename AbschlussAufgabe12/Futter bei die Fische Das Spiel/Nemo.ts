namespace FutterNemo { //neuer nc

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

            if (_clickPositionY <= this.y) {                               // falls click ‹BER Nemo
                this.y -= 15;
            } else {                                                       // alles andere an clicks move down (click UNTER Nemo)
                this.y += 15;
            }
        }

        checkNemo(): number {
            let position: number = this.x + this.y;

            return position;
        };
        
        // collision in Nemo abfragen, da hier direkt this.x/this.y abgefragt werden kann ohne weitere Variable
        collision(): void {
            for (let i: number = 0; i < arraySharks.length; i++) {          // for-Schleife iteriert Array von Sharks durch und
                let calc: number = arraySharks[i].y + 60;                   // Pixelwert anpassen der HitBox
                let distanceX: number = this.x - arraySharks[i].x;          // distanceX ist NemoX - SharkX rechnen
                let distanceY: number = this.y - calc;                      // distanceY ist NemoY - SharkX - (Pixelwert anpassen der HitBox) rechnen
                //console.log("Shark: " + arraySharks[i].x);
                //console.log("Shark: " + arraySharks[i].y);
                //console.log("y: " + calc);
                
                if (distanceX < 90 && distanceX > - 20) {                   // Bereich in der Abstand in XRichtung von Nemo und Shark sein darf

                    if (distanceY < 30 && distanceY > -40) {                // Bereich in der Abstand in YRichtung von Nemo und Shark sein darf
                        this.gameOver();                                    // wenn BEIDE IF-Abfragen zutreffen, dann gameOver()
                        // console.log("treffer");
                    }
                }
            }
        }

        // Alert Box wenn Sharks und Nemos HitBoxen sich treffen
        gameOver(): void {
            window.alert("Oh nein, Nemo wurde gefressen!");                 // Alert Box
            if (window.alert) {                                             // Fenster neu laden = Neustart des Spiels -> init()
                init();
                location.reload();
            }
        }

    } // class  Nemo schlieﬂen

}//namespace zu
namespace FutterNemo {

    export class Shark extends Superclass {


        constructor() {
            super();
            this.setRandomPosition();
        }

        move(): void {                                                              // Shark bist du auserhalb der width, dann setzte neuen x & y Wert
            if (this.x > canvas.width) {
                this.x = -100;                                                      // beginne auf x Achse vor Bildschirm

                if (this.y < canvas.height - 570) {
                    this.setRandompositionY();

                } else if (this.y > canvas.height - 30) {
                    this.setRandompositionY();
                }
                 
            } else {
                this.x += 2;                                                        // Geschwindigkeit um 2px nach rechts ist +x
            }
        }

        // Random Sharks anzeigen
        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height - 200;
        }
        
        // Sharks in Sichtfeld anzeigen
        setRandompositionY(): void {
            this.y = Math.random() * crc2.canvas.height - 200;
        };

        // funktion um Shark Position auszulesen X und Y einzeln
        checkPositionShark() {
            let positionX: number = this.x;
            let positionY: number = this.y;
            let sharkFinalPosition: number = positionX + positionY;
            
            return sharkFinalPosition;                                               // ist zusammengezählte Zahl in Canvas.ts als positionShark
        };

       
        draw(): void {
            // Hai Körper start an Mund
            crc2.beginPath();
            crc2.moveTo(this.x + 150, this.y + 60);
            crc2.quadraticCurveTo(this.x + 100, this.y + 10, this.x + 30, this.y + 80);
            crc2.lineTo(this.x + 30, this.y + 40);
            crc2.quadraticCurveTo(this.x + 100, this.y + 110, this.x + 150, this.y + 60);
            crc2.closePath();
            crc2.fillStyle = "rgb(81, 85, 91)";
            crc2.strokeStyle = "rgb(81, 85, 91)";
            crc2.stroke();
            crc2.fill();
            // Hai Flosse
            crc2.moveTo(this.x + 87, this.y + 41); // 87, 50
            crc2.lineTo(this.x + 90, this.y + 20); // 90, 20
            crc2.lineTo(this.x + 115, this.y + 40.5); // 125, 50
            crc2.fillStyle = "rgb(81, 85, 91)";
            crc2.strokeStyle = "rgb(81, 85, 91)";
            crc2.stroke();
            crc2.fill();
            // Hai Auge
            crc2.beginPath();
            crc2.arc(this.x + 130, this.y + 55, 2, 0, 2 * Math.PI); // 130, 55
            crc2.fillStyle = "rgb(171, 4, 51)";
            crc2.strokeStyle = "rgb(171, 4, 51)";
            crc2.stroke();
            crc2.fill();
        }
        
    }// class Shark zu

}//namespace zu
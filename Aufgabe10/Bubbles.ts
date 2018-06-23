namespace Aufgabe10_Canvas {
    // Klasse für die erste Luftblasengruppe
    export class BubblesGroupOne {
        x: number;
        y: number;
        // Durchmesser der Luftblasen
        scale: number;

        move(): void {
            // Bewegung nur in Richtung der y-Achse (horizontal)
            this.x += 0;
            this.y -= 2;
            // If-Abfrage: Wenn y kleiner als 0 ist, dann soll y wieder 510 sein
            if (this.y < 0) {
                this.y = 510;
            }
        }


        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.scale, 0, 3 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "rgb(0, 0, 139, 0.6)"; // Füllung darkblue
            crc2.strokeStyle = "rgb(0, 0, 139, 0.6)"; // Linienstyle
            crc2.fill();
        }
    }
    
    // Klasse für die zweite Luftblasengruppe
    export class BubblesGroupTwo {
        x: number;
        y: number;
        scale: number;

        move(): void {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 550;
            }
        }


        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.scale, 0, 3 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "rgb(0, 0, 139, 0.6)"; // Füllung darkblue
            crc2.strokeStyle = "rgb(0, 0, 139, 0.6)"; // Linienstyle
            crc2.fill();
        }
    }
    
    // Klasse für die dritte Luftblasengruppe
    export class BubblesGroupThree {
        x: number;
        y: number;
        scale: number;

        move(): void {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 490;
            }
        }


        draw(): void {
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.scale, 0, 3 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "rgb(0, 0, 139, 0.6)"; // Füllung darkblue
            crc2.strokeStyle = "rgb(0, 0, 139, 0.6)"; // Linienstyle
            crc2.fill();
        }
    }
}
 namespace FutterNemo { //neuer nc
 
 //rechts
    export class BubbleOne extends Superclass {
        
        scale: number;
       
        constructor() {
            super();
            this.setRandomPosition();
        }

        setRandomPosition(): void {
            this.x = Math.random() * (730 - 760) + 760;           
            this.y = Math.random() * 550;
            this.scale = Math.random() * 10;
            }
        
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
            crc2.fillStyle = "rgb(0, 0, 139, 0.6)"; // F�llung darkblue
            crc2.strokeStyle = "rgb(0, 0, 139, 0.6)"; // Linienstyle
            crc2.fill();
        }
} 

}
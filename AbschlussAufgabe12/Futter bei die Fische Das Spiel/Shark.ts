namespace FutterNemo { //neuer nc

    export class Shark extends Superclass {


        constructor() {
            super();
            this.setRandomPosition();
            //this.checkPositionShark(); // bei jedem erstellen des SHarks Position checken
        }

        move(): void {  // Shark bist du auserhalb der width, dann setzte neuen x & y Wert
            if (this.x > canvas.width) {
                this.x = -100; // beginne auf x Achse vor Bildschirm

                if (this.y < canvas.height - 570) {
                    this.setRandomPositionY();

                } else if (this.y > canvas.height - 30) {
                    this.setRandomPositionY();
                }

                //  console.log(this.y);  
            } else {
                this.x += 2;  // Geschwindigkeit um 2px nach rechts ist +x
            }
            // console.log("Move");
        }

        // Random Sharks anzeigen
        setRandomPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * crc2.canvas.height - 200;
            console.log("RandomPosition");
        }
        // Sharks in Sichtfeld anzeigen
        setRandomPositionY(): void {
            this.y = Math.random() * crc2.canvas.height - 200;
        };


        // funktion um Shark Position auszulesen X und Y einzeln, weil return nur 1 Wert zur�ckgibt
        checkPositionShark() {
            let PositionX = this.x;
            let PositionY = this.y;
            let sharkFinalPosition = PositionX + PositionY;
            
            return sharkFinalPosition // ist zusammengez�hlte Zahl in Canvas.ts als positionShark
        };

       
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
namespace FutterNemo { //neuer nc
export class Flake extends Superclass {
        radius: number;
        color: string;
        stop: number; // wo futter liegen bleiben soll

        constructor(newPositionX: number, newPositionY: number) {
            super();
            this.setRandomColor();
            this.x = newPositionX;
            this.y = newPositionY;
            this.radius = 4;  
            this.stop = Math.random() * (690 - 640) + 640; // Bereich in dem Futter liegt
        }

        move(): void {
            this.x += 0;
            this.y += 1;

            if (this.y > this.stop) {
                this.y = this.stop;
            }
        }

        draw(): void {
            crc2.fillStyle = this.color;
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
            crc2.closePath();
            crc2.fill();

            crc2.strokeStyle = "transparent";
            crc2.stroke();
        }

        setRandomColor(): void {
            let c: number = Math.floor(Math.random() * 3);
            switch (c) {
                case 0:
                    this.color = "#696969";
                    break;
                case 1:
                    this.color = " #DEB887";
                    break;
                case 2:
                    this.color = "#808000";
            }
        }
    }
}//namespace zu

namespace FutterNemo { //neuer nc
    
    export class Nemo extends Superclass {
        direction: number;
        
        
        constructor() {
            super();
            this.setRandomPosition();
        }
        
        // funktion um Nemo nach oben / unten zu bewegen durch Mausklick in positionNemo < Bereich / positionNemo  Bereich

       /* move(): void {
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
        }*/

        // Bereich in der Sich Nemo auf halten darf
        setRandomPosition(): void {
            this.x = Math.random() * (500 - 300) + 300;       // Math.random() * (max - min) + min
            this.y = Math.random() * (650 - 50) + 50;
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
        
        // Check Position von Nemo
        checkPositionNemo(): void {
           //let newPositionX: number = _event.clientX;
          // let newPositionY: number = _event.clientY;
        }

        // Check Position von Shark
        checkPositionShark(): void {

        }
        
        // Vergleiche Position von Nemo & MouseDown
        // move Nemo hoch runter
        
        // Vergleiche POsition Nemo & Shark
        // *** if distance near to 5px GAME OVER -> Alert Box Gamer Over
        // Alert Box: <button> Reload Game <button>
        
        /********************************************
        TO DO
        width und height anpassen von Blasen
        *************************************************/
        

    } // class  Nemo schlieﬂen

}//namespace zu
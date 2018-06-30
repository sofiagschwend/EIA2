namespace Aufgabe11_Canvas {
         //links
    export class BubbleTwo extends BubbleOne {
        
        constructor() {
            super();        
        }
        
        setRandomPosition(): void {
            this.x = Math.random() * (200 - 250) + 250; //Math.random()* (max - min) + min 
            this.y = Math.random() * 550;
            this.scale = Math.random() * 10;
            }
        
        move(): void {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 550;
            }   
        }   
   }
}
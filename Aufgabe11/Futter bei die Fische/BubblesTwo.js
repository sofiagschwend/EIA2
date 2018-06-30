var Aufgabe11_Canvas;
(function (Aufgabe11_Canvas) {
    //links
    class BubbleTwo extends Aufgabe11_Canvas.BubbleOne {
        constructor() {
            super();
        }
        setRandomPosition() {
            this.x = Math.random() * (200 - 250) + 250; //Math.random()* (max - min) + min 
            this.y = Math.random() * 550;
            this.scale = Math.random() * 10;
        }
        move() {
            this.x += 0;
            this.y -= 2;
            if (this.y < 0) {
                this.y = 550;
            }
        }
    }
    Aufgabe11_Canvas.BubbleTwo = BubbleTwo;
})(Aufgabe11_Canvas || (Aufgabe11_Canvas = {}));
//# sourceMappingURL=BubblesTwo.js.map
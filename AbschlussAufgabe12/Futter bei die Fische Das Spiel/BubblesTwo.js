var FutterNemo;
(function (FutterNemo) {
    //links
    class BubbleTwo extends FutterNemo.BubbleOne {
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
                this.y = 450;
            }
        }
    }
    FutterNemo.BubbleTwo = BubbleTwo;
})(FutterNemo || (FutterNemo = {})); // namespace zu
//# sourceMappingURL=BubblesTwo.js.map
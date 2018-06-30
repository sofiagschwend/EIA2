var Aufgabe11_Canvas;
(function (Aufgabe11_Canvas) {
    window.addEventListener("load", init);
    let superclass = [];
    // Variable, in der das Hintergrundbild abgespeichert wird (siehe Init-Funktion)
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11_Canvas.crc2 = canvas.getContext("2d");
        console.log(Aufgabe11_Canvas.crc2);
        canvas.addEventListener("click", fishFood);
        // Aufruf der Funktion "environment" - Aufruf der Funktionen, die den Hintergrund malen
        Aufgabe11_Canvas.environment();
        // For-Schleife, um Fische zu zeichnen        
        for (let i = 0; i < 11; i++) {
            let fish = new Aufgabe11_Canvas.Fish();
            //            fish.x = Math.random() * crc2.canvas.width;
            //            fish.y = Math.random() * crc2.canvas.height;
            superclass.push(fish);
        }
        // For-Schleife f�r die Luftblasen
        for (let i = 0; i < 15; i++) {
            let bubbles = new Aufgabe11_Canvas.BubbleOne();
            // bubblesOne = Variable, die zu Beginn deklariert wurde
            superclass.push(bubbles);
        }
        for (let i = 0; i < 11; i++) {
            let bubbles = new Aufgabe11_Canvas.BubbleTwo();
            // bubblesOne = Variable, die zu Beginn deklariert wurde
            superclass.push(bubbles);
        }
        // In der Variable wird das Hintergrundbild gespeichert
        imgData = Aufgabe11_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        // Aufruf der Animate-Funktion
        animate();
    } // init funktion zu ***********************************************
    // Animtions-Funktion - setzt TimeOut
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe11_Canvas.crc2.clearRect(0, 0, Aufgabe11_Canvas.crc2.canvas.width, Aufgabe11_Canvas.crc2.canvas.height);
        // Hintergrundbild wird neu gesetzt
        Aufgabe11_Canvas.crc2.putImageData(imgData, 0, 0);
        // Aufruf der draw und move Funktionen
        moveObjects();
        drawObjects();
    }
    // MoveObjects-Funktion
    function moveObjects() {
        // For-Schleife, iteriert alle Fische durch
        for (let i = 0; i < superclass.length; i++) {
            superclass[i].move();
        }
    }
    // DrawObjects-Function
    function drawObjects() {
        // For-Schleife, iteriert alle Fische durch
        for (let i = 0; i < superclass.length; i++) {
            superclass[i].draw();
        }
    }
    function fishFood(_event) {
        let newPositionX = _event.clientX;
        let newPositionY = _event.clientY;
        for (let i = 0; i < 4; i++) {
            let flakes = new Aufgabe11_Canvas.Flake(newPositionX, newPositionY);
            superclass.push(flakes);
            newPositionX += Math.random() * 60;
            newPositionX -= Math.random() * 60;
            newPositionY += Math.random() * 30;
        }
    }
})(Aufgabe11_Canvas || (Aufgabe11_Canvas = {})); // namespace zu
//# sourceMappingURL=Canvas.js.map
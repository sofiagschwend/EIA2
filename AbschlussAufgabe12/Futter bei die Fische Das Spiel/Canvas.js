var FutterNemo;
(function (FutterNemo) {
    window.addEventListener("load", start);
    let superclass = [];
    FutterNemo.arraySharks = [];
    let imgData; // Variable, in der das Hintergrundbild abgespeichert wird (siehe Init-Funktion)
    function start(_event) {
        let button = document.getElementById("startButton");
        button.addEventListener("click", init);
        document.getElementById("aquarium").style.display = "none";
        document.getElementById("startscreen").style.display = "initial";
    }
    // init funktion beginnen *****************************************************************************************************************************
    function init() {
        document.getElementById("startscreen").style.display = "none";
        document.getElementById("aquarium").style.display = "initial";
        FutterNemo.canvas = document.getElementsByTagName("canvas")[0];
        FutterNemo.crc2 = FutterNemo.canvas.getContext("2d");
        FutterNemo.canvas.addEventListener("click", checkPositionNemo);
        // HINTERGRUND zeichnen
        FutterNemo.environment(); // Aufruf der Funktion "environment"
        // 1 NEMO erstellen aus Klasse Nemo und wird in Array nemo gepusht = Objekt        
        FutterNemo.nemo = new FutterNemo.Nemo(); // oben als nemo von Nemo festgelegt und sichtbar durch export
        superclass.push(FutterNemo.nemo);
        // SHARK zu zeichnen
        for (let i = 0; i < 7; i++) {
            let shark = new FutterNemo.Shark();
            superclass.push(shark);
            FutterNemo.arraySharks.push(shark);
        }
        // LUFTBLASEN zeichnen
        for (let i = 0; i < 15; i++) {
            let bubbles = new FutterNemo.BubbleOne(); // bubblesOne = Variable, die zu Beginn deklariert wurde
            superclass.push(bubbles);
        }
        for (let i = 0; i < 11; i++) {
            let bubbles = new FutterNemo.BubbleTwo();
            superclass.push(bubbles);
        }
        // In der Variable wird das Hintergrundbild gespeichert
        imgData = FutterNemo.crc2.getImageData(0, 0, FutterNemo.canvas.width, FutterNemo.canvas.height);
        // Aufruf der Animate-Funktion
        animate();
    }
    FutterNemo.init = init; // init funktion zu ********************************************************************************************************************************
    // Animtions-Funktion - setzt TimeOut
    function animate() {
        window.setTimeout(animate, 10);
        FutterNemo.crc2.clearRect(0, 0, FutterNemo.crc2.canvas.width, FutterNemo.crc2.canvas.height); // Hintergrundbild leeren
        FutterNemo.crc2.putImageData(imgData, 0, 0); // Hintergrundbild wird neu gesetzt
        // Aufruf der draw und move Funktionen
        moveObjects();
        drawObjects();
        collision();
    }
    // MoveObjects-Funktion
    function moveObjects() {
        for (let i = 0; i < superclass.length; i++) {
            superclass[i].move();
        }
    }
    // DrawObjects-Function
    function drawObjects() {
        for (let i = 0; i < superclass.length; i++) {
            superclass[i].draw();
        }
    }
    // collision abfragen, da hier direkt this.x/this.y abgefragt werden kann ohne weitere Variable
    function collision() {
        for (let i = 0; i < FutterNemo.arraySharks.length; i++) {
            let calc = FutterNemo.arraySharks[i].y + 60; // Pixelwert anpassen der HitBox
            let distanceX = FutterNemo.nemo.x - FutterNemo.arraySharks[i].x; // distanceX ist NemoX - SharkX rechnen
            let distanceY = FutterNemo.nemo.y - calc; // distanceY ist NemoY - SharkX - (Pixelwert anpassen der HitBox) rechnen
            //console.log("Shark: " + arraySharks[i].x);
            //console.log("Shark: " + arraySharks[i].y);
            //console.log("y: " + calc);
            if (distanceX < 90 && distanceX > -20) {
                if (distanceY < 30 && distanceY > -40) {
                    gameOver(); // wenn BEIDE IF-Abfragen zutreffen, dann gameOver()
                }
            }
        }
    }
    ;
    // Alert Box wenn Sharks und Nemos HitBoxen sich treffen
    function gameOver() {
        window.alert("Oh nein, Nemo wurde gefressen!"); // Alert Box
        if (window.alert) {
            init();
            location.reload();
        }
    }
    ;
    // Nemo nach oben/unten bewegen durch Mausklick in positionNemo < Bereich / positionNemo > Bereich
    function checkPositionNemo(_event) {
        //let clickPositionX: number = _event.clientX;  
        //console.log("Maus: " +  _event.clientX);      
        //console.log("Maus: " +  _event.clientY);                                            // clientX bleibt pro Durchgang gleich
        let clickPositionY = _event.clientY; // clientY ist Werte WO geklickt wurde
        let positionNemo = FutterNemo.nemo.checkNemo(); // positionNemo kann direkt in compare() �bergeben werden, da compare() direkt in checkPositionNemo aufgerufen wird
        FutterNemo.nemo.moveNemo(clickPositionY); // Per Mausclick Nemo hoch/runter steuern in Nemo.ts
        //        nemo.collision();
    }
})(FutterNemo || (FutterNemo = {})); // namespace zu
//# sourceMappingURL=Canvas.js.map
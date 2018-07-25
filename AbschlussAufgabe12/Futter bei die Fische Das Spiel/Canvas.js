var FutterNemo;
(function (FutterNemo) {
    window.addEventListener("load", init);
    let superclass = [];
    let sharksPositions = []; // Position jedes Sharks abspeichern
    // Variable, in der das Hintergrundbild abgespeichert wird (siehe Init-Funktion)
    let imgData;
    function init(_event) {
        FutterNemo.canvas = document.getElementsByTagName("canvas")[0];
        FutterNemo.crc2 = FutterNemo.canvas.getContext("2d");
        console.log(FutterNemo.crc2);
        FutterNemo.canvas.addEventListener("click", checkPositionNemo);
        // Aufruf der Funktion "environment" - Aufruf der Funktionen, die den Hintergrund malen
        FutterNemo.environment();
        // 1 NEMO erstellen aus KLasse Nemo und wird in Array nemo gepusht = Objekt        
        FutterNemo.nemo = new FutterNemo.Nemo(); // oben als nemo von Nemo festgelegt und sichtbar durch export
        superclass.push(FutterNemo.nemo);
        // For-Schleife, um Shark zu zeichnen
        for (let i = 0; i < 7; i++) {
            let shark = new FutterNemo.Shark();
            superclass.push(shark);
        }
        // For-Schleife f�r die Luftblasen
        for (let i = 0; i < 15; i++) {
            let bubbles = new FutterNemo.BubbleOne();
            // bubblesOne = Variable, die zu Beginn deklariert wurde
            superclass.push(bubbles);
        }
        for (let i = 0; i < 11; i++) {
            let bubbles = new FutterNemo.BubbleTwo();
            // bubblesOne = Variable, die zu Beginn deklariert wurde
            superclass.push(bubbles);
        }
        // In der Variable wird das Hintergrundbild gespeichert
        imgData = FutterNemo.crc2.getImageData(0, 0, FutterNemo.canvas.width, FutterNemo.canvas.height);
        // Aufruf der Animate-Funktion
        animate();
    } // init funktion zu ***********************************************
    // Animtions-Funktion - setzt TimeOut
    function animate() {
        window.setTimeout(animate, 10);
        FutterNemo.crc2.clearRect(0, 0, FutterNemo.crc2.canvas.width, FutterNemo.crc2.canvas.height);
        // Hintergrundbild wird neu gesetzt
        FutterNemo.crc2.putImageData(imgData, 0, 0);
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
    // Position Shark ermittlen und in einer Variablen let positionShark speichern
    function checkShark() {
        sharksPositions.length = 0; // Array leeren, damit nur aktuelle Sharks 
        for (let i = 1; i < 8; i++) {
            let shark = superclass[i];
            let positionShark = shark.checkPositionShark();
            //            console.log("positionShark" + posit            
            sharksPositions.push(positionShark); // Array das Position jedes Sharks abspeichern
        }
        return sharksPositions; // Ganzes Array aus checkShark rausholen und sichtbar machen f�r Canvas.ts
    }
    // funktion um Nemo nach oben/unten zu bewegen durch Mausklick in positionNemo < Bereich / positionNemo > Bereich
    // click Event abgreifen f�r Nemo move
    function checkPositionNemo(_event) {
        let clickPositionX = _event.clientX; // clientX ist Werte WO geklickt wurde
        let clickPositionY = _event.clientY;
        let positionNemo = clickPositionX + clickPositionY; // positionNemo kann direkt in compare() �bergeben werden, da compare() direkt in checkPositionNemo aufgerufen wird
        //        console.log("positionNemo" + position        
        // Per Mausclick Nemo hoch/runter steuern in Nemo.ts
        FutterNemo.nemo.moveNemo(clickPositionY);
        checkShark(); // nur aufrufen wenn geklickt wird -> Browser entlasten
        compare(positionNemo); // positionNemo kann direkt in compare() �bergeben werden, da compare() direkt in checkPositionNemo aufgerufen wird
    }
    function compare(_positionNemo) {
        for (let i = 0; i < sharksPositions.length; i++) {
            if (_positionNemo - sharksPositions[i] < 5 && _positionNemo - sharksPositions[i] > -5) {
                gameOver();
            }
        }
    }
    ;
    function gameOver() {
        window.alert("GAME OVER!");
        if (window.alert) {
            location.reload();
        }
        // show Altert box mit Button f�r window reload = neustart
    }
    ;
})(FutterNemo || (FutterNemo = {})); // namespace zu
//# sourceMappingURL=Canvas.js.map
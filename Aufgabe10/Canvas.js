var Aufgabe10_Canvas;
(function (Aufgabe10_Canvas) {
    window.addEventListener("load", init);
    let fishSwarm = [];
    let bubblesOne = [];
    let bubblesTwo = [];
    let bubblesThree = [];
    // Variable, in der das Hintergrundbild abgespeichert wird (siehe Init-Funktion)
    let imgData;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10_Canvas.crc2 = canvas.getContext("2d");
        console.log(Aufgabe10_Canvas.crc2);
        // Aufruf der Funktion "environment" - Aufruf der Funktionen, die den Hintergrund malen
        environment();
        // For-Schleife, um Fische zu zeichnen        
        for (let i = 0; i < 11; i++) {
            let fish = new Aufgabe10_Canvas.Fish();
            fish.x = Math.random() * Aufgabe10_Canvas.crc2.canvas.width;
            fish.y = Math.random() * Aufgabe10_Canvas.crc2.canvas.height;
            fishSwarm.push(fish);
        }
        // For-Schleife f�r die Luftblasen
        for (let i = 0; i < 15; i++) {
            let bubbles = new Aufgabe10_Canvas.BubblesGroupOne();
            bubbles.x = Math.random() * (400 - 300) + 330;
            bubbles.y = Math.random() * 510;
            // Gr��e der Luftblasen
            bubbles.scale = Math.random() * 8;
            // bubblesOne = Variable, die zu Beginn deklariert wurde
            bubblesOne.push(bubbles);
        }
        for (let i = 0; i < 11; i++) {
            let bubbles = new Aufgabe10_Canvas.BubblesGroupTwo();
            bubbles.x = Math.random() * (150 - 50) + 200;
            bubbles.y = Math.random() * 550;
            // Gr��e der Luftblasen
            bubbles.scale = Math.random() * 10;
            // bubblesOne = Variable, die zu Beginn deklariert wurde
            bubblesTwo.push(bubbles);
        }
        for (let i = 0; i < 16; i++) {
            let bubbles = new Aufgabe10_Canvas.BubblesGroupThree();
            bubbles.x = Math.random() * (700 - 600) + 700;
            bubbles.y = Math.random() * 490;
            // Gr��e der Luftblasen
            bubbles.scale = Math.random() * 8;
            // bubblesOne = Variable, die zu Beginn deklariert wurde
            bubblesThree.push(bubbles);
        }
        // In der Variable wird das Hintergrundbild gespeichert
        imgData = Aufgabe10_Canvas.crc2.getImageData(0, 0, canvas.width, canvas.height);
        // Aufruf der Animate-Funktion
        animate();
    } // init funktion zu ***********************************************
    // Funktion, um den Hintergrund zu zeichnen
    function environment() {
        // Hintergrund Einf�rben
        Aufgabe10_Canvas.crc2.fillStyle = "lightblue";
        Aufgabe10_Canvas.crc2.fillRect(0, 0, 1000, 700);
        // Funktionsaufrufe - wer zuerst kommt, malt zuerst
        drawRocks(200, 550);
        drawRocks(350, 550);
        drawGrass(925, 150);
        drawSand();
        drawBox(620, 600);
    }
    // Animtions-Funktion - setzt TimeOut
    function animate() {
        window.setTimeout(animate, 10);
        // Hintergrundbild wird neu gesetzt
        Aufgabe10_Canvas.crc2.putImageData(imgData, 0, 0);
        // Aufruf der draw und move Funktionen
        moveObjects();
        drawObjects();
    }
    // MoveObjects-Funktion
    function moveObjects() {
        // For-Schleife, iteriert alle Fische durch
        for (let i = 0; i < fishSwarm.length; i++) {
            fishSwarm[i].move();
        }
        // For-Schleife iteriert die Luftblasen durch
        for (let i = 0; i < bubblesOne.length; i++) {
            bubblesOne[i].move();
        }
        for (let i = 0; i < bubblesTwo.length; i++) {
            bubblesTwo[i].move();
        }
        for (let i = 0; i < bubblesThree.length; i++) {
            bubblesThree[i].move();
        }
    }
    // DrawObjects-Function
    function drawObjects() {
        // For-Schleife, iteriert alle Fische durch
        for (let i = 0; i < fishSwarm.length; i++) {
            fishSwarm[i].draw();
        }
        // For-Schleife iteriert die Luftblasen durch
        for (let i = 0; i < bubblesOne.length; i++) {
            bubblesOne[i].draw();
        }
        for (let i = 0; i < bubblesTwo.length; i++) {
            bubblesTwo[i].draw();
        }
        for (let i = 0; i < bubblesThree.length; i++) {
            bubblesThree[i].draw();
        }
    }
    // FELSEN
    function drawRocks(_x, _y) {
        Aufgabe10_Canvas.crc2.beginPath();
        Aufgabe10_Canvas.crc2.moveTo(_x, _y);
        Aufgabe10_Canvas.crc2.lineTo(_x + 125, _y - 50);
        Aufgabe10_Canvas.crc2.lineTo(_x + 150, _y);
        Aufgabe10_Canvas.crc2.lineTo(_x + 300, _y + 50);
        Aufgabe10_Canvas.crc2.lineTo(_x, _y + 150);
        Aufgabe10_Canvas.crc2.lineTo(_x, _y);
        Aufgabe10_Canvas.crc2.closePath();
        Aufgabe10_Canvas.crc2.fillStyle = "gray";
        Aufgabe10_Canvas.crc2.strokeStyle = "gray";
        Aufgabe10_Canvas.crc2.stroke();
        Aufgabe10_Canvas.crc2.fill();
    }
    // I BIMS 1 SEEGRAS        
    function drawGrass(_x, _y) {
        Aufgabe10_Canvas.crc2.beginPath();
        Aufgabe10_Canvas.crc2.moveTo(_x, _y);
        Aufgabe10_Canvas.crc2.quadraticCurveTo(_x - 25, _y + 50, 925, 250); //(900, 200, 925, 250);
        Aufgabe10_Canvas.crc2.quadraticCurveTo(_x + 25, _y + 125, 950, 350); //(950, 275, 950, 350);
        Aufgabe10_Canvas.crc2.quadraticCurveTo(_x, _y + 250, 960, 450); //(925, 400, 960, 450);
        Aufgabe10_Canvas.crc2.lineTo(_x - 35, _y + 300); //(890, 450);
        Aufgabe10_Canvas.crc2.quadraticCurveTo(_x - 25, _y + 250, 920, 350); //(900, 400, 920, 350);
        Aufgabe10_Canvas.crc2.quadraticCurveTo(_x + 15, _y + 150, 900, 250); //(940, 300, 900, 250);
        Aufgabe10_Canvas.crc2.quadraticCurveTo(_x - 25, _y + 40, 925, 150); //(900, 190, 925, 150);
        Aufgabe10_Canvas.crc2.fillStyle = "rgb(0, 128, 0)"; // green
        Aufgabe10_Canvas.crc2.strokeStyle = "rgb(0, 128, 0)";
        Aufgabe10_Canvas.crc2.stroke();
        Aufgabe10_Canvas.crc2.fill();
        Aufgabe10_Canvas.crc2.closePath();
    }
    // SAND 
    function drawSand() {
        Aufgabe10_Canvas.crc2.beginPath();
        Aufgabe10_Canvas.crc2.moveTo(0, 650);
        Aufgabe10_Canvas.crc2.quadraticCurveTo(350, 500, 500, 600);
        Aufgabe10_Canvas.crc2.quadraticCurveTo(800, 500, 1000, 400);
        Aufgabe10_Canvas.crc2.lineTo(1000, 700);
        Aufgabe10_Canvas.crc2.lineTo(0, 700);
        Aufgabe10_Canvas.crc2.lineTo(0, 650);
        Aufgabe10_Canvas.crc2.closePath();
        Aufgabe10_Canvas.crc2.fillStyle = "rgb(255, 255, 224)"; // F�llung lightyellow
        Aufgabe10_Canvas.crc2.strokeStyle = "rgb(255, 255, 224)"; // Linienstyle lightyellow
        Aufgabe10_Canvas.crc2.stroke();
        Aufgabe10_Canvas.crc2.fill();
    }
    // SCHATZTRUHE
    function drawBox(_x, _y) {
        Aufgabe10_Canvas.crc2.beginPath(); //Box von der Seite
        Aufgabe10_Canvas.crc2.moveTo(_x, _y);
        Aufgabe10_Canvas.crc2.lineTo(_x + 200, _y);
        Aufgabe10_Canvas.crc2.lineTo(_x + 200, _y - 100);
        Aufgabe10_Canvas.crc2.lineTo(_x, _y - 100);
        Aufgabe10_Canvas.crc2.closePath();
        Aufgabe10_Canvas.crc2.fillStyle = "brown";
        Aufgabe10_Canvas.crc2.strokeStyle = "white";
        Aufgabe10_Canvas.crc2.stroke();
        Aufgabe10_Canvas.crc2.fill();
        Aufgabe10_Canvas.crc2.beginPath(); //Deckel von der Seite
        Aufgabe10_Canvas.crc2.moveTo(_x, _y - 100);
        Aufgabe10_Canvas.crc2.lineTo(_x + 190, _y - 150);
        Aufgabe10_Canvas.crc2.quadraticCurveTo(_x + 70, _y - 190, _x, _y - 100);
        Aufgabe10_Canvas.crc2.closePath();
        Aufgabe10_Canvas.crc2.fillStyle = "brown";
        Aufgabe10_Canvas.crc2.strokeStyle = "brown";
        Aufgabe10_Canvas.crc2.stroke();
        Aufgabe10_Canvas.crc2.fill();
    }
})(Aufgabe10_Canvas || (Aufgabe10_Canvas = {})); // namespace zu
//# sourceMappingURL=Canvas.js.map
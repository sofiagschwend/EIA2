var Aufgabe9_Canvas;
(function (Aufgabe9_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        // Hintergrund Einf�rben
        crc2.fillStyle = "lightblue";
        crc2.fillRect(0, 0, 1000, 700);
        // Funktionsaufrufe - wer zuerst kommt, malt zuerst
        drawRocks(200, 550);
        drawRocks(350, 550);
        drawGrass(925, 150);
        drawSand();
        //drawFish Aufgruf �ber for-Schleife
        for (let i = 0; i < 11; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            drawFish(x, y);
        }
        drawBubbles(150, 150, 30, 60, 3);
        drawBubbles(220, 40, 80, 160, 5);
        drawBubbles(60, 220, 80, 260, 8);
        drawBox(620, 600);
    } // init funktion zu ***********************************************
    // FELSEN
    function drawRocks(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 125, _y - 50);
        crc2.lineTo(_x + 150, _y);
        crc2.lineTo(_x + 300, _y + 50);
        crc2.lineTo(_x, _y + 150);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.fillStyle = "gray";
        crc2.strokeStyle = "gray";
        crc2.stroke();
        crc2.fill();
    }
    // I BIMS 1 SEEGRAS        
    function drawGrass(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 25, _y + 50, 925, 250); //(900, 200, 925, 250);
        crc2.quadraticCurveTo(_x + 25, _y + 125, 950, 350); //(950, 275, 950, 350);
        crc2.quadraticCurveTo(_x, _y + 250, 960, 450); //(925, 400, 960, 450);
        crc2.lineTo(_x - 35, _y + 300); //(890, 450);
        crc2.quadraticCurveTo(_x - 25, _y + 250, 920, 350); //(900, 400, 920, 350);
        crc2.quadraticCurveTo(_x + 15, _y + 150, 900, 250); //(940, 300, 900, 250);
        crc2.quadraticCurveTo(_x - 25, _y + 40, 925, 150); //(900, 190, 925, 150);
        crc2.fillStyle = "green";
        crc2.strokeStyle = "green";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }
    // SAND 
    function drawSand() {
        crc2.beginPath();
        crc2.moveTo(0, 650);
        crc2.quadraticCurveTo(350, 500, 500, 600);
        crc2.quadraticCurveTo(800, 500, 1000, 400);
        crc2.lineTo(1000, 700);
        crc2.lineTo(0, 700);
        crc2.lineTo(0, 650);
        crc2.closePath();
        crc2.fillStyle = "lightyellow"; // F�llung
        crc2.strokeStyle = "lightyellow"; // Linienstyle
        crc2.stroke();
        crc2.fill();
    }
    // BUBBLES 
    function drawBubbles(_x, _y, _w, _h, _a) {
        for (let i = 0; i < _a; i++) {
            let width = Math.random() * _w;
            let height = Math.random() * _h;
            let scale = Math.random() * 13;
            crc2.beginPath();
            // crc2.arc(150, 150, 30, 60, 3); -> wird in init aufgerufen
            crc2.arc(_x + width, _y + height, scale, 0, 3 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "darkblue"; // F�llung
            crc2.strokeStyle = "darkblue"; // Linienstyle
            crc2.fill();
        }
    }
    // FISCHE
    function drawFish(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x + 30, _y - 35, _x + 80, _y + 20);
        crc2.lineTo(_x + 80, _y - 10);
        crc2.quadraticCurveTo(_x + 30, _y + 35, _x, _y);
        crc2.fillStyle = "orange";
        crc2.strokeStyle = "orange";
        crc2.stroke();
        crc2.fill();
    }
    // SCHATZTRUHE
    function drawBox(_x, _y) {
        crc2.beginPath(); //Box von der Seite
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 200, _y);
        crc2.lineTo(_x + 200, _y - 100);
        crc2.lineTo(_x, _y - 100);
        crc2.closePath();
        crc2.fillStyle = "brown";
        crc2.strokeStyle = "white";
        crc2.stroke();
        crc2.fill();
        crc2.beginPath(); //Deckel von der Seite
        crc2.moveTo(_x, _y - 100);
        crc2.lineTo(_x + 190, _y - 150);
        crc2.quadraticCurveTo(_x + 70, _y - 190, _x, _y - 100);
        crc2.closePath();
        crc2.fillStyle = "brown";
        crc2.strokeStyle = "brown";
        crc2.stroke();
        crc2.fill();
    }
})(Aufgabe9_Canvas || (Aufgabe9_Canvas = {})); // namespace zu
//# sourceMappingURL=Canvas.js.map
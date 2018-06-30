var Aufgabe11_Canvas;
(function (Aufgabe11_Canvas) {
    // ALLES WAS ENVIRONMENT AUSMACHT UND STATISCH IST
    // Funktion, um den Hintergrund zu zeichnen
    function environment() {
        // Hintergrund Einf�rben
        Aufgabe11_Canvas.crc2.fillStyle = "lightblue";
        Aufgabe11_Canvas.crc2.fillRect(0, 0, 1000, 700);
        // Funktionsaufrufe - wer zuerst kommt, malt zuerst
        drawRocks(200, 550);
        drawRocks(350, 550);
        drawGrass(925, 150);
        drawSand();
        drawBox(620, 600);
    }
    Aufgabe11_Canvas.environment = environment;
    // FELSEN
    function drawRocks(_x, _y) {
        Aufgabe11_Canvas.crc2.beginPath();
        Aufgabe11_Canvas.crc2.moveTo(_x, _y);
        Aufgabe11_Canvas.crc2.lineTo(_x + 125, _y - 50);
        Aufgabe11_Canvas.crc2.lineTo(_x + 150, _y);
        Aufgabe11_Canvas.crc2.lineTo(_x + 300, _y + 50);
        Aufgabe11_Canvas.crc2.lineTo(_x, _y + 150);
        Aufgabe11_Canvas.crc2.lineTo(_x, _y);
        Aufgabe11_Canvas.crc2.closePath();
        Aufgabe11_Canvas.crc2.fillStyle = "gray";
        Aufgabe11_Canvas.crc2.strokeStyle = "gray";
        Aufgabe11_Canvas.crc2.stroke();
        Aufgabe11_Canvas.crc2.fill();
    }
    // I BIMS 1 SEEGRAS        
    function drawGrass(_x, _y) {
        Aufgabe11_Canvas.crc2.beginPath();
        Aufgabe11_Canvas.crc2.moveTo(_x, _y);
        Aufgabe11_Canvas.crc2.quadraticCurveTo(_x - 25, _y + 50, 925, 250); //(900, 200, 925, 250);
        Aufgabe11_Canvas.crc2.quadraticCurveTo(_x + 25, _y + 125, 950, 350); //(950, 275, 950, 350);
        Aufgabe11_Canvas.crc2.quadraticCurveTo(_x, _y + 250, 960, 450); //(925, 400, 960, 450);
        Aufgabe11_Canvas.crc2.lineTo(_x - 35, _y + 300); //(890, 450);
        Aufgabe11_Canvas.crc2.quadraticCurveTo(_x - 25, _y + 250, 920, 350); //(900, 400, 920, 350);
        Aufgabe11_Canvas.crc2.quadraticCurveTo(_x + 15, _y + 150, 900, 250); //(940, 300, 900, 250);
        Aufgabe11_Canvas.crc2.quadraticCurveTo(_x - 25, _y + 40, 925, 150); //(900, 190, 925, 150);
        Aufgabe11_Canvas.crc2.fillStyle = "rgb(0, 128, 0)"; // green
        Aufgabe11_Canvas.crc2.strokeStyle = "rgb(0, 128, 0)";
        Aufgabe11_Canvas.crc2.stroke();
        Aufgabe11_Canvas.crc2.fill();
        Aufgabe11_Canvas.crc2.closePath();
    }
    // SAND 
    function drawSand() {
        Aufgabe11_Canvas.crc2.beginPath();
        Aufgabe11_Canvas.crc2.moveTo(0, 650);
        Aufgabe11_Canvas.crc2.quadraticCurveTo(350, 500, 500, 600);
        Aufgabe11_Canvas.crc2.quadraticCurveTo(800, 500, 1000, 400);
        Aufgabe11_Canvas.crc2.lineTo(1000, 700);
        Aufgabe11_Canvas.crc2.lineTo(0, 700);
        Aufgabe11_Canvas.crc2.lineTo(0, 650);
        Aufgabe11_Canvas.crc2.closePath();
        Aufgabe11_Canvas.crc2.fillStyle = "rgb(255, 255, 224)"; // F�llung lightyellow
        Aufgabe11_Canvas.crc2.strokeStyle = "rgb(255, 255, 224)"; // Linienstyle lightyellow
        Aufgabe11_Canvas.crc2.stroke();
        Aufgabe11_Canvas.crc2.fill();
    }
    // SCHATZTRUHE
    function drawBox(_x, _y) {
        Aufgabe11_Canvas.crc2.beginPath(); //Box von der Seite
        Aufgabe11_Canvas.crc2.moveTo(_x, _y);
        Aufgabe11_Canvas.crc2.lineTo(_x + 200, _y);
        Aufgabe11_Canvas.crc2.lineTo(_x + 200, _y - 100);
        Aufgabe11_Canvas.crc2.lineTo(_x, _y - 100);
        Aufgabe11_Canvas.crc2.closePath();
        Aufgabe11_Canvas.crc2.fillStyle = "brown";
        Aufgabe11_Canvas.crc2.strokeStyle = "white";
        Aufgabe11_Canvas.crc2.stroke();
        Aufgabe11_Canvas.crc2.fill();
        Aufgabe11_Canvas.crc2.beginPath(); //Deckel von der Seite
        Aufgabe11_Canvas.crc2.moveTo(_x, _y - 100);
        Aufgabe11_Canvas.crc2.lineTo(_x + 190, _y - 150);
        Aufgabe11_Canvas.crc2.quadraticCurveTo(_x + 70, _y - 190, _x, _y - 100);
        Aufgabe11_Canvas.crc2.closePath();
        Aufgabe11_Canvas.crc2.fillStyle = "brown";
        Aufgabe11_Canvas.crc2.strokeStyle = "brown";
        Aufgabe11_Canvas.crc2.stroke();
        Aufgabe11_Canvas.crc2.fill();
    }
})(Aufgabe11_Canvas || (Aufgabe11_Canvas = {})); // namespace zu
//# sourceMappingURL=Background.js.map
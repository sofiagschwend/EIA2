var FutterNemo;
(function (FutterNemo) {
    // ALLES WAS ENVIRONMENT AUSMACHT UND STATISCH IST
    // Funktion, um den Hintergrund zu zeichnen
    function environment() {
        let gradient = FutterNemo.crc2.createLinearGradient(0, 0, 0, 500);
        // Hintergrund Einf�rben
        gradient.addColorStop(0, "#a1beea");
        gradient.addColorStop(1, "#62d1c9");
        FutterNemo.crc2.fillStyle = gradient;
        FutterNemo.crc2.fillRect(0, 0, 1000, 600);
        // Funktionsaufrufe - wer zuerst kommt, malt zuerst
        drawRocks(350, 460);
        drawRocks(400, 410);
        drawGrass(925, 150);
        drawSand();
        drawBox(120, 550);
    }
    FutterNemo.environment = environment;
    // FELSEN
    function drawRocks(_x, _y) {
        FutterNemo.crc2.beginPath();
        FutterNemo.crc2.moveTo(_x, _y);
        FutterNemo.crc2.lineTo(_x + 125, _y - 50);
        FutterNemo.crc2.lineTo(_x + 150, _y);
        FutterNemo.crc2.lineTo(_x + 300, _y + 50);
        FutterNemo.crc2.lineTo(_x, _y + 150);
        FutterNemo.crc2.lineTo(_x, _y);
        FutterNemo.crc2.closePath();
        FutterNemo.crc2.fillStyle = "gray";
        FutterNemo.crc2.strokeStyle = "gray";
        FutterNemo.crc2.stroke();
        FutterNemo.crc2.fill();
    }
    // I BIMS 1 SEEGRAS        
    function drawGrass(_x, _y) {
        FutterNemo.crc2.beginPath();
        FutterNemo.crc2.moveTo(_x, _y);
        FutterNemo.crc2.quadraticCurveTo(_x - 25, _y + 50, 925, 250); //(900, 200, 925, 250);
        FutterNemo.crc2.quadraticCurveTo(_x + 25, _y + 125, 950, 350); //(950, 275, 950, 350);
        FutterNemo.crc2.quadraticCurveTo(_x, _y + 250, 960, 450); //(925, 400, 960, 450);
        FutterNemo.crc2.lineTo(_x - 35, _y + 300); //(890, 450);
        FutterNemo.crc2.quadraticCurveTo(_x - 25, _y + 250, 920, 350); //(900, 400, 920, 350);
        FutterNemo.crc2.quadraticCurveTo(_x + 15, _y + 150, 900, 250); //(940, 300, 900, 250);
        FutterNemo.crc2.quadraticCurveTo(_x - 25, _y + 40, 925, 150); //(900, 190, 925, 150);
        FutterNemo.crc2.fillStyle = "rgb(0, 128, 0)"; // green
        FutterNemo.crc2.strokeStyle = "rgb(0, 128, 0)";
        FutterNemo.crc2.stroke();
        FutterNemo.crc2.fill();
        FutterNemo.crc2.closePath();
    }
    // SAND 
    function drawSand() {
        FutterNemo.crc2.beginPath();
        FutterNemo.crc2.moveTo(0, 550);
        FutterNemo.crc2.quadraticCurveTo(450, 450, 300, 500);
        FutterNemo.crc2.quadraticCurveTo(300, 450, 600, 450);
        FutterNemo.crc2.quadraticCurveTo(700, 400, 1000, 450);
        FutterNemo.crc2.lineTo(1000, 600);
        FutterNemo.crc2.lineTo(0, 600);
        FutterNemo.crc2.lineTo(0, 550);
        FutterNemo.crc2.closePath();
        FutterNemo.crc2.fillStyle = "rgb(255, 255, 224)"; // F�llung lightyellow
        FutterNemo.crc2.strokeStyle = "rgb(255, 255, 224)"; // Linienstyle lightyellow
        FutterNemo.crc2.stroke();
        FutterNemo.crc2.fill();
    }
    // SCHATZTRUHE
    function drawBox(_x, _y) {
        FutterNemo.crc2.beginPath(); //Box von der Seite
        FutterNemo.crc2.moveTo(_x, _y);
        FutterNemo.crc2.lineTo(_x + 200, _y);
        FutterNemo.crc2.lineTo(_x + 200, _y - 100);
        FutterNemo.crc2.lineTo(_x, _y - 100);
        FutterNemo.crc2.closePath();
        FutterNemo.crc2.fillStyle = "#752323";
        FutterNemo.crc2.strokeStyle = "#752323";
        FutterNemo.crc2.stroke();
        FutterNemo.crc2.fill();
        FutterNemo.crc2.beginPath(); //Deckel von der Seite
        FutterNemo.crc2.moveTo(_x, _y - 100);
        FutterNemo.crc2.lineTo(_x + 190, _y - 150);
        FutterNemo.crc2.quadraticCurveTo(_x + 70, _y - 190, _x, _y - 100);
        FutterNemo.crc2.closePath();
        FutterNemo.crc2.fillStyle = "#752323";
        FutterNemo.crc2.strokeStyle = "#752323";
        FutterNemo.crc2.stroke();
        FutterNemo.crc2.fill();
    }
})(FutterNemo || (FutterNemo = {})); // namespace zu
//# sourceMappingURL=Background.js.map
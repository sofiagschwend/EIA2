var Aufgabe9_Canvas;
(function (Aufgabe9_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        crc2.fillStyle = "lightblue";
        crc2.fillRect(0, 0, 1000, 700);
        /*EIN FISCH
        crc2.beginPath();
        crc2.moveTo(300, 150);
        crc2.quadraticCurveTo(330, 115, 380, 170);
        crc2.lineTo(380, 140);
        crc2.quadraticCurveTo(330, 185, 300, 150);
        crc2.stroke();*/
        // I BIMS 1 SEEGRAS        
        crc2.beginPath();
        crc2.moveTo(925, 150);
        crc2.quadraticCurveTo(900, 200, 925, 250);
        crc2.quadraticCurveTo(950, 275, 950, 350);
        crc2.quadraticCurveTo(925, 400, 960, 450);
        crc2.lineTo(890, 450);
        crc2.quadraticCurveTo(900, 400, 920, 350);
        crc2.quadraticCurveTo(940, 300, 900, 250);
        crc2.quadraticCurveTo(900, 190, 925, 150);
        crc2.fillStyle = "green";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        // FELSEN 1
        crc2.beginPath();
        crc2.moveTo(200, 550);
        crc2.lineTo(325, 500);
        crc2.lineTo(500, 700);
        crc2.lineTo(200, 700);
        crc2.lineTo(200, 550);
        crc2.closePath();
        crc2.fillStyle = "gray";
        crc2.stroke();
        crc2.fill();
        // FELSEN 2
        crc2.beginPath();
        crc2.moveTo(400, 550);
        crc2.lineTo(450, 500);
        crc2.lineTo(600, 700);
        crc2.lineTo(200, 700);
        crc2.lineTo(150, 650);
        crc2.lineTo(400, 550);
        crc2.closePath();
        crc2.fillStyle = "gray";
        crc2.stroke();
        crc2.fill();
        // SAND        
        crc2.beginPath();
        crc2.moveTo(0, 650);
        crc2.quadraticCurveTo(350, 500, 500, 600);
        crc2.quadraticCurveTo(800, 500, 1000, 400);
        crc2.lineTo(1000, 700);
        crc2.lineTo(0, 700);
        crc2.lineTo(0, 650);
        crc2.closePath();
        crc2.fillStyle = "lightyellow";
        crc2.stroke();
        crc2.fill();
        // Funktionsaufruf
        /*drawFish(300, 150);

        for (let i: number = 0; i < 10; i++) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * crc2.canvas.height;
            drawFish(x, y);
        }*/
    } // init funktion zu
})(Aufgabe9_Canvas || (Aufgabe9_Canvas = {})); // namespace zu
//# sourceMappingURL=Canvas.js.map
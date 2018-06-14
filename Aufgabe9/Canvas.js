var L09_Canvas;
(function (L09_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        crc2.fillStyle = "rgba(255,0,0,0.5)";
        crc2.fillRect(50, 50, 100, 50);
        drawDavidStar(300, 100);
        drawDavidStar(100, 200);
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * crc2.canvas.width;
            let y = Math.random() * crc2.canvas.height;
            drawDavidStar(x, y);
        }
    }
    function drawDavidStar(_x, _y) {
        crc2.beginPath();
        crc2.moveTo(_x, _y - 20);
        crc2.lineTo(_x + 20, _y + 10);
        crc2.lineTo(_x - 20, _y + 10);
        crc2.closePath();
        crc2.moveTo(_x, _y + 20);
        crc2.lineTo(_x + 20, _y - 10);
        crc2.lineTo(_x - 20, _y - 10);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }
})(L09_Canvas || (L09_Canvas = {}));
//# sourceMappingURL=Canvas.js.map
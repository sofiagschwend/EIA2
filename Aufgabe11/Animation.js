var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let stars = [];
    let n = 100;
    //let rects: Rect[] = [];
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
        console.log(Aufgabe11.crc2);
        canvas.addEventListener("click", insertNewObject);
        for (let i = 0; i < n; i++) {
            let star = new Aufgabe11.DavidStar("#00ffff");
            stars.push(star);
            let rect = new Aufgabe11.Rect("#ff0000");
            stars.push(rect);
        }
        animate();
    }
    function insertNewObject(_event) {
        let star = new Aufgabe11.DavidStar("#ffff00");
        stars.push(star);
    }
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe11.crc2.clearRect(0, 0, Aufgabe11.crc2.canvas.width, Aufgabe11.crc2.canvas.height);
        moveObjects();
        drawObjects();
    }
    function moveObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < stars.length; i++) {
            stars[i].draw();
        }
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Animation.js.map
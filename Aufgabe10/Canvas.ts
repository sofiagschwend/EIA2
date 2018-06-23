namespace Aufgabe10_Canvas {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let fishSwarm: Fish[] = [];
    let bubblesOne: BubblesGroupOne[] = [];
    let bubblesTwo: BubblesGroupTwo[] = [];
    let bubblesThree: BubblesGroupThree[] = [];

    // Variable, in der das Hintergrundbild abgespeichert wird (siehe Init-Funktion)
    let imgData: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);

        // Aufruf der Funktion "environment" - Aufruf der Funktionen, die den Hintergrund malen
        environment();

        // For-Schleife, um Fische zu zeichnen        
        for (let i: number = 0; i < 11; i++) {
            let fish: Fish = new Fish();
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * crc2.canvas.height;
            fishSwarm.push(fish);
        }

        // For-Schleife für die Luftblasen
        for (let i: number = 0; i < 15; i++) {
            let bubbles: BubblesGroupOne = new BubblesGroupOne();
            bubbles.x = Math.random() * (400 - 300) + 330;
            bubbles.y = Math.random() * 510;
            // Größe der Luftblasen
            bubbles.scale = Math.random() * 8;
            // bubblesOne = Variable, die zu Beginn deklariert wurde
            bubblesOne.push(bubbles);
        }

        for (let i: number = 0; i < 11; i++) {
            let bubbles: BubblesGroupTwo = new BubblesGroupTwo();
            bubbles.x = Math.random() * (150 - 50) + 200;
            bubbles.y = Math.random() * 550;
            // Größe der Luftblasen
            bubbles.scale = Math.random() * 10;
            // bubblesOne = Variable, die zu Beginn deklariert wurde
            bubblesTwo.push(bubbles);
        }

        for (let i: number = 0; i < 16; i++) {
            let bubbles: BubblesGroupThree = new BubblesGroupThree();
            bubbles.x = Math.random() * (700 - 600) + 700;
            bubbles.y = Math.random() * 490;
            // Größe der Luftblasen
            bubbles.scale = Math.random() * 8;
            // bubblesOne = Variable, die zu Beginn deklariert wurde
            bubblesThree.push(bubbles);
        }


        // In der Variable wird das Hintergrundbild gespeichert
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        // Aufruf der Animate-Funktion
        animate();

    }// init funktion zu ***********************************************

    // Funktion, um den Hintergrund zu zeichnen
    function environment(): void {
        // Hintergrund Einfärben
        crc2.fillStyle = "lightblue";
        crc2.fillRect(0, 0, 1000, 700);

        // Funktionsaufrufe - wer zuerst kommt, malt zuerst
        drawRocks(200, 550);
        drawRocks(350, 550);
        drawGrass(925, 150);
        drawSand();
        drawBox(620, 600);
    }

    // Animtions-Funktion - setzt TimeOut
    function animate(): void {
        window.setTimeout(animate, 10);

        // Hintergrundbild wird neu gesetzt
        crc2.putImageData(imgData, 0, 0);

        // Aufruf der draw und move Funktionen
        moveObjects();
        drawObjects();
    }

    // MoveObjects-Funktion
    function moveObjects(): void {
        // For-Schleife, iteriert alle Fische durch
        for (let i: number = 0; i < fishSwarm.length; i++) {
            fishSwarm[i].move();
        }

        // For-Schleife iteriert die Luftblasen durch
        for (let i: number = 0; i < bubblesOne.length; i++) {
            bubblesOne[i].move();
        }

        for (let i: number = 0; i < bubblesTwo.length; i++) {
            bubblesTwo[i].move();
        }

        for (let i: number = 0; i < bubblesThree.length; i++) {
            bubblesThree[i].move();
        }
    }

    // DrawObjects-Function
    function drawObjects(): void {
        // For-Schleife, iteriert alle Fische durch
        for (let i: number = 0; i < fishSwarm.length; i++) {
            fishSwarm[i].draw();
        }

        // For-Schleife iteriert die Luftblasen durch
        for (let i: number = 0; i < bubblesOne.length; i++) {
            bubblesOne[i].draw();
        }

        for (let i: number = 0; i < bubblesTwo.length; i++) {
            bubblesTwo[i].draw();
        }

        for (let i: number = 0; i < bubblesThree.length; i++) {
            bubblesThree[i].draw();
        }
    }

    // FELSEN
    function drawRocks(_x: number, _y: number): void {
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
    function drawGrass(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.quadraticCurveTo(_x - 25, _y + 50, 925, 250); //(900, 200, 925, 250);
        crc2.quadraticCurveTo(_x + 25, _y + 125, 950, 350); //(950, 275, 950, 350);
        crc2.quadraticCurveTo(_x, _y + 250, 960, 450); //(925, 400, 960, 450);
        crc2.lineTo(_x - 35, _y + 300); //(890, 450);
        crc2.quadraticCurveTo(_x - 25, _y + 250, 920, 350); //(900, 400, 920, 350);
        crc2.quadraticCurveTo(_x + 15, _y + 150, 900, 250); //(940, 300, 900, 250);
        crc2.quadraticCurveTo(_x - 25, _y + 40, 925, 150); //(900, 190, 925, 150);
        crc2.fillStyle = "rgb(0, 128, 0)"; // green
        crc2.strokeStyle = "rgb(0, 128, 0)";
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
    }

    // SAND 
    function drawSand(): void {
        crc2.beginPath();
        crc2.moveTo(0, 650);
        crc2.quadraticCurveTo(350, 500, 500, 600);
        crc2.quadraticCurveTo(800, 500, 1000, 400);
        crc2.lineTo(1000, 700);
        crc2.lineTo(0, 700);
        crc2.lineTo(0, 650);
        crc2.closePath();
        crc2.fillStyle = "rgb(255, 255, 224)"; // Füllung lightyellow
        crc2.strokeStyle = "rgb(255, 255, 224)"; // Linienstyle lightyellow
        crc2.stroke();
        crc2.fill();
    }

    // SCHATZTRUHE
    function drawBox(_x: number, _y: number): void { // drawBox(620, 600);
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


}// namespace zu
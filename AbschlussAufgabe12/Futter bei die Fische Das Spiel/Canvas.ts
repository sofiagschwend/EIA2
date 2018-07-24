namespace FutterNemo { //neuer nc

    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;
    let superclass: Superclass[] = [];
    export let canvas: HTMLCanvasElement;
    export let nemo: Nemo; // muss sichtbar sein für moveNemo


    // Variable, in der das Hintergrundbild abgespeichert wird (siehe Init-Funktion)
    let imgData: ImageData;

    function init(_event: Event): void {
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        canvas.addEventListener("click", moveNemo);

        // Aufruf der Funktion "environment" - Aufruf der Funktionen, die den Hintergrund malen
        environment();

        
        // 1 NEMO erstellen aus KLasse Nemo und wird in Array nemo gepusht = Objekt        
        nemo = new Nemo(); // oben als nemo von Nemo festgelegt und sichtbar durch export
        superclass.push(nemo);


        // For-Schleife, um Shark zu zeichnen
        for (let i: number = 0; i < 7; i++) {
            let shark: Shark = new Shark();
            superclass.push(shark);
        }

        // For-Schleife für die Luftblasen
        for (let i: number = 0; i < 15; i++) {
            let bubbles: BubbleOne = new BubbleOne();
            // bubblesOne = Variable, die zu Beginn deklariert wurde
            superclass.push(bubbles);
        }

        for (let i: number = 0; i < 11; i++) {
            let bubbles: BubbleTwo = new BubbleTwo();
            // bubblesOne = Variable, die zu Beginn deklariert wurde
            superclass.push(bubbles);
        }

        // In der Variable wird das Hintergrundbild gespeichert
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        // Aufruf der Animate-Funktion
        animate();

    }// init funktion zu ***********************************************



    // Animtions-Funktion - setzt TimeOut
    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        // Hintergrundbild wird neu gesetzt
        crc2.putImageData(imgData, 0, 0);

        // Aufruf der draw und move Funktionen
        moveObjects();
        drawObjects();
    }

    // MoveObjects-Funktion
    function moveObjects(): void {
        // For-Schleife, iteriert alle Fische durch
        for (let i: number = 0; i < superclass.length; i++) {
            superclass[i].move();
        }
    }

    // DrawObjects-Function
    function drawObjects(): void {
        // For-Schleife, iteriert alle Fische durch
        for (let i: number = 0; i < superclass.length; i++) {
            superclass[i].draw();
        }
    }


    // click Event abgreifen für Nemo move
    function moveNemo(_event: MouseEvent): void {

        let clickPositionX: number = _event.clientX; // clientX ist Werte WO geklickt wurde
        let clickPositionY: number = _event.clientY;

        if (clickPositionY <= nemo.y) { // falls click ÜBER Nemo
            nemo.y -= 10;
        } else { // alles andere an clicks move down (click UNTER Nemo)
            nemo.y += 10;
        }

    }
    
    console.log(superclass);


}// namespace zu
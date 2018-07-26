namespace FutterNemo {

    window.addEventListener("load", start);

    export let crc2: CanvasRenderingContext2D;
    let superclass: Superclass[] = [];
    export let canvas: HTMLCanvasElement;
    export let nemo: Nemo;                                                                          // muss sichtbar sein für moveNemo
    let sharksPositions: number[] = [];                                                             // Position jedes Sharks abspeichern
    export let arraySharks: any[] = [];

    let imgData: ImageData;                                                                         // Variable, in der das Hintergrundbild abgespeichert wird (siehe Init-Funktion)

    function start(_event: Event): void {
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startButton");
        button.addEventListener("click", init);
        document.getElementById("aquarium").style.display = "none";
        document.getElementById("startscreen").style.display = "initial";
    }

    // init funktion beginnen *****************************************************************************************************************************
    function init(): void {
        document.getElementById("startscreen").style.display = "none";
        document.getElementById("aquarium").style.display = "initial";
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.addEventListener("click", checkPositionNemo);

        // HINTERGRUND zeichnen
        environment();                                                                        // Aufruf der Funktion "environment"

        // 1 NEMO erstellen aus Klasse Nemo und wird in Array nemo gepusht = Objekt        
        nemo = new Nemo();                                                                   // oben als nemo von Nemo festgelegt und sichtbar durch export
        superclass.push(nemo);


        // SHARK zu zeichnen
        for (let i: number = 0; i < 7; i++) {
            let shark: Shark = new Shark();
            superclass.push(shark);
            arraySharks.push(shark);
        }

        // LUFTBLASEN zeichnen
        for (let i: number = 0; i < 15; i++) {
            let bubbles: BubbleOne = new BubbleOne();                                         // bubblesOne = Variable, die zu Beginn deklariert wurde
            superclass.push(bubbles);
        }

        for (let i: number = 0; i < 11; i++) {
            let bubbles: BubbleTwo = new BubbleTwo();
            superclass.push(bubbles);
        }

        // In der Variable wird das Hintergrundbild gespeichert
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);

        // Aufruf der Animate-Funktion
        animate();

    }// init funktion zu ********************************************************************************************************************************



    // Animtions-Funktion - setzt TimeOut
    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);                           // Hintergrundbild leeren
        crc2.putImageData(imgData, 0, 0);                                                      // Hintergrundbild wird neu gesetzt

        // Aufruf der draw und move Funktionen
        moveObjects();
        drawObjects();
    }

    // MoveObjects-Funktion
    function moveObjects(): void {
        for (let i: number = 0; i < superclass.length; i++) {                                  // For-Schleife, iteriert alle Elemente durch
            superclass[i].move();
        }
    }

    // DrawObjects-Function
    function drawObjects(): void {
        for (let i: number = 0; i < superclass.length; i++) {                                  // For-Schleife, iteriert alle Elemente durch
            superclass[i].draw();
        }
    }

    //    // Position Shark ermittlen und in einer Variablen let positionShark speichern
    //    function checkShark() {
    //        sharksPositions.length = 0; // Array leeren, damit nur aktuelle Sharks 
    //        for (let i: number = 1; i < 8; i++) {
    //            let shark: Shark = <Shark>superclass[i];
    //            let positionShark: number = shark.checkPositionShark();
    //            //            console.log("positionShark" + posit            
    //            sharksPositions.push(positionShark); // Array das Position jedes Sharks abspeichern
    //        }
    //        return sharksPositions // Ganzes Array aus checkShark rausholen und sichtbar machen für Canvas.ts
    //    }

    // Nemo nach oben/unten bewegen durch Mausklick in positionNemo < Bereich / positionNemo > Bereich
    function checkPositionNemo(_event: MouseEvent): void {                                    // click Event abgreifen für Nemo move
        //        //let clickPositionX: number = _event.clientX;                                        // clientX bleibt pro Durchgang gleich
        let clickPositionY: number = _event.clientY;                                          // clientY ist Werte WO geklickt wurde
        let positionNemo: number = nemo.checkNemo();                                          // positionNemo kann direkt in compare() übergeben werden, da compare() direkt in checkPositionNemo aufgerufen wird

        nemo.moveNemo(clickPositionY);                                                        // Per Mausclick Nemo hoch/runter steuern in Nemo.ts
        nemo.collision();
        //checkShark(); // nur aufrufen wenn geklickt wird -> Browser entlasten
    }


}// namespace zu
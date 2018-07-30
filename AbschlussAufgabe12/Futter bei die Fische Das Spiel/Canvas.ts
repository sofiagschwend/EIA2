namespace FutterNemo {

    window.addEventListener("load", start);

    export let crc2: CanvasRenderingContext2D;
    let superclass: Superclass[] = [];
    export let canvas: HTMLCanvasElement;
    export let nemo: Nemo;                                                            // Position jedes Sharks abspeichern
    export let arraySharks: any[] = [];

    let imgData: ImageData;                                                                         // Variable, in der das Hintergrundbild abgespeichert wird (siehe Init-Funktion)

    function start(_event: Event): void {
        let button: HTMLButtonElement = <HTMLButtonElement>document.getElementById("startButton");
        button.addEventListener("click", init);
        document.getElementById("aquarium").style.display = "none";
        document.getElementById("startscreen").style.display = "initial";
    }

    // init funktion beginnen *****************************************************************************************************************************
   export function init(): void {
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
        collision();
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
    
    // collision abfragen, da hier direkt this.x/this.y abgefragt werden kann ohne weitere Variable
       function collision(): void {
            for (let i: number = 0; i < arraySharks.length; i++) {          // for-Schleife iteriert Array von Sharks durch und
                let calc: number = arraySharks[i].y + 60;                   // Pixelwert anpassen der HitBox
                let distanceX: number = nemo.x - arraySharks[i].x;          // distanceX ist NemoX - SharkX rechnen
                let distanceY: number = nemo.y - calc;                      // distanceY ist NemoY - SharkX - (Pixelwert anpassen der HitBox) rechnen
                //console.log("Shark: " + arraySharks[i].x);
                //console.log("Shark: " + arraySharks[i].y);
                //console.log("y: " + calc);
                
                if (distanceX < 90 && distanceX > - 20) {                   // Bereich in der Abstand in XRichtung von Nemo und Shark sein darf

                    if (distanceY < 30 && distanceY > -40) {                // Bereich in der Abstand in YRichtung von Nemo und Shark sein darf
                        gameOver();                                    // wenn BEIDE IF-Abfragen zutreffen, dann gameOver()
                        // console.log("treffer");
                    }
                }
            }
        };

        // Alert Box wenn Sharks und Nemos HitBoxen sich treffen
       function gameOver(): void {
            window.alert("Oh nein, Nemo wurde gefressen!");                 // Alert Box
            if (window.alert) {                                             // Fenster neu laden = Neustart des Spiels -> init()
                init();
                location.reload();
            }
        };




    // Nemo nach oben/unten bewegen durch Mausklick in positionNemo < Bereich / positionNemo > Bereich
    function checkPositionNemo(_event: MouseEvent): void {                                    // click Event abgreifen für Nemo move
        //let clickPositionX: number = _event.clientX;  
        //console.log("Maus: " +  _event.clientX);      
        //console.log("Maus: " +  _event.clientY);                                            // clientX bleibt pro Durchgang gleich
        let clickPositionY: number = _event.clientY;                                          // clientY ist Werte WO geklickt wurde
        let positionNemo: number = nemo.checkNemo();                                          // positionNemo kann direkt in compare() übergeben werden, da compare() direkt in checkPositionNemo aufgerufen wird

        nemo.moveNemo(clickPositionY);                                                        // Per Mausclick Nemo hoch/runter steuern in Nemo.ts
//        nemo.collision();
    }


}// namespace zu
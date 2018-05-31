namespace Aufgabe6 { 
    window.addEventListener("load", init);
    let address: string = "https://eia2node-sofiagschwend.herokuapp.com";

    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");


    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("checkSearch");
        
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search);
    }

 
    // Input und Send Data
    function insert(_event: Event): void {
        let genderButton: HTMLInputElement = <HTMLInputElement>document.getElementById("male");
        let matrikel: string = inputs[2].value;
        let studi: Studi;
        studi = {
            firstname: inputs[0].value,
            name: inputs[1].value,           
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            studyPath: document.getElementsByTagName("select").item(0).value            
        };
        
        let convert: string = JSON.stringify(studi);    // JavaScript-JSON-Objekt wird in einen string umgewandelt
        console.log(convert);

        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=insert&data=" + convert, true);        // "GET": Methode, mit der Daten versendet werden /adresse von stringify /?command=insert&data=: wird an die Internetaddresse angeh�ngt
        // convert: URL + Daten aus Interface als string /true: Asynchronous, Browser wartet nicht auf Antwort -> sp�ter kann Antwort zu Anfrage zugeordnet werden
        xhr.addEventListener("readystatechange", handleStateChangeInsert);
        xhr.send();
    }

    function handleStateChangeInsert(_event: ProgressEvent): void {
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }

    //Funktion Refresh = show All Data
    function refresh(_event: Event): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=refresh", true);
        xhr.addEventListener("readystatechange", handleStateChangeRefresh);
        xhr.send();
    }    
    
    function handleStateChangeRefresh(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[0];
        output.value = "";
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }           
    }
    
    //Funktion f�r die Suche per Matrikelnummer   
    function search(_event: Event): void {
        let mtrkl: string = inputs[6].value;
        
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", address + "?command=search&searchFor=" + mtrkl, true);
        xhr.addEventListener("readystatechange", handleStateChangeSearch);
        xhr.send();    
    }
    
    function handleStateChangeSearch(_event: ProgressEvent): void {
        let output: HTMLTextAreaElement = document.getElementsByTagName("textarea")[1];
        output.value = "";
        var xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            output.value += xhr.response;
        }           
    }
    
}
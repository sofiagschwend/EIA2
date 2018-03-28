

function myFunction() {
    var person: string;

    person = prompt("Griaß Di, wia hoasst du?");
    if (person != null) {
        document.getElementById("demo").innerHTML =  "Servus " + person;
    }
}

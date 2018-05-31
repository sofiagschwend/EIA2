namespace Aufgabe6 {
    // Struktur des heterogenen assoziativen Arrays als Datensatz für eine studierende Person
    export interface Studi {
        firstname: string;
        name: string;       
        matrikel: number;
        age: number;
        gender: boolean;
        studyPath: string; //Studiengang
       
    }

    // Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
    export interface Studis { // homogenes assoziatives Array
        [matrikel: string]: Studi;
    }
 
    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
    export let studiHomoAssoc: Studis = {};  
}
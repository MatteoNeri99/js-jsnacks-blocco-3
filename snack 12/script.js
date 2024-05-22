// Snack12
// Dare la possibilità di inserire due parole. Verificare tramite una funzione che le due parole abbiano la stessa lunghezza. Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

function parole(parolaUno, parolaDue){


    if (parolaUno.length < parolaDue.length){

        console.log(parolaDue);

    }else if (parolaUno.length > parolaDue.length){

        console.log(parolaUno);
    }else

        console.log(parolaUno, parolaDue);
        

}

parole("maggio","febbraio");

let paroleUtente=prompt("inserisci una parola");

let paroleUtenteDue=prompt("inserisci una parola");

parole(paroleUtente, paroleUtenteDue);
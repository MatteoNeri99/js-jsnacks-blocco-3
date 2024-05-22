// > Scrivi una funzione che dato un numero inverta le sue cifre: 1234 -> 4321
let numeroUtente=Number.parseInt(prompt("inserisci un numero"),10);

if (numeroUtente === Number){
    numeroUtente=1234;
}
function invertiNumeri(numero){

    numero.toString();

    numero.split("");

    let numeroInvertito=[];

    numeroInvertito.push(numero);

    numeroInvertito=numeroInvertito.reverse;

    return numeroInvertito;

}


let numeroUtenteIvertito=invertiNumeri(numeroUtente)
console.log(numeroUtenteInvertito);
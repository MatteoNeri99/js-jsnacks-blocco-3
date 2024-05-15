// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const numeriArray=[];



while (numeriArray.length < 50){
   
    let numeriUtente=Number.parseInt(prompt("quanti numeri devono essere presenti nel array?"),10);
    
    if(numeriUtente === Number){
        numeriArray.push(numeriUtente)
    }

    
    
    
}
console.log(numeriArray)
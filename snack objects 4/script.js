// Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
// Calcola quanto pesano tutte le zucchine.
// Dividi in due array separati le zucchine che misurano meno o più di 8cm.
// Infine stampa separatamente quanto pesano i due gruppi di zucchine



const zucchine=[{ varieta: 'Nera di Milano', peso: 34, lunghezza: 14 },
{ varieta: 'Romanesca', peso: 28, lunghezza: 19 },
{ varieta: 'Fiorentina', peso: 58, lunghezza: 2 },
{ varieta: 'Tonda', peso: 132, lunghezza: 2 },
{ varieta: 'Lunga fiorentina', peso: 3, lunghezza: 28 },
{ varieta: 'Striata d\'Italia', peso: 23, lunghezza: 1 },
{ varieta: 'Bianca triestina', peso: 3, lunghezza:7 },
{ varieta: 'Gialla', peso: 459, lunghezza: 12 },
{ varieta: 'Rugosa friulana', peso: 2, lunghezza: 26 },
{ varieta: 'Patisson', peso: 38, lunghezza: 29 }];


let sommaMat=0;


 let zucchinePeso=zucchine.forEach(zucchine => {
    sommaMat+zucchine.peso
    
});

console.log(zucchinePeso)




const zucchineCorte=zucchine.filter((element) => element.lunghezza > 8)

console.log(zucchineCorte)

const zucchineLunghe=zucchine.filter((element) => element.lunghezza < 8)

console.log(zucchineLunghe)
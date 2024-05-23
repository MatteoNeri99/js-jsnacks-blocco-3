// > Crea un array composto da 15 automobili.
// > Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
// < Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
// < Infine stampa separatamente i 3 array.

const auto= [
    {
        marca:"fiat",

        modello:"stilo",

        alimentazione:"diesel"

    },

    {
        marca:"tesla",

        modello:"cybertruck",

        alimentazione:"elettrica"

    },
    {
        marca:"lamborghini",

        modello:"veyron",

        alimentazione:"benzina"

    },
    {
        marca:"seat",

        modello:"ibiza",

        alimentazione:"diesel"

    },
    {
        marca:"volkswagen",

        modello:"polo",

        alimentazione:"benzina"

    },
    {
        marca:"ferrari",

        modello:"enzo",

        alimentazione:"benzina"

    },
    {
       
        marca:"volkswagen",

        modello:"golf",

        alimentazione:"diesel"

    },
    {
        marca:"fiat",

        modello:"punto",

        alimentazione:"gpl"

    },

    {
        marca:"dr",

        modello:"3.0",

        alimentazione:"metano"

    },
    {
        marca:"ford",

        modello:"fiesta",

        alimentazione:"gpl"

    },
    {
        marca:"ford",

        modello:"puma",

        alimentazione:"elettrica"

    },
    {
        marca:"carroarmato",

        modello:"tiger",

        alimentazione:"benzina"

    },
    {
        marca:"fiat",

        modello:"tipo",

        alimentazione:"gpl"

    },
    {
        marca:"fiat",

        modello:"marea",

        alimentazione:"elettrica"

    },
    {
        marca:"renault",

        modello:"scenic",

        alimentazione:"diesel"

    }
]


const autoBenzina=auto.filter((element) => element.alimentazione === "benzina" );

console.log(autoBenzina)

const autoDiesel=auto.filter((element) => element.alimentazione === "diesel" );

console.log(autoDiesel)

const autoDiverse=auto.filter((element) => element.alimentazione !== "diesel" && element.alimentazione !== "benzina" );

console.log(autoDiverse)
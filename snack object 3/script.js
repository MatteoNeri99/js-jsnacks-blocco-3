// Crea un array di oggetti che rappresentano delle persone, 10.
// Ogni persona ha un nome, un cognome e un'età.

// Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.


const persona=[
   
    {

        nome:"andrea",

        cognome:"rossi",

        eta:"22"


    },
    {

        nome:"edoardo",

        cognome:"adreotti",

        eta:"12"


    },
    {

        nome:"claudio",

        cognome:"celentano",

        eta:"45"


    },
    {

        nome:"corrado",

        cognome:"neri",

        eta:"21"


    },
    {

        nome:"fabio",

        cognome:"fernando",

        eta:"15"


    },
    {

        nome:"cristina",

        cognome:"di muzio",

        eta:"17"


    },
    {

        nome:"umberto",

        cognome:"russo",

        eta:"22"


    },
    {

        nome:"filomena",

        cognome:"fernandez",

        eta:"16"


    },
    {

        nome:"igor",

        cognome:"de panfilis",

        eta:"18"


    },
    {

        nome:"matteo",

        cognome:"di matteo",

        eta:"44"


    },

];


const puòGuidare=[];

persona.forEach((element)=>{

    if(element.eta < 18){
        puòGuidare.push(element.nome+ " " + element.cognome + " " + "essendo che ha un'età minore di 18 non puo guidare")

    }else{

        puòGuidare.push(element.nome + " " + element.cognome +  " " +"essendo che ha un'età maggiore di 18  può guidare")
    }

});

console.log(puòGuidare)
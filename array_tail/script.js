const numeri=[];
let numeriCasuali=Number.parseInt(prompt("quanti numeri devono essere presenti nel array?"),10);

if (numeriCasuali < 6){
    numeriCasuali=10
}
for(index=0; index<numeriCasuali; index++){

    let numeriMiei=Math.floor(Math.random()*100) + 1;

    numeri.push(numeriMiei);
    
}
console.log(numeri);

for (index=0; index< numeriCasuali - 5 ; index++){
    numeri.shift()
    
}
console.log(numeri)



    
 

  




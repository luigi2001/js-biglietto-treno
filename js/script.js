
var chilometri = parseFloat(prompt('Quanti chilometri vuoi percorrere?'));
/*console.log (chilometri);*/

var eta = parseInt(prompt('Età del passeggero:'));
/*console.log (eta);*/

var somma = 0.21 * chilometri;
/*console.log (somma);*/

var scontoMi = somma * 20 / 100;

var scontoMa = somma * 40 / 100;

var prezzo;

if (eta < 18){
    prezzo = somma - scontoMi;
} else if (eta > 65){
    prezzo = somma - scontoMa;
} else{
    prezzo = somma;
}

var prezzoFinale = prezzo.toFixed (2);
document.getElementById ('prezzo').innerHTML = prezzoFinale;
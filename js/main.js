// CHIEDERE NUMERO KM DA PERCORRERE
const kmTragitto = Number(prompt('Quanti km vuoi percorrere?'));
// CHIEDERE ETà DEL PASSEGGERO
const etaPasseggero = Number(prompt('Quanti anni hai?'))
// CALCOLO PREZZO BIGLIETTO (0.21€ al KM - SCONTI)
let prezzoBiglietto;
if (etaPasseggero < 18) {
    prezzoBiglietto = ((kmTragitto * 0.21) - (kmTragitto * 0.21 / 100 * 20)).toFixed(2);
} else if (etaPasseggero > 65) {
    prezzoBiglietto = ((kmTragitto * 0.21) - (kmTragitto * 0.21 / 100 * 40)).toFixed(2);
} else {
    prezzoBiglietto = (kmTragitto * 0.21).toFixed(2);
}
console.log(prezzoBiglietto)
// OUTPUT
const title = document.getElementById("title").innerHTML;

document.getElementById("title").innerHTML = `${title} ${prezzoBiglietto}€`

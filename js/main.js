// CHIEDERE NUMERO KM DA PERCORRERE
const kmTragitto = Number(prompt('Quanti km vuoi percorrere?'));
// CHIEDERE ETà DEL PASSEGGERO
const etaPasseggero = Number(prompt('Quanti anni hai?'))
// CALCOLO PREZZO BIGLIETTO (0.21€ al KM - SCONTI)
let prezzoBiglietto;
if (etaPasseggero < 18) {
    prezzoBiglietto = (kmTragitto * 0.21) - (kmTragitto * 0.21 / 100 * 20);
} else if (etaPasseggero > 65) {
    prezzoBiglietto = (kmTragitto * 0.21) - (kmTragitto * 0.21 / 100 * 40);
} else {
    prezzoBiglietto = kmTragitto * 0.21;
}

console.log(prezzoBiglietto)
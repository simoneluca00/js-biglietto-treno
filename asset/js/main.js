// AVVISO DI COMPILARE I CAMPI SOLO CON TASTIERINO NUMERICO
alert("ATTENZIONE! Compilare i campi solo con tastierino numerico.")

// km DA PERCORRERE
let chilometriViaggio = prompt("Quanti chilometri vuoi percorrere?");

// ANNO CORRENTE
let annoCorrente = 2022;

// ANNO DI NASCITA DEL PASSEGGERO
let annoNascita = prompt("In che anno sei nato?");

// ETA' DEL PASSEGGERO
let etàPasseggero = (annoCorrente - annoNascita);
console.log(etàPasseggero);

// MOLTIPLICAZIONE PER IL CALCOLO DEL PREZZO BASATO SUI km
let prezzoStandard = chilometriViaggio * 0.21;
let prezzoStandard2 = prezzoStandard.toFixed(2);
// let prezzoStandard2 = Math.round((prezzoStandard + Number.EPSILON)* 100) / 100; /-----/ (METODO ALTERNATIVO PER ARROTONDARE) 
console.log(prezzoStandard2);

// CALCOLO DEL PREZZO PER I MINORENNI (sconto del 20%) 
let prezzoMinorenni = prezzoStandard - (( prezzoStandard * 20 ) / 100);
let prezzoMinorenni2 = prezzoMinorenni.toFixed(2);
// let prezzoMinorenni2 = Math.round((prezzoMinorenni + Number.EPSILON)* 100) / 100; /-----/ (METODO ALTERNATIVO PER ARROTONDARE)
console.log(prezzoMinorenni2);

// CALCOLO DEL PREZZO PER GLI OVER 65 (sconto del 40%)
let prezzoAnziani = prezzoStandard - (( prezzoStandard * 40 ) / 100);
let prezzoAnziani2 = prezzoAnziani.toFixed(2);
// let prezzoAnziani2 = Math.round((prezzoAnziani + Number.EPSILON)* 100) / 100; /-----/ (METODO ALTERNATIVO PER ARROTONDARE)
console.log(prezzoAnziani2);


// CONDIZIONI PER LO SCONTO IN BASE ALL'ETA'
if ( etàPasseggero < 18 ) {
    document.getElementById("calculated_price").innerHTML = `Il versamento da effettuare per il tuo viaggio è di: ${prezzoMinorenni2}&euro; ( IVA Compresa ).`;
  }

  else if ( etàPasseggero > 65 ) {
    document.getElementById("calculated_price").innerHTML = `Il versamento da effettuare per il tuo viaggio è di: ${prezzoAnziani2}&euro; ( IVA Compresa ).`;
  }

  else {
    document.getElementById("calculated_price").innerHTML = `Il versamento da effettuare per il tuo viaggio è di: ${prezzoStandard2}&euro; ( IVA Compresa ).`;
  }



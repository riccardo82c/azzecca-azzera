/* Azzecca e azzera
  1. Scrivi un programma che dato un array di 100 elementi, lo riempia con numeri interi casuali da 1 a 50.
  1. Scelta della modalità
  2 Permetti all'utente di inserire un numero
  2.1 Azzera tutti i gli elementi nell'array principale che sono suoi multipli.
  3. Procedi chiedendo un altro numero (ciclo finchè tutti i num sono = 0)
  
*/

// 1. inserisco 100 numeri random (compresi tra 1 e 50) per fillare un array

var array = [];
var left = 50;

for (let i = 0; i < 100; i++) {
  array[i] = numRandom(2, 50);
}

console.log(`L'array iniziale ${array}`);

// 1.1 scelta dell modalità
do {
  var modalita = parseInt(prompt("Premi 1 facile, 2 DIFFICILE, 3 spiegazione"));
  if (modalita == 3) {
    alert(
      "Modalità facile: i numeri primi vengono azzerati automaticamente, Modalità difficile: i numeri primi NON vengono azzerati automaticamente!!!"
    );
  }
} while (modalita != 1 && modalita != 2);

// 2. inserisco un numero da prompt > 1
do {
  var left = array.length - contaZero(array);
  var numero = parseInt(
    prompt(`Inserisci un numero da 2 a 50, mancano ${left} numeri`)
  );

  while (numero <= 1 || numero > 50) {
    var numero = parseInt(prompt("T'ho detto un numero da 2 a 50!!!!"));
  }
  // 2.1 azzero tutti i multipli dell'array inserito
  // e i numeri primi se modalità = facile
  for (let i = 0; i < array.length; i++) {
    if (modalita == 1) {
      if (array[i] % numero == 0 || isPrimeNumber(array[i])) {
        array[i] = 0;
      }
    } else {
      if (array[i] % numero == 0) {
        array[i] = 0;
      }
    }
  }

  console.log(`array finale ${array}`);
} while (contaZero(array) < array.length);

// fine del programma all'uscita del ciclo significa che l'array è tutto a 0
alert("Complimenti, array terminato");

/* Funzioni */
// funzione che mi crea un numero random intero compreso fra due interi
function numRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione che verifica se un num è primo
function isPrimeNumber(number) {
  if (number == 1 || number == 2) {
    return true;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

// funzione che conta num di 0 presenti in un array

function contaZero(array) {
  var contatore = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == 0) {
      contatore++;
    }
  }
  return contatore;
}

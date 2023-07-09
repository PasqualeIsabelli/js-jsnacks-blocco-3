// Creo un array vuoto
const numbers = [];

// let red = document.createElement("div.red");
// let green = document.createElement("div.green");


for (i = 0; i < 100; i++){
  // Genero 100 numeri random e li pusho all'interno dell'array "numbers"
  let num = Math.floor(Math.random()* 100) + 1;
  numbers.push(num);
  
  // Imposto il ciclo con condizione per numeri dispari e pari
  if (num % 2 === 0) {
    // Stampo i numeri pari all'interno del div verde
    document.getElementById("green").innerHTML += ` ${num}`;
  
  } else {
    // Stampo i numeri dispari all'interno del div rosso
    document.getElementById("red").innerHTML += ` ${num}`;
  }
}

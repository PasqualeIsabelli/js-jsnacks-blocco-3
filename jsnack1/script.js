// Creo un array vuoto
const userNumbers = [];
// Stabilisco un valore somma pari a 0
sum = 0;

// Ciclo while con condizione somma minore o uguale a 49
while (sum <= 49){
    // Chiedo all'utente di inserire dei numeri tramite prompt
    numbers = parseInt(prompt("Inserisci un numero"));
    // Pusho i numeri all'interno dell'array "userNumbers"
    userNumbers.push(numbers);

    // Effettuo la somma tra i numeri all'interno dell'array
    sum += numbers;
}

// Stampo l'array nella console
console.log(userNumbers);
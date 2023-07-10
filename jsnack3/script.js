// Chiedo all'utente il numero di array che vuole creare
const n = parseInt(prompt("Inserisci il numero di array da creare:"));

// Genero il numero di array inserito dall'utente attraverso un ciclo
for (let i = 0; i < n; i++) {
    const nArray = [];

    // Imposto che ogni array dovrà avere all'interno 10 numeri
    for ( let i = 0; i < 10; i++){
        // Randondomizzo i 10 numeri all'interno di ogni array (numeri casuali tra 1 e 100)
        const numbers = Math.floor(Math.random() * 100) +1;
        // Pusho i numeri generati all'interno dell'array
        nArray.push(numbers);
    }
    // Stampo gli array generati
    console.log(nArray);
}
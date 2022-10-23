// ****L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:

// con difficoltà 1 => tra 1 e 100

// con difficoltà 2 => tra 1 e 81

// con difficoltà 3 => tra 1 e 49
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

// I numeri nella lista delle bombe non possono essere duplicati.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.

// La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
// **BONUS:**

// 1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle

// ****2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste


const container = document.querySelector(`.container`);
const numElements = 100
const numberSquare = []
//creo quadrato

function createSquare(val) {
  const square = document.createElement(`div`)
  square.className = `square`;
  console.log(square);
  square.addEventListener('click', clickSquare);
  console.log(this.idElement);
  container.append(square);

  function clickSquare() {
    square.innerText = val;
    square.idElement = val;
    this.classList.add(`celeste`)
    console.log(`ho cliccato:`);
  }

};



console.log(numElements);


for (let i = 0; i < numElements; i++) {
  createSquare(i + 1);
}
let number = 0;
let space = " "
let hash = "#"

number = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

function pyramid(number) {
  for(let count = 1; count <= number; count++){
    console.log(`${space.repeat(number-count)}${hash.repeat(count)}`);
  }
}

pyramid(number);

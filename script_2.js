let number = 0;


number = prompt("De quel nombre veut tu calculer la factorielle ?");

function factorielle( number) {
  let total = number;
  while (number > 1){
  total = total * (number - 1);
  number--
  }
  return total;
}

console.log(factorielle(number));
alert(factorielle(number));
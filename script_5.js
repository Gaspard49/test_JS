const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 6 },
  { title: 'Les frères Karamazov', id: 450911, rented: 2 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 2 },
  { title: 'Guerre et Paix', id: 748147, rented: 1 }
];

/*
Est-ce que tous les livres ont été au moins empruntés une fois ?
Quel est livre le plus emprunté ?
Quel est le livre le moins emprunté ?
Trouve le livre avec l'ID: 873495 ;
Supprime le livre avec l'ID: 133712 ;
Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).
*/
console.log('Est-ce que tous les livres ont été au moins empruntés une fois ?')

function isRented(book) {
  return book.rented === 0;
}

let notRented = books.find(isRented);


if (notRented === undefined){
  console.log('Oui')
}
else {
  console.log('Non')
}



console.log('Quel est livre le plus emprunté ?');


let maxRented = Math.max.apply(Math, books.map(function(o) { return o.rented; }));

console.log(books.find(x => x.rented === maxRented));


console.log("Trouve le livre avec l'ID: 873495");
console.log(books.find(x => x.id === 873495));




console.log("Supprime le livre avec l'ID: 133712");


function removeElement(books) {
  book = books.find(x => x.id === 133712);
  let index = books.indexOf(book);
  if (index > -1) {
      books.splice(index, 1);
  }
}
removeElement(books);

console.log(books);


console.log("Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé).");

books.sort(function(a, b){
  var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase()
  if (nameA < nameB) //sort string ascending
      return -1 
  if (nameA > nameB)
      return 1
  return 0 //default return value (no sorting)
});

console.log(books);
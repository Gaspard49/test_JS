const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

console.log("Born in the 70's:");
console.log(entrepreneurs.filter(x => x.year >= '1970' && x.year < '1980'));




console.log("Entrepreneurs Full Names:");
fullNames =  entrepreneurs.map( entrepreneurs => `${ entrepreneurs.first} ${ entrepreneurs.last}`);
console.log(fullNames);


console.log("Entrepreneurs Current Ages:");
ages =  entrepreneurs.map( entrepreneurs => `${ entrepreneurs.first} ${ entrepreneurs.last}: ${ 2019 - entrepreneurs.year} years old`);
console.log(ages);



entrepreneurs.sort(function(a, b){
  var nameA=a.last.toLowerCase(), nameB=b.last.toLowerCase()
  if (nameA < nameB) //sort string ascending
      return -1 
  if (nameA > nameB)
      return 1
  return 0 //default return value (no sorting)
});


console.log("Entrepreneurs Last name by alphabetical order:");
console.log(entrepreneurs);
let myArray = 'CCGUCGUUGCGCUACAGC';


let translatedArray = [];



while (myArray.length > 0){

    dna = myArray.slice(0, 3);


function translateDna(dna) {
    if (dna === 'UCU' || dna === 'UCA' || dna === 'UCG' || dna === 'AGU' || dna === 'AGC'){
        translatedArray.push("Sérine")
    }
    else if (dna === 'CCU' || dna === 'CCC' || dna === 'CCA' || dna === 'CCG'){
        translatedArray.push("Proline")
    }
    else if (dna === 'UUA' || dna === 'UUG'){
        translatedArray.push("Leucine")  
    }
    else if (dna === 'UUU' || dna === 'UUC'){
        translatedArray.push("Phénylalanine")   
    }
    else if (dna === 'CGU' || dna === 'CGC' || dna === 'CGA' || dna === 'CGG' || dna === 'AGA' || dna === 'AGG'){
        translatedArray.push("Arginine") 
    }

    else if (dna === 'UAU' || dna === 'UAC'){
        translatedArray.push("Tyrosine") 
    }

}

translateDna(dna);
myArray = myArray.substr(3);

}
console.log("Translate 'CCGUCGUUGCGCUACAGC'");
console.log(translatedArray.join('-'));



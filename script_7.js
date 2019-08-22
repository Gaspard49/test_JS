let answer = "";


function Bot(answer){
    answer = prompt("Bonjour, je suis un Bot pas drole, pose ta question ou tape 'fini' pour sortir.");
    while(answer !== "fini") {

        let lastChar = answer.charAt(answer.length - 1)

        if (lastChar === '?'){
            answer = prompt('Ouai Ouais...');       
        }
        else if (answer === answer.toUpperCase() && answer.length !== 0){
            answer = prompt('Pwa, calme-toi...'); 
        }
        else if (answer.includes("Fortnite") || answer.includes("fortnite") ){
            answer = prompt("on s' fait une partie soum-soum ?"); 
        }
        else if (answer.length === 0){
            answer = prompt("t'es en PLS ?"); 
        }
        else {
            answer = prompt("balek. Tape 'fini' pour sortir"); 
        }
    }

} 

Bot(answer)

alert("Fait par Gaspard, salut!") 

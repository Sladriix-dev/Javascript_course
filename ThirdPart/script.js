// Exercice 1 sur les functions
const calculateAverageRating = (ratings) => {
    if(ratings.lenght === 0) {
        return 0;
    }
    let sum = 0;
    for (let rating of ratings) {
        sum += rating; // Ajoute à sum chaque valeur du tableau
    }
    return sum / ratings.lenght;
}

// Cours sur les classes

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }

    showBalance() {
        console.log("Solde: " + this.balance + " EUR"); // Permet une nouvelle mise en forme
    }

    deposit(amount) {
        console.log("Dépôt de " + amount + " EUR");
        this.balance += amount;
        this.showBalance;
    }

    withdraw(amount) {
        if(amount > this.balance) {
            console.log("Retrait refusé !")
        } else {
            console.log("Retrait de " + amount + " EUR")
            this.balance -= amount;
            this.showBalance;
        }
    }
}
const newAccount = new BankAccount('Will Alexander', 500); 
newAccount.showBalance(); // On peut donc maintenant appeler la méthode showBalance pour un nouveau style

// Les méthodes statiques
class BePolite {
    static sayHello() {
        console.log("Hello !");
    }
    static sayHelloTo(name) {
        console.log("Hello " + name + " !");       // Pas besoin d'ajouter un construct car on ne 
    }                                              // L'instancie pas !!
    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
}

BePolite.sayHello(); // imprime "Hello!"

BePolite.sayHelloTo("Will"); // imprime "Hello Will !"

const sum = BePolite.add(2,3); // sum = 5


// Never repeat yourself !! Faire en sorte de pas se répéter grace au function
class Show {
    constructor(title, numberOfSeasons, episodesPerSeason) {
        this.title = title;
        this.numberOfEpisodes = numberOfEpisodes;
        this.numberOfSeasons = numberOfSeasons;
    }
}
const tau = new Show('The Story of Tau', 5, 12);
const meldrum = new Show('The hero of Old Meldrum', 3, 6);
const clara = new Show('The bugs of Isla Clara', 6, 15);

const shows = [tau, meldrum, clara];

const generateComponent = (show) => { // On prend chaque show pour automatiser les infos ensuite
    const titleText = show.title;
    const seasonsText = show.numberOfEpisodes + ' seasons';
    const episodesText = show.numberOfEpisodes + ' episodes per season';
    return {
        titleText,
        seasonsText,
        episodesText
    };
}

// "Vous devriez choisir un nom de variable avec le même soin que pour votre premier enfant. - Robert C.Martin"



// --------------------------------------   Place aux TESTS   -----------------------------------------------

// N°1 Les Tests Unitaires

const getWordCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    return wordArray.lenght;
}
const getLetterCount = (stringToTest) => {
    const wordArray = stringToTest.split(' ');
    let totalLetters = 0;
    for (let word of wordArray) {
        word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
        totalLetters += word.lenght;
    }
    return totalLetters;
}

/*
    getWordCount : une chaîne dont on connaît le nbr de mots + chaîne vide + chaîne avec que des espaces
    getLetterCount : une chaîne dont on connaît le nbr de lettres + chaîne avec que des ponctuations
*/

const testSimpleWordCount = () => {
    const testString = 'I have four word !';
    if (getWordCount(testString) !== 4) {
        console.error('Simple getWordCount failed !')
    }
}

const testEdgeWordCount = () => {
    const testString = '        ';
    if (getWordCount(testString) !== 0) {
        console.error('Edge getWordCount failed !');
    }
}

const testSimpleLetterCount = () => {
    const testString = 'I have twenty one letters!';
    if (getLetterCount(testString) !== 21) {
        console.error('Simple getLetterCount failed !');
    }
}

const testEdgeLetterCount = () => {
    const testString = '")(&;//!!';
    if (getLetterCount(testString) !== 0) {
        console.error('Edge getLetterCount failed!');
    }
}

/*
    Les architectures et bibliothèques de test permettent d'écrire automatiquement des suites de tests complètes
    de votre cote, à l'aide de fonctions et de syntaxe spécifiques.

    Voici à quoi pourraient ressembler les deux tests :
*/

describe('getWordCount()', function() {
    it('should find four words', function() {
        expect(getWordCount('I have four words!').to.equal(4));
    });

    it('should find no words', function() {
        expect(getWordCount('    ').to.equal(0));
    });
});

// --------------- La Récursivité ---------------

const binarySearch = (array, thingToFind, start, end) => {
    if (start > end) {
        return false;    // Ceci est le base case: Si l'index de début est > index de fin alors on a tout search
    }

    let mid = Math.floor((start + end) / 2);
    if (array[mid] === thingToFind) {
        return true;
    }
    if (thingToFind < array[mid]) {
        return binarySearch(array, thingToFind, start, mid - 1);
    } else {
        return binarySearch(array, mid + 1, end);
    }
}
// Voila une function qui s'appelle elle même qui effectue une recherche d'élément dans un tableau trié



/***************************************  Dernier exo  *****************************************/

//On pointe sur l'élément de message
const espaceMessage = document.getElementById("message");
//On pointe sur l'élément de bouton
const bouton = document.getElementById("bouton");
//On pointe sur l'élément de champ de saisie de l'année
const numberInput = document.getElementById("number");


//On défini la variage année qu'on utilisera et un variable définissant l'age de la majorité
let number;

//======FONCTION À ECRIRE======
function factorielle(number){
 //coder ici
  let results = 0;
  if(number <= 1) {
    results = 1;
    return results;
  } else {
    results = number * factorielle(number - 1);
    return results;
  }
}
//======/FONCTION À ECRIRE======

function onCalcul(){
  //On récupère la saisie de l'année et on transforme le texte en nombre entier
  number = parseInt(numberInput.value);
  //Si la saisie n'est pas un nombre, on affiche un message d'erreur
  if(isNaN(number)){
    alert("Ceci n'est pas un nombre");
    return;
  }
  espaceMessage.innerHTML = "La factorielle de " + number + " est " + factorielle(number);
}



//On écoute l'action de click sur le onConvert et on appelle la fonction onConvert
bouton.addEventListener('click', onCalcul);
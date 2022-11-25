let numberOfSeasons = 6;
let numberOfEpisodes = 12;

let totalCDs = 67;
let totalVinyls = 34;
let totalMusic = totalCDs + totalVinyls;

let cookiesInJar = 10;
let cookiesRemoved = 2;
let cookiesLeftInJar = cookiesInJar - cookiesRemoved;

cookiesInJar -= 2; // Il reste 8 cookies
cookiesInJar += 12; // Il y a maintenant 20 cookies

let numberOfLikes = 10;
numberOfLikes++; // cela fait 11
numberOfLikes--; // On revient a 10

let costPerProduct = 20;
let numberOfProducts = 5;
let totalCost = costPerProduct * numberOfProducts;
let averageCostPerProduct = totalCost / numberOfProducts

let numberOfCats = 2;
numberOfCats *= 6; // 2*6 cela vaut 12
numberOfCats /= 3; // 12/3 cela vaut 4


let paragraph = document.getElementById('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season`;

/* une classe est un modèle pour un objet dans le code. Elle permet de construire plusieurs objets du même type (appelés instances de la même classe) plus facilement, rapidement et en toute fiabilité.
*/

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
// Maintenant que la classe est terminée, vous pouvez créer des instances par le mot clé "new"

let myBook = new Book("L'histoire de Tau", "Will Alexander", 250);
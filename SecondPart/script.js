let numberOfSeasons = 6;
let numberOfEpisodes = 12;
let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} seasons, ${numberOfEpisodes} episodes per season`;

try {
    addlert("Welcome guest"); // le code a tester
}
catch(err) {
    document.getElementById("debug").innerHTML = err.message; // Comment on renvoie l'erreur
}
// Ce code permet de debug 


const user = {
    name: "Bob",
    nation: "Scottish",
    accountlevel: "prime"
};

let welcomeMessage = "";

switch (user.accountlevel) {
    case "Will":
        welcomeMessage = "Hi Will";
        break;
    case "Scottish":
        welcomeMessage = "Blablabla";
        break;
    case "normal":
        welcomeMessage = "Welcome back";
        break;
    case "prime":
        welcomeMessage = "Sale riche va";
        break;
    default:
        welcomeMessage = "Hello there"
}

console.log(welcomeMessage);

for (let i = 0; i < 5; i++) {
    console.log("Oh hey");
}
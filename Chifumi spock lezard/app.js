let scoreJoueur = 0;
let scoreOrdi = 0;

let scoreJoueurSpan = document.getElementById("score-joueur");
let scoreOrdiSpan = document.getElementById("score-ordi");
let resultatP = document.querySelector(".resultat > p");
let resultatWin = document.querySelector(".resultatWin");
let pierreDiv = document.getElementById("p");
let feuilleDiv = document.getElementById("f");
let ciseauxDiv = document.getElementById("c");
let spockDiv = document.getElementById("s");
let lezardDiv = document.getElementById("l");

function getOrdiChoice() {
    const choices = ['p', 'f', 'c', 's', 'l'];
    const randomNumber = (Math.floor(Math.random() * 5));
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "p") return "Pierre";
    if (letter === "f") return "Feuille";
    if (letter === "c") return "Ciseaux";
    if (letter === "s") return "Spock";
    return "Lézard";
}
function genreAttaque(joueurChoix, ordiChoix) {
    switch (joueurChoix + ordiChoix) {
        case "pl":
        case "lp":
            return "écrase";


        case "ls":
        case "sl":
            return "empoisonne";


        case "sc":
        case "cs":
            return "casse";


        case "cf":
        case "fc":
            return "coupe";


        case "fp":
        case "pf":
            return "recouvre";


        case "pc":
        case "cp":
            return "emousse";


        case "sf":
        case "fs":
            return "discredite";


        case "cl":
        case "lc":
            return "decapite";


        case "sp":
        case "ps":
            return "vaporise";


        case "lf":
        case "fl":
            return "mange";

        case "ll":
        case "ff":
        case "ss":
        case "pp":
        case "cc":
            return "ne fait rien sur";
    }
}

function gagne(joueurChoix, ordiChoix) {
    scoreJoueur++;
    scoreJoueurSpan.innerHTML = scoreJoueur;
    scoreOrdiSpan.innerHTML = scoreOrdi;
    const joueurMot = "joueur".fontsize(3).fontcolor("#E25B1A");
    const ordiMot = "ordinateur".fontsize(3).fontcolor("#E25B1A");
    resultatP.innerHTML = `${convertToWord(joueurChoix)}${joueurMot} ${genreAttaque(joueurChoix, ordiChoix)} ${convertToWord(ordiChoix)}${ordiMot}`;
    resultatWin.innerText = `Bien joué ! 👍`
}
function perdu(joueurChoix, ordiChoix) {
    scoreOrdi++;
    scoreJoueurSpan.innerHTML = scoreJoueur;
    scoreOrdiSpan.innerHTML = scoreOrdi;
    const joueurMot = "joueur".fontsize(3).fontcolor("#E25B1A").style.fontStyle = "italic";
    const ordiMot = "ordinateur".fontsize(3).fontcolor("#E25B1A").style.fontStyle = "italic";
    resultatP.innerHTML = `${convertToWord(ordiChoix)}${ordiMot} ${genreAttaque(joueurChoix, ordiChoix)} ${convertToWord(joueurChoix)}${joueurMot}.`;
    resultatWin.innerText = `Dommage ... 👎`
}
function egalite(joueurChoix, ordiChoix) {
    const joueurMot = "joueur".fontsize(3).fontcolor("#E25B1A").style.fontStyle = "italic";
    const ordiMot = "ordinateur".fontsize(3).fontcolor("#E25B1A").style.fontStyle = "italic";
    resultatP.innerHTML = `${convertToWord(joueurChoix)}${joueurMot} ${genreAttaque(joueurChoix, ordiChoix)} ${convertToWord(ordiChoix)}${ordiMot}.`;
    resultatWin.innerText = `Egalité !`
}

function game(joueurChoix) {
    const ordiChoix = getOrdiChoice();
    switch (joueurChoix + ordiChoix) {
        case "pp":
        case "ff":
        case "cc":
        case "ss":
        case "ll":
            egalite(joueurChoix, ordiChoix);
            break;
        case "ls":
        case "lf":
        case "sc":
        case "sp":
        case "cf":
        case "cl":
        case "fp":
        case "fs":
        case "pl":
        case "pc":
            gagne(joueurChoix, ordiChoix);
            break;
        case "sl":
        case "fl":
        case "cs":
        case "ps":
        case "fc":
        case "lc":
        case "pf":
        case "sf":
        case "lp":
        case "cp":
            perdu(joueurChoix, ordiChoix);
            break;
    }
}

function main() {
    pierreDiv.addEventListener('click', function () {
        game("p");
    });
    feuilleDiv.addEventListener('click', function () {
        game("f");
    });
    ciseauxDiv.addEventListener('click', function () {
        game("c");
    });
    spockDiv.addEventListener('click', function () {
        game("s");
    });
    lezardDiv.addEventListener('click', function () {
        game("l");
    });
}

main();


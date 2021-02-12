const joueurs = ['X','O'];
let joueurTour = 0;
let gagne = false;

function rejouer()
{
    history.go(0)
}

function jouer()
{
    const e = this.event;
    console.log(document.getElementById("case1").innerText);
    if(gagne){
        return;
    }
    // on verifie que le joueur joue sur une case vide si faux on averti et on casse. Si vrai on inscrit le symbole
    if(e.target.innerText == 'X' || e.target.innerText == 'O')
    {
        document.getElementById("js-tour-joueur").innerText = "Tour du joueur " + (joueurTour+1) + "\n Selectionnez une case vide";
        return;
    }else {
        e.target.innerText = joueurs[joueurTour];
    }

    // changer de joueur
    if (joueurTour === 0)
    {
        joueurTour = 1;
        document.getElementById("js-tour-joueur").innerText = "Tour du joueur 2";
    }else{
        joueurTour =0;
        document.getElementById("js-tour-joueur").innerText = "Tour du joueur 1";
    }


    // on recupere toute les cases
    let case1 = document.getElementById("case1").innerText;
    let case2 = document.getElementById("case2").innerText;
    let case3 = document.getElementById("case3").innerText;
    let case4 = document.getElementById("case4").innerText;
    let case5 = document.getElementById("case5").innerText;
    let case6 = document.getElementById("case6").innerText;
    let case7 = document.getElementById("case7").innerText;
    let case8 = document.getElementById("case8").innerText;
    let case9 = document.getElementById("case9").innerText;
    console.log(case1);
    //verif si gagne
    if((case1 == 'X' && case2 == 'X' && case3 == 'X') || (case1 == 'O' && case2 == 'O' && case3 == 'O'))
    {
        if(case1 == 'X'){
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 1 GAGNANT";
        }else{
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 2 GAGNANT";
        }
        gagne = true;
    }
    if((case4 == 'X' && case5 == 'X' && case6 == 'X') || (case4 == 'O' && case5 == 'O' && case6 == 'O'))
    {
        if(case4 == 'X'){
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 1 GAGNANT";
        }else{
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 2 GAGNANT";
        }
        gagne = true;
    }
    if((case7 == 'X' && case8 == 'X' && case9 == 'X') || (case7 == 'O' && case8 == 'O' && case9 == 'O'))
    {
        if(case7 == 'X'){
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 1 GAGNANT";
        }else{
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 2 GAGNANT";
        }
        gagne = true;
    }
    if((case1 == 'X' && case4 == 'X' && case7 == 'X') || (case1 == 'O' && case4 == 'O' && case7 == 'O'))
    {
        if(case1 == 'X'){
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 1 GAGNANT";
        }else{
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 2 GAGNANT";
        }
        gagne = true;
    }
    if((case2 == 'X' && case5 == 'X' && case8 == 'X') || (case2 == 'O' && case5 == 'O' && case8 == 'O'))
    {
        if(case2 == 'X'){
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 1 GAGNANT";
        }else{
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 2 GAGNANT";
        }
        gagne = true;
    }
    if((case3 == 'X' && case6 == 'X' && case9 == 'X') || (case3 == 'O' && case6 == 'O' && case9 == 'O'))
    {
        if(case3 == 'X'){
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 1 GAGNANT";
        }else{
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 2 GAGNANT";
        }
        gagne = true;
    }
    if((case1 == 'X' && case5 == 'X' && case9 == 'X') || (case1 == 'O' && case5 == 'O' && case9 == 'O'))
    {
        if(case1 == 'X'){
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 1 GAGNANT";
        }else{
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 2 GAGNANT";
        }
        gagne = true;
    }
    if((case3 == 'X' && case5 == 'X' && case7 == 'X') || (case3 == 'O' && case5 == 'O' && case7 == 'O'))
    {
        if(case3 == 'X'){
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 1 GAGNANT";
        }else{
            document.getElementById("js-tour-joueur").innerText = "JOUEUR 2 GAGNANT";
        }
        gagne = true;
    }
    if(case1!="" && case2!="" && case3!="" && case4!="" && case5!="" && case6!="" && case7!="" && case8!="" && case9!="" && gagne==false)
    {
        document.getElementById("js-tour-joueur").innerText = "MATCH NUL";
        gagne=true;
    }
    if(gagne == true)
    {
        let rejouerBtn =  document.createElement("button");
        //rejouerBtn.setAttribute("class","rejouer");
        rejouerBtn.classList.add("rejouer");
        rejouerBtn.innerText = "Rejouer";
        rejouerBtn.addEventListener("click",rejouer);
        document.getElementById("js-tour-joueur").insertAdjacentElement("afterend", rejouerBtn);

    }


}




/* const buttonsNodeList = document.querySelectorAll('.my-button-class') // Retourne une NodeList -> https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
const buttons = Array.from(buttonsNodeList) // https://developer.mozilla.org/fr/docs/Web/API/NodeList: Array.from sert à convertir une NodeList (objet renvoyé par querySelectorAll) vers un tableau
for (let button of buttons) {
    button.addEventListener('click', play)
}

document.querySelectorAll('.my-button-class').forEach(button => {
    button.addEventListener('click', play)
})
*/
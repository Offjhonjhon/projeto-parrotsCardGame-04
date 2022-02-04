let quantidadeCartas = 0;
let gifs = ['bobrossparrot','bobrossparrot','explodyparrot','explodyparrot','fiestaparrot','fiestaparrot','metalparrot','metalparrot','revertitparrot','revertitparrot','tripletsparrot','tripletsparrot','unicornparrot','unicornparrot'];

let cartaHtml = `   <div class="carta" onclick="turnCard(this), select(this)">
                        <div class="front face" >
                            <img src="imgs/front.png" alt="">
                        </div>

                        <div class="back face">
                        </div>
                    </div>
`;

let card1 = null;
let card2 = null;
let parentCard1 = null;
let parentCard2 = null;


pegarNumeroCartas();
colocarCartas();

// pega a quantidade de cartas a ser inserida 
function pegarNumeroCartas() {
    quantidadeCartas = prompt("Quantas cartas vc quer?");

    // confere se a quantidade é um valor par entre 2 e 14
    if ((quantidadeCartas < 2) || (quantidadeCartas > 14) || ((quantidadeCartas % 2) !== 0)) {
        return pegarNumeroCartas();
    }
}

// coloca as cartas na tela
function colocarCartas() {
    let main = document.querySelector("main");
    for (let i = 0; i < quantidadeCartas; i++) {
        main.innerHTML += cartaHtml;
    }
    addGifs();    
}


// adciona os gifs
function addGifs(){
    // cria uma array que direciona as posições de cada gif
    let gifPosition = [];
    let counter = 0;
    for(let j = 0; j < quantidadeCartas; j++){
        gifPosition[j] = counter;
        counter ++;
    }
    // torna a array aleatoria
    gifPosition = shuffleArray(gifPosition);

    // seleciona a parte de tras da carta
    let objectCard = document.querySelectorAll(".back");
    
    // insere os gifs
    for(let i = 0; i < (quantidadeCartas); i++){
        objectCard[gifPosition[i]].innerHTML = `<img src="gifs/${gifs[i]}.gif"></img>`;
    }
}


// reorganiza a array aleatoriamente
function shuffleArray(initialArray){
    let newPosition, temporaryPosition;

    for(let i = initialArray.length - 1; i > 0; i-- ){
        newPosition = Math.floor(Math.random() * (i + 1));
        temporaryPosition = initialArray[i];
        initialArray[i] = initialArray[newPosition];
        initialArray[newPosition] = temporaryPosition;
    }
    return initialArray;
}

// vira a carta
function turnCard(card){
    // seleciona o front da carta
    let front = card.querySelector(".front");
    front.style.transform = "rotateY(-180deg)";
    // seleciona o back da carta
    let back = card.querySelector(".back");
    back.style.transform = "rotateY(0)";
} 

// desvira a carta
function unturnCard(parentCard1,parentCard2){

    // desvira a primeira carta
    let front1 = parentCard1.querySelector(".front");
    let back1 = parentCard1.querySelector(".back")
    front1.style.transform = "rotateY(0)";
    back1.style.transform = "rotateY(180deg)";

    // desvira a segunda carta
    let front2 = parentCard2.querySelector(".front");
    let back2 = parentCard2.querySelector(".back");
    front2.style.transform = "rotateY(0)";
    back2.style.transform = "rotateY(180deg)";
} 


// seleciona as cartas
function select(card){

    if(card1 === null){
        card1 = card.querySelector(".back");
        parentCard1 = card1.parentNode;
        card1 = card1.innerHTML;
        
    }
    else{
        card2 = card.querySelector(".back");
        parentCard2 = card2.parentNode;
        card2 = card2.innerHTML;
    }       

    if(card1 !== null && card2 !== null && card1 !== card2){
        setTimeout(unturnCard, 500, parentCard1, parentCard2);
        card1 = null;
        card2 = null;
    }
    else if(card1 !== null && card2 !== null && card1 === card2){
        card1 = null;
        card2 = null;
    }
    console.log(card1);
    console.log(card2);
}












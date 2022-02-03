let quantidadeCartas = 0;
let gifs = ['bobrossparrot','bobrossparrot','explodyparrot','explodyparrot','fiestaparrot','fiestaparrot','metalparrot','metalparrot','revertitparrot','revertitparrot','tripletsparrot','tripletsparrot','unicornparrot','unicornparrot'];

let cartaHtml = `   <div class="carta" onclick="turnCard(this)">
                        <div class="front face" >
                            <img src="imgs/front.png" alt="">
                        </div>

                        <div class="back back-face-initial face">
                        </div>
                    </div>
`;


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
    let front = card.querySelector(".front");
    front.classList.add("front-face");

    let back = card.querySelector(".back");
    back.classList.add("back-face");
    back.classList.remove("back-face-initial");
} 







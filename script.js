let cardsQuantity = 0;
const cards = [null, null];
const parentCards = [null, null];
let movementCounter = 0;
let timeCounter = 0;
let interval = null;
let score = 0;

// guarda o valor dos gifs
let gifs = ['bobrossparrot', 'bobrossparrot', 'explodyparrot', 'explodyparrot', 'fiestaparrot', 'fiestaparrot', 'metalparrot', 'metalparrot', 'revertitparrot', 'revertitparrot', 'tripletsparrot', 'tripletsparrot', 'unicornparrot', 'unicornparrot'];

// guarda o valor html das cartas
let cardHtml = `   <div data-identifier="card" class="carta" onclick="turnCard(this), select(this)">
                        <div data-identifier="back-face" class="front face" >
                            <img src="imgs/front.png" alt="">
                        </div>

                        <div data-identifier="front-face" class="back face">
                        </div>
                    </div>
`;

// chama as funções de inicialização
interval = setInterval(timer, 1000);
pickUpNumberCards();
insertCards();


// pega a quantidade de cartas a ser inserida 
function pickUpNumberCards() {
    cardsQuantity = parseInt(prompt("Quantas cartas vc quer? (De 4 a 14 cartas)"));

    // confere se a quantidade é um valor par entre 2 e 14
    if ((cardsQuantity < 4) || (cardsQuantity > 14) || ((cardsQuantity % 2) !== 0)) {
        return pickUpNumberCards();
    }
}

// coloca as cartas na tela
function insertCards() {
    let main = document.querySelector("main");
    for (let i = 0; i < cardsQuantity; i++) {
        main.innerHTML += cardHtml;
    }
    addGifs();
}

// adciona os gifs
function addGifs() {
    // cria uma array que direciona as posições de cada gif
    let gifPosition = [];
    let counter = 0;
    for (let j = 0; j < cardsQuantity; j++) {
        gifPosition[j] = counter;
        counter++;
    }
    // torna a array aleatoria
    gifPosition = shuffleArray(gifPosition);

    // seleciona a parte de tras da carta
    let objectCard = document.querySelectorAll(".back");

    // insere os gifs
    for (let i = 0; i < (cardsQuantity); i++) {
        objectCard[gifPosition[i]].innerHTML = `<img src="gifs/${gifs[i]}.gif"></img>`;
    }
}

// reorganiza a array aleatoriamente
function shuffleArray(initialArray) {
    let newPosition, temporaryPosition;

    // embaralha a array dos gifs
    for (let i = initialArray.length - 1; i > 0; i--) {
        newPosition = Math.floor(Math.random() * (i + 1));
        temporaryPosition = initialArray[i];
        initialArray[i] = initialArray[newPosition];
        initialArray[newPosition] = temporaryPosition;
    }
    // retorna a array embaralhada
    return initialArray;
}

// vira a carta
function turnCard(card) {
    // seleciona o front da carta
    let front = card.querySelector(".front");
    front.style.transform = "rotateY(-180deg)";

    // seleciona o back da carta
    let back = card.querySelector(".back");
    back.style.transform = "rotateY(0)";

    // chama o contador de movimentos
    counter();
}

// desvira a carta
function unturnCard() {

    // desvira a primeira carta
    let front1 = parentCards[0].querySelector(".front");
    let back1 = parentCards[0].querySelector(".back")
    front1.style.transform = "rotateY(0)";
    back1.style.transform = "rotateY(180deg)";

    // desvira a segunda carta
    let front2 = parentCards[1].querySelector(".front");
    let back2 = parentCards[1].querySelector(".back");
    front2.style.transform = "rotateY(0)";
    back2.style.transform = "rotateY(180deg)";
}

// seleciona as cartas 
function select(card) {
    // caso primeira carta vazia adiciona primeira carta
    if (cards[0] === null) {
        cards[0] = card.querySelector(".back");
        parentCards[0] = cards[0].parentNode;
        cards[0] = cards[0].innerHTML;

    }
    // senão adicona a segunda carta e chama a função de comparação
    else {
        cards[1] = card.querySelector(".back");
        parentCards[1] = cards[1].parentNode;
        cards[1] = cards[1].innerHTML;
        verifyCards();
    }
}

// compara se as cartas são iguais
function verifyCards() {
    // caso diferentes, desvira as cartas apos um dado tempo e zera os valores das cartas
    if (cards[0] !== null && cards[1] !== null && cards[0] !== cards[1]) {
        setTimeout(unturnCard, 1000, parentCards[0], parentCards[1]);
        cards[0] = null;
        cards[1] = null;
    }
    // caso iguais, deixa as cartas viradas, zera os valores e adiciona 2 ao score
    else if (cards[0] !== null && cards[1] !== null && cards[0] === cards[1]) {
        cards[0] = null;
        cards[1] = null;
        score += 2;
    }
}

// conta os movimentos realizados
function counter() {
    movementCounter++;
    let counterDisplay = document.querySelector("aside p:nth-of-type(2)");
    counterDisplay.innerHTML = movementCounter;
}

// conta o tempo decorrido
function timer() {
    const timeDisplay = document.querySelector("aside p:first-of-type");
    // caso o score tenha atingido o valor da quantidade de cartas, finaliza o timer e chama a funcção de finalização
    if (score === cardsQuantity) {
        clearInterval(interval);
        endGame();
    }
    // senão adiciona o valor do timer
    else {
        timeDisplay.innerHTML = timeCounter;
        timeCounter++;
    }
}

// finaliza o jogo
function endGame() {
    alert(`Você ganhou em ${movementCounter} jogadas e em ${timeCounter - 1} segundos.`);
    const verificador = (prompt("Gostaria de jogar novamente s/n?"));
    // reinicia o jogo
    if (verificador === 's') {
        location.reload();
    }
    // senão apresenta a mensagem final
    else {
        alert("Obrigado por ter jogado THE PARROT GAME CARD!!!!");
    }
}











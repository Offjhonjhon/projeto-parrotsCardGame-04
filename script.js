let quantidadeCartas = 0;

let carta = `   <div class="carta" onclick="virarCarta()">
                    <div class="">
                        <figure>
                            <img src="imgs/front.png" alt="">
                        </figure>
                    </div>
                </div>
`;


pegarNumeroCartas();
colocarCartas();

// pega a quantidade de cartas a ser inserida 
function pegarNumeroCartas() {
    quantidadeCartas = prompt("Quantas cartas vc quer?");

    if ((quantidadeCartas < 2) || (quantidadeCartas > 14) || ((quantidadeCartas % 2) !== 0)) {
        return pegarNumeroCartas();
    }
}
// coloca as cartas na tela
function colocarCartas() {
    let main = document.querySelector(".principal");
    for (let i = 0; i < quantidadeCartas; i++) {
        main.innerHTML += carta;
        console.log();

    }
}

// function virarCarta(){
//     const front = document.querySelector(".carta .front");
//     const back = document.querySelector(".carta .back");
//     front.classList.add("front-face");
//     back.classList.add("back-face");
// }



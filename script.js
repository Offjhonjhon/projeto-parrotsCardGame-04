let quantidadeCartas = 0;

let carta = `    <div class="carta" onclick="virarCarta()">
                    <div  class="front-face face" >
                        <img src="imgs/front.png" alt="">
                    </div>
                    <div  class="back-face face">
                        <p>Parte de tras</p>
                    </div>
                </div>
`;

virarCarta()

// pegarNumeroCartas();
// colocarCartas();

// // pega a quantidade de cartas a ser inserida 
// function pegarNumeroCartas() {
//     quantidadeCartas = prompt("Quantas cartas vc quer?");

//     if ((quantidadeCartas < 2) || (quantidadeCartas > 14) || ((quantidadeCartas % 2) !== 0)) {
//         return pegarNumeroCartas();
//     }
// }
// // coloca as cartas na tela
// function colocarCartas() {
//     let main = document.querySelector(".principal");
//     for (let i = 0; i < quantidadeCartas; i++) {
//         main.innerHTML += carta;
//     }
// }



function virarCarta() {
    const back = document.querySelectorAll(".back-face");
    const front = document.querySelectorAll(".front-face");
    
    front.style
}



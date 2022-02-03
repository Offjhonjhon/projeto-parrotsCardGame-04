let quantidadeCartas = 0;
let gifs = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot','revertitparrot','tripletsparrot','unicornparrot'];

let cartaHtml = `   <div class="carta" ">
                        <div  class="front-face face" >
                            <img src="imgs/front.png" alt="">
                        </div>
                            <div  class="back-face face">
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
    let main = document.querySelector("main");
    for (let i = 0; i < quantidadeCartas; i++) {
        main.innerHTML += cartaHtml;
    }
    addGifs();
}

// adciona os gifs
function addGifs(){
    let objectCard = document.querySelectorAll(".back-face");
    for(let i = 0; i < (quantidadeCartas/2); i++){
        objectCard[i].innerHTML = `<img src="gifs/${gifs[i]}.gif"></img>`;
        objectCard[i+(quantidadeCartas/2)].innerHTML = `<img src="gifs/${gifs[i]}.gif"></img>`;
    }
}

// embaralha as cartas 
function shuffle(){

}




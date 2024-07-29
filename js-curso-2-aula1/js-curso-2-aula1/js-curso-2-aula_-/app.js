let listaDeNumeroAleatorio = [];
let numeroLimte = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
let mensagemInicial = `Escolha um número de 1 a ${numeroLimte}`;

function exibirTextoNaTela(tag, texto) {
    let titulo = document.querySelector(tag);
    titulo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Famale", {rate: 1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela("h1","Jogo do número secreto");
    exibirTextoNaTela("p",mensagemInicial);
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1? "tentativas":"tentativa";
        let mensagemTentativas = `Parabéns você acertou com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela("h1",mensagemTentativas);
        exibirTextoNaTela("p","");
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if(chute > numeroSecreto) {
            exibirTextoNaTela("h1","o número secreto é menor");
            exibirTextoNaTela("p",""); 
        } else {
            exibirTextoNaTela("h1","o número secreto é maior");
            exibirTextoNaTela("p","");
        }
        limparCampo();
        tentativas++;
    }

}

function reiniciarJogo() {
    numeroSecreto == gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimte + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroAleatorio.length;
    if (quantidadeDeElementosNaLista == 10) {
        listaDeNumeroAleatorio = [];
    }
    if(listaDeNumeroAleatorio.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {4
        listaDeNumeroAleatorio.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = " ";
}
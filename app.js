let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo do numero secreto'

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//Utilizar a funçao para ficar o codigo mais claro e facil!\/



function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirTelaInicial() {
  exibirTextoNaTela('h1', 'jogo do número secreto');
  exibirTextoNaTela('p', 'escolha um numero entre 1 e 10');
}
exibirTelaInicial();

function verificarChute() {
  let chute = document.querySelector('input').value;

  if (chute == numeroSecreto) {
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você Descobriu o Número Secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else {
    if (chute > numeroSecreto) {
      exibirTextoNaTela("p", "Número secreto é menor!");
    } else {
      exibirTextoNaTela("p", "Número secreto é maior!");
    }
    tentativas++;
    limparCampo();
  }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeNumerosNaLista = listaNumerosSorteados.length;

  if(quantidadeDeNumerosNaLista == numeroLimite){
    listaNumerosSorteados = [];
  }

  if (listaNumerosSorteados.includes(numeroEscolhido)) {
  return gerarNumeroAleatorio();
} else {
  listaNumerosSorteados.push(numeroEscolhido);
  console.log(listaNumerosSorteados);
  return numeroEscolhido;
}
}

function limparCampo() {
  chute = document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  exibirTelaInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}


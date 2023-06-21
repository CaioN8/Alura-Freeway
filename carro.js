// Variáveis do carro

let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 262, 318];
let velocidadeCarros = [6, 7.5, 7.2, 7, 8.5, 9.2];
let comprimentoCarro = 50;
let alturaCarro = 40;

function desenhaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentoCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (passouDaTela(xCarros[i])) {
      xCarros[i] = 600;
    }
  }
}

function passouDaTela(xCarro) {
   return xCarro < - 60;
}




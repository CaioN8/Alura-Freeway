// Variáveis do personagem
let xPersonagem = 100;
let yPersonagem = 366;
let colisao = false;
let pontos = 0;

function desenhaPersonagem() {
  image(imagemPersonagem, xPersonagem, yPersonagem, 30, 30);
}

function movimentoPersonagem() {
  if (keyIsDown(UP_ARROW)) {
    yPersonagem -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMover()) {
      yPersonagem += 3;
    }
  }
}

function verificaColisao() {
  // collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xPersonagem, yPersonagem, 15)
    if (colisao) {
      voltaPosicaoInicial();
      somDaColisao.play();
      if (pontos > 0) {
        pontos--
      }
    }
  }
}

function mostraPontos() {
  text(pontos, 400, 25);
  textSize(25);
  fill(color(255, 240, 60));
}

function marcaPonto() {
  if (yPersonagem < 5) {
    voltaPosicaoInicial();
    somDoPonto.play();
    pontos++
  }
}

function voltaPosicaoInicial() {
  yPersonagem = 366;
}

function podeSeMover() {
  return yPersonagem < 366;
}



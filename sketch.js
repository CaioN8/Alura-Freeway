function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemBackground);
  desenhaPersonagem();
  desenhaCarro();
  movimentoCarro();
  movimentoPersonagem();
  voltaCarro();
  verificaColisao();
  mostraPontos();
  marcaPonto();
}





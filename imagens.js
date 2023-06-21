// Imagens do jogo
let imagemBackground;
let imagemPersonagem;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

// Sons do jogo
let somDaTrilha;
let somDaColisao;
let somDoPonto;


// Carregando as imagens e sons
function preload() {
  imagemBackground = loadImage("imagens/estrada.png");
  imagemPersonagem = loadImage("imagens/ator-1.png");
  imagemCarro1 = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png"); 
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3];
  
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}


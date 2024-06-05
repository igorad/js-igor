//variaveis Bolinha
let xBolinha = 300
let yBolinha = 200;
let diametro = 15;
let raio = diametro/2;

//variavies VelociadeBolinha
let velocidadeXBolinha = 3;
let velocidadeYBolinha = 3;

//variaveisCor
let corr;

//variaveis Raquete
let xraquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;

//variaveis Raquete do Oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//variaveis Pontuação
let meusPontos = 0;
let pontosOponente = 0;

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha = xBolinha + velocidadeXBolinha;
  yBolinha = yBolinha + velocidadeYBolinha;
}

function verificaColisao(){
  if (xBolinha >width || xBolinha < 0){
    velocidadeXBolinha = velocidadeXBolinha * (-1);
  }
  
   if (yBolinha > height || yBolinha < 0){
     velocidadeYBolinha = velocidadeYBolinha * (-1);
   }
}

function mostraRaquete(x, y){
  rect(x, y, raqueteLargura, raqueteAltura);
}


function movimentaRaquete(){
  if(keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  
  if(keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(){
  if (xBolinha-raio < xRaquete + raqueteLargura && yBolinha-raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1
  }
}
     
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteLargura/2 + 2;
  yRaqueteOponente += velocidadeYOponente;
}

function verificaColisaoRaqueteOponente(){
  if (xBolinha+raio > xRaqueteOponente && yBolinha-raio < yRaqueteOponente + raqueteAltura && yBolinha + raio > yRaqueteOponente){
    velocidadeXBolinha *= -1;
  }
}

function IncluirPlacar(){
  textAlign(CENTER);
  textSize(16);
  fill("white");
  //Meus Pontoa
  fill("orange");
  rect(135, 10, 35, 20);
  fill("white");
  text(meusPontos, 150, 26);
  
  //Pontos Oponente
  fill("orange");
  rect(430, 10, 35, 20);
  fill("white");
  text(pontosOponente, 445, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
    xBolinha = 300;
    yBolinha = 200;
    
  }
if (xBolinha < 10){
  pontosOponente +=1;
  xBolinha = 300;
  yBolinha = 2000;
  
}
}

function setup()() {
  createCanvas(600, 400);
  cor = 120;
}

function draw() {
  background(cor);
  mostraBolinha();
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaquetes();
  movimentaRaqueteoponente();
  movimentaBolinha();
  verificaColisao();
  verificaColisaoRaquete();
  verificaColisaoRaqueteOponente();
  IncluirPlacar();
  marcaponto(;

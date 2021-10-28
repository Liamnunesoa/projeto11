var jaxon;
var chao;
var jaxoncorrendo;
var chaoanimado
function preload(){
  //imagens pré-carregadas
 jaxoncorrendo=loadAnimation("Runner-1.png","Runner-2.png");
 chaoanimado=loadImage("path.png");


}

function setup(){
  createCanvas(400,400);
  //crie sprite aqui
   
   chao = createSprite(200,200,100,100);
   chao.addImage(chaoanimado);
   chao.velocityY= +5

   jaxon = createSprite(110,280,20,20);
   jaxon.scale=0.07
   jaxon.addAnimation("corre", jaxoncorrendo);



}

function draw() {
  background(0);

  drawSprites()
    if(chao.y > 400){
      chao.y=height/2
    }

}

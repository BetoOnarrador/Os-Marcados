var estrada,menino, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;


function preload(){
pathImg = loadImage("path.png");
meninoImg = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
 createCanvas(400,400);
 estrada=createSprite(200,200)
 estrada.addImage(pathImg);
 estrada.velocityY=5;
 menino=createSprite(180,340,30,30);
 menino.addAnimation("D4C",meninoImg);
 menino.scale=0.05; 
// Criando Boundary (Limite) esquerdo  
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;


//Crie Boundary direito 
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}


function draw() {
background(0);
menino.x=World.mouseX;

// Menino se movendo no eixo X com o mouse
edges= createEdgeSprites();
menino.collide(edges[3]);
menino.collide(leftBoundary)
menino.collide(rightBoundary)

 //Reiniciar o fundo
 if (estrada.y>400){
 estrada.y=height/2;
 }



 drawSprites();

 }





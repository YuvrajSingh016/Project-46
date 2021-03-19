var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = rgb(51, 51,255);

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = rgb(255,0, 0);

    block3 = createSprite(515,580,200,30);
    block3.shapeColor = rgb(255, 255, 51);

    block4 = createSprite(740,580,220,30);
    block4.shapeColor = rgb(13, 240, 59);

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    ball.velocityX = 6;
    ball.velocityY = 11;

}

function draw() {


    background(rgb(128, 128, 128));
    edges = createEdgeSprites();
    ball.bounceOff(edges);
 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
         ball.shapeColor = rgb(51, 51,255);   
         music.play();       
    }
 
    if(block2.isTouching(ball)){
         ball.shapeColor = rgb(255,0, 0);
         music.stop();
         ball.velocityX = 0;
         ball.velocityY = 0;
    }
 
    if(block3.isTouching(ball) && ball.bounceOff(block3)){
         ball.shapeColor = rgb(255, 255, 51);
    }
 
    if(block4.isTouching(ball) && ball.bounceOff(block4)){
         ball.shapeColor = rgb(13, 240, 59);
    }
    
    drawSprites();
}

var backImage;
var screen1;
var screen2;
var title;
var button;
var train1,train1Img;
var train2,train2Img;
var thief, thiefImg;
var MarkImg;
var AkankshyaImg,Akankshya;
var AnshikaImg,Anshika;
var ZaghamImg,Zagham;
var SanjanaImg,Sanjana;
var gamestate = 0;
var hero;
var arrow;


function preload(){

title = loadImage("QuinquennialImages/Title.png");

backImage = loadImage("QuinquennialImages/Background.jpg");

button = loadImage("QuinquennialImages/Button.png");

MarkImg = loadImage("QuinquennialImages/Mark.png");

SanjanaImg = loadImage("QuinquennialImages/Sanjana.png");

AkankshyaImg = loadImage("QuinquennialImages/Akankshya.png");

ZaghamImg = loadImage("QuinquennialImages/Zagham.png");

AnshikaImg = loadImage("QuinquennialImages/Anshika.png");

train1Img = loadImage("QuinquennialImages/Train.png");

train2Img = loadImage("QuinquennialImages/Train 2.png");

thiefImg = loadImage("QuinquennialImages/Evil Scientist.png");

//arrow = loadImage("QuinquennialImages/Arrow Mark.gif");
}


function setup(){
    createCanvas(windowWidth, windowHeight);

    screen1 = new Screen1(); 
    screen1.display(); 

    Akankshya = createSprite(200,500);
    Akankshya.addImage("QuinquennialImages",AkankshyaImg);
    Akankshya.scale = 0.6;
    //Akankshya.debug = true;
    Akankshya.setCollider("rectangle",0,0,300,600);
    
    
    Anshika = createSprite(500,500);
    Anshika.addImage("QuinquennialImages",AnshikaImg);
    Anshika.scale = 0.1;
    //Anshika.debug = true;
    Anshika.setCollider("rectangle",0,0,2000,4000);
  
    
    Zagham = createSprite(750,500);
    Zagham.addImage("QuinquennialImages",ZaghamImg);
    //Zagham.debug = true;
    Zagham.setCollider("rectangle",0,0,200,500);
    
    Mark = createSprite(1000,500);
    Mark.addImage("QuinquennialImages",MarkImg);
    //Mark.debug = true;
    Mark.setCollider("rectangle",0,0,200,500);
   
    
    Sanjana = createSprite(1200,500)
    Sanjana.addImage("QuinquennialImages",SanjanaImg);
    Sanjana.scale = 0.5;
    //Sanjana.debug = true;
    Sanjana.setCollider("rectangle",0,0,300,950);
    appearence(false);

    hero = createSprite(100,700);
    hero.addImage("Anshika",AnshikaImg);
    hero.addImage("Sanjana",SanjanaImg);
    hero.addImage("Zagham",ZaghamImg);
    hero.addImage("Mark",MarkImg);
    hero.addImage("Akankshya",AkankshyaImg);
    hero.visible = false;
    hero.setCollider("rectangle",0,0,300,500);
    //hero.debug = true;
    hero.scale = 0.5;

    train1 = createSprite(200,400);
    train1.addImage("QuinquennialImages",train1Img)
    train1.scale = 0.5;
    train1.visible = false;
    train1.setCollider("rectangle",0,0,600,400);
    //train1.debug = true;
    train1.velocityY = -2;
   
    train2 = createSprite(width - 200,400);
    train2.addImage("QuinquennialImages",train2Img);
    train2.scale = 0.5;
    train2.visible = false;
    train2.setCollider("rectangle",0,0,600,400);
    //train2.debug = true;
    train2.velocityY = 2;

    thief = createSprite(1400,100);
    thief.addImage("QuinquennialImages",thiefImg);
    thief.visible = false;
    thief.setCollider("rectangle",0,0,600,600);
   // thief.debug = true;
    thief.scale = 0.03;
    
    backImage.scale = 2.5;

    edges = createEdgeSprites();

}  

function draw(){
 
  
   
     
    if (train1.isTouching(edges[2]) || train1.isTouching(edges[3])) {
        train1.velocityY = train1.velocityY*(-1);
        }

 if (train2.isTouching(edges[2]) || train2.isTouching(edges[3])) {
            train2.velocityY = train2.velocityY*(-1);
            }

            hero.bounceOff(edges);

   
if(gamestate === 1){
    
  
    //screen2 = new Screen2();
    //screen2.display();
   background(backImage);
    appearence(true);

    if(mousePressedOver(Sanjana)){
    gamestate = 2;
    console.log(gamestate);
    hero.changeImage("Sanjana",SanjanaImg);
    hero.visible = true
    hero.scale = 0.3;
    hero.setCollider("rectangle",0,0,300,950);
    }

    else if(mousePressedOver(Mark)){
        gamestate = 2;
        console.log(gamestate);
        hero.changeImage("Mark",MarkImg);
        hero.visible = true;
        hero.scale = 0.6;
       hero.setCollider("rectangle",0,0,200,500);
   
    }

    else if(mousePressedOver(Anshika)){
        gamestate = 2;
        console.log(gamestate);
        hero.changeImage("Anshika",AnshikaImg);
        hero.scale = 0.08;
        hero.visible = true;
        //hero.setCollider("rectangle",0,0,2000,4000);
    }

    else if(mousePressedOver(Akankshya)){
        gamestate = 2;
        console.log(gamestate);
        hero.changeImage("Akankshya",AkankshyaImg);
        hero.visible = true;
        hero.scale = 0.4;
        //hero.setCollider("rectangle",0,0,300,600);
    }

    else if(mousePressedOver(Zagham)){
        gamestate = 2;
        console.log(gamestate);
        hero.changeImage("Zagham",ZaghamImg);
        hero.visible = true;
        hero.scale = 0.6;
        //hero.setCollider("rectangle",0,0,200,500);
    }
    
    
        stroke(10)
        fill(0)
        textSize(75);
        text("Choose Your Fighter!!",400,200);
         
    

    drawSprites();
}

if(gamestate === 2 ){
    background(backImage);



    appearence(false);
    train1.visible = true;
    train2.visible = true;
    thief.visible = true;
    //thief.setCollider("rectangle",0,0,2000,4000)
    drawSprites();


   
   if(gamestate = 2){
    if(train1.isTouching(hero) || train2.isTouching(hero)){
        stroke(10)
        fill(0)
        textSize(75);
        text("Try Again!!",600,400);
    hero.setVelocity(0,0);
    train1.velocityY = 0;
    train2.velocityY = 0;
    }

    if(hero.isTouching(thief)){
        stroke(10)
        fill(0)
        textSize(75);
        text("Congratulations!! You Have Won!!",250,300);
    hero.setVelocity(0,0);
    train1.velocityY = 0;
    train2.velocityY = 0;
    }


if(keyIsDown(RIGHT_ARROW)){
hero.velocityX = 2;
hero.velocityY = 0;
}
if(keyIsDown(LEFT_ARROW)){
    hero.velocityX = -2;
    hero.velocityY = 0;
  }
   if(keyIsDown(UP_ARROW)){
    hero.velocityX = 0;
    hero.velocityY = -2;
  }
   if(keyIsDown(DOWN_ARROW)){
    hero.velocityX = 0;
    hero.velocityY = 2;
  }

}  
    stroke(10)
    fill(0)
    textSize(50);
    text("Press The Arrows To Get To The",400,100);
    text("Evil Scientist And Kill Him!!",450,200)
  }           
}



function appearence(a){
    
    Akankshya.visible = a;
    Zagham.visible = a;
    Mark.visible = a;
    Anshika.visible = a;
    Sanjana.visible = a;
    
    }


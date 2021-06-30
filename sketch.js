//memory spaces for game objects
var bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11;
var start, startImg;
var gameState;
var next, nextImg;
var wall1, wall2, wall3, wallImg;
var plagg, plaggImg;
var tikki, tikkiImg;
var key, keyImg;
var jail, jailImg;
var spike1, spike2, spike3, spikeImg;
var ball1, ball2, ballImg;
var plate, plateImg;
var adrien, adrienImg, catnoirImg;
var marinette, marinetteImg, ladybugImg;
var hawkmoth, hawkmothImg;
var mayura, mayuraImg;
var akuma, akumaImg;
var amok, amokImg;
var cheese, cheeseImg;
var cookie, cookieImg;
var cataclysm, cataclysmImg;
var luckycharm, luckycharmImg;
var reset, resetImg;
var wintext, wintextImg;
var text1, text1Img;
var more, moreImg;
var info, infoImg;
var game1, game2, game3, game1Img, game2Img, game3Img;
var music1, music2, music3;
var edges, death, touch;
var 

function preload() {
  //load backgrounds
  bg1 = loadImage("Bg1.png");
  bg2 = loadImage("Bg2.png");
  bg3 = loadImage("Bg3.png");
  bg4 = loadImage("Bg4.jpg");
  bg5 = loadImage("Bg5.png");
  bg6 = loadImage("Bg6.png");
  bg7 = loadImage("Bg7.png");
  bg8 = loadImage("Bg8.png");
  bg9 = loadImage("Bg9.png");
  bg10 = loadImage("Bg10.png");
  bg11 = loadImage("Bg11.png");

  //load game controls
  nextImg = loadImage("Next.png");
  startImg = loadImage("Start.png");
  resetImg = loadImage("Reset.png");
  moreImg = loadImage("MoreTab.png");

  //load level 1 objects
  wallImg = loadImage("L1Wall.jpg");
  keyImg = loadImage("L1Key.png");
  jailImg = loadImage("L1Jail.jpg");
  spikeImg = loadImage("L1Spikes.png");
  plateImg = loadImage("L1Platform.png");
  ballImg = loadImage("L1Ball.png");

  //load players
  plaggImg = loadImage("Plagg.png");
  tikkiImg = loadImage("Tikki.png");
  adrienImg = loadImage("Adrien.png");
  catnoirImg = loadImage("Cat Noir.png");
  marinetteImg = loadImage("Marinette.png");
  ladybugImg = loadImage("Ladybug.png");

  //load player powers
  cataclysmImg = loadImage("Cataclysm.png");
  luckycharmImg = loadImage("Luckycharm.png");
  cheeseImg = loadImage("Cheese.png");
  cookieImg = loadImage("Cookie.png");

  //load villains and their powers
  hawkmothImg = loadImage("Hawk Moth.png");
  mayuraImg = loadImage("Mayura.png");
  akumaImg = loadImage("Akuma.png");
  amokImg = loadImage("Amok.png");

  //load other games
  game1Img = loadImage("Game1.png");
  game2Img = loadImage("Game2.png");
  game3Img = loadImage("Game3.png");

  //load text
  wintextImg = loadImage("YouWin.png");
  text1Img = loadImage("Text.png");
  infoImg = loadImage("Info.png");
}

function setup() {
  //create a canvas
  createCanvas(1530, 750);

  //create start button
  start = createSprite(760, 700, 50, 50);
  start.addImage(startImg);
  start.scale = 0.7;

  //create next button
  next = createSprite(90, 60, 10, 10);
  next.addImage(nextImg);
  next.scale = 0.7;
  next.visible = false;

  //create level 1 jail
  jail = createSprite(150, 50, 10, 10);
  jail.addImage(jailImg);
  jail.visible = false;

  //create level 1 walls
  wall1 = createSprite(340, 150, 50, 10);
  wall1.addImage(wallImg);
  wall1.scale = 1.2;
  wall2 = createSprite(1130, 370, 10, 10);
  wall2.addImage(wallImg);
  wall2.scale = 1.2;
  wall3 = createSprite(340, 570, 10, 10);
  wall3.addImage(wallImg);
  wall3.scale = 1.2;
  wall1.visible = false;
  wall2.visible = false;
  wall3.visible = false;

  //create player Tikki
  tikki = createSprite(50, 50, 10, 10);
  tikki.addImage(tikkiImg);
  tikki.visible = false;

  //create player Plagg
  plagg = createSprite(50, 670, 10, 10);
  plagg.addImage(plaggImg);
  plagg.visible = false;

  //create level 1 key
  key = createSprite(1480, 200, 10, 10);
  key.addImage(keyImg);
  key.visible = false;

  //create level 1 plate
  plate = createSprite(1400, 570, 10, 10);
  plate.addImage(plateImg);
  plate.scale = 0.8;
  plate.velocityX = -3;
  plate.visible = false;

  //create level 1 balls
  ball1 = createSprite(600, 250, 10, 10);
  ball1.addImage(ballImg);
  ball2 = createSprite(200, 450, 10, 10);
  ball2.addImage(ballImg);
  ball1.velocityY = 4;
  ball2.velocityY = -4;
  ball1.visible = false;
  ball2.visible = false;

  //create level 2 spikes
  spike1 = createSprite(1300, 200, 10, 10);
  spike1.addImage(spikeImg);
  spike2 = createSprite(900, 200, 10, 10);
  spike2.addImage(spikeImg);
  spike3 = createSprite(1100, 200, 10, 10);
  spike3.addImage(spikeImg);
  spike1.velocityY = -4;
  spike2.velocityY = -4;
  spike3.velocityY = -4;
  spike1.visible = false;
  spike2.visible = false;
  spike3.visible = false;

  //create adrien
  adrien = createSprite(1300,500,10,10);
  adrien.addImage(adrienImg);
  adrien.scale = 1;
  adrien.visible = false;

  //create marinette
  marinette = createSprite(1400,500,10,10);
  marinette.addImage(marinetteImg);
  marinette.scale = 0.6;
  marinette.visible = false;

  //create edge sprites
  edges = createEdgeSprites();

  //touch
  touch = false;

  //store value of death
  death = 0;

  //Game State value initially is 0
  gameState = 0;
}

function draw() {
  if (gameState === 0) {
    background(bg1);
    if (mousePressedOver(start)) {
      gameState = 1;
      start.destroy();
    }
  }
  if (gameState === 1) {
    background(bg2);
    next.visible = true;
    if (mousePressedOver(next)) {
      gameState = 2;
    }
  }
  if (gameState === 2) {
    background(bg3);
    next.visible = true;
    if (mousePressedOver(next)) {
      gameState = 3;
    }
  }
  if (gameState === 3) {
    background(bg4);
    jail.visible = true;
    next.visible = false;
    wall1.visible = true;
    wall2.visible = true;
    wall3.visible = true;
    tikki.visible = true;
    plagg.visible = true;
    key.visible = true;
    plate.visible = true;
    ball2.visible = true;
    ball1.visible = true;
    spike1.visible = true;
    spike2.visible = true;
    spike3.visible = true;

    stroke("black");
    strokeWeight(5);
    textSize(30);
    fill("red");
    textFont("Forte")
    text("Death:"+ death, 1400,50);

    if (keyDown(RIGHT_ARROW)) {
      plagg.x = plagg.x + 5;
    }
    if (keyDown(LEFT_ARROW)) {
      plagg.x = plagg.x - 5;
    }
    if (keyDown(UP_ARROW)) {
      plagg.y = plagg.y - 5;
    }
    if (keyDown(DOWN_ARROW)) {
      plagg.y = plagg.y + 5;
    }

      ball1.bounceOff(wall1);
      ball1.bounceOff(wall3);
      ball2.bounceOff(wall1);
      ball2.bounceOff(wall3);
      plate.bounceOff(wall3);
      plate.bounceOff(edges[1]);
      spike1.bounceOff(wall2);
      spike2.bounceOff(wall2);
      spike3.bounceOff(wall2);
      spike1.bounceOff(edges[2]);
      spike2.bounceOff(edges[2]);
      spike3.bounceOff(edges[2]);

      /*if(plagg.isTouching(wall1)||plagg.isTouching(wall2)||plagg.isTouching(wall3)){
        plagg.x = 50;
        plagg.y = 670;
        death = death + 1;
      }
      if(plagg.isTouching(spike1)||plagg.isTouching(spike2)||plagg.isTouching(spike3)){
        plagg.x = 50;
        plagg.y = 670;
        death = death + 1
      }
      if(plagg.isTouching(ball1)||plagg.isTouching(ball2)||plagg.isTouching(plate)){
        plagg.x = 50;
        plagg.y = 670;
        death = death + 1;
      }*/
      if(plagg.isTouching(tikki)){
        gameState = 4;
      }
      /*if(plagg.isTouching(key)){
        touch = true;
      }
      if(touch === true){
        jail.destroy();
      }
      if(touch === false && plagg.isTouching(jail)){
        if(keyDown(LEFT_ARROW)){
          plagg.x = plagg.x;
        }
      }*/
  }
  if(gameState === 4){
    background(bg5);
    jail.visible = false;
    next.visible = true;
    wall1.visible = false;
    wall2.visible = false;
    wall3.visible = false;
    tikki.visible = false;
    plagg.visible = false;
    key.visible = false;
    plate.visible = false;
    ball2.visible = false;
    ball1.visible = false;
    spike1.visible = false;
    spike2.visible = false;
    spike3.visible = false;
    if (mousePressedOver(next)) {
      gameState = 5;
    }
  }
  if(gameState === 5){
    background(bg6);
    plagg.visible = true;
    adrien.visible = true;
    tikki.visible = true;
    marinette.visible = true;
    next.visible = false;

    plagg.x = 1300;
    tikki.x = 1400;
    plagg.y = 200;
    tikki.y = 200;
    plagg.scale = 0.5;
    tikki.scale = 0.5;

  }

  drawSprites();
}

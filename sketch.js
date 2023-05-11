const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var fundo;
var torre;
var canhao;
var angle;
var navio;

var bolas = [];
var navios = [];

var navioSprite,navioJson
var naviosAnimation = []

function preload() {
  fundo = loadImage("assets/background.gif");

  navioSprite = loadImage("assets/boat/boat.png");
  //JSON: JAVA SCRIPT OBJECT NOTATION
  navioJson = loadJSON("assets/boat/boat.json");
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 20;

  var options = {
    isStatic: true,
  };

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  torre = new Torre(150, 350, 160, 310);
  canhao = new Canhao(180, 120, 130, 100, angle);

  var frames = navioJson.frames;
  for(var i =0;i < frames.length;i++){
    var pos = frames[i].position;
    var img = navioSprite.get(pos.x,pos.y,pos.w,pos.h);
    naviosAnimation.push(img);
  }
}

function draw() {
  background(fundo);

  rect(ground.position.x, ground.position.y, width * 2, 1);

  torre.show();
  canhao.show();

  Engine.update(engine);

  for (var i = 0; i < bolas.length; i++) {
    mostrarBolas(bolas[i], i);
  }

  showBoats()
 
}

function mostrarBolas(ball, i) {
  ball.show();
  console.log(ball);
  if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
    World.remove(world, ball.body);
    //fatiar, cortar, excluir a bola q atirei
    bolas.splice(i, 1);
  }
}

function keyPressed() {
  // CODIGO ASCII
  // 32 = espaço

  if (keyCode === 32) {
    var bola = new Bola(canhao.x, canhao.y);
    bolas.push(bola);
  }
}

function keyReleased() {
  if (keyCode === 32) {
    bolas[bolas.length - 1].atirar();
  }
}

function showBoats() {
  if (navios.length > 0) {
   
    if (navios.length < 4 && navios[navios.length - 1].body.position.x < width - 300) {
      console.log("o codigo passou por aqui")
      var positions = [-40, -50, -60, -70];
      var position = random(positions);
      var navio = new Navio(width, height - 100, 200, 200, position,naviosAnimation);
      navios.push(navio)
    }

    for(var i =0; i < navios.length; i++){

      Matter.Body.setVelocity(navios[i].body, { x: -0.9, y: 0 });
      navios[i].show()
      navios[i].animate()
    }


  } else {
    navio = new Navio(width, height - 100, 200, 200, -50,naviosAnimation);
    navios.push(navio);
  }


}

class Bola {
  constructor(x, y) {
    this.r = 30;
    this.body = Bodies.circle(x, y, this.r, { isStatic: true });
    World.add(world, this.body);
    this.image = loadImage("assets/cannonball.png");
    this.trajetoria = [];
  }

  show() {
    var pos = this.body.position;
    //console.log(pos)

    push();
    imageMode(CENTER);
    // image(imagem,x,y,largura,altura);
    image(this.image, pos.x, pos.y, this.r, this.r);
    pop();

    if(this.body.velocity.x  >0 && this.body.position.x > 250){
      var position = [pos.x,pos.y];
    this.trajetoria.push(position)
    }
    console.log(this.trajetoria)
    for(var i = 0; i < this.trajetoria.length; i++){
      image(this.image,this.trajetoria[i][0],this.trajetoria[i][1],5,5)
    }


  }
  atirar() {
    //pegando o angulo do canhao
    var angle = canhao.angle - 30;
    angle = angle * (3.14 / 180);
    var velocity = p5.Vector.fromAngle(angle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, {
      x: velocity.x * (180 / 3.14),
      y: velocity.y * (180 / 3.14),
    });
  }
}

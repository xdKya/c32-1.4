class Navio {
  constructor(x, y, w, h, randomPos,animation) {
    this.w = w;
    this.h = h;
    this.randomPos = randomPos;
    this.body = Bodies.rectangle(x, y, w, h);
    World.add(world, this.body);
    this.image = loadImage("assets/boat.png");
    this.animation = animation
    this.speed = 0.05
  }

  animate() {
    this.speed += 0.05 %1.1;
  }

  show() {
    var angle = this.body.angle;
    var pos = this.body.position;
    var index = floor(this.speed % this.animation.length)

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.animation[index], 0,this.randomPos, this.w, this.h);
    pop();
  }
}

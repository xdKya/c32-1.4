class Canhao {
  constructor(x, y, w, h, angle) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.angle = angle;
    this.cannonImage = loadImage("assets/canon.png");
    this.baseImage = loadImage("assets/cannonBase.png");
  }

  show() {
    //base do canhao
    image(this.baseImage, 60, 20, 200, 200);

    if (keyIsDown(UP_ARROW) && this.angle > -30) {
      //this.angle = this.angle -1
      this.angle -= 1;
    }
    if (keyIsDown(DOWN_ARROW) && this.angle < 70) {
      //this.angle = this.angle +1
      this.angle += 1;
    }

    //topo do canhao
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.cannonImage, 0, 0, this.w, this.h);
    pop();
  }
}

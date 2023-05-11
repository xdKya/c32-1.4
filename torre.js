class Torre {
  //propriedades
  constructor(x, y, w, h) {
    this.w = w;
    this.h = h;
    this.image = loadImage("assets/tower.png");

    this.body = Bodies.rectangle(x, y, this.w, this.h, { isStatic: true });
    World.add(world, this.body);
  }

  //funções

  show() {
    push();
    imageMode(CENTER);
    image(
      this.image,
      this.body.position.x,
      this.body.position.y,
      this.w,
      this.h
    );
    pop();
  }
}

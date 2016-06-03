class Isomero {
  constructor(sel) {
    this.ctx = document.querySelector(sel).getContext('2d');
    this.map = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];
  }

  drawMap() {
    const { ctx } = this;

    ctx.save();

    ctx.translate(32, 32);
    ctx.setTransform (2, 0, 0, 1, 0, 0);
    ctx.rotate(Math.PI/4);
    ctx.translate(-32, -32);
    // ctx.translate(64, 64);
    // ctx.translate(-200, -200);

    ctx.strokeRect(64, 0, 64, 64);

    ctx.stroke();

    ctx.restore();
  }


}

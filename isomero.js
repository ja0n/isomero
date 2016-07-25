class Isomero {
  constructor(sel) {
    this.ctx = document.querySelector(sel).getContext('2d');
    this.map = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
    ];

    this.map = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];
  }

  drawMap() {
    const tileSize = 32;
    const { ctx } = this;

    this.map.forEach((row, rowIndex) => {
      row.forEach((item, colIndex) => {
        this.drawTile(colIndex, rowIndex, tileSize);
      });
    });

  }

  drawTile(x, y, tileSize = 32) {
    const { ctx } = this;
    const halfTile = tileSize/2;

    ctx.save();

    ctx.setTransform(2, 0, 0, 1, 0, 0);
    ctx.translate(0, 0);
    ctx.rotate(Math.PI/4);

    ctx.strokeRect(0, 0, tileSize, tileSize);

    ctx.stroke();

    ctx.restore();

  }


}

import { SHAPES, COLORS, COLS } from "./constants";

export class Piece {
  constructor(type) {
    this.type = type;
    this.color = COLORS[type];
    this.shape = SHAPES[type].map((row) => [...row]);

    // Position piece horizontally centered at the top
    this.x = Math.floor(COLS / 2) - Math.floor(this.shape[0].length / 2);
    this.y = 0;
  }

  // Clone piece for ghost preview or collision checking
  clone() {
    const p = new Piece(this.type);
    p.x = this.x;
    p.y = this.y;
    p.shape = this.shape.map((row) => [...row]);
    return p;
  }

  // Rotate shape matrix 90 degrees clockwise or counter-clockwise
  rotate(dir = 1) {
    // Transpose matrix
    for (let y = 0; y < this.shape.length; ++y) {
      for (let x = 0; x < y; ++x) {
        [this.shape[x][y], this.shape[y][x]] = [
          this.shape[y][x],
          this.shape[x][y],
        ];
      }
    }
    // Reverse rows for clockwise, or reverse columns for counter-clockwise
    if (dir > 0) {
      this.shape.forEach((row) => row.reverse());
    } else {
      this.shape.reverse();
    }
  }
}

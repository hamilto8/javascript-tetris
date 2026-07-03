import { COLS, ROWS } from './constants';

export class Board {
  constructor() {
    this.grid = this.getEmptyGrid();
  }

  getEmptyGrid() {
    return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
  }

  reset() {
    this.grid = this.getEmptyGrid();
  }

  // Check if a piece can move to a specific position/shape
  isValidMove(piece, targetX = piece.x, targetY = piece.y, targetShape = piece.shape) {
    for (let y = 0; y < targetShape.length; y++) {
      for (let x = 0; x < targetShape[y].length; x++) {
        if (targetShape[y][x] > 0) {
          const newX = targetX + x;
          const newY = targetY + y;

          // Check side walls and bottom
          if (newX < 0 || newX >= COLS || newY >= ROWS) {
            return false;
          }

          // Check collision with already frozen blocks on the board (ignore negative y above top edge)
          if (newY >= 0 && this.grid[newY][newX] !== 0) {
            return false;
          }
        }
      }
    }
    return true;
  }

  // Attempt to rotate piece with basic wall-kick test offsets
  rotatePiece(piece, dir = 1) {
    const clone = piece.clone();
    clone.rotate(dir);

    // Standard SRS-like wall kick offsets to test
    const offsets = [
      { x: 0, y: 0 },
      { x: -1, y: 0 },
      { x: 1, y: 0 },
      { x: -2, y: 0 },
      { x: 2, y: 0 },
      { x: 0, y: -1 },
      { x: -1, y: -1 },
      { x: 1, y: -1 }
    ];

    for (const offset of offsets) {
      if (this.isValidMove(clone, clone.x + offset.x, clone.y + offset.y, clone.shape)) {
        piece.shape = clone.shape;
        piece.x += offset.x;
        piece.y += offset.y;
        return true;
      }
    }
    return false;
  }

  // Calculate where the piece would land if dropped immediately
  getGhostPosition(piece) {
    const ghost = piece.clone();
    while (this.isValidMove(ghost, ghost.x, ghost.y + 1)) {
      ghost.y++;
    }
    return ghost;
  }

  // Freeze piece onto the grid array
  freeze(piece) {
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x] > 0) {
          const boardY = piece.y + y;
          const boardX = piece.x + x;
          if (boardY >= 0 && boardY < ROWS && boardX >= 0 && boardX < COLS) {
            this.grid[boardY][boardX] = piece.color;
          }
        }
      }
    }
  }

  // Check for completed rows, remove them, and push new empty rows at the top
  clearLines() {
    let linesCleared = 0;
    const clearedRows = [];

    for (let y = ROWS - 1; y >= 0; y--) {
      if (this.grid[y].every(cell => cell !== 0)) {
        linesCleared++;
        clearedRows.push(y);
        this.grid.splice(y, 1);
        this.grid.unshift(Array(COLS).fill(0));
        y++; // Check the same index again since lines shifted down
      }
    }

    return { linesCleared, clearedRows };
  }
}

import { COLS, ROWS, BLOCK_SIZE } from './constants';

export class Renderer {
  constructor(gameCanvas, nextCanvas, holdCanvas) {
    this.canvas = gameCanvas;
    this.ctx = gameCanvas.getContext('2d');
    this.nextCanvas = nextCanvas;
    this.nextCtx = nextCanvas.getContext('2d');
    this.holdCanvas = holdCanvas;
    this.holdCtx = holdCanvas.getContext('2d');

    // Set internal canvas resolutions
    this.canvas.width = COLS * BLOCK_SIZE;
    this.canvas.height = ROWS * BLOCK_SIZE;
    this.nextCanvas.width = 100;
    this.nextCanvas.height = 100;
    this.holdCanvas.width = 100;
    this.holdCanvas.height = 100;
  }

  // Draw a styled neon block
  drawBlock(ctx, x, y, color, size = BLOCK_SIZE, isGhost = false) {
    const px = x * size;
    const py = y * size;
    const gap = 1; // 1px gap for clean grid look

    ctx.save();
    if (isGhost) {
      ctx.fillStyle = color + '20'; // 12% opacity fill
      ctx.strokeStyle = color + '80'; // 50% opacity outline
      ctx.lineWidth = 1;
      ctx.fillRect(px + gap, py + gap, size - gap * 2, size - gap * 2);
      ctx.strokeRect(px + gap + 0.5, py + gap + 0.5, size - gap * 2 - 1, size - gap * 2 - 1);
    } else {
      // Glow effect
      ctx.shadowColor = color;
      ctx.shadowBlur = 10;
      ctx.fillStyle = color;
      ctx.fillRect(px + gap, py + gap, size - gap * 2, size - gap * 2);

      // Inner highlight bevel for 3D glass jewel effect
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.35)';
      ctx.fillRect(px + gap, py + gap, size - gap * 2, Math.max(2, size * 0.15));
      ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
      ctx.fillRect(px + gap, py + size - Math.max(2, size * 0.15) - gap, size - gap * 2, Math.max(2, size * 0.15));
    }
    ctx.restore();
  }

  // Draw background grid
  drawGrid() {
    this.ctx.save();
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
    this.ctx.lineWidth = 1;
    for (let x = 0; x <= COLS; x++) {
      this.ctx.beginPath();
      this.ctx.moveTo(x * BLOCK_SIZE, 0);
      this.ctx.lineTo(x * BLOCK_SIZE, ROWS * BLOCK_SIZE);
      this.ctx.stroke();
    }
    for (let y = 0; y <= ROWS; y++) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y * BLOCK_SIZE);
      this.ctx.lineTo(COLS * BLOCK_SIZE, y * BLOCK_SIZE);
      this.ctx.stroke();
    }
    this.ctx.restore();
  }

  // Draw board blocks
  drawBoard(board) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawGrid();

    for (let y = 0; y < ROWS; y++) {
      for (let x = 0; x < COLS; x++) {
        const cell = board.grid[y][x];
        if (cell !== 0) {
          this.drawBlock(this.ctx, x, y, cell);
        }
      }
    }
  }

  // Draw a piece matrix at given board coordinates
  drawPiece(ctx, piece, size = BLOCK_SIZE, offsetX = 0, offsetY = 0, isGhost = false) {
    if (!piece) return;
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x] > 0) {
          const drawX = piece.x + x + offsetX;
          const drawY = piece.y + y + offsetY;
          if (drawY >= 0) {
            this.drawBlock(ctx, drawX, drawY, piece.color, size, isGhost);
          }
        }
      }
    }
  }

  // Draw next or hold piece centered in preview box
  drawPreview(ctx, canvas, piece) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (!piece) return;

    const size = 22; // Smaller block size for preview cards
    // Calculate bounding width & height of piece
    let minX = piece.shape[0].length, maxX = 0, minY = piece.shape.length, maxY = 0;
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x] > 0) {
          minX = Math.min(minX, x);
          maxX = Math.max(maxX, x);
          minY = Math.min(minY, y);
          maxY = Math.max(maxY, y);
        }
      }
    }

    const pieceWidth = (maxX - minX + 1) * size;
    const pieceHeight = (maxY - minY + 1) * size;
    const startX = (canvas.width - pieceWidth) / 2 - minX * size;
    const startY = (canvas.height - pieceHeight) / 2 - minY * size;

    ctx.save();
    for (let y = 0; y < piece.shape.length; y++) {
      for (let x = 0; x < piece.shape[y].length; x++) {
        if (piece.shape[y][x] > 0) {
          this.drawBlock(ctx, (startX + x * size) / size, (startY + y * size) / size, piece.color, size);
        }
      }
    }
    ctx.restore();
  }

  // Main render loop trigger
  render(board, activePiece, holdPiece, nextPiece) {
    this.drawBoard(board);

    if (activePiece) {
      // Draw Ghost Piece
      const ghost = board.getGhostPosition(activePiece);
      this.drawPiece(this.ctx, ghost, BLOCK_SIZE, 0, 0, true);

      // Draw Active Piece
      this.drawPiece(this.ctx, activePiece);
    }

    this.drawPreview(this.nextCtx, this.nextCanvas, nextPiece);
    this.drawPreview(this.holdCtx, this.holdCanvas, holdPiece);
  }
}

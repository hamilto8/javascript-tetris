import { Board } from "./board";
import { Piece } from "./piece";
import { POINTS, SHAPES } from "./constants";

export class Game {
  constructor(renderer, onStateChange) {
    this.renderer = renderer;
    this.onStateChange = onStateChange;
    this.board = new Board();

    this.state = "MENU"; // 'MENU', 'PLAYING', 'PAUSED', 'GAMEOVER'
    this.score = 0;
    this.highScore = parseInt(
      localStorage.getItem("tetris_high_score") || "0",
      10,
    );
    this.lines = 0;
    this.level = 1;

    this.activePiece = null;
    this.nextPiece = null;
    this.holdPiece = null;
    this.canHold = true;
    this.bag = [];

    this.dropInterval = 1000;
    this.lastTime = 0;
    this.dropCounter = 0;
    this.animationId = null;
  }

  // Standard 7-Bag Randomizer
  getRandomPiece() {
    if (this.bag.length === 0) {
      this.bag = Object.keys(SHAPES);
      // Shuffle bag
      for (let i = this.bag.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.bag[i], this.bag[j]] = [this.bag[j], this.bag[i]];
      }
    }
    const type = this.bag.pop();
    return new Piece(type);
  }

  start() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    this.board.reset();
    this.score = 0;
    this.lines = 0;
    this.level = 1;
    this.dropInterval = 1000;
    this.canHold = true;
    this.holdPiece = null;
    this.bag = [];

    this.activePiece = this.getRandomPiece();
    this.nextPiece = this.getRandomPiece();

    this.state = "PLAYING";
    this.notifyUI();

    this.lastTime = performance.now();
    this.dropCounter = 0;
    this.loop(this.lastTime);
  }

  loop(timestamp = 0) {
    if (this.state !== "PLAYING") return;

    const deltaTime = timestamp - this.lastTime;
    this.lastTime = timestamp;
    this.dropCounter += deltaTime;

    if (this.dropCounter > this.dropInterval) {
      this.moveDown();
    }

    this.renderer.render(
      this.board,
      this.activePiece,
      this.holdPiece,
      this.nextPiece,
    );
    this.animationId = requestAnimationFrame(this.loop.bind(this));
  }

  moveLeft() {
    if (this.state !== "PLAYING" || !this.activePiece) return;
    if (
      this.board.isValidMove(
        this.activePiece,
        this.activePiece.x - 1,
        this.activePiece.y,
      )
    ) {
      this.activePiece.x--;
      this.renderer.render(
        this.board,
        this.activePiece,
        this.holdPiece,
        this.nextPiece,
      );
    }
  }

  moveRight() {
    if (this.state !== "PLAYING" || !this.activePiece) return;
    if (
      this.board.isValidMove(
        this.activePiece,
        this.activePiece.x + 1,
        this.activePiece.y,
      )
    ) {
      this.activePiece.x++;
      this.renderer.render(
        this.board,
        this.activePiece,
        this.holdPiece,
        this.nextPiece,
      );
    }
  }

  moveDown() {
    if (this.state !== "PLAYING" || !this.activePiece) return false;
    if (
      this.board.isValidMove(
        this.activePiece,
        this.activePiece.x,
        this.activePiece.y + 1,
      )
    ) {
      this.activePiece.y++;
      this.dropCounter = 0;
      this.renderer.render(
        this.board,
        this.activePiece,
        this.holdPiece,
        this.nextPiece,
      );
      return true;
    } else {
      this.lockPiece();
      return false;
    }
  }

  softDrop() {
    if (this.moveDown()) {
      this.score += POINTS.SOFT_DROP;
      this.notifyUI();
    }
  }

  hardDrop() {
    if (this.state !== "PLAYING" || !this.activePiece) return;
    let dropDistance = 0;
    while (
      this.board.isValidMove(
        this.activePiece,
        this.activePiece.x,
        this.activePiece.y + 1,
      )
    ) {
      this.activePiece.y++;
      dropDistance++;
    }
    this.score += dropDistance * POINTS.HARD_DROP;
    this.lockPiece();
  }

  rotate(dir = 1) {
    if (this.state !== "PLAYING" || !this.activePiece) return;
    if (this.board.rotatePiece(this.activePiece, dir)) {
      this.renderer.render(
        this.board,
        this.activePiece,
        this.holdPiece,
        this.nextPiece,
      );
    }
  }

  hold() {
    if (this.state !== "PLAYING" || !this.canHold || !this.activePiece) return;
    const currentType = this.activePiece.type;

    if (this.holdPiece === null) {
      this.holdPiece = new Piece(currentType);
      this.activePiece = this.nextPiece;
      this.nextPiece = this.getRandomPiece();
    } else {
      const holdType = this.holdPiece.type;
      this.holdPiece = new Piece(currentType);
      this.activePiece = new Piece(holdType);
    }

    this.canHold = false;
    this.dropCounter = 0;
    this.notifyUI();
    this.renderer.render(
      this.board,
      this.activePiece,
      this.holdPiece,
      this.nextPiece,
    );
  }

  lockPiece() {
    this.board.freeze(this.activePiece);
    const { linesCleared } = this.board.clearLines();

    if (linesCleared > 0) {
      this.lines += linesCleared;
      const pointsMap = [
        0,
        POINTS.SINGLE,
        POINTS.DOUBLE,
        POINTS.TRIPLE,
        POINTS.TETRIS,
      ];
      this.score += (pointsMap[linesCleared] || 0) * this.level;

      // Level up every 10 lines
      const newLevel = Math.floor(this.lines / 10) + 1;
      if (newLevel > this.level) {
        this.level = newLevel;
        this.dropInterval = Math.max(100, 1000 - (this.level - 1) * 80);
      }
    }

    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem("tetris_high_score", this.highScore.toString());
    }

    this.activePiece = this.nextPiece;
    this.nextPiece = this.getRandomPiece();
    this.canHold = true;
    this.dropCounter = 0;
    this.notifyUI();

    // Game over check: if new piece cannot spawn
    if (!this.board.isValidMove(this.activePiece)) {
      this.gameOver();
    } else {
      this.renderer.render(
        this.board,
        this.activePiece,
        this.holdPiece,
        this.nextPiece,
      );
    }
  }

  togglePause() {
    if (this.state === "PLAYING") {
      this.state = "PAUSED";
      if (this.animationId) cancelAnimationFrame(this.animationId);
      this.notifyUI();
    } else if (this.state === "PAUSED") {
      this.state = "PLAYING";
      this.lastTime = performance.now();
      this.loop(this.lastTime);
      this.notifyUI();
    }
  }

  gameOver() {
    this.state = "GAMEOVER";
    if (this.animationId) cancelAnimationFrame(this.animationId);
    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem("tetris_high_score", this.highScore.toString());
    }
    this.notifyUI();
  }

  notifyUI() {
    if (this.onStateChange) {
      this.onStateChange({
        state: this.state,
        score: this.score,
        highScore: this.highScore,
        lines: this.lines,
        level: this.level,
      });
    }
  }
}

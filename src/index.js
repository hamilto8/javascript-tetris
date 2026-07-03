import { Renderer } from './renderer';
import { Game } from './game';
import { KEY } from './constants';

document.addEventListener('DOMContentLoaded', () => {
  const gameCanvas = document.getElementById('game-canvas');
  const nextCanvas = document.getElementById('next-canvas');
  const holdCanvas = document.getElementById('hold-canvas');

  const scoreDisplay = document.getElementById('score-display');
  const highScoreDisplay = document.getElementById('highscore-display');
  const linesDisplay = document.getElementById('lines-display');
  const levelDisplay = document.getElementById('level-display');
  const finalScoreDisplay = document.getElementById('final-score');

  const startModal = document.getElementById('start-modal');
  const pauseModal = document.getElementById('pause-modal');
  const gameOverModal = document.getElementById('gameover-modal');

  const startBtn = document.getElementById('start-btn');
  const resumeBtn = document.getElementById('resume-btn');
  const restartBtn = document.getElementById('restart-btn');
  const playAgainBtn = document.getElementById('play-again-btn');

  const renderer = new Renderer(gameCanvas, nextCanvas, holdCanvas);

  const onStateChange = ({ state, score, highScore, lines, level }) => {
    scoreDisplay.innerText = score.toLocaleString();
    highScoreDisplay.innerText = highScore.toLocaleString();
    linesDisplay.innerText = lines.toLocaleString();
    levelDisplay.innerText = level;

    // Handle modal overlays
    startModal.classList.toggle('hidden', state !== 'MENU');
    pauseModal.classList.toggle('hidden', state !== 'PAUSED');
    gameOverModal.classList.toggle('hidden', state !== 'GAMEOVER');

    if (state === 'GAMEOVER') {
      finalScoreDisplay.innerText = score.toLocaleString();
    }
  };

  const game = new Game(renderer, onStateChange);

  // Bind Buttons
  startBtn.addEventListener('click', () => game.start());
  resumeBtn.addEventListener('click', () => game.togglePause());
  restartBtn.addEventListener('click', () => game.start());
  playAgainBtn.addEventListener('click', () => game.start());

  // Bind Keyboard Controls
  document.addEventListener('keydown', (e) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
      e.preventDefault();
    }

    if (game.state === 'PLAYING') {
      switch (e.code) {
        case KEY.LEFT:
          game.moveLeft();
          break;
        case KEY.RIGHT:
          game.moveRight();
          break;
        case KEY.DOWN:
          game.softDrop();
          break;
        case KEY.ROTATE_RIGHT:
        case KEY.ROTATE_RIGHT_ALT:
          game.rotate(1);
          break;
        case KEY.ROTATE_LEFT:
          game.rotate(-1);
          break;
        case KEY.HARD_DROP:
          game.hardDrop();
          break;
        case KEY.HOLD:
        case KEY.HOLD_ALT:
        case KEY.HOLD_ALT2:
          game.hold();
          break;
      }
    }

    if (e.code === KEY.PAUSE || e.code === KEY.PAUSE_ALT) {
      if (game.state === 'PLAYING' || game.state === 'PAUSED') {
        game.togglePause();
      }
    }
  });

  // Bind Mobile Touch Controls
  const bindTouch = (id, action) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('touchstart', (e) => {
      e.preventDefault();
      action();
    });
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      action();
    });
  };

  bindTouch('btn-left', () => game.moveLeft());
  bindTouch('btn-right', () => game.moveRight());
  bindTouch('btn-down', () => game.softDrop());
  bindTouch('btn-rotate', () => game.rotate(1));
  bindTouch('btn-drop', () => game.hardDrop());
  bindTouch('btn-hold', () => game.hold());
  bindTouch('btn-pause', () => game.togglePause());

  // Initial draw & UI state
  renderer.render(game.board, null, null, null);
  game.notifyUI();
});
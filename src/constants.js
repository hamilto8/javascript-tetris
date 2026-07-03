export const COLS = 10;
export const ROWS = 20;
export const BLOCK_SIZE = 30; // Canvas drawing size per block

export const SHAPES = {
  I: [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ],
  J: [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  L: [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
  ],
  O: [
    [1, 1],
    [1, 1],
  ],
  S: [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0],
  ],
  T: [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0],
  ],
  Z: [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0],
  ],
};

export const COLORS = {
  I: "#00f0ff", // Cyber Cyan
  J: "#2e67ff", // Electric Blue
  L: "#ff8800", // Neon Orange
  O: "#ffd700", // Cyber Yellow
  S: "#00ff66", // Neon Green
  T: "#bf00ff", // Electric Purple
  Z: "#ff0055", // Neon Pink / Red
};

export const POINTS = {
  SINGLE: 100,
  DOUBLE: 300,
  TRIPLE: 500,
  TETRIS: 800,
  SOFT_DROP: 1,
  HARD_DROP: 2,
};

export const LINES_PER_LEVEL = 10;

export const KEY = {
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  DOWN: "ArrowDown",
  ROTATE_RIGHT: "ArrowUp",
  ROTATE_RIGHT_ALT: "KeyX",
  ROTATE_LEFT: "KeyZ",
  HARD_DROP: "Space",
  HOLD: "KeyC",
  HOLD_ALT: "ShiftLeft",
  HOLD_ALT2: "ShiftRight",
  PAUSE: "KeyP",
  PAUSE_ALT: "Escape",
};

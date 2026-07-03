import { Board } from '../src/board';
import { Piece } from '../src/piece';
import { COLS, ROWS, COLORS } from '../src/constants';

describe('Board Class', () => {
  let board;

  beforeEach(() => {
    board = new Board();
  });

  test('should initialize with an empty 10x20 grid', () => {
    expect(board.grid.length).toBe(ROWS);
    expect(board.grid[0].length).toBe(COLS);
    expect(board.grid.every(row => row.every(cell => cell === 0))).toBe(true);
  });

  test('should validate legal and illegal moves', () => {
    const piece = new Piece('O');
    expect(board.isValidMove(piece, 0, 0)).toBe(true);
    // Out of bounds left
    expect(board.isValidMove(piece, -1, 0)).toBe(false);
    // Out of bounds right (O piece is 2x2)
    expect(board.isValidMove(piece, COLS - 1, 0)).toBe(false);
    // Out of bounds bottom
    expect(board.isValidMove(piece, 0, ROWS)).toBe(false);
  });

  test('should freeze piece onto the board grid', () => {
    const piece = new Piece('O');
    piece.x = 4;
    piece.y = 18;
    board.freeze(piece);
    expect(board.grid[18][4]).toBe(COLORS.O);
    expect(board.grid[18][5]).toBe(COLORS.O);
    expect(board.grid[19][4]).toBe(COLORS.O);
    expect(board.grid[19][5]).toBe(COLORS.O);
  });

  test('should clear completed lines and insert empty rows at the top', () => {
    // Fill bottom two rows completely
    board.grid[ROWS - 1] = Array(COLS).fill('#ffffff');
    board.grid[ROWS - 2] = Array(COLS).fill('#ffffff');
    // Put one block on row ROWS - 3
    board.grid[ROWS - 3][0] = COLORS.I;

    const { linesCleared, clearedRows } = board.clearLines();
    expect(linesCleared).toBe(2);
    expect(clearedRows.length).toBe(2);
    // Check that row ROWS - 3 shifted down to bottom row (ROWS - 1)
    expect(board.grid[ROWS - 1][0]).toBe(COLORS.I);
    expect(board.grid[0].every(cell => cell === 0)).toBe(true);
    expect(board.grid[1].every(cell => cell === 0)).toBe(true);
  });

  test('should calculate correct ghost position at bottom of empty board', () => {
    const piece = new Piece('I');
    piece.x = 3;
    piece.y = 0;
    const ghost = board.getGhostPosition(piece);
    // On empty board, I piece (shape is 4x4, blocks on row index 1) should drop until bottom
    expect(ghost.y).toBe(ROWS - 2);
  });
});

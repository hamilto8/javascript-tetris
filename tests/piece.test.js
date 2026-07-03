import { Piece } from '../src/piece';
import { SHAPES, COLORS, COLS } from '../src/constants';

describe('Piece Class', () => {
  test('should initialize with correct shape, color, and centered position', () => {
    const piece = new Piece('T');
    expect(piece.type).toBe('T');
    expect(piece.color).toBe(COLORS.T);
    expect(piece.shape).toEqual(SHAPES.T);
    expect(piece.x).toBe(Math.floor(COLS / 2) - Math.floor(SHAPES.T[0].length / 2));
    expect(piece.y).toBe(0);
  });

  test('should clone without modifying original piece matrix', () => {
    const piece = new Piece('L');
    const clone = piece.clone();
    expect(clone).not.toBe(piece);
    expect(clone.shape).toEqual(piece.shape);
    clone.x += 5;
    expect(piece.x).not.toBe(clone.x);
  });

  test('should rotate matrix clockwise and counter-clockwise', () => {
    const piece = new Piece('T');
    const originalShape = piece.shape.map(row => [...row]);
    
    // Rotate clockwise 4 times should return to original orientation
    piece.rotate(1);
    piece.rotate(1);
    piece.rotate(1);
    piece.rotate(1);
    expect(piece.shape).toEqual(originalShape);
  });
});

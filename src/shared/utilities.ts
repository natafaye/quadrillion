import type { Coordinate, Layout, PlacedPiece, Tile, UnplacedPiece } from "./types";

export const TILE_SIZE = 4;

/**
 * Checks if two coordinates are equal
 */
export const isEqual = (a: Coordinate, b: Coordinate) =>
  a[0] === b[0] && a[1] === b[1];

/**
 * A non-mutating rotating function for coordinates or tiles or pieces or layouts
 *
 * @param rotator Either the clockwise or the counter function
 * @param toRotate The coordinate or tile or piece or layout to rotate
 * @returns A new rotated coordinate or tile or piece
 */
export const rotate = <T extends Coordinate | Tile | UnplacedPiece | PlacedPiece | Layout>(
  rotator: (c: Coordinate, axis: Coordinate) => Coordinate,
  toRotate: T,
  dimensions: Coordinate = [4, 4]
): T => {
  let rotated = toRotate
  if (Array.isArray(rotated)) {
    rotated = rotator(rotated, dimensions) as T;
  } if ("blocked" in rotated) {
    rotated = { ...rotated, blocked: rotated.blocked.map((c) => rotator(c, dimensions)) };
  } if ("spots" in rotated) {
    rotated = { ...rotated, spots: rotated.spots.map((c) => rotator(c, dimensions)) };
  } if ("slots" in rotated) {
    rotated = { ...rotated, slots: rotated.slots.map((c) => rotator(c, dimensions)) };
  } if ("dimensions" in rotated) {
    rotated = { ...rotated, dimensions: [rotated.dimensions[1], rotated.dimensions[0]] }
  }
  return rotated
};

// The two rotator options
export const clockwise = ([x, y]: Coordinate, [width, height]: Coordinate): Coordinate => [height - 1 - y, x];
export const counter = ([x, y]: Coordinate, [width, height]: Coordinate): Coordinate => [y, width - 1 - x];
import { startOver } from "../startOver";
import { BoardState } from "../board";

describe("startOver function", () => {
  it("returns to the initial state", () => {
    const expected: BoardState = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null]
    ];

    const state: BoardState = [
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null],
      [null, null, "yellow", null, null, "red", null],
      [null, null, "yellow", null, null, "yellow", null],
      [null, null, "red", null, null, "red", null]
    ];

    const newState = startOver(state);

    expect(newState).toStrictEqual(expected);
  });
});

import { addPoint } from "../addPoint";
import { ScoreState } from "../score";

describe("addPoint function", () => {
  it("adds a point", () => {
    const state: ScoreState = {red: 0, yellow: 0};
    const expected: ScoreState = {red: 1, yellow: 0};
    const newState = addPoint(state, "red");

    expect(newState).toStrictEqual(expected);
  });

  it("adds a point with null color", () => {
    const state: ScoreState = {red: 0, yellow: 0};
    const newState = addPoint(state, null);

    expect(newState).toBe(state);
  });
});

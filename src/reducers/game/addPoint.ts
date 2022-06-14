import { ScoreState } from "./score";
import { Color } from "../../types";

export function addPoint(
  state: ScoreState,
  color: Color
): ScoreState {
  if (color === null) {
    return state;
  }

  const newState = {...state};
  newState[color] = newState[color] +1;

  return newState;
}

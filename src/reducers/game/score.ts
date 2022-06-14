import { Action } from "../../actions/types";
import { addPoint } from "./addPoint";
import { getInitialScore } from "./getInitialScore";

export type ScoreState = { yellow: number, red: number};

const initialState: ScoreState = getInitialScore();

export const reducer = (
  state: ScoreState = initialState,
  action: Action
): ScoreState => {
  switch (action.type) {
    case "ADD_POINT":
      const { color } = action.payload;
      return addPoint(state, color);

    default:
      return state;
  }
};

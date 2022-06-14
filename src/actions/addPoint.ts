import { Color } from "../types";

export interface AddPointAction {
  type: "ADD_POINT";
  payload: {
    color: Color;
  };
}

export function addPoint(color: Color): AddPointAction {
  return {
    type: "ADD_POINT",
    payload: { color }
  };
}

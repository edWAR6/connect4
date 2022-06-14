import { reducer as board } from "./board";
import { reducer as score } from "./score";
import { combineReducers } from "redux";

export const reducer = combineReducers({
  board,
  score,
});

export type LocalState = ReturnType<typeof reducer>;

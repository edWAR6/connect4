import { BoardState } from "./board";
import { getInitialBoard } from "./getInitialBoard";

const initialState: BoardState = getInitialBoard();

export function startOver(
  state: BoardState,
): BoardState {
  return initialState;
}

import { RootState } from ".";

import * as fromBoard from "./game/selectors";

export const getBoard = (state: RootState) => fromBoard.getBoard(state.game);
export const getCurrentPlayer = (state: RootState) =>
  fromBoard.getCurrentPlayer(state.game);
export const getWinner = (state: RootState) => fromBoard.getWinner(state.game);
export const getScore = (state: RootState) => fromBoard.getScore(state.game);

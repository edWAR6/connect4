import { ScoreState } from "./score";

/**
 * return an empty score object
 */
export function getInitialScore(): ScoreState {
  const score: ScoreState = {yellow: 0, red: 0};

  return score;
}

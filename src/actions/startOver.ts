export interface StartOverAction {
  type: "START_OVER";
}

export function startOver(): StartOverAction {
  return {
    type: "START_OVER"
  };
}

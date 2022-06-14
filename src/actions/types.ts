import { DropCoinAction } from "./dropCoin";
import { StartOverAction } from "./startOver";
import { AddPointAction } from "./addPoint";

export type Action = DropCoinAction | StartOverAction | AddPointAction;

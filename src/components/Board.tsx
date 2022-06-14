import React from "react";
import cn from "classnames";
import { connect } from "react-redux";
import { RootState } from "../reducers";
import { getBoard, getCurrentPlayer, getWinner, getScore } from "../reducers/selectors";
import { Row } from "./Row";
import { dropCoin } from "../actions/dropCoin";
import { startOver } from "../actions/startOver";
import { addPoint } from "../actions/addPoint";
import { Color } from "../types";

interface Props {
  board: ReturnType<typeof getBoard>;
  color: ReturnType<typeof getCurrentPlayer>;
  winner: ReturnType<typeof getWinner>;
  score: ReturnType<typeof getScore>;
  dropCoin: typeof dropCoin;
  startOver: typeof startOver;
  addPoint: typeof addPoint;
}

export class BoardComponent extends React.Component<Props> {
  dropCoin = (column: number) => () => {
    // we only allow a player to drop a coin if there is no winner yet
    if (!this.props.winner) {
      this.props.dropCoin(column, this.props.color);
    }
  };

  startOver = () => {
    this.props.startOver();
  }

  displayHeader() {
    // only display the winner if there is one
    if (this.props.winner) {
      return <h2>Congratulations, {this.props.winner.color} wins the game!</h2>;
    } else {
      return <h2>It's {this.props.color}'s turn to play</h2>;
    }
  }

  displayRow = (colors: Color[], key: number) => {
    return (
      <Row
        row={key}
        dropCoin={this.dropCoin}
        colors={colors}
        key={`column-${key}`}
        winner={this.props.winner}
      />
    );
  };

  displayButton = () => {
    const buttonClasses = cn({
      Button: true,
      StartOver: !Boolean(this.props.winner),
      PlayAgain: Boolean(this.props.winner),
    });
    return (
      <input type="button" className={buttonClasses} value={this.props.winner ? "play again" : "start over"} onClick={this.startOver} />
    );
  };

  displayScore = () => {
    const {red, yellow} = this.props.score;
    return (
      <table>
        <thead>
          <tr>
            <th>Red</th>
            <th>Yellow</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <span>{red} {red === 1 ? "win" : "wins"}</span>
            </td>
            <td>
            <span>{yellow} {yellow === 1 ? "win" : "wins"}</span>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };

  render() {
    const boardClasses = cn("Game-Board");

    return (
      <>
        {this.displayHeader()}

        <div className="Game">
          <div className={boardClasses}>{this.props.board.map(this.displayRow)}</div>
          <div>
            {this.displayButton()}
            {this.displayScore()}
          </div>
        </div>
      </>
    );
  }

  componentDidUpdate(prevProps: Props) {
    const winner = this.props.winner;
    if (winner && winner.color != prevProps.winner?.color) {
      this.props.addPoint(winner.color)
    }
  }
}

const mapState = (state: RootState) => ({
  board: getBoard(state),
  color: getCurrentPlayer(state),
  winner: getWinner(state),
  score: getScore(state),
});

export const Board = connect(mapState, { dropCoin, startOver, addPoint })(BoardComponent);

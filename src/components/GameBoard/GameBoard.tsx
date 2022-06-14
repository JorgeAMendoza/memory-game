import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  resetGame,
  incrementPlayerScore,
  nextTurn,
  resetPlayerScores,
} from '../../redux/game-reducer';
import darkLogo from '../../assets/logo-dark.svg';
import GameTilesWrapper from './GameTilesWrapper';
import MultiplePlayerScore from '../MultiplePlayerScore/MultiplePlayerScore';
import SinglePlayerScore from '../SinglePlayerScore/SinglePlayerScore';
import { TileValueHashMap } from '../../types/game-board-types';

const GameBoard = () => {
  const [clickedPiece, setClickedPiece] = useState<string | number>('');
  const [movesMade, setMovesMade] = useState(0);
  const [currentIndex, setCurrentIndex] = useState<string>('');
  const [matchedValues, setMatchedValues] = useState<TileValueHashMap>({});
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const newGame = () => {
    dispatch(resetGame());
  };

  const startNewGame = () => {
    setMatchedValues({});
    setMovesMade(0);

    if (state.players.length === 1) console.log('resetting the time to 0');
    else dispatch(resetPlayerScores());
  };

  const clickPiece = (value: number | string, i: string, j: string) => {
    setMovesMade(movesMade + 1);
    if (clickedPiece === '') {
      setClickedPiece(value);
      setCurrentIndex(`${i},${j}`);
      return;
    }

    if (clickedPiece === value) {
      dispatch(incrementPlayerScore());
      const currentMatchedValues = { ...matchedValues };
      currentMatchedValues[value] = true;
      setMatchedValues(currentMatchedValues);
    } else {
      dispatch(nextTurn());
    }

    setClickedPiece('');
    setCurrentIndex('');
  };

  return (
    <main data-testid="gameBoard">
      <header>
        <img src={darkLogo} alt="Game logo" />
        <div>
          <button onClick={startNewGame}>Reset</button>
          <button onClick={newGame}>New Game</button>
        </div>
      </header>

      <section>
        {!state.boardSize ? null : (
          <GameTilesWrapper
            boardSize={state.boardSize}
            gameType={state.gameType}
            clickPiece={clickPiece}
            currentIndex={currentIndex}
            matchedValues={matchedValues}
          />
        )}
      </section>

      <section>
        {state.players.length === 1 ? (
          <SinglePlayerScore moves={movesMade} />
        ) : (
          <MultiplePlayerScore />
        )}
      </section>
    </main>
  );
};

export default GameBoard;

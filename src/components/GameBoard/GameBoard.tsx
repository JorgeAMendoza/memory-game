import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetGame } from '../../redux/game-reducer';
import darkLogo from '../../assets/logo-dark.svg';
import GameTilesWrapper from './GameTilesWrapper';
import MultiplePlayerScore from '../MultiplePlayerScore/MultiplePlayerScore';
import SinglePlayerScore from '../SinglePlayerScore/SinglePlayerScore';

const GameBoard = () => {
  const [clickedPiece, setClickedPiece] = useState<string | number>('');
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const newGame = () => {
    dispatch(resetGame());
  };

  const startNewGame = () => {
    console.log('reseting game');
  };

  const clickPiece = (value: number | string) => {
    if (clickedPiece === '') {
      setClickedPiece(value);
      return;
    }

    if (clickedPiece === value) {
      console.log('we have a winner');
    }

    setClickedPiece('');
  };

  return (
    <main>
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
          />
        )}
      </section>

      <section>
        {state.players.length === 1 ? (
          <SinglePlayerScore />
        ) : (
          <MultiplePlayerScore />
        )}
      </section>
    </main>
  );
};

export default GameBoard;

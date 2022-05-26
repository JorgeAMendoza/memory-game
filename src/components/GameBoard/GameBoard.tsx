import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import darkLogo from '../../assets/logo-dark.svg';
import GameTilesWrapper from './GameTilesWrapper';
import MultiplePlayerScore from '../MultiplePlayerScore/MultiplePlayerScore';
import SinglePlayerScore from '../SinglePlayerScore/SinglePlayerScore';

const GameBoard = () => {
  const [clickedPiece, setClickedPiece] = useState<string | number>('');
  const state = useAppSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.boardSize) navigate('/');
  }, []);

  const newGame = () => {
    console.log('navigating back to the home');
    navigate('/');
  };

  const resetGame = () => {
    console.log('reseting game');
  };

  return (
    <main>
      <header>
        <img src={darkLogo} alt="Game logo" />
        <div>
          <button onClick={resetGame}>Reset</button>
          <button onClick={newGame}>New Game</button>
        </div>
      </header>

      <section>
        {!state.boardSize ? null : (
          <GameTilesWrapper
            boardSize={state.boardSize}
            gameType={state.gameType}
            setClickedPiece={setClickedPiece}
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

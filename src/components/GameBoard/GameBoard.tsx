import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import {
  setupNewGame,
  incrementPlayerScore,
  nextTurn,
  resetPlayerScores,
} from '../../redux/game-reducer';
import darkLogo from '../../assets/logo-dark.svg';
import GameTilesWrapper from './GameTilesWrapper';
import MultiplePlayerScore from '../MultiplePlayerScore/MultiplePlayerScore';
import SinglePlayerScore from '../SinglePlayerScore/SinglePlayerScore';
import { TileValueHashMap } from '../../types/game-board-types';
import SinglePlayerModal from '../SinglePlayerModal/SinglePlayerModal';
import MultiplePlayerModal from '../MultiplePlayerModal/MultiplePlayerModal';
import modalPlayerData from '../../utils/modal-player-data';

const GameBoard = () => {
  const [clickedPiece, setClickedPiece] = useState<string | number>('');
  const [movesMade, setMovesMade] = useState(0);
  const [currentIndex, setCurrentIndex] = useState<string>('');
  const [matchedValues, setMatchedValues] = useState<TileValueHashMap>({});
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [countUp, setCountUp] = useState(true);
  const state = useAppSelector((state) => state);
  const dispatch = useAppDispatch();

  const newGame = () => {
    dispatch(setupNewGame());
  };

  const resetGame = () => {
    setMatchedValues({});
    setMovesMade(0);
    setShowGameOverModal(false);
    setCountUp(true);

    if (state.players.length === 1) setSeconds(-1);
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

      const currentMatchCount = Object.keys(currentMatchedValues).length;
      if (state.boardSize === '4x4' && currentMatchCount === 8) {
        setShowGameOverModal(true);
        setCountUp(false);
      } else if (state.boardSize === '6x6' && currentMatchCount === 18) {
        setShowGameOverModal(true);
        setCountUp(false);
      }

      setMatchedValues(currentMatchedValues);
    } else {
      dispatch(nextTurn());
    }

    setClickedPiece('');
    setCurrentIndex('');
  };

  const renderGameOverModal = () => {
    if (state.numOfPlayers === 1)
      return (
        <SinglePlayerModal
          movesMade={movesMade}
          resetGame={resetGame}
          newGame={newGame}
          seconds={seconds}
        />
      );
    else
      return (
        <MultiplePlayerModal
          resetGame={resetGame}
          newGame={newGame}
          playerData={modalPlayerData(state.players)}
        />
      );
  };

  return (
    <main data-testid="gameBoard">
      {showGameOverModal && renderGameOverModal()}
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
            clickPiece={clickPiece}
            currentIndex={currentIndex}
            matchedValues={matchedValues}
          />
        )}
      </section>

      <section>
        {state.players.length === 1 ? (
          <SinglePlayerScore
            moves={movesMade}
            seconds={seconds}
            setSeconds={setSeconds}
            countUp={countUp}
          />
        ) : (
          <MultiplePlayerScore />
        )}
      </section>
    </main>
  );
};

export default GameBoard;

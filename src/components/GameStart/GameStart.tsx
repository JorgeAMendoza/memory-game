import { useState } from 'react';
import { useDispatch } from 'react-redux';
import GameInformation from '../../types/game-context-types';
import { Player } from '../../types/game-context-types';
import { setupGame } from '../../redux/game-reducer';
import whiteLogo from '../../assets/logo-white.svg';
import { useAppDispatch } from '../../hooks';

type GameType = 'numbers' | 'icons';
type NumOfPlayers = 1 | 2 | 3 | 4;
type GridSize = '4x4' | '6x6';

const GameStart = () => {
  const [gameType, setGameType] = useState<GameType>('numbers');
  const [numPlayers, setNumPlayers] = useState<NumOfPlayers>(1);
  const [gridSize, setGridSize] = useState<GridSize>('4x4');
  const dispatch = useAppDispatch();

  const startGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const players: Player[] = [];

    const playerNames: ['1', '2', '3', '4'] = ['1', '2', '3', '4'];

    for (let i = 0; i < numPlayers; i++) {
      const newPlayer: Player = {
        name: playerNames[0],
        score: 0,
      };
      players.push(newPlayer);
    }

    const newGameConfig: GameInformation = {
      gameType: gameType,
      numOfPlayers: numPlayers,
      boardSize: gridSize,
      players,
    };
    dispatch(setupGame(newGameConfig));
  };

  return (
    <div>
      <header>
        <img src={whiteLogo} alt="title header" />
      </header>

      <main>
        <form onSubmit={startGame}>
          <section>
            <h3>Select Theme</h3>
            <div>
              <label>
                Number{' '}
                <input
                  type="radio"
                  name="gameType"
                  checked={gameType === 'numbers' ? true : false}
                  onChange={() => setGameType('numbers')}
                />
              </label>

              <label>
                Icon{' '}
                <input
                  type="radio"
                  name="gameType"
                  onChange={() => setGameType('icons')}
                />
              </label>
            </div>
          </section>

          <section>
            <h3>Number of Players</h3>
            {[1, 2, 3, 4].map((num) => (
              <label key={num}>
                {num}
                <input
                  type="radio"
                  onChange={() => setNumPlayers(num as NumOfPlayers)}
                  checked={numPlayers === num ? true : false}
                  name="numPlayers"
                />
              </label>
            ))}
          </section>

          <section>
            <div>
              <label>
                4x4{' '}
                <input
                  type="radio"
                  name="gridSize"
                  checked={gridSize === '4x4' ? true : false}
                  onChange={() => setGridSize('4x4')}
                />
              </label>
              <label>
                6x6{' '}
                <input
                  type="radio"
                  name="gridSize"
                  onChange={() => setGridSize('6x6')}
                />
              </label>
            </div>
          </section>

          <button>Start Game</button>
        </form>
      </main>
    </div>
  );
};

export default GameStart;

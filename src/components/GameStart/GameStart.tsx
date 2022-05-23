import { useState } from 'react';
import whiteLogo from '../../assets/logo-white.svg';

type GameType = 'Number' | 'Icon';
type NumOfPlayers = 1 | 2 | 3 | 4;
type GridSize = '4x4' | '6x6';

const GameStart = () => {
  const [gameType, setGameType] = useState<GameType>('Number');
  const [numPlayers, setNumPlayers] = useState<NumOfPlayers>(1);
  const [gridSize, setGridSize] = useState<GridSize>('4x4');

  const startGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      'starting game, or really, set context and direct to next page'
    );
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
                  checked={gameType === 'Number' ? true : false}
                  onChange={() => setGameType('Number')}
                />
              </label>

              <label>
                Icon{' '}
                <input
                  type="radio"
                  name="gameType"
                  onChange={() => setGameType('Icon')}
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

// focus on settign up the state of the game start meaning that each button click needs to set up some data, and at teh end we need to set the context state of the application.

export default GameStart;

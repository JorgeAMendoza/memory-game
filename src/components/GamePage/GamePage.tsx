import GameBoard from '../GameBoard/GameBoard';
import darkLogo from '../../assets/logo-dark.svg';

const GamePage = () => {
  return (
    <main>
      <header>
        <div>
          <img src={darkLogo} alt="Game logo" />
        </div>
        <div>
          <button>Restart</button>
          <button>New Game</button>
        </div>
      </header>

      <GameBoard />
    </main>
  );
};

export default GamePage;

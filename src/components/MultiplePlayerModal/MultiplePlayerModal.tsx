import { useAppSelector } from '../../hooks';

interface MultiplePlayerModalProps {
  resetGame: () => void;
  newGame: () => void;
}

const MultiplePlayerModal = ({
  resetGame,
  newGame,
}: MultiplePlayerModalProps) => {
  const playerData = useAppSelector((state) => state.players);
  return (
    <div>
      <div>
        <h2>Player 3 Wins!</h2>
        <p>Game Over! Here are the results!</p>
      </div>

      <div>
        <div>
          <p>Player 3 (Winner)</p>
          <p>8 Pairs</p>
        </div>
      </div>

      <div>
        <button onClick={resetGame}>Restart</button>
        <button onClick={newGame}>Setup New Game</button>
      </div>
    </div>
  );
};

export default MultiplePlayerModal;

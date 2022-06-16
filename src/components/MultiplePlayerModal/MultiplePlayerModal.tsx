import { FinalPlayerData } from '../../types/general-types';

interface MultiplePlayerModalProps {
  resetGame: () => void;
  newGame: () => void;
  playerData: FinalPlayerData;
}

const MultiplePlayerModal = ({
  resetGame,
  newGame,
  playerData,
}: MultiplePlayerModalProps) => {
  return (
    <div>
      <div>
        <h2>{playerData.modalMessage}</h2>
        <p>Game Over! Here are the results!</p>
      </div>

      <div>
        <ul>
          {playerData.players.map((player) => (
            <li key={player.name}>
              <p>
                Player {player.name} {player.isWinner && '(Winner!)'}
              </p>
              <p>{player.score} Pairs</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <button onClick={resetGame}>Restart</button>
        <button onClick={newGame}>Setup New Game</button>
      </div>
    </div>
  );
};

export default MultiplePlayerModal;

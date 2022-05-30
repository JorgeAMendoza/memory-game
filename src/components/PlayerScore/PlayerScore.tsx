import { Player } from '../../types/game-context-types';

const PlayerScore = ({ name, score, currentTurn }: Player) => {
  return (
    <div>
      <p>Player {name}</p>
      <p>{score}</p>
      {currentTurn && <p>Current Turn</p>}
    </div>
  );
};

export default PlayerScore;

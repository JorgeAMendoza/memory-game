import { Player } from '../../types/game-context-types';

const PlayerScore = ({ name, score }: Player) => {
  return (
    <div>
      <p>Player {name}</p>
      <p>{score}</p>
      <p>Current Turn</p>
      {/* Current turn will be absolute and only show when its the players torn.  */}
    </div>
  );
};

export default PlayerScore;

import { useAppSelector } from '../../hooks';
import PlayerScore from '../PlayerScore/PlayerScore';

const MultiplePlayerScore = () => {
  const players = useAppSelector((state) => state.players);
  return (
    <section>
      {players.map((player) => (
        <PlayerScore
          key={player.name}
          name={player.name}
          score={player.score}
          currentTurn={player.currentTurn}
        />
      ))}
    </section>
  );
};

export default MultiplePlayerScore;

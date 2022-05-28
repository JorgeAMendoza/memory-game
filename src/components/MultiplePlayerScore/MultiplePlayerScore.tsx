import { useAppSelector } from '../../hooks';
import PlayerScore from '../PlayerScore/PlayerScore';

const MultiplePlayerScore = () => {
  const state = useAppSelector((state) => state);
  return (
    <section>
      {state.players.map((player) => (
        <PlayerScore
          key={player.name}
          name={player.name}
          score={player.score}
        />
      ))}
    </section>
  );
};

export default MultiplePlayerScore;

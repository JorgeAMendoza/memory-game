import { useAppSelector } from '../../hooks';
import {
  MultiplePlayerScoreStyled,
  PlayerScore,
} from './MultiplePlayerScore.styled';
import { useMediaQuery } from 'react-responsive';
import device from '../../Styles/device';

const MultiplePlayerScore = () => {
  const isTablet = useMediaQuery({
    query: device.tablet,
  });
  const players = useAppSelector((state) => state.players);
  return (
    <MultiplePlayerScoreStyled data-testid="playerScoreCards">
      {players.map((player) => (
        <PlayerScore key={player.name} currentTurn={player.currentTurn}>
          <p>{isTablet ? `Player ${player.name}` : `P${player.name}`}</p>
          <p> {player.score}</p>
          {isTablet && player.currentTurn && (
            <p data-testid="currentTurnText"> Current Turn</p>
          )}
        </PlayerScore>
      ))}
    </MultiplePlayerScoreStyled>
  );
};

export default MultiplePlayerScore;

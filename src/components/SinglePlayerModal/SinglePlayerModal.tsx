import {
  SinglePlayerModalStyled,
  SingleModalContainer,
  SingleModalHeader,
  SingleModalStats,
  SingleGameOptions,
} from './SinglePlayerModal.styled';
import { OrangeButton, GreyButton } from '../Buttons/Button.styled';

interface SinglePlayerModalProps {
  movesMade: number;
  resetGame: () => void;
  newGame: () => void;
  seconds: number;
}

const SinglePlayerModal = ({
  movesMade,
  resetGame,
  newGame,
  seconds,
}: SinglePlayerModalProps) => {
  const parseTime = () => {
    const date = new Date(0);
    date.setSeconds(seconds);
    const minuteValue = date.getMinutes().toString();
    const secondsValue =
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;

    return `${minuteValue}:${secondsValue}`;
  };
  return (
    <SinglePlayerModalStyled data-testid="singlePlayerGameOver">
      <SingleModalContainer>
        <SingleModalHeader>
          <h2>You did it!</h2>
          <p>Game over! Here{`'`}s how you got on... </p>
        </SingleModalHeader>

        <SingleModalStats>
          <div>
            <p>Time Elapsed</p>
            <p>{parseTime()}</p>
          </div>
          <div>
            <p>Moves Taken</p>
            <p data-testid="modalMovesMade">{movesMade}</p>
          </div>
        </SingleModalStats>

        <SingleGameOptions>
          <OrangeButton onClick={resetGame}>Restart</OrangeButton>
          <GreyButton onClick={newGame}>Setup New Game</GreyButton>
        </SingleGameOptions>
      </SingleModalContainer>
    </SinglePlayerModalStyled>
  );
};

export default SinglePlayerModal;

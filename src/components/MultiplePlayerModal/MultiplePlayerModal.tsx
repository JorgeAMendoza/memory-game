import { FinalPlayerData } from '../../types/general-types';
import {
  MultiplePlayerModalStyled,
  MultipleModalHeader,
  MultipleModalContainer,
  PlayerScoreList,
  PlayerScoreItem,
  GameOverButtons,
} from './MultiplePlayerModal.styled';
import { OrangeButton, GreyButton } from '../Buttons/Button.styled';

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
    <MultiplePlayerModalStyled data-testid="multiPlayerGameModal">
      <MultipleModalContainer>
        <MultipleModalHeader>
          <h2 data-testid="multiWinnerMessage">{playerData.modalMessage}</h2>
          <p>Game Over! Here are the results...</p>
        </MultipleModalHeader>

        <PlayerScoreList data-testid="playerScoreList">
          {playerData.players.map((player) => (
            <PlayerScoreItem key={player.name} winner={player.isWinner}>
              <p>
                Player {player.name} {player.isWinner && '(Winner!)'}
              </p>
              <p>{player.score} Pairs</p>
            </PlayerScoreItem>
          ))}
        </PlayerScoreList>

        <GameOverButtons>
          <OrangeButton onClick={resetGame}>Restart</OrangeButton>
          <GreyButton onClick={newGame}>Setup New Game</GreyButton>
        </GameOverButtons>
      </MultipleModalContainer>
    </MultiplePlayerModalStyled>
  );
};

export default MultiplePlayerModal;

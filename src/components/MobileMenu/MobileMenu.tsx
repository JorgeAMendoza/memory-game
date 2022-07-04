import { MobileMenuStyled } from './MobileMenu.styled';
import { OrangeButton, GreyButton } from '../Buttons/Button.styled';

interface MobileMenuProps {
  restartGame: () => void;
  newGame: () => void;
  setMobileMenu: React.Dispatch<boolean>;
}

const MobileMenu = ({
  restartGame,
  newGame,
  setMobileMenu,
}: MobileMenuProps) => {
  return (
    <MobileMenuStyled data-testid="mobileMenu">
      <div>
        <OrangeButton data-testid="mobileRestartButton" onClick={restartGame}>
          restart
        </OrangeButton>
        <GreyButton data-testid="mobileNewGameButton" onClick={newGame}>
          new game
        </GreyButton>
        <GreyButton
          data-testid="mobileResumeButton"
          onClick={() => setMobileMenu(false)}
        >
          resume game
        </GreyButton>
      </div>
    </MobileMenuStyled>
  );
};

export default MobileMenu;

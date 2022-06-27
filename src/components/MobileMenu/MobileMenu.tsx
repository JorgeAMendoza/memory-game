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
    <MobileMenuStyled>
      <div>
        <OrangeButton onClick={restartGame}>restart</OrangeButton>
        <GreyButton onClick={newGame}>new game</GreyButton>
        <GreyButton onClick={() => setMobileMenu(false)}>
          resume game
        </GreyButton>
      </div>
    </MobileMenuStyled>
  );
};

export default MobileMenu;

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
    <div>
      <button onClick={restartGame}>restart</button>
      <button onClick={newGame}>new game</button>
      <button onClick={() => setMobileMenu(false)}>resume game</button>
    </div>
  );
};

export default MobileMenu;

interface GameTilesProps {
  boardSize: '4x4' | '6x6';
  gameType: 'numbers' | 'icons';
  setClickedPiece: React.Dispatch<string>;
}

const GameTiles = ({
  boardSize,
  gameType,
  setClickedPiece,
}: GameTilesProps) => {
  return (
    <div>
      <h3>Game tiles here</h3>
    </div>
  );
};

export default GameTiles;

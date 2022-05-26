interface GameTileProps {
  value: number | string;
  setClickedPiece: React.Dispatch<string | number>;
}

const GameTile = ({ value, setClickedPiece }: GameTileProps) => {
  return <button onClick={() => setClickedPiece(value)}>{value}</button>;
};

export default GameTile;

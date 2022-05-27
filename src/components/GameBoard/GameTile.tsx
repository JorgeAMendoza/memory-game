interface GameTileProps {
  value: number | string;
  clickPiece: (value: string | number) => void;
}

const GameTile = ({ value, clickPiece }: GameTileProps) => {
  return <button onClick={() => clickPiece(value)}>{value}</button>;
};

export default GameTile;

interface GameTileProps {
  value: number | string;
  clickPiece: (value: string | number, i: string, j: string) => void;
  indexOne: string;
  indexTwo: string;
  disableButton: boolean;
}

const GameTile = ({
  value,
  clickPiece,
  disableButton,
  indexOne,
  indexTwo,
}: GameTileProps) => {
  return (
    <button
      onClick={() => {
        clickPiece(value, indexOne, indexTwo);
      }}
      disabled={disableButton}
    >
      {value}
    </button>
  );
};

export default GameTile;

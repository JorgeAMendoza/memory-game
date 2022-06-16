interface SinglePlayerModalProps {
  movesMade: number;
  resetGame: () => void;
  newGame: () => void;
}

const SinglePlayerModal = ({
  movesMade,
  resetGame,
  newGame,
}: SinglePlayerModalProps) => {
  return (
    <div>
      <div>
        <h2>You did it!</h2>
        <p></p>
      </div>

      <div>
        <div>
          <p>Time Elapsed</p>
          <p>1:53</p>
        </div>
        <div>
          <p>Moves Taken</p>
          <p>{movesMade}</p>
        </div>
      </div>

      <div>
        <button onClick={resetGame}>Restart</button>
        <button onClick={newGame}>Setup New Game</button>
      </div>
    </div>
  );
};

export default SinglePlayerModal;
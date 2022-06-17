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
    <div>
      <div>
        <h2>You did it!</h2>
        <p></p>
      </div>

      <div>
        <div>
          <p>Time Elapsed</p>
          <p>{parseTime()}</p>
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

interface SinglePlayerScore {
  moves: number;
}

const SinglePlayerScore = ({ moves }: SinglePlayerScore) => {
  return (
    <section>
      <div>
        <p>Time</p>
        <p>0:01</p>
      </div>
      <div>
        <p>Moves</p>
        <p>{moves}</p>
      </div>
    </section>
  );
};

export default SinglePlayerScore;

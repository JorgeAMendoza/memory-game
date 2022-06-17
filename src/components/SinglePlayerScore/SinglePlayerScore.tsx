import { useEffect, useState } from 'react';

interface SinglePlayerScore {
  moves: number;
  seconds: number;
  setSeconds: React.Dispatch<number>;
  countUp: boolean;
}

const SinglePlayerScore = ({
  moves,
  seconds,
  setSeconds,
  countUp,
}: SinglePlayerScore) => {
  const [secondTime, setSecondTime] = useState('00');
  const [minuteTime, setMinuteTime] = useState('0');

  useEffect(() => {
    const dateCount = new Date(0);
    const countupTimer = setInterval(() => {
      if (!countUp) return;
      const nextSecond = seconds + 1;
      dateCount.setSeconds(nextSecond);
      const secondValue = dateCount.getSeconds();
      const minuteValue = dateCount.getMinutes().toString();
      const secondString =
        secondValue < 10 ? `0${secondValue}` : `${secondValue}`;

      setSecondTime(secondString);
      setMinuteTime(minuteValue);
      setSeconds(nextSecond);
    }, 1000);

    return () => clearInterval(countupTimer);
  });
  return (
    <section>
      <div>
        <p>Time</p>
        <p>
          {minuteTime}:{secondTime}
        </p>
      </div>
      <div>
        <p>Moves</p>
        <p>{moves}</p>
      </div>
    </section>
  );
};

export default SinglePlayerScore;

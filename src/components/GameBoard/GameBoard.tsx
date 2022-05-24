import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';

const GameBoard = () => {
  const state = useAppSelector((state) => state);
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.boardSize) navigate('/');
  }, []);

  const newGame = () => {
    navigate('/');
  };

  return (
    <section>
      {/* render amount of pieces needed, determined by props */}
      <h1>You are on teh game board</h1>
      <button onClick={newGame}>Navigate back home</button>
    </section>
  );
};

export default GameBoard;

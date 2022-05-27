import GameStart from './components/GameStart/GameStart';
import GameBoard from './components/GameBoard/GameBoard';
import { useAppSelector } from './hooks';

function App() {
  const state = useAppSelector((state) => state);
  return (
    <div>
      {!state.gameType && <GameStart />}
      {state.gameType && <GameBoard />}
    </div>
  );
}

export default App;

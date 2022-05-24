import GameStart from './components/GameStart/GameStart';
import GameBoard from './components/GameBoard/GameBoard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<GameStart />} />
        <Route path="game-active" element={<GameBoard />} />
      </Routes>
    </div>
  );
}

export default App;

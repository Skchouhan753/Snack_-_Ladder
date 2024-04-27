import { useState } from 'react';
import Board from './components/Board';
import PlayerInput from './components/PlayerInput';
import GameLog from './components/GameLog';

const App = () => {
  const [snakes, setSnakes] = useState([]);
  const [ladders, setLadders] = useState([]);
  const [players, setPlayers] = useState([]);
  const [gameLog, setGameLog] = useState([]);

  const handleStartGame = (s, l, p) => {
    setSnakes(s);
    setLadders(l);
    setPlayers(p);
    setGameLog([]);
  };

  const handleGameLogUpdate = (log) => {
    setGameLog([...gameLog, log]);
  };

  return (
    <div>
      <h1>Snake & Ladder Game</h1>
      <PlayerInput onStartGame={handleStartGame} />
      <Board snakes={snakes} ladders={ladders} players={players} onGameLogUpdate={handleGameLogUpdate} />
      <GameLog log={gameLog} />
    </div>
  );
};

export default App;

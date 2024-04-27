/* eslint-disable react/prop-types */
import { useState } from 'react';

const PlayerInput = ({ onStartGame }) => {
  const [numSnakes, setNumSnakes] = useState(0);
  const [snakes, setSnakes] = useState([]);
  const [numLadders, setNumLadders] = useState(0);
  const [ladders, setLadders] = useState([]);
  const [numPlayers, setNumPlayers] = useState(0);
  const [players, setPlayers] = useState([]);

  const handleStartGame = () => {
    onStartGame(snakes, ladders, players);
  };

  return (
    <div>
      <h2>Enter Game Details</h2>
      <label>
        Number of Snakes:
        <input type="number" value={numSnakes} onChange={(e) => setNumSnakes(parseInt(e.target.value))} />
      </label>
      <br />
      {[...Array(numSnakes)].map((_, index) => (
        <div key={index}>
          <label>
            Snake {index + 1} Head:
            <input type="number" onChange={(e) => setSnakes([...snakes, { head: parseInt(e.target.value) }])} />
          </label>
          <label>
            Snake {index + 1} Tail:
            <input type="number" onChange={(e) => setSnakes([...snakes, { tail: parseInt(e.target.value) }])} />
          </label>
          <br />
        </div>
      ))}
      <br />
      <label>
        Number of Ladders:
        <input type="number" value={numLadders} onChange={(e) => setNumLadders(parseInt(e.target.value))} />
      </label>
      <br />
      {[...Array(numLadders)].map((_, index) => (
        <div key={index}>
          <label>
            Ladder {index + 1} Start:
            <input type="number" onChange={(e) => setLadders([...ladders, { start: parseInt(e.target.value) }])} />
          </label>
          <label>
            Ladder {index + 1} End:
            <input type="number" onChange={(e) => setLadders([...ladders, { end: parseInt(e.target.value) }])} />
          </label>
          <br />
        </div>
      ))}
      <br />
      <label>
        Number of Players:
        <input type="number" value={numPlayers} onChange={(e) => setNumPlayers(parseInt(e.target.value))} />
      </label>
      <br />
      {[...Array(numPlayers)].map((_, index) => (
        <div key={index}>
          <label>
            Player {index + 1} Name:
            <input type="text" onChange={(e) => setPlayers([...players, e.target.value])} />
          </label>
          <br />
        </div>
      ))}
      <br />
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  );
};

export default PlayerInput;

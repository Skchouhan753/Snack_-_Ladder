/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const Board = ({ snakes, ladders, players, onGameLogUpdate }) => {
  const [playerPositions, setPlayerPositions] = useState({});

  useEffect(() => {
    // Initialize player positions
    const initialPositions = {};
    players.forEach(player => {
      initialPositions[player] = 0;
    });
    setPlayerPositions(initialPositions);
  }, [players]);

  const movePlayer = (player) => {
    const newPosition = playerPositions[player] + Math.floor(Math.random() * 6) + 1;
    const log = `${player} rolled a ${newPosition - playerPositions[player]} and moved from ${playerPositions[player]} to ${newPosition}`;
    onGameLogUpdate(log);
    
    let finalPosition = newPosition;
    if (snakes.find(snake => snake.head === newPosition)) {
      finalPosition = snakes.find(snake => snake.head === newPosition).tail;
      onGameLogUpdate(`Oops! ${player} got bitten by a snake and moved from ${newPosition} to ${finalPosition}`);
    }
    if (ladders.find(ladder => ladder.start === newPosition)) {
      finalPosition = ladders.find(ladder => ladder.start === newPosition).end;
      onGameLogUpdate(`Wow! ${player} climbed a ladder and moved from ${newPosition} to ${finalPosition}`);
    }
    
    const updatedPositions = { ...playerPositions, [player]: finalPosition };
    setPlayerPositions(updatedPositions);
  };

  return (
    <div>
      <h2>Board</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '300px' }}>
        {[...Array(100)].map((_, index) => (
          <div key={index} style={{ width: '10%', height: '50px', border: '1px solid black', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {players.map(player => (
              <div key={player} style={{ width: '50%', height: '50%', backgroundColor: playerPositions[player] === index + 1 ? 'blue' : 'transparent', borderRadius: '50%', color: 'white' }}>
                {playerPositions[player] === index + 1 && player.charAt(0)}
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={() => movePlayer(players[0])}>Roll Dice for {players[0]}</button>
      <button onClick={() => movePlayer(players[1])}>Roll Dice for {players[1]}</button>
      {/* Add buttons for more players if needed */}
    </div>
  );
};

export default Board;

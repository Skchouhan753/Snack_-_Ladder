/* eslint-disable react/prop-types */


const GameLog = ({ log }) => {
  return (
    <div>
      <h2>Game Log</h2>
      <ul>
        {log.map((entry, index) => (
          <li key={index}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameLog;

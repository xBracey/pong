import React, { useState } from "react";
import { startGame } from "./phaser";

const gameContainerId = "gameContainer";

export const App = () => {
  const [hasStarted, setHasStarted] = useState(false);

  const onClick = () => {
    setHasStarted(true);
    startGame(gameContainerId);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello World</h1>
      {!hasStarted && <button onClick={onClick}>Start</button>}
      <div id={gameContainerId} />
    </div>
  );
};

import React from "react";
import { startGame } from "./phaser";

const gameContainerId = "gameContainer";

export const App = () => {
  const onClick = () => {
    startGame(gameContainerId);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Hello World</h1>
      <button onClick={onClick}>Start</button>
      <div id={gameContainerId} />
    </div>
  );
};

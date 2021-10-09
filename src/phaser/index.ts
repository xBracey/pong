import Phaser from "phaser";
import { GameScene } from "./GameScene";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 450,
  height: 600,
  backgroundColor: "#fff",
  scene: GameScene,
};

export const startGame = (parent: string) => {
  new Phaser.Game({ ...config, parent });
};

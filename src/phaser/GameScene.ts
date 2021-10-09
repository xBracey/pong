import Phaser from "phaser";
import { Position, Wall } from "./Wall";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Game",
};

export class GameScene extends Phaser.Scene {
  private walls: Wall[];

  constructor() {
    super(sceneConfig);
  }

  public create = () => {
    const walls = ["Left", "Right", "Top", "Bottom"].map(
      (position: Position) => new Wall(this, position)
    );

    walls.forEach((wall) => {
      this.add.existing(wall);
    });
  };

  public update() {}
}

import Phaser from "phaser";

const width = 20;

export type Position = "Left" | "Right" | "Top" | "Bottom";

export class Wall extends Phaser.GameObjects.Rectangle {
  constructor(scene: Phaser.Scene, position: Position) {
    if (position === "Left" || position === "Right") {
      super(
        scene,
        position === "Left" ? width / 2 : scene.scale.width - width / 2,
        scene.scale.height / 2,
        width,
        scene.scale.height,
        0x000000
      );
    } else {
      super(
        scene,
        scene.scale.width / 2,
        position === "Top" ? width / 2 : scene.scale.height - width / 2,
        scene.scale.width,
        width,
        0x000000
      );
    }
  }
}

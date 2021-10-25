import Phaser from "phaser";

export class Paddle extends Phaser.Physics.Arcade.Image {
  constructor(scene: Phaser.Scene) {
    super(scene, scene.scale.width - 60, scene.scale.height / 2, "paddle");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setVisible(true);
    this.setBodySize(15, 90);
    this.setCollideWorldBounds(true);
    this.setImmovable(true);
  }

  update() {
    super.update();
    const upKey = this.scene.input.keyboard.addKey("Up");
    const downKey = this.scene.input.keyboard.addKey("Down");

    if (upKey.isDown) {
      this.y -= 5;
    } else if (downKey.isDown) {
      this.y += 5;
    }
  }
}

import Phaser from "phaser";

const radius = 12;

export class Ball extends Phaser.Physics.Matter.Image {
  constructor(scene: Phaser.Scene) {
    const world = scene.matter.world;
    super(
      world,
      world.scene.scale.width / 2,
      world.scene.scale.height / 2,
      "ball"
    );

    this.setCircle(radius);
    this.setFriction(0.005);
    this.setBounce(1);
    scene.add.existing(this);
  }
}

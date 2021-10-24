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
    this.setFriction(0, 0);
    this.setBounce(1);
    this.setVelocity(20, 20);

    scene.add.existing(this);
  }
}

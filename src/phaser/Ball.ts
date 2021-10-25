import Phaser from "phaser";

const radius = 12;

export class Ball extends Phaser.Physics.Arcade.Image {
  constructor(scene: Phaser.Scene) {
    super(scene, scene.scale.width / 2, scene.scale.height / 2, "ball");

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.setCircle(radius);
    this.setFriction(1);
    this.setBounce(1);
    this.setVelocity(400, 400);
    this.setCollideWorldBounds(true);
  }
}

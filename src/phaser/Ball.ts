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
    this.setCollideWorldBounds(true);
    this.setRandomVelocity();
  }

  setRandomVelocity() {
    const firstV = Math.floor(Math.random() * 400) + 200;
    this.setVelocity(-firstV, -800 + firstV);
  }

  reset() {
    this.x = 225;
    this.y = 300;
    this.setRandomVelocity();
  }
}

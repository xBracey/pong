import Phaser from "phaser";

export class Paddle extends Phaser.Physics.Matter.Image {
  constructor(scene: Phaser.Scene) {
    const { world } = scene.matter;
    super(
      world,
      world.scene.scale.width - 60,
      world.scene.scale.height / 2,
      "paddle"
    );

    this.setRectangle(15, 90);
    this.setOnCollide((event: any) => {
      console.log(event);
    });
    this.setMass(100000000);
    this.setBounce(1);

    scene.add.existing(this);
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

import Phaser from "phaser";
import { Ball } from "./Ball";
import { Paddle } from "./Paddle";
import { Position, Wall } from "./Wall";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Game",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { x: 0, y: 0 },
      // debug: true,
    },
  },
};

export class GameScene extends Phaser.Scene {
  private walls: Wall[];
  private rightWall: Wall;
  private ball: Ball[];
  private paddle: Paddle;
  private world: Phaser.Physics.Arcade.World;
  private counterText: Phaser.GameObjects.Text;

  constructor() {
    super(sceneConfig);
  }

  public preload() {
    this.load.image("ball", "/assets/ball.png");
    this.load.image("paddle", "/assets/paddle.png");
  }

  public create() {
    this.walls = ["Left", "Top", "Bottom"].map(
      (position: Position) => new Wall(this, position)
    );

    this.rightWall = new Wall(this, "Right", 0xff0000);

    this.world = this.physics.world.setBounds(
      0,
      0,
      450,
      600,
      true,
      false,
      true,
      true
    );

    this.ball = [new Ball(this), new Ball(this)];
    this.paddle = new Paddle(this);

    this.counterText = this.add.text(0, 0, "0", {
      font: "24px Courier",
      color: "#ffffff",
    });
  }

  public update() {
    this.paddle.update();
    this.physics.collide(this.ball, this.paddle);
    this.physics.collide(this.ball, this.walls);
    this.physics.collide(this.ball, this.rightWall, (object1: Ball) => {
      const newCounter = parseInt(this.counterText.text, 10) + 1;
      this.counterText.setText(newCounter.toString());
      object1.reset();
    });
  }
}

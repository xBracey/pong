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
      debug: true,
    },
  },
};

export class GameScene extends Phaser.Scene {
  private walls: Wall[];
  private ball: Ball;
  private paddle: Paddle;
  private world: Phaser.Physics.Arcade.World;
  private counter: number;

  constructor() {
    super(sceneConfig);
  }

  public preload() {
    this.load.image("ball", "/assets/ball.png");
    this.load.image("paddle", "/assets/paddle.png");
  }

  public create() {
    const walls = ["Left", "Right", "Top", "Bottom"].map(
      (position: Position) => new Wall(this, position)
    );

    this.walls = walls.map((wall) => {
      return this.add.existing(wall);
    });

    this.world = this.physics.world.setBounds(
      20,
      20,
      410,
      560,
      true,
      true,
      true,
      true
    );

    this.ball = new Ball(this);
    this.paddle = new Paddle(this);
  }

  public update() {
    this.paddle.update();
    this.physics.collide(this.ball, this.paddle);
  }
}

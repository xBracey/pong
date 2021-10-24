import Phaser from "phaser";
import { Ball } from "./Ball";
import { Paddle } from "./Paddle";
import { Position, Wall } from "./Wall";

const sceneConfig: Phaser.Types.Scenes.SettingsConfig = {
  active: false,
  visible: false,
  key: "Game",
  physics: {
    default: "matter",
    matter: {
      enableSleeping: true,
      debug: {
        showBody: true,
        showStaticBody: true,
      },
    },
  },
};

export class GameScene extends Phaser.Scene {
  private walls: Wall[];
  private ball: Ball;
  private paddle: Paddle;
  private world: Phaser.Physics.Matter.World;

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

    this.world = this.matter.world.setBounds(
      20,
      20,
      410,
      560,
      100,
      true,
      true,
      true,
      true
    );
    this.world.disableGravity();
    this.world.update60Hz();

    this.ball = new Ball(this);
    this.paddle = new Paddle(this);
  }

  public update() {
    console.log(this.world.getAllBodies());
    // this.paddle.update();
  }
}

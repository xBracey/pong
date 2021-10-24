import Phaser from "phaser";
import { Ball } from "./Ball";
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
  private world: Phaser.Physics.Matter.World;

  constructor() {
    super(sceneConfig);
  }

  public preload() {
    console.log(window.location.pathname);

    this.load.image("ball", "/assets/ball.png");
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
      1,
      true,
      true,
      true,
      true
    );

    const ball = new Ball(this);

    console.log(ball.texture.get());
  }
}

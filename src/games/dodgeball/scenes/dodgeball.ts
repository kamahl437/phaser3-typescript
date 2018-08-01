import { DodgeballPlayer } from "../objects/dodgeballPlayer";


export class DodgeballScene extends Phaser.Scene {
    dodgeballPlayer: DodgeballPlayer;
    ground: Phaser.Physics.Arcade.Image;

  constructor() {
    super({
      key: "DodgeballScene"
    });
  }

  preload(): void {
      this.load.image('player','assets/networker/player.png');
      this.load.image('dodgeballGround','assets/networker/rectangle.png')

  }

  create():void {
    this.dodgeballPlayer = new DodgeballPlayer(this,0,0,'player');
    this.dodgeballPlayer.setScale(.5,.5)
    this.ground = this.physics.add.staticImage(320, 700, 'dodgeballGround').setScale(2.5).refreshBody();
    this.physics.add.collider(this.dodgeballPlayer, this.ground);
  }

  update(): void {


        // Phaser.Geom.Intersects.RectangleToRectangle(
        //   this.asteroids[i].getBody(),
        //   this.player.getBody()

       // this.scene.start("GameScene");
  }

}

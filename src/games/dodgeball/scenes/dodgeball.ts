import { DodgeballPlayer } from "../objects/dodgeballPlayer";
import * as _ from "lodash";
 
export class DodgeballScene extends Phaser.Scene {
    dodgeballPlayer: DodgeballPlayer;
    ground: Phaser.Physics.Arcade.Image;
    recruitedPlayerNumber = 100;
    players = [];

  constructor() {
    super({
      key: "DodgeballScene"
    });
  }

  preload(): void {
      this.load.image('player','assets/networker/player.png');
      this.load.image('dodgeballGround','assets/networker/rectangle.png');
  }

  create():void {
    this.ground = this.physics.add.staticImage(320, 700, 'dodgeballGround').setScale(2.5).refreshBody();
    _.times(this.recruitedPlayerNumber, () => {
      let player = new DodgeballPlayer(this,0,0,'player');
      player.setScale(.25,.25)
      this.physics.add.collider(player, this.ground);
      this.players.push(player);
    });
  }

  update(): void {

    _.each(this.players, (player) => {
      player.update();
    })
        // Phaser.Geom.Intersects.RectangleToRectangle(
        //   this.asteroids[i].getBody(),
        //   this.player.getBody()

       // this.scene.start("GameScene");
  }

}

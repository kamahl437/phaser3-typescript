

export class DodgeballScene extends Phaser.Scene {

  constructor() {
    super({
      key: "DodgeballScene"
    });
  }

  create(): void {
    this.load.image('player','assets/networker/player.png');
  }

  update(): void {


        // Phaser.Geom.Intersects.RectangleToRectangle(
        //   this.asteroids[i].getBody(),
        //   this.player.getBody()

       // this.scene.start("GameScene");
  }

}

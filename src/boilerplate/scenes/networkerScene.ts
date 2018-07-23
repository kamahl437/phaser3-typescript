import { Player } from "../../games/networker/objects/player";

/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @license      Digitsensitive
 */

export class Networker extends Phaser.Scene {

  constructor() {
    super({
      key: "NetworkerScene"
    });
  }
  private player:Player;
  private score = 0;
  private scoreText:Phaser.GameObjects.Text;

  preload() {
      this.load.image('cat', 'assets/networker/cat.png')
      this.load.image('background', 'assets/networker/background.png')
      this.load.image('spider', 'assets/networker/mite-alt.png')
      this.load.image('player','assets/networker/player.png')
      this.load.image('ground','assets/networker/rectangle.png')
      this.load.image('coin','assets/networker/coin.png')
  }

  create():void {
      // order matters for z layering
      this.add.image(400,300,'background');
      // let spiders = this.physics.add.group();
      //scale between 0 and 1 makes the image smaller. larger than 1 is bigger
      // negative seems to reverse it.
      // spiders.create(300,400,'spider').setScale(.1);
      // spiders.create(600,400,'spider').setScale(.1);
      this.player = new Player(this, 100, 100,'player');
      let platforms = this.physics.add.staticGroup();
      platforms.create(100, 400, 'ground');
      platforms.create(600, 400, 'ground');
      let coins = this.physics.add.group({
        key:'coin',
        repeat:11,
        setXY:{x:12, y:0, stepX:70}
      });
      coins.children.iterate(function (child) {
        child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
      }, this);
      //refresh body makes sure the physics scale with the image
      platforms.create(320, 700, 'ground').setScale(2.5).refreshBody();
      //first parameter gets checked for collision first
      this.physics.add.collider(platforms, this.player);
      this.physics.add.collider(coins, platforms);
      this.physics.add.collider(this.player, coins, this.collectCoin, null, this)
      this.scoreText = this.add.text(16,16,'score: 0', {fontSize: '32px', fill: '#000'});


    }

    collectCoin (player, coin:Phaser.Physics.Arcade.Image) {
      coin.disableBody(true, true);
      this.score += 10;
      this.scoreText.setText(`Score: ${this.score}`)
    }

    update(time:number):void {
      this.player.update();
  }
}

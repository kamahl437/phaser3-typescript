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

  private cursors;

  preload() {
      this.load.image('cat', 'assets/networker/cat.png')
      this.load.image('background', 'assets/networker/background.png')
      this.load.image('spider', 'assets/networker/mite-alt.png')
  }

  create():void {
      // order matters for z layering
      this.add.image(400,300,'background');
      let spiders = this.physics.add.group();
      //scale between 0 and 1 makes the image smaller. larger than 1 is bigger
      // negative seems to reverse it.
      spiders.create(300,400,'spider').setScale(.1);
      spiders.create(600,400,'spider').setScale(.1);
      this.cursors = this.input.keyboard.createCursorKeys();
  }
  update():void {
      if (this.cursors.left.isDown) {
          
      }
  }
}

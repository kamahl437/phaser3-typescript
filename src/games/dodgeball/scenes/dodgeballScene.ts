import { DodgeballPlayer } from "../objects/dodgeballPlayer";
import * as _ from "lodash";
import { Dodgeball } from "../objects/dodgeball";

export class DodgeballScene extends Phaser.Scene {

  dodgeballPlayer: DodgeballPlayer;
  ground: Phaser.Physics.Arcade.Image;
  recruitedPlayerNumber = 100;
  players: DodgeballPlayer[] = [];
  dodgeballs: Dodgeball[] = [];
  private playersThatMadeIt: number = 0;
  private scoreText: Phaser.GameObjects.Text;
  obstacles: Phaser.Physics.Arcade.StaticGroup;

  constructor() {
    super({
      key: "DodgeballScene"
    });
  }

  preload(): void {
    this.load.image('player', 'assets/networker/player.png');
    this.load.image('obstacle', 'assets/networker/coin.png');
    this.load.image('dodgeballGround', 'assets/networker/rectangle.png');
  }

  create(): void {
    this.createObstacles();
    this.ground = this.physics.add.staticImage(320, 700, 'dodgeballGround').setScale(2.5).refreshBody();
    _.times(this.recruitedPlayerNumber, () => {
      let player = new DodgeballPlayer(this, 0, 0, 'player');
      player.setScale(.25, .25)
      this.physics.add.collider(player, this.ground);
      this.physics.add.collider(player, this.obstacles);
      this.players.push(player);
    });
    
    this.scoreText = this.add.text(20, 20, `Score ${this.playersThatMadeIt}`)
    this.createDodgeballThrowEvent();
    
  }
  
  private createDodgeballThrowEvent() {
    let dodgeballCreationEvent = new Phaser.Time.TimerEvent({
      delay: 1500,
      loop: true,
      callback: this.createDodgeball,
      callbackScope: this
    });
    this.time.addEvent(dodgeballCreationEvent);
  }

  createDodgeball(): void {
    const dodgeball = new Dodgeball(this, "obstacle").setScale(.25, .25);
    //this.dodgeballs.push(dodgeball);
    _.each(this.players, (player: DodgeballPlayer, index) => {
      this.physics.add.collider(player, dodgeball, (player:DodgeballPlayer, ball:Dodgeball) => {
        player.hitByBall =true;
        ball.hitAPlayer = true;
        ball.destroy();
      });
    });
  }


  createObstacles(): void {
    this.obstacles = this.physics.add.staticGroup();
    this.obstacles.create(320, 570, 'obstacle');
    this.obstacles.create(350, 520, 'obstacle');
    this.obstacles.create(520, 570, 'obstacle');
    this.obstacles.create(620, 570, 'obstacle');
    this.obstacles.create(650, 530, 'obstacle');
    this.obstacles.create(120, 570, 'obstacle');
  }

  update(): void {
    _.each(this.players, (player: DodgeballPlayer, index) => {
      player.update();
      if (player.hitByBall) {
        player.destroy();
      } else if (player.isOffScreen && !player.scored) {
        ++this.playersThatMadeIt;
        player.scored = true;
        player.destroy();
      } 
    })
    _.remove(this.players, (player) => {
      return player.isOffScreen || player.hitByBall;
    })
    this.scoreText.setText(`Score ${this.playersThatMadeIt}`);
    // Phaser.Geom.Intersects.RectangleToRectangle(
    //   this.asteroids[i].getBody(),
    //   this.player.getBody()

    // this.scene.start("GameScene");
  }

}

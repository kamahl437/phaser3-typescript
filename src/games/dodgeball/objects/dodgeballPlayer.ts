import {Stats} from "./Stats"

export class DodgeballPlayer extends Phaser.GameObjects.Image {
    stats: Stats;
    cursors: CursorKeys;
    currentScene: Phaser.Scene;
    public isOffScreen: boolean = false;
    public scored: boolean = false;
    public hitByBall = false;
    
    
    
    constructor(scene:Phaser.Scene, x:number, y:number, key:string) {
        super(scene, x, y, key);
        //will want to initialize above private values to rando between 1-10
        this.setInteractive();
        scene.physics.world.enable(this);
        //this.on('pointerdown', this.onPlayerClicked)
        scene.add.existing(this);
        this.stats = new Stats();
        this.body.setVelocityX(this.stats.speed/2);
        this.cursors = this.scene.input.keyboard.createCursorKeys();
        this.currentScene = scene;
    }
    
    onPlayerClicked(cursor: any, location: any) {
        //this.toggleTextVisibility();
    }

    update(): void {
        this.handleInput();
        this.checkIfOffScreen();
    }

    private checkIfOffScreen(): void {
        if (
          this.x > this.currentScene.sys.canvas.width + 1 ||
          this.y > this.currentScene.sys.canvas.height + 1
        ) {
          this.isOffScreen = true;
        }
      }

    handleInput(): void {
        if(this.cursors.up.isDown && this.body.touching.down) {
            this.body.setVelocityY(-this.stats.jump);
            this.body.setVelocityX(this.stats.speed/2)
        } else if(this.body.touching.down) {
            this.body.setVelocityX(this.stats.speed)
        } else {
            this.body.setVelocityX(this.stats.speed/2)
        }

    }
    
}

export class Dodgeball extends Phaser.GameObjects.Image {
    cursors: CursorKeys;
    currentScene: Phaser.Scene;
    public isOffScreen: boolean = false;
    public hitAPlayer:boolean = false;
    
    
    constructor(scene:Phaser.Scene, key:string) {
        super(scene, scene.sys.canvas.width, 
            scene.sys.canvas.height-Phaser.Math.RND.between(25,150), key);
        //will want to initialize above private values to rando between 1-10
        this.setInteractive();
        scene.physics.world.enable(this);
        //this.on('pointerdown', this.onPlayerClicked)
        scene.add.existing(this);
        this.body.setVelocityX(-100);
        // if curious, -200 is essentially neutral gravity
        // this.body.setGravityY(-200);
        this.body.setAllowGravity(false)
        this.currentScene = scene;
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

    }
    
}
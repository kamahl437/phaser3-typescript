
export class Player extends Phaser.GameObjects.Image {
    private cursors: any;
    private walkingSpeed: number = 5;
  
    constructor(scene, x, y, key) {
      super(scene, x, y, key);
      this.initInput(scene);
      //if you want physics you need this.
      //this also creates the 'body'
      scene.physics.world.enable(this);
      scene.add.existing(this);
    }
    private initInput(scene): void {
      this.cursors = scene.input.keyboard.createCursorKeys();
    }
  
    update(): void {
      this.handleInput();
    }
  
    private handleInput(): void {
      if (this.cursors.right.isDown) {
        this.body.setVelocityX(160);
        this.setFlipX(false);
      } else if (this.cursors.left.isDown) {
        this.body.setVelocityX(-160);
        this.setFlipX(true);
      } else {
          this.body.setVelocityX(0);
      }
      if(this.cursors.up.isDown && this.body.touching.down) {
          this.body.setVelocityY(-150);
      }
    }
  }
  
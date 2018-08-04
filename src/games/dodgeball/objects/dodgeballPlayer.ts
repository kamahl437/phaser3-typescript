import {Stats} from "./Stats"

export class DodgeballPlayer extends Phaser.GameObjects.Image {
    stats: Stats;
    cursors: CursorKeys;
    
    
    
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
    }
    
    onPlayerClicked(cursor: any, location: any) {
        //this.toggleTextVisibility();
    }

    update(): void {
        this.handleInput();
    }
    handleInput(): void {
        if(this.cursors.up.isDown && this.body.touching.down) {
            this.body.setVelocityY(-this.stats.jump);
            this.body.setVelocityX(this.stats.speed/2)
        } else if(this.body.touching.down) {
            this.body.setVelocityX(this.stats.speed)
        }

    }
    
}
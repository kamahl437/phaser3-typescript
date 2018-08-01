import {Stats} from "./Stats"

export class DodgeballPlayer extends Phaser.GameObjects.Image {
    
    
    
    constructor(scene:Phaser.Scene, x:number, y:number, key:string) {
        super(scene, x, y, key);
        //will want to initialize above private values to rando between 1-10
        this.setInteractive();
        //this.on('pointerdown', this.onPlayerClicked)
        scene.add.existing(this);
    }
    
    onPlayerClicked(cursor: any, location: any) {
        //this.toggleTextVisibility();
    }

}
import {Stats} from "./Stats"

export class RecruitedPlayer extends Phaser.GameObjects.Image {
    
    private playerStats:Stats;
    private charismaText:Phaser.GameObjects.Text;
    private perceptionText:Phaser.GameObjects.Text;
    private motivationText:Phaser.GameObjects.Text;
    private closeButton:Phaser.GameObjects.Text;
    private statTextVisible:boolean = false;
    private openStatusMenuText: Phaser.GameObjects.Text;
    private textXOffset:number = 45;
    private recruitCb;
    recruitPlayerButton: any;
    
    
    constructor(scene:Phaser.Scene, x:number, y:number, key:string, recruitCb, stats?:Stats) {
        super(scene, x, y, key);
        //will want to initialize above private values to rando between 1-10
        this.playerStats = stats ? stats : new Stats();
        this.recruitCb = recruitCb;
        this.displayPlayerStats(scene, x, y);
        this.setInteractive();
        this.on('pointerdown', this.onPlayerClicked)
        this.setupPlayerMenu(scene, x, y);
        scene.add.existing(this);
    }
    
    onPlayerClicked(cursor: any, location: any) {
        //this.toggleTextVisibility();
    }

    

    toggleTextVisibility() {
        this.statTextVisible = !this.statTextVisible;
        this.setStatTextVisibility( this.statTextVisible);
        this.openStatusMenuText.visible = !this.statTextVisible;
        this.recruitPlayerButton.visible = !this.statTextVisible;
    }

    setStatTextVisibility(visible:boolean) {
        this.charismaText.visible = visible;
        this.perceptionText.visible = visible;
        this.motivationText.visible = visible;
        this.closeButton.visible = visible;
    }

    recruitPlayer() {
        this.recruitCb();
    }

    private displayPlayerStats(scene: Phaser.Scene, x: number, y: number) {
        this.charismaText = scene.add.text(x + this.textXOffset, y - 25, `Charisma: ${this.playerStats.charisma}`);
        this.perceptionText = scene.add.text(x + this.textXOffset, y, `Perception: ${this.playerStats.perception}`);
        this.motivationText = scene.add.text(x + this.textXOffset, y + 25, `Motivation: ${this.playerStats.motivation}`);
        this.closeButton = scene.add.text(x + this.textXOffset, y + 50, `[x] close`);
        this.closeButton.setInteractive();
        this.closeButton.on('pointerdown', this.toggleTextVisibility, this);
        this.setStatTextVisibility(false);
    }

    private setupPlayerMenu(scene: Phaser.Scene, x: number, y: number) {
        this.openStatusMenuText = scene.add.text(x + this.textXOffset, y - 25, `View Stats`);
        this.openStatusMenuText.setInteractive();
        this.openStatusMenuText.on('pointerdown', this.toggleTextVisibility, this);
        this.recruitPlayerButton = scene.add.text(x + this.textXOffset, y, `Recruit Player`);
        this.recruitPlayerButton.setInteractive();
        this.recruitPlayerButton.on('pointerdown', this.recruitPlayer, this);
    }
}
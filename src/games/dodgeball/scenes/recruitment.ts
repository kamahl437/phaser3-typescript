import { RecruitedPlayer } from "../objects/recruitedPlayer"


export class Recruitment extends Phaser.Scene {
    private socialCapital:number = 10;
    socialCapitalText: Phaser.GameObjects.Text;
    
    constructor() {
        super({
            key: "recruitmentScene"
        });
    }

    recruitPlayer():void {
        if(this.socialCapital>0) {
            --this.socialCapital;
        }
    }

    preload():void {
        //assets
        this.load.image('player','assets/networker/player.png');
        this.load.image('background', 'assets/networker/background.png')
    }

    create():void {
        //setup
        this.add.image(400,300,'background');
        this.socialCapitalText = this.add.text(16,16,`Social Capital: ${this.socialCapital}`, {fontSize: '32px', fill: '#000'});

        let player1 = new RecruitedPlayer(this, 100, 100, 'player', this.recruitPlayer.bind(this));
        let player2 = new RecruitedPlayer(this, 200, 200, 'player', this.recruitPlayer.bind(this));
        let player3 = new RecruitedPlayer(this, 300, 300, 'player', this.recruitPlayer.bind(this));

    }

    update(time:number):void {
        this.socialCapitalText.setText(`Social Capital: ${this.socialCapital}`);
    }
}
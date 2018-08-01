export class Stats {

    public charisma: number;
    public perception: number;
    public motivation: number;
    public speed: number;
    public jump: number;
    private maxStat:number = 10;

    constructor(charisma?:number, perception?:number, motivation?:number) {
        this.charisma = charisma | this.getRandomStat();
        this.perception = perception | this.getRandomStat();
        this.speed = this.getRandomStat() * 10;
        this.jump =  this.getRandomStat();
    }

    getRandomStat() {
        return this.getRandomInt(this.maxStat);
    }
    

    getRandomInt(max) {
        //essentially setting min at 1
        return (Math.floor(Math.random() * Math.floor(max-1))) + 1;
      }

    //formulas should go here

}
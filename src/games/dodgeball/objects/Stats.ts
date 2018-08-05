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
        this.speed = this.getRandomDigitStat() * 10;
        this.jump =  this.getRandomDigitStat(8) * 11;
    }

    getRandomStat() {
        return this.getRandomInt(this.maxStat, 0);
    }

    getRandomDigitStat(min?) {
        return this.getRandomNumber(this.maxStat, min | 5);
    }

    getRandomNumber(max, min?) {
        //essentially setting min at 1
        return (Math.random() * Math.floor(max-1)) + min;
    }
    

    getRandomInt(max, min) {
        return Math.floor(this.getRandomNumber(max, min));
      }

    //formulas should go here

}
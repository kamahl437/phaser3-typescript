/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 Digitsensitive
 * @license      Digitsensitive
 */

/// <reference path="../phaser.d.ts"/>

import "phaser";
// import { MainScene } from "./scenes/mainScene";
import { Networker } from "./scenes/networkerScene";
import { Recruitment } from "../games/dodgeball/scenes/recruitment"
import * as _ from "lodash";

// main game configuration
const config: GameConfig = {
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: "game",
  scene: Recruitment,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: true
    }
  }
};
// let exArr: number[] = [1,2,3,4,5,6,7,8,9];
// _.forEach(exArr, (e) => {
//   console.log(e);
// });


// game class
export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config);
  }
}

// when the page is loaded, create our game instance
window.onload = () => {
  var game = new Game(config);
};

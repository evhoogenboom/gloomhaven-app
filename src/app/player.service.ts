import { Injectable } from '@angular/core';
import { Player } from './models/player';
import {PlayerType} from './enums/PlayerType';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersInGame: Player[] =  [this.createPlayer('Estelle'), this.createPlayer('Thijs'), this.createPlayer('Macy')]

  constructor() { }

  savePlayer(player: Player): void {
    this.playersInGame.push(player);
    console.log('service');
    console.log(this.playersInGame);
  }

  deletePlayer(player: Player) {
    this.playersInGame = this.playersInGame.filter(p => p !== player && p.masterName !== player.name); // not working
  }

  getPlayers(): Player[] {
    return this.playersInGame;
  }

  createPlayer(name: string = ''): Player {
    return {
      name: name,
      playerType: PlayerType.PLAYER,
      masterName: null,
      initiative: 90
    };
  }

}

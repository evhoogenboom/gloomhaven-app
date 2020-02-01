import {Injectable} from '@angular/core';
import {Player} from './models/player';
import {PlayerType} from './enums/PlayerType';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersInGame: Player[] =
    [
      this.createPlayer('Nitari'),
      this.createPlayer('Ratava'),
      this.createPlayer('Leeroy'),
      this.createPlayer('Estelle')
    ];

  constructor() {
  }

  savePlayer(player: Player): void {
    this.playersInGame.push(player);
  }

  deletePlayer(player: Player) {
    this.playersInGame = this.playersInGame.filter(p => p !== player && p.masterName !== player.name);
  }

  getPlayers(): Player[] {
    return this.playersInGame;
  }

  createPlayer(name: string = '', initiative: number = 99): Player {
    return {
      name: name,
      playerType: PlayerType.PLAYER,
      masterName: null,
      initiative: initiative
    };
  }

}

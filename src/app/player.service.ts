import {Injectable} from '@angular/core';
import {Player} from './models/player';
import {PlayerType} from './enums/PlayerType';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersInGame: Player[] =
    [
      this.createPlayer('Nitari', 32),
      this.createPlayer('Ratava', 29),
      this.createPlayer('Leeroy', 85),
      this.createPlayer('Estelle', 29)
    ];

  constructor() {
  }

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

  createPlayer(name: string = '', initiative: number = 99): Player {
    return {
      name: name,
      playerType: PlayerType.PLAYER,
      masterName: null,
      initiative: initiative
    };
  }

}

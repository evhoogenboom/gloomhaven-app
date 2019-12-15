import { Injectable } from '@angular/core';
import { Player } from './models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersInGame: Player[] = [];

  constructor() { }

  savePlayer(player: Player): void {
    this.playersInGame.push(player);
    console.log('service');
    console.log(this.playersInGame);
  }

  getPlayers(): Player[] {
    return this.playersInGame;
  }

}

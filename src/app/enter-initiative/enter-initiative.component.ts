import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../player.service';
import {Player} from '../models/player';

@Component({
  selector: 'app-enter-initiative',
  templateUrl: './enter-initiative.component.html',
  styleUrls: ['./enter-initiative.component.css']
})
export class EnterInitiativeComponent implements OnInit {
  playersInGame: Player[] = [];
  digits: number[] = [0,1,2,3,4,5,6,7,8,9];
  selectedPlayer: Player;


  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.playersInGame = this.playerService.getPlayers();
  }

  filterOutSummons() {
    return this.playersInGame.filter(p => !p.isSummon);
  }

  setTenPowerZero(player: Player, value: number): void {
    player.tenPowerZero = value;
  }

  setTenPowerOne(player: Player, value: number): void {
    player.tenPowerOne = value;
  }

}

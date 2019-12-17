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

}

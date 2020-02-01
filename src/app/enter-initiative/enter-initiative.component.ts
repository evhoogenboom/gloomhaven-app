import {Component, OnInit} from '@angular/core';
import {PlayerService} from '../player.service';
import {Player} from '../models/player';
import {PlayerType} from '../enums/PlayerType';
import {InitiativeService} from './initiative.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enter-initiative',
  templateUrl: './enter-initiative.component.html',
  styleUrls: ['./enter-initiative.component.css']
})
export class EnterInitiativeComponent implements OnInit {
  playersInGame: Player[] = [];
  selectedPlayer: Player;
  isEditing: boolean;


  constructor(
    private playerService: PlayerService,
    private  initiativeService: InitiativeService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.isEditing = true;
    this.loadPlayers();
    this.selectedPlayer = this.playersInGame[0];
  }

  loadPlayers(): void {
    this.playersInGame = this.playerService.getPlayers();
  }

  filterOutSummons() {
    return this.playersInGame.filter(p => !(p.playerType === PlayerType.SUMMON));
  }

  onSubmit() {
    this.isEditing = false;
    this.playersInGame = this.initiativeService.sortByInitiative(this.playersInGame);
  }

  onNextRoundClick() {
    this.isEditing = true;
    // this.playersInGame.forEach(p => p.initiative = 99);
  }

  onBack() {
    this.router.navigateByUrl('/player-list');
  }

}

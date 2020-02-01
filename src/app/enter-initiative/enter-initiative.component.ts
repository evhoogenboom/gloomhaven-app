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
  }

  loadPlayers(): void {
    this.playersInGame = this.playerService.getPlayers();
  }

  displayPlayers(): Player[] {
    return (this.isEditing) ? this.filterOutSummons() : this.playersInGame;
  }

  filterOutSummons() {
    return this.playersInGame.filter(p => !(p.playerType.toString() === 'SUMMON'));
  }

  roundInitiative(initiative: number) {
    return Math.ceil(initiative);
  }

  allowSubmit(): boolean {
    return this.playersInGame.filter(p => p.initiative === 0).length === 0;
  }

  onSubmit() {
    this.isEditing = false;
    this.playersInGame = this.initiativeService.sortByInitiative(this.playersInGame);
  }

  onNextRoundClick() {
    this.isEditing = true;
    this.playersInGame.forEach(p => p.initiative = 0);
  }

  onBack() {
    this.router.navigateByUrl('/player-list');
  }

}

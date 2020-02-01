import {Component, OnInit} from '@angular/core';
import {Player} from '../models/player';
import {Router} from '@angular/router';
import {PlayerService} from '../player.service';
import {PlayerType} from '../enums/PlayerType';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  currentPlayer: Player;
  playersInGame: Player[] = [];

  constructor(
    private router: Router, private playerService: PlayerService) {
  }

  ngOnInit() {
    this.currentPlayer = this.playerService.createPlayer();
    this.playersInGame = this.playerService.getPlayers();
  }

  filterOutSummons() {
    return this.playersInGame.filter(p => !(p.playerType === PlayerType.SUMMON));
  }

  onSaveClick() {
    this.playerService.savePlayer(this.currentPlayer);
    this.router.navigateByUrl('/player-list');
  }

  onCancelClick() {
    this.router.navigateByUrl('/player-list');
  }

}

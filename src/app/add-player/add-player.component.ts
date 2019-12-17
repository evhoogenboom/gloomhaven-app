import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  currentPlayer: Player;
  currentPlayerType: string = 'player';
  playersInGame: Player[] = [];

  constructor(private router: Router, private playerService: PlayerService) { }

  ngOnInit() {
    this.currentPlayer = this.createPlayer();
    this.playersInGame = this.playerService.getPlayers();
  }

  createPlayer(name: string = ''): Player {
    return {
      name: name,
      isMonster: false,
      isSummon: false,
      master: null,
      powerOne: 9,
      powerTen: 9
    };
  }
  filterOutSummons() {
    return this.playersInGame.filter(p => !p.isSummon);
  }

  onSaveClick() {
    switch (this.currentPlayerType) {
      case 'monster': this.currentPlayer.isMonster = true;
      break;
      case 'summon': this.currentPlayer.isSummon = true;
    }
    this.playerService.savePlayer(this.currentPlayer);
    this.router.navigateByUrl('/player-list');
  }

  onCancelClick() {
    this.router.navigateByUrl('/player-list');
  }

}

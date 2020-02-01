import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Player} from '../models/player';
import {PlayerService} from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  playersInGame: Player[] = [];

  constructor(private router: Router, private playerService: PlayerService) {
  }

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers(): void {
    this.playersInGame = this.playerService.getPlayers();
  }

  onAddPlayerClick() {
    this.router.navigateByUrl('/add-player');
  }

  onDeletePlayerClick(player: Player) {
    this.playerService.deletePlayer(player);
    this.loadPlayers();
  }

  onStartClick() {
    this.router.navigateByUrl('/enter-initiative');
  }

}

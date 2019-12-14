import { Component, OnInit } from '@angular/core';
import { Player } from '../models/player';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  currentPlayer: Player;
  currentPlayerType: string = 'player';
  playersInGame: Player[] = [];

  constructor() { }

  ngOnInit() {
    this.currentPlayer = this.createPlayer();
    this.playersInGame = [this.createPlayer('Estelle'), this.createPlayer('Thijs'), this.createPlayer('Macy')]
  }

  createPlayer(name: string = ''): Player {
    return {
      name: name,
      precedence: 0,
      monster: false,
      summon: false,
      master: null
    }
  }

  onSaveClick() {
    
  }

  onCancelClick() {
    
  }

}

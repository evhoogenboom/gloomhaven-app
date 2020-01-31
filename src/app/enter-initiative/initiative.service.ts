import {Injectable} from '@angular/core';
import {Player} from '../models/player';
import {PlayerType} from '../enums/PlayerType';

@Injectable({
  providedIn: 'root'
})
export class InitiativeService {

  constructor() {
  }

  sortByInitiative(players: Player[]): Player[] {
    const summons: Player[] = players.filter(p => p.playerType === PlayerType.SUMMON);
    for (const summon of summons) {
      console.log(summon);
      summon.initiative = this.getInitiativeByName(players, summon.masterName);
    }
    return players.sort((a,b) => a.initiative - b.initiative);
  }

  private getInitiativeByName(players: Player[], nameOfMaster: string): number {
    return players.find(p => p.name === nameOfMaster).initiative;
  }
}

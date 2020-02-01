import {Injectable} from '@angular/core';
import {Player} from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class InitiativeService {

  constructor() {
  }

  sortByInitiative(players: Player[]): Player[] {
    console.log(players);
    const summons: Player[] = players.filter(p => p.playerType.toString() === 'SUMMON');
    console.log(summons);
    console.log(players);
    for (const summon of summons) {
      console.log(summon);
      summon.initiative = this.getInitiativeByName(players, summon.masterName);
    }
    return players.sort((a,b) => a.initiative - b.initiative);
  }

  private getInitiativeByName(players: Player[], nameOfMaster: string): number {
    return players.find(p => p.name === nameOfMaster).initiative - 0.1;
  }
}

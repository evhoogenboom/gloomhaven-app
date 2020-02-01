import {PlayerType} from '../enums/PlayerType';

export interface Player {
  name: string;
  playerType: PlayerType;
  masterName: string;
  initiative: number;
}

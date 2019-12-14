export interface Player {
    name: string;
    precedence: number;
    monster: boolean;
    summon: boolean;
    master: Player;
}
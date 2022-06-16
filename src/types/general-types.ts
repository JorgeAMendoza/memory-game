export type gameIconValues =
  | 'anchor'
  | 'baseball'
  | 'basketball'
  | 'car'
  | 'cat'
  | 'chicken'
  | 'controller'
  | 'dog-pee'
  | 'flask'
  | 'football'
  | 'futbol'
  | 'hamster'
  | 'hand-spock'
  | 'lira-sign'
  | 'moon'
  | 'robot'
  | 'snowflake'
  | 'sun';

// for multiple player modal
interface PlayerModalData {
  name: string;
  score: number;
  isWinner: boolean;
}
export interface FinalPlayerData {
  modalMessage: string;
  players: PlayerModalData[];
}

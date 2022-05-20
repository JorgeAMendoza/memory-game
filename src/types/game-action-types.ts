import GameInformation from './game-context-types';

interface SetGameAction {
  type: 'SET_GAME';
  payload: GameInformation;
}

interface ResetPlayerScoreAction {
  type: 'RESET_PLAYER_SCORE';
}

interface IncrementPlayerScoreAction {
  type: 'INCREMENT_PLAYER_SCORE';
  payload: '1' | '2' | '3' | '4';
}

interface NewGameAction {
  type: 'NEW_GAME';
  payload: null;
}

type ContextActions =
  | SetGameAction
  | ResetPlayerScoreAction
  | IncrementPlayerScoreAction
  | NewGameAction;

export default ContextActions;

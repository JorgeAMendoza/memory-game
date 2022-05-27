import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import GameInformation from '../types/game-context-types';

const initialState: GameInformation = {} as GameInformation;

const gameSlice = createSlice({
  name: 'gameConfig',
  initialState,
  reducers: {
    setupGame(_state, action: PayloadAction<GameInformation>) {
      const gameConfig = action.payload;
      return gameConfig;
    },
    incrementPlayerScore(state, action: PayloadAction<string>) {
      const { players } = state;
      const currentPlayer = players[Number(action.payload)];
      currentPlayer.score += 1;
    },
    resetPlayerScores(state) {
      state.players.map((player) => (player.score = 0));
    },
    resetGame(_state) {
      const newGameConfig: GameInformation = {} as GameInformation;
      return newGameConfig;
    },
  },
});

export const { setupGame, incrementPlayerScore, resetPlayerScores, resetGame } =
  gameSlice.actions;

export default gameSlice.reducer;

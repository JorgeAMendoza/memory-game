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
    incrementPlayerScore(state) {
      const { players } = state;
      const currentPlayer = players.find((player) => player.currentTurn);
      if (currentPlayer) currentPlayer.score += 1;
    },
    nextTurn(state) {
      const { players } = state;
      const currentPlayer = players.findIndex((player) => player.currentTurn);
      if (currentPlayer !== -1) players[currentPlayer].currentTurn = false;

      if (currentPlayer + 1 >= state.players.length)
        state.players[0].currentTurn = true;
      else state.players[currentPlayer + 1].currentTurn = true;
    },
    resetPlayerScores(state) {
      state.players.map((player) => {
        player.score = 0;
        if (player.name === '1') player.currentTurn = true;
        else player.currentTurn = false;
      });
    },
    resetGame(_state) {
      const newGameConfig: GameInformation = {} as GameInformation;
      return newGameConfig;
    },
  },
});

export const {
  setupGame,
  incrementPlayerScore,
  resetPlayerScores,
  resetGame,
  nextTurn,
} = gameSlice.actions;

export default gameSlice.reducer;

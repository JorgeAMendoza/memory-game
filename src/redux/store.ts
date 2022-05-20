import { configureStore } from '@reduxjs/toolkit';
import gameReducer from './game-reducer';

const store = configureStore({ reducer: gameReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import React from 'react';
import '@testing-library/jest-dom';
import store from '../../redux/store';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import GameBoard from './GameBoard';
import gameReducer from '../../redux/game-reducer';

describe('Game board renders with number tile', () => {});
describe('Game board renders with icon tiles', () => {});

import { useState } from 'react';
import GameInformation from '../../types/game-context-types';
import { Player } from '../../types/game-context-types';
import { setupGame } from '../../redux/game-reducer';
import whiteLogo from '../../assets/logo-white.svg';
import { useAppDispatch } from '../../hooks';
import {
  GameStartStyled,
  MenuSelection,
  MenuContainer,
  GameSelectionCategory,
} from './GameStart.styled';
import { OrangeButton } from '../Buttons/Button.styled';

type GameType = 'numbers' | 'icons';
type NumOfPlayers = 1 | 2 | 3 | 4;
type GridSize = '4x4' | '6x6';

const GameStart = () => {
  const [gameType, setGameType] = useState<GameType>('numbers');
  const [numPlayers, setNumPlayers] = useState<NumOfPlayers>(1);
  const [gridSize, setGridSize] = useState<GridSize>('4x4');
  const dispatch = useAppDispatch();

  const startGame = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const players: Player[] = [];

    const playerNames: ['1', '2', '3', '4'] = ['1', '2', '3', '4'];

    for (let i = 0; i < numPlayers; i++) {
      const newPlayer: Player = {
        name: playerNames[i],
        score: 0,
        currentTurn: false,
      };
      players.push(newPlayer);
    }
    players[0].currentTurn = true;

    const newGameConfig: GameInformation = {
      gameType: gameType,
      numOfPlayers: numPlayers,
      boardSize: gridSize,
      players,
    };
    dispatch(setupGame(newGameConfig));
  };

  return (
    <GameStartStyled data-testid="gameStart">
      <MenuContainer>
        <header>
          <img src={whiteLogo} alt="title header" />
        </header>
        <form onSubmit={startGame}>
          <section>
            <h3>Select Theme</h3>
            <GameSelectionCategory>
              <MenuSelection data-testid="gameTypeNumber">
                <input
                  type="radio"
                  name="gameType"
                  checked={gameType === 'numbers' ? true : false}
                  onChange={() => setGameType('numbers')}
                  data-testid="gameTypeNumberInput"
                />
                <span>Numbers</span>
              </MenuSelection>

              <MenuSelection data-testid="gameTypeIcon">
                <input
                  type="radio"
                  name="gameType"
                  checked={gameType === 'icons' ? true : false}
                  onChange={() => setGameType('icons')}
                />
                <span>Icons</span>
              </MenuSelection>
            </GameSelectionCategory>
          </section>

          <section>
            <h3>Number of Players</h3>
            <GameSelectionCategory data-testid="numPlayers">
              {[1, 2, 3, 4].map((num) => (
                <MenuSelection key={num}>
                  <input
                    type="radio"
                    onChange={() => setNumPlayers(num as NumOfPlayers)}
                    checked={numPlayers === num ? true : false}
                    name="numPlayers"
                  />
                  <span>{num}</span>
                </MenuSelection>
              ))}
            </GameSelectionCategory>
          </section>

          <section>
            <h3>Grid Size</h3>
            <GameSelectionCategory>
              <MenuSelection data-testid="gameGridSizeFour">
                <input
                  type="radio"
                  name="gridSize"
                  checked={gridSize === '4x4' ? true : false}
                  onChange={() => setGridSize('4x4')}
                  data-testid="gameGridSizeFourInput"
                />
                <span>4x4</span>
              </MenuSelection>
              <MenuSelection data-testid="gameGridSizeSix">
                <input
                  type="radio"
                  name="gridSize"
                  onChange={() => setGridSize('6x6')}
                />
                <span>6x6</span>
              </MenuSelection>
            </GameSelectionCategory>
          </section>

          <OrangeButton data-testid="gameStartButton">Start Game</OrangeButton>
        </form>
      </MenuContainer>
    </GameStartStyled>
  );
};

export default GameStart;

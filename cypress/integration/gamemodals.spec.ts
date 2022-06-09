/// <reference types="cypress" />

describe('reset modal', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="gameStartButton"]').click();
    cy.get('[data-testid="resetGameButton"]').click();
  });

  it('restart modal appears', () => {
    cy.get(`[data-testid="restartModal]`).should('exist');
  });

  it('cancel reset game', () => {
    cy.get('[data-testid="cancelRestartButton"]').click();
    cy.get('[data-testid="restartModal]').should('not.exist');
  });

  it('confirm restart game', () => {
    cy.get('[data-testid="confirmRestartButton"]').click();
    cy.get('[data-testid="restartModal]').should('not.exist');
    // get the player move modal
    // confirm that time starts with text of 0:00
    // confirm that it has a text value of 0
    // grab every tile and coffirm that its covered up
  });
});

describe('new game modal', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="gameStartButton"]').click();
    cy.get('[data-testid="newGameButton"]').click();
  });

  it('new game modal appears', () => {
    cy.get(`[data-testid="newGameModal"]`).should('exist');
  });

  it('cancel new game', () => {
    cy.get('[data-testid="cancelNewGameButton"]').click();
    cy.get('[data-testid="newGameModal"]').should('not.exist');
  });

  it('confirm new game', () => {
    cy.get('[data-testid="confirmNewGameButton"]').click();
    cy.get('[data-testid="newGameModal"]').should('not.exist');
    cy.get('[data-testid="gameStart"]').should('exist');
  });
});

describe('single player game over modal', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="gameStartButton"]').click();
    // grab every piece, and iterate over it, clicking every button
    cy.get('[data-testid="singlePlayerModal"]').as('singlePlayerModal');
  });

  it('single player win modal is rendered', () => {
    cy.get('@singlePlayerModal').should('exist');
  });

  it('sinple player win message rendered', () => {
    cy.get('@singlePlayerModal').contains('You did it!');
    cy.get('@singlePlayerModal').contains('Game over! Here’s how you got on…');
  });

  it('correct amount of moves taken rendered', () => {
    cy.get('[data-testid="singleMovesTaken"]').contains('16 Moves');
  });
});

describe('mutli player game over modal', () => {
  cy.visit('/');
  cy.get(`[data-testid="gameTypeIcon"]`).click();
  cy.get(`input[name="numPlayers"]:nth-child(2)]`).click();
  cy.get(`[data-testid="gameStartButton"]`).click();
  // grab all the pieces
  // have the first player select the first four (giving them two points)
  // have teh second player select the resto of them (giving them  8 points)
  it('multi player game modal rendered', () => {
    cy.get('[data-testid="multiPlayerGameModal"]').should('exist');
  });

  it('correct game over message rendered', () => {
    cy.get('[data-testid="multiPlayerGameModal"]').contains('Player 2 Wins!');
  });

  it('player list should have two elements', () => {
    cy.get('[data-testid="playerList"]').find('li').should('have.length', 2);
  });

  it('player list should render correct winner', () => {
    cy.get('[data-testid="playerList"]')
      .find('li:first-child')
      .contains('Player 2 (Winner)');
    cy.get('[data-testid="playerList"]')
      .find('li:first-child')
      .contains('8 Pairs');
    cy.get('[data-testid="playerList"]')
      .find('li:nth-of-type(2)')
      .contains('Player 2 (Winner)');
  });
});

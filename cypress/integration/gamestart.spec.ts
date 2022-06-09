/// <reference types="cypress" />

describe('game starting page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(`[data-testid="gameTypeNumber"]`).as('gameTypeNumberButton');
    cy.get(`[data-testid="gameTypeIcon]`).as('gameTypeIconButton');

    cy.get(`input[name="numPlayers"]:nth-child(1)`).as('numPlayersOneButton');
    cy.get(`input[name="numPlayers"]:nth-child(2)`).as('numPlayersTwoButton');

    cy.get(`[data-testid="gameGridSizeFour"]`).as('gameGridSizeFourButton');
    cy.get(`[data-testid="gameGridSizeSix"]`).as('gameGridSizeSixButton');

    cy.get(`[data-testid="gameStartButton"]`).as('gameStartButton');
  });

  it('default values set', () => {
    cy.get('@gameTypeNumberButton').should('contain.value', 'on');
    cy.get('@numPlayersOneButton').should('contain.value', 'on');
    cy.get(`@gameGridSizeFourButton`).should('contain.value', 'on');
  });

  it('change game type to icon', () => {
    cy.get('@gameTypeIconButton').click();
    cy.get('@gameTypeNumberButton').should('contain.value', 'off');
    cy.get('@gameTypeIconButton').should('contain.value', 'off');
  });

  it('change number of players to two', () => {
    cy.get('@numPlayersTwoButton').click();
    cy.get('@numPlayersOneButton').should('contain.value', 'off');
    cy.get('@numPlayersTwoButton').should('contain.value', 'on');
  });

  it('change grid size to 6x6', () => {
    cy.get('@gameGridSizeSixButton').click();
    cy.get('@gameGridSizeFourButton').should('contain.value', 'off');
    cy.get('@gameGridSizeSixButton').should('contain.value', 'on');
  });

  it('game start component page should no longer be rendered with start', () => {
    cy.get('@gameStartButton').click();
    cy.get(`[data-testid="gameStart"]`).should('not.exist');
  });
});

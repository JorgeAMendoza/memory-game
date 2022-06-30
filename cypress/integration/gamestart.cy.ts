/// <reference types="cypress" />

describe('game starting page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(`[data-testid="gameTypeNumber"]`).as('gameTypeNumberSelect');
    cy.get(`[data-testid="gameTypeIcon"]`).as('gameTypeIconSelect');

    cy.get(`[data-testid="numPlayers"] label:nth-child(1)`).as(
      'numPlayersOneSelect'
    );
    cy.get(`[data-testid="numPlayers"] label:nth-child(2)`).as(
      'numPlayersTwoSelect'
    );

    cy.get(`[data-testid="gameGridSizeFour"]`).as('gameGridSizeFourSelect');
    cy.get(`[data-testid="gameGridSizeSix"]`).as('gameGridSizeSixSelect');

    cy.get(`[data-testid="gameStartButton"]`).as('gameStartButton');
  });

  it('default values set', () => {
    cy.get('@gameTypeNumberSelect').find('input').should('contain.value', 'on');
    cy.get('@numPlayersOneSelect').find('input').should('contain.value', 'on');
    cy.get(`@gameGridSizeFourSelect`)
      .find('input')
      .should('contain.value', 'on');
  });

  it('change game type to icon', () => {
    cy.get('@gameTypeIconSelect').click();
    cy.get('@gameTypeNumberSelect').find('input').should('not.contain.checked');
    cy.get('@gameTypeIconSelect').find('input').should('contain.checked');
  });

  it('change number of players to two', () => {
    cy.get('@numPlayersTwoSelect').click();
    cy.get('@numPlayersOneSelect').find('input').should('not.contain.checked');
    cy.get('@numPlayersTwoSelect').find('input').should('contain.checked');
  });

  it('change grid size to 6x6', () => {
    cy.get('@gameGridSizeSixSelect').click();
    cy.get('@gameGridSizeFourSelect')
      .find('input')
      .should('not.contain.checked');
    cy.get('@gameGridSizeSixSelect').find('input').should('contain.checked');
  });

  it('game start component page should no longer be rendered with start', () => {
    cy.get('@gameStartButton').click();
    cy.get(`[data-testid="gameStart"]`).should('not.exist');
  });
});

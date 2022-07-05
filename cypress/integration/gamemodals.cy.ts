/// <reference types="cypress" />

describe('game board header menu and buttons on mobile view', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.viewport(390, 844);
    cy.get(`[data-testid="gameStartButton"]`).click();
    cy.get('[data-testid="mobileMenuButton"]').as('mobileMenuButton');
    cy.get('[data-testid="gameTilesContainer"]').as('gameTilesContainer');
  });

  it('mobile menu is rendered with button click', () => {
    cy.get('@mobileMenuButton').click();
    cy.get('[data-testid="mobileMenu"]').should('exist');
    cy.get('[data-testid="mobileRestartButton"]').should('exist');
    cy.get('[data-testid="mobileNewGameButton"]').should('exist');
    cy.get('[data-testid="mobileResumeButton"]').should('exist');
  });

  it('restart button resets the game', () => {
    cy.get('@mobileMenuButton').click();
    cy.get('[data-testid="mobileRestartButton"]').click();
    cy.get('[data-testid="mobileMenu"]').should('not.exist');
    cy.get('[data-testid="movesMade"]').contains('0');
    cy.get('[data-testid="gameTime"]').contains('0:00');
  });

  it('newgame button begins new game', () => {
    cy.get('@mobileMenuButton').click();
    cy.get('[data-testid="mobileNewGameButton"]').click();
    cy.get('[data-testid="mobileMenu"]').should('not.exist');
    cy.get('@mobileMenuButton').should('not.exist');
    cy.get('[data-testid="gameStart"]').should('exist');
  });

  it('resume game button resumes the game', () => {
    cy.get('@gameTilesContainer').find('> :first-child').click();
    cy.get('@gameTilesContainer').find('> :nth-child(2)').click();
    cy.get('@mobileMenuButton').click();
    cy.get('[data-testid="mobileResumeButton"]').click();
    cy.get('[data-testid="movesMade"]').should('contain.text', '2');
  });
});

describe('single player game over modal', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="gameStartButton"]').click();
    cy.get('[data-testid="gameTilesContainer"]')
      .find('> button')
      .each(($button) => {
        cy.wrap($button).click();
      });
    cy.get('[data-testid="singlePlayerGameOver"]').as('singlePlayerModal');
  });

  it('sinple player win message rendered', () => {
    cy.get('@singlePlayerModal').contains('You did it!');
  });

  it('correct amount of moves taken rendered', () => {
    cy.get('[data-testid="modalMovesMade"]').should('contain.text', '16');
  });
});

describe('mutli player game over modal', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(`[data-testid="numPlayers"] label:nth-child(3)`).click();
    cy.get(`[data-testid="gameStartButton"]`).click();
  });

  it('correct game over message rendered, player one wins', () => {
    cy.get('[data-testid="gameTilesContainer"]')
      .find('> button')
      .each(($button) => {
        cy.wrap($button).click();
      });
    cy.get('[data-testid="multiPlayerGameModal"]');
    cy.get('[data-testid="multiWinnerMessage"]').should(
      'contain.text',
      'Player 1 wins!'
    );

    cy.get('[data-testid="playerScoreList"]')
      .children()
      .should('have.length', 3);

    cy.get('[data-testid="playerScoreList"]')
      .find('> :first-child p:first-child')
      .should('contain.text', 'Player 1 (Winner!)');

    cy.get('[data-testid="playerScoreList"]')
      .find('> :first-child p:nth-child(2)')
      .should('contain.text', '8 Pairs');
  });

  it('game ties, with tie message and two players marked as tie in the player list', () => {
    cy.get('[data-testid="gameTilesContainer"]')
      .find('> button')
      .then(($gameTiles) => {
        const firstHalfTiles = $gameTiles.slice(0, $gameTiles.length / 2);
        const secondHalfTiles = $gameTiles.slice($gameTiles.length / 2);

        for (const tile of firstHalfTiles) cy.wrap(tile).click();

        cy.wrap(secondHalfTiles[0]).click();
        cy.wrap(secondHalfTiles[2]).click();

        for (const tile of secondHalfTiles) cy.wrap(tile).click();
      });
    cy.get('[data-testid="multiWinnerMessage"]').should(
      'contain.text',
      `It's a tie`
    );

    cy.get('[data-testid="playerScoreList"]')
      .find('> :first-child p:first-child')
      .should('contain.text', 'Player 1 (Winner!)');

    cy.get('[data-testid="playerScoreList"]')
      .find('> :nth-child(2) p:first-child')
      .should('contain.text', 'Player 2 (Winner!)');

    cy.get('[data-testid="playerScoreList"]')
      .find('> :first-child p:nth-child(2)')
      .should('contain.text', '4 Pairs');

    cy.get('[data-testid="playerScoreList"]')
      .find('> :nth-child(2) p:nth-child(2)')
      .should('contain.text', '4 Pairs');
  });
});

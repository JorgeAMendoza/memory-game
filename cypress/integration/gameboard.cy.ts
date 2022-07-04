/// <reference types="cypress" />

describe('game board rendered with number game, one player, and 4x4 grid', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(`[data-testid="gameStartButton"]`).click();
    cy.get('[data-testid="gameBoard"]').as('gameBoard');
  });

  it('moves tracker and time starts at 0', () => {
    cy.get(`[data-testid="movesMade"]`).should('contain.text', '0');
    cy.get(`[data-testid="gameTime"]`).should('contain.text', '0:00');
  });

  it('game board item is a number value', () => {
    cy.get('[data-testid="gameTilesContainer"]')
      .find(':nth-child(1)')
      .should('contain.text', 1);
  });

  it('after 5 seconds, game timer is at 0:05', () => {
    setTimeout(() => {
      cy.get(`[data-testid="gameTime"]`).contains('0:05');
    });
  });
  it('three moves counted', () => {
    cy.get('[data-testid="gameTilesContainer"]').find(':nth-child(1)').click();
    cy.get('[data-testid="gameTilesContainer"]').find(':nth-child(2)').click();
    cy.get('[data-testid="gameTilesContainer"]').find(':nth-child(3)').click();
    cy.get('[data-testid="movesMade"]').should('contain.text', 3);
  });
});

describe('game board rendered with icon game, three players, and 6x6 grid', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(`[data-testid="gameTypeIcon"]`).click();
    cy.get(`[data-testid="numPlayers"] label:nth-child(3)`).click();
    cy.get(`[data-testid="gameGridSizeSix"]`).click();
    cy.get(`[data-testid="gameStartButton"]`).click();
    cy.get('[data-testid="playerScoreCards"]').as('playerScoreCards');
    cy.get('[data-testid="gameTilesContainer"]').as('gameTilesContainer');
  });

  it('three player score cards rendered', () => {
    cy.get('@playerScoreCards').children().should('have.length', 3);
    cy.get('@playerScoreCards')
      .children()
      .each((card) => {
        cy.wrap(card).should('contain.text', '0');
      });
  });

  it('game board item is an icon/image', () => {
    cy.get('@gameTilesContainer')
      .find(':first-child')
      .find('img')
      .should('have.attr', 'alt', 'anchor icon');
  });

  it('player one starts as the active player', () => {
    cy.get('@playerScoreCards')
      .find('> :nth-child(1)')
      .find('[data-testid="currentTurnText"]');

    cy.get('@playerScoreCards')
      .find('> :nth-child(1)')
      .should('have.css', 'background-color', 'rgb(253, 162, 20)');

    cy.get('@playerScoreCards')
      .find('> :nth-child(2)')
      .should('have.css', 'background-color', 'rgb(223, 231, 236)');

    cy.get('@playerScoreCards')
      .find('> :nth-child(2)')
      .find('[data-testid="currentTurnText"]')
      .should('not.exist');
  });

  it('player one score incremented', () => {
    cy.get('@gameTilesContainer').find('> :nth-child(1)').click();
    cy.get('@gameTilesContainer').find('> :nth-child(2)').click();

    cy.get('@playerScoreCards')
      .find(':first-child')
      .find('p:nth-of-type(2)')
      .should('contain.text', '1');
  });

  it('player one switch turn', () => {
    cy.get('@gameTilesContainer').find('> :first-child').click();
    cy.get('@gameTilesContainer').find('> :nth-child(3)').click();

    cy.get('@playerScoreCards')
      .find('> :first-child')
      .find('[data-testid="currentTurnText"]')
      .should('not.exist');
    cy.get('@playerScoreCards')
      .find('> :nth-child(2)')
      .find('[data-testid="currentTurnText"]')
      .should('exist');
  });

  it('player two score incremented', () => {
    cy.get('@gameTilesContainer').find('> :first-child').click();
    cy.get('@gameTilesContainer').find('> :nth-child(3)').click();

    cy.get('@gameTilesContainer').find('> :last-child').click();
    cy.get('@gameTilesContainer').find('> :nth-child(35)').click();

    cy.get('@playerScoreCards')
      .find('> :nth-child(2)')
      .find('p:nth-of-type(2)')
      .should('contain.text', '1');
  });

  it('player three switches back to player one', () => {
    cy.get('@gameTilesContainer').find('> :first-child').click();
    cy.get('@gameTilesContainer').find('> :nth-child(3)').click();
    cy.get('@gameTilesContainer').find('> :first-child').click();
    cy.get('@gameTilesContainer').find('> :nth-child(4)').click();
    cy.get('@gameTilesContainer').find('> :first-child').click();
    cy.get('@gameTilesContainer').find('> :nth-child(4)').click();

    cy.get('@playerScoreCards')
      .find('> :first-child')
      .find('[data-testid="currentTurnText"]')
      .should('exist');
  });
});

describe.only('game board header menu and buttons on mobile view', () => {
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

  it.only('resume game button resumes the game', () => {
    cy.get('@gameTilesContainer').find('> :first-child').click();
    cy.get('@gameTilesContainer').find('> :nth-child(2)').click();
    cy.get('@mobileMenuButton').click();
    cy.get('[data-testid="mobileResumeButton"]').click();
    cy.get('[data-testid="movesMade"]').should('contain.text', '2');
  });
});

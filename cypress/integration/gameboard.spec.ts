/// <reference types="cypress" />

describe('game board rendered with number game, one player, and 4x4 grid', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(`[data-testid="gameStartButton"]`).click();
  });

  it('board rendered after game start button click', () => {
    cy.get('[data-testid="gameBoard"]');
  });

  it('moves tracker and time starts at 0', () => {
    cy.get(`[data-testid="movesMade"]`).should('contain.text', '0');
    cy.get(`[data-testid="gameTime"]`).should('contain.text', '0:00');
  });

  it('game board item is a number value', () => {
    // get the games tile wrapper
    // get the first game item,
    // check to see that its value is 1.
  });

  it('three moves counted', () => {
    // get three tile pieces
    // click them
    // ensure that the moves box has a value/text of three.
  });
});

describe('game board rendered with icon game, three players, and 6x6 grid', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(`[data-testid="gameTypeIcon"]`).click();
    cy.get(`input[name="numPlayers"]:nth-child(2)]`).click();
    cy.get(`[data-testid="gameGridSizeSix"]`).click();
    cy.get(`[data-testid="gameStartButton"]`).click();
    cy.get('[data-testid="playerScoreCards"]').as('playerScoreCards');
  });

  it('two player score cards rendered', () => {
    // grab the modal for players
    // ensure that only two elements are rendered within
    // ensure that both start with a score of 0.
  });

  it('game board item is an icon/image', () => {
    // grab the file tile,
    // find that it contains an image element with an attribute value of "anchor", or maybe we will hide the text value within, we'll see
  });

  it('player one starts as the active player', () => {
    // grab modal for players, and grab the first child
    // ensure that it has the orange color,
    // ensure that the text "current turn" is rendered within
    // ensure player two has a white background
    // ensure that "current turn" is not within the second player card
  });

  it('player one score incremented', () => {
    // grab the first tile in the board, and the second as well.
    // click them both
    // ensure that player one modal now shows a score of 1
    // ensure that the orange backgrond is still there as well with teh curnet turn text
  });

  it('player one switch turn', () => {
    // grab first and second tiles
    // click them
    // ensure that player one no longer has orange color and text.
    // ensure that player two has orange color and current turn text
  });

  it('player two score incremented', () => {
    // grab first two tiles
    // click them
    // ensure that player two score is 1,
    // ensure that player two still has orange color and current text
  });

  it('player two switches back to player one', () => {
    // grab first two tiles
    // click them
    // ensure that player two at least has the currnet text
    // click the two buttons again
    // ensure that player one has the current turn text
  });
});

describe('various game board functionality', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get(`[data-testid="gameStartButton"]`).click();
    cy.get(`[data-testid="restartGameButton"]`).as('restartGameButton');
    cy.get(`[data-testid="newGameButton"]`).as('newGameButton');
  });

  it('every tile begins covered up', () => {
    // grab the game tiles wrappaer,
    // grab a node list/array of every tile, iterate over it
    // for each one, check to see if it has a backgroudn of dark blue
  });

  it('tile click removes cover', () => {
    // grab first piece
    // click it
    // ensure that it no longer has the dark blue cover
  });

  it('mis-match choice puts cover back', () => {
    // garb the first and third piece
    // click the fisrt one, then click the third one
    // ensure that the blue cover is on the first item
  });

  it('match leaves cover off', () => {
    // grab the first and second piece
    // click them
    // ensure that the first piece no longer has the cover
    // ensure that the second piece no longer has the cover
    // ensure that both are disabled
  });
});

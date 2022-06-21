const colors = {
  blue: {
    dark: '#304859',
    darker: '#152938',
    greyish: '#BCCED9',
    pale: '#7191A5',
    paleLight: '#6395B8',
  },
  white: {
    light: '#FCFCFC',
    greyish: '#F2F2F2',
    pale: '#DFE7EC',
  },
  orange: {
    neon: '#FDA214',
    light: '#FFB84A',
  },
};

const gameColors = {
  backgroundColor: colors.blue.darker, //background color of the application
  blueButton: {
    background: colors.blue.dark,
    backgroundDisabled: colors.blue.greyish,
    backgroundHover: colors.blue.paleLight,
    textColor: colors.white.light,
  },
  orangeButton: {
    background: colors.orange.neon,
    backgroundHover: colors.orange.light,
    textColor: colors.white.light,
  },
  restartButton: {
    background: colors.orange.neon,
    backgrounHover: colors.orange.light,
    textColor: colors.white.light,
  },
  greyButton: {
    background: colors.white.pale,
    backgroundHover: colors.blue.paleLight,
    textColor: colors.blue.dark,
    textColorHover: colors.white.light,
  },
  gameTile: {
    cover: colors.blue.dark,
    coverHover: colors.blue.paleLight,
    background: colors.blue.greyish,
    backgroundActive: colors.orange.neon,
  },
  scoreCard: {
    background: colors.white.pale,
    backgroundActive: colors.orange.neon,
    textColorActive: colors.white.light,
    textColorLight: colors.blue.pale,
    textColorDark: colors.blue.dark,
    textColorCurrent: colors.blue.darker,
  },
  gameStart: {
    selectionText: colors.blue.pale,
  },
  gameOverModal: {
    background: colors.white.light,
    winningTextColor: colors.blue.darker,
    subtextColor: colors.blue.pale,
    playerWinBackground: colors.blue.darker,
    playerLoseBackground: colors.white.pale,
    playerWinTextColor: colors.white.light,
    playerLoseNameTextColor: colors.blue.paleLight,
    playerLoseScoreTextColor: colors.blue.dark,
    movesTextColor: colors.blue.dark,
    timeElapsedColor: colors.blue.dark,
    timeElapsedBackground: colors.white.greyish,
    singleGameStatsColor: colors.blue.paleLight,
  },
};

export default gameColors;

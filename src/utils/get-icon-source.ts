import anchorIcon from '../assets/game-icons/anchor.png';
import baseballIcon from '../assets/game-icons/baseball.png';
import basketballIcon from '../assets/game-icons/basketball.png';
import carIcon from '../assets/game-icons/car.png';
import catIcon from '../assets/game-icons/cat.png';
import chickenIcon from '../assets/game-icons/chicken.png';
import controllerIcon from '../assets/game-icons/controller.png';
import dogPeeIcon from '../assets/game-icons/dog-pee.png';
import flaskIcon from '../assets/game-icons/flask.png';
import footballIcon from '../assets/game-icons/football.png';
import futbolIcon from '../assets/game-icons/futbol.png';
import hamsterIcon from '../assets/game-icons/hamster.png';
import handSpockIcon from '../assets/game-icons/hand-spock.png';
import liraSignIcon from '../assets/game-icons/lira-sign.png';
import moonIcon from '../assets/game-icons/moon.png';
import robotIcon from '../assets/game-icons/robot.png';
import snowflakeIcon from '../assets/game-icons/snowflake.png';
import sunIcon from '../assets/game-icons/sun.png';
import { gameIconValues } from '../types/general-types';

const getIconSource = (iconValue: gameIconValues): string => {
  switch (iconValue) {
    case 'anchor':
      return anchorIcon;
    case 'baseball':
      return baseballIcon;
    case 'basketball':
      return basketballIcon;
    case 'car':
      return carIcon;
    case 'cat':
      return catIcon;
    case 'chicken':
      return chickenIcon;
    case 'controller':
      return controllerIcon;
    case 'dog-pee':
      return dogPeeIcon;
    case 'flask':
      return flaskIcon;
    case 'football':
      return footballIcon;
    case 'futbol':
      return futbolIcon;
    case 'hamster':
      return hamsterIcon;
    case 'hand-spock':
      return handSpockIcon;
    case 'lira-sign':
      return liraSignIcon;
    case 'moon':
      return moonIcon;
    case 'robot':
      return robotIcon;
    case 'snowflake':
      return snowflakeIcon;
    case 'sun':
      return sunIcon;
  }
};

export default getIconSource;

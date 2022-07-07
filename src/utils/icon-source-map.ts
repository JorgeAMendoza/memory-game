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
import { GameIconValues } from '../types/general-types';

type IconSourceMap = {
  [K in `${GameIconValues}`]: string;
};

const iconSourceMap: IconSourceMap = {
  anchor: anchorIcon,
  baseball: baseballIcon,
  basketball: basketballIcon,
  car: carIcon,
  cat: catIcon,
  chicken: chickenIcon,
  controller: controllerIcon,
  'dog-pee': dogPeeIcon,
  flask: flaskIcon,
  football: footballIcon,
  futbol: futbolIcon,
  hamster: hamsterIcon,
  'hand-spock': handSpockIcon,
  'lira-sign': liraSignIcon,
  moon: moonIcon,
  robot: robotIcon,
  snowflake: snowflakeIcon,
  sun: sunIcon,
};

export default iconSourceMap;

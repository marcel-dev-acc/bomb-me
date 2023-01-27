import SCREEN from "../../constants/device";
import {randomBetween} from "../../utils/random";

type Entity = {
  position: number[];
  xSpeed: number;
  ySpeed: number;
  size: number;
  updateFrequency: number;
  nextMove: number;
  elements?: any[];
  direction?: string;
};

type Entities = {
  bomber: Entity;
};

type Actions = {
  touches: any;
  dispatch: any;
  events: any;
};

const GameLoop = (
  entities: Entities,
  actions: Actions,
): Entities => {
  let { bomber, } = entities;
  let { touches, dispatch, events, } = actions;

  // Listen to incoming events
  if (events.length) {
    for (let i: number = 0; i < events.length; i++) {
      console.log(events);
      if (events[i].type === 'move-up') {

      } else if (events[i].type === 'move-down') {

      } else if (events[i].type === 'move-left') {

      } else if (events[i].type === 'move-right') {

      }
    }
  }

  // // Controll movement speed with this if statement
  // head.nextMove -= 1;
  // if (head.nextMove === 0) {
  //   head.nextMove = head.updateFrequency;

  //   // Check if snake head has reached end of grid
  //   if (
  //     (head.position[0] + head.xSpeed < 0) ||
  //     (head.position[0] + head.xSpeed >= SCREEN.GRID_SIZE) ||

  //     (head.position[1] + head.ySpeed < 0) ||
  //     (head.position[1] + head.ySpeed >= SCREEN.GRID_SIZE)
  //   ) {
  //     // Game over
  //     dispatch({
  //       type: 'game-over',
  //     });
  //   } else {

  //   }

  // }

  return entities;
};

export default GameLoop;
import SCREEN from "../../constants/device";
import MOVEMENT from "../../constants/movement";
import type { Entities, Bomber } from "../../screens/Game/Entities";


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
      // Check for bomber movement
      if ([ MOVEMENT.UP, MOVEMENT.DOWN,
            MOVEMENT.LEFT, MOVEMENT.RIGHT,
          ].includes(events[i].type)
      ) {
        handleMovement(bomber, events[i].type);
      }
    }
  }

  return entities;
};

const handleMovement = (bomber: Bomber, movement: string) => {
  switch (movement) {
    case MOVEMENT.UP:
      bomber.position[1] = bomber.position[1] - 1;
      break;
    case MOVEMENT.DOWN:
      bomber.position[1] = bomber.position[1] + 1;
      break;
    case MOVEMENT.LEFT:
      bomber.position[0] = bomber.position[0] - 1;
      break;
    case MOVEMENT.RIGHT:
      bomber.position[0] = bomber.position[0] + 1;
      break;
    default:
      console.log(`Movement '${movement}' not registered`);
      break;
  }

};

export default GameLoop;
import SCREEN from "../../constants/device";

import Bomber from "../../components/Bomber/Bomber";
import Wall from "../../components/Wall/Wall";
import { ReactElement } from "react";

export type Entities = {
  bomber: Bomber;
  wall: Wall;
};

export type Bomber = {
  position: number[];
  size: number;
  renderer: ReactElement;
};

type Wall = {
  position: number[];
  size: number;
  renderer: ReactElement;
};


const entities: any = {};

// Add  top walls
for (let i = 0; i < SCREEN.GRID_SIZE - 1; i++) {
  entities[`wall-top-${i}`] = {
    position: [i, 0],
    size: SCREEN.CELL_SIZE,
    renderer: <Wall />,
  };
}

// Add  bottom walls
for (let i = 0; i < SCREEN.GRID_SIZE - 1; i++) {
  entities[`wall-bottom-${i}`] = {
    position: [i, SCREEN.GRID_SIZE - 1],
    size: SCREEN.CELL_SIZE,
    renderer: <Wall />,
  };
}


// Add pillars


// Add player bomber
entities.bomber = {
  position: [1, 1],
  size: SCREEN.CELL_SIZE,
  renderer: <Bomber />,
};


export default entities;
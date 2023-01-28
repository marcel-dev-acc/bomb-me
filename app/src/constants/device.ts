import { Dimensions } from "react-native";

const SCREEN: any = {
  MAX_WIDTH: Dimensions.get('screen').width,
  MAX_HEIGHT: Dimensions.get('screen').height,
  GRID_SIZE: 16, // must be even
  CELL_SIZE: 22, // must be even
};

export default SCREEN;
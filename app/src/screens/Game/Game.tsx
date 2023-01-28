import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  View,
} from 'react-native';
import {GameEngine} from 'react-native-game-engine';

import COLOURS from '../../constants/colours';
import SCREEN from '../../constants/device';

import entities from './Entities';
import GameLoop from '../../components/GameLoop/GameLoop';
import NavControls from '../../components/Controls/NavControls';
import Controls from '../../components/Controls/Controls';


type GameEvent = {
  type: string;
};

const Game = () => {

  const handleEvent = (e: GameEvent) => {
    if (e.type === 'game-over') {
      setGameRunning(false);
    } else if (e.type === 'stopped') {
      Alert.alert('Game over!');
    }
  };

  const [boardSize, setBoardSize] = useState(SCREEN.GRID_SIZE * SCREEN.CELL_SIZE);
  const [engine, setEngine] = useState(null);
  const [gameRunning, setGameRunning] = useState(true);

  return (
    <View style={styles.gameContainer}>
      <NavControls engine={engine} />
      <GameEngine
        ref={(ref: any) => { setEngine(ref) }}
        style={[styles.gameEngine, {
          width: boardSize,
          height: boardSize,
        }]}
        entities={entities}
        systems={[ GameLoop ]}
        onEvent={handleEvent}
        running={gameRunning}
      />
      <Controls engine={engine} />
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 1,
    flexDirection: 'row',
  },
  gameEngine: {
    flex: 2,
    backgroundColor: COLOURS.WHITE,
  },
});

export default Game;

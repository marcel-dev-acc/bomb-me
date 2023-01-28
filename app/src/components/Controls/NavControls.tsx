import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import COLOURS from '../../constants/colours';
import MOVEMENT from '../../constants/movement';

const NavControls = ({ engine }: any) => {

  return (
    <View style={styles.controls}>
      <View style={styles.controlRow}>
        <TouchableOpacity onPress={() => {
          engine.dispatch({ type: MOVEMENT.UP })
        }}>
          <View style={styles.control}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.controlRow}>
        <TouchableOpacity onPress={() => {
          engine.dispatch({ type: MOVEMENT.LEFT })
        }}>
          <View style={styles.control}></View>
        </TouchableOpacity>
        <View style={[styles.control, {
          backgroundColor: COLOURS.BLACK,
        }]}></View>
        <TouchableOpacity onPress={() => {
          engine.dispatch({ type: MOVEMENT.RIGHT })
        }}>
          <View style={styles.control}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.controlRow}>
        <TouchableOpacity onPress={() => {
          engine.dispatch({ type: MOVEMENT.DOWN })
        }}>
          <View style={styles.control}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlRow: {
    flexDirection: 'row',
  },
  control: {
    width: 40,
    height: 40,
    backgroundColor: COLOURS.BLUE,
  },
});

export default NavControls;

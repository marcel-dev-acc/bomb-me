import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import COLOURS from '../../constants/colours';

const Controls = ({ engine }: any) => {

  return (
    <View style={styles.controls}>
      <TouchableOpacity onPress={() => { engine.dispatch({ type: 'place-bomb' }) }}>
        <View style={styles.control}></View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  control: {
    width: 50,
    height: 50,
    backgroundColor: COLOURS.BLUE,
  },
});

export default Controls;

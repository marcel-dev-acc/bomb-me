import React, {useEffect, useState} from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Text,
} from 'react-native';

import COLOURS from '../../constants/colours';
import SCREEN from '../../constants/device';


const Rotate = () => {

  return (
    <View style={styles.rotateContainer}>
      <Text style={styles.rotateText}>
        Please rotate your screen to play the game
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rotateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rotateText: {
    color: COLOURS.WHITE,
  },
});

export default Rotate;

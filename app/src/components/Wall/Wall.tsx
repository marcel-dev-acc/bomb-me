import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import COLOURS from '../../constants/colours';

const Wall = (props: any) => {

  return (
    <View
      style={[styles.head, {
        width: props.size,
        height: props.size,
        left: props.position[0] * props.size,
        top: props.position[1] * props.size,
      }]}
    >
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    backgroundColor: COLOURS.GREY,
    position: 'absolute',
  },
});

export default Wall;

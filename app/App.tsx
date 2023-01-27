import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Dimensions,
} from 'react-native';

import COLOURS from './src/constants/colours';
import SCREEN from './src/constants/device';
import Game from './src/screens/Game/Game';
import Rotate from './src/screens/Rotate/Rotate';

const App = () => {

  const [isPortrait, setIsPortrait] = useState(SCREEN.MAX_WIDTH < SCREEN.MAX_HEIGTH);

  useEffect(() => {
    Dimensions.addEventListener('change', ({ window:{ width, height }})=>{
      if (width < height) {
        setIsPortrait(true);
      } else {
        setIsPortrait(false);
      }
    });

  }, []);

  return (
    <>
      {isPortrait && (
        <SafeAreaView style={styles.continer}>
          <Rotate />
        </SafeAreaView>
      )}
      {!isPortrait && (
        <SafeAreaView style={styles.continer}>
          <Game />
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: COLOURS.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: 'blue',
    // borderWidth: 1,
  },
});

export default App;

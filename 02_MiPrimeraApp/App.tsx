import React from 'react'
import { StyleSheet } from 'react-native';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';
import { TareaScreen } from './src/screens/TareaScreen';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <TareaScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  }
});

export default App;

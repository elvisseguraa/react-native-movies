import 'react-native-gesture-handler';

import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';

// Para error de Carousel
import { LogBox } from 'react-native';
LogBox.ignoreLogs(["ViewPropTypes"]);

// import { FadeScreen } from './src/screens/FadeScreen';

const AppState = ({ children }: any) => {
  return (
    <GradientProvider>
      { children }
    </GradientProvider>
  )
}

const App = () => {
  return (
  <NavigationContainer>
    <AppState>
      <Navigation />
      {/* <FadeScreen /> */}  
    </AppState>  
  </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    
});

export default App;

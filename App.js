import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';

import * as Font from 'expo-font';
import Navigator from './navigation/Navigator';

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (!fontLoaded) {
    return <AppLoading onFinish={() => setFontLoaded(true)} startAsync={fetchFonts} />;
  }
  return (
    <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {

  }
});

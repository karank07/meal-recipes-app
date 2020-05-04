import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';

import Navigator from './navigation/Navigator';
import mealsReducer from './store/reducers/MealsReducer';

enableScreens();
const rootReducer=combineReducers({
  meals: mealsReducer
});
const store = createStore(rootReducer);

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
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

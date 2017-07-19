import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import scenes from './scenes';
import { Platform } from 'react-native';
import { Router } from 'react-native-router-flux';

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : Platform.select({ios: 64, android: 54});
  }
  return style;
};

const App = () => {
  return (
    <Provider store={store}>
        <Router scenes={scenes} getSceneStyle={getSceneStyle}/>
    </Provider>
  );
};

export default App;
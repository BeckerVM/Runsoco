import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


//PANTALLAS
import IndexScreen from './src/screens/IndexScreen';
import TestScreen from './src/screens/TestScreen';


const DrawerNavigator = createDrawerNavigator({
  Index: IndexScreen,
  Test: TestScreen
}, {
  hideStatusBar: false
});

const AppContainer = createAppContainer(DrawerNavigator);


const App = () => ( 
  <AppContainer />
);

export default App;

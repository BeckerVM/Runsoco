import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';


//PANTALLAS
import IndexScreen from './src/screens/Index/IndexScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import BusinessScreen from './src/screens/Business/BusinessScreen';
import DealDetailScreen from './src/screens/DealDetail/DealDetailScreen';
import TestScreen from './src/screens/TestScreen';


const DrawerNavigator = createDrawerNavigator({
  Index: IndexScreen,
  Test: TestScreen,
  Login: LoginScreen,
  Business: BusinessScreen,
  DealDetail: DealDetailScreen
}, {
  hideStatusBar: false
});

const AppContainer = createAppContainer(DrawerNavigator);


const App = () => ( 
  <AppContainer />
);

export default App;

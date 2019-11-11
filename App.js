import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
//PANTALLAS
import IndexScreen from './src/screens/Index/IndexScreen';
import LoginScreen from './src/screens/Login/LoginScreen';
import BussinesScreen from './src/screens/Bussines/BussinesScreen';
import CategoriesScreen from './src/screens/Categories/CategoriesScreen';
import TestScreen from './src/screens/TestScreen';
import DishesScreen from './src/screens/Dishes/DishesScreen';

const DrawerNavigator = createDrawerNavigator({
  Index: IndexScreen,
  Test: TestScreen,
  Login: LoginScreen,
  Bussines: BussinesScreen,
  Categories: CategoriesScreen,
  Dishes: DishesScreen
}, {
  hideStatusBar: false
});

const AppContainer = createAppContainer(DrawerNavigator);

const App = () => ( 
  <AppContainer />
);

export default App;

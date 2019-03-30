import React, {Component} from 'react';
import {createStackNavigator, createAppContainer,createSwitchNavigator} from 'react-navigation';
import SplashScreen from './Splash';
import HomeScreen from './home';
import ProfileScreen from './Profile';

const MainNavigator = createStackNavigator({
  Splash: {screen: SplashScreen},
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

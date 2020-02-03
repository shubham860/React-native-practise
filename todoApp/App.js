/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View} from 'react-native';
import Dashboard from "./src/components/Dashboard";
import History from './src/components/History';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import {createAppContainer} from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';


const BottomTab = createMaterialBottomTabNavigator(
  {
        Dashboard : {
        screen : Dashboard,
        navigationOptions : {
          tabBarLabel:'',
          tabBarIcon: ({ tintColor }) => (
              <View>
                  <Icon style={[{color: tintColor}]} size={25} name={'home'}/>
              </View>),
        }
      },
      History : {
        screen : History,
          navigationOptions : {
              tabBarLabel:'',
              tabBarIcon: ({ tintColor }) => (
                  <View>
                      <Icon style={[{color: tintColor}]} size={25} name={'home'}/>
                  </View>),
          }
      }
  },
{
  initialRouteName: 'Dashboard',
      activeColor: 'orange',
    inactiveColor: 'white',
    barStyle: { backgroundColor: '#000000' },
}
);

const AppContainer = createAppContainer(BottomTab);

const App: () => React$Node = () => {
  return (
   <AppContainer/>
  )
};

export default App;

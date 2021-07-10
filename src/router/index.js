import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabRouter from './bottomHomeNavigator.routes';
import StoryScreen from '../screens/StoryScreen';

const RootStack = createStackNavigator();

const Router = () => (
  <RootStack.Navigator>
    <RootStack.Screen
      name={'Root'}
      component={BottomTabRouter}
      options={{headerShown: false}}
    />
    <RootStack.Screen
      name={'Story'}
      component={StoryScreen}
      options={{headerShown: false}}
    />
  </RootStack.Navigator>
);

export default Router;

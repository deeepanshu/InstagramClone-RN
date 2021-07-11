import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import Router from './router';

import { withAuthenticator } from "aws-amplify-react-native";


const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Router />
    </NavigationContainer>
  );
};

export default withAuthenticator(App);

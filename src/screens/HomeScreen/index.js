import React from 'react';
import Stories from '../../components/Stories';
import Feed from '../../components/Feed';
import {SafeAreaView} from 'react-native';

const HomeScreen = () => (
  <SafeAreaView>
    <Feed />
  </SafeAreaView>
);

export default HomeScreen;

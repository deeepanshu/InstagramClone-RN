import React from 'react';
import {FlatList, View} from 'react-native';
import Story from '../UserStoryPreview';
import styles from './styles';
import {STORIES_DATA} from '../../data/stories';

const Stories = () => (
  <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.container}
    data={STORIES_DATA}
    keyExtractor={({user}) => user.id}
    renderItem={({item}) => <Story story={item} />}
  />
);

export default Stories;

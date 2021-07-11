import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import Story from '../UserStoryPreview';
import styles from './styles';
import {STORIES_DATA} from '../../data/stories';
import {API, graphqlOperation} from 'aws-amplify';
import {listStories} from '../../graphql/queries';

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const storyData = await API.graphql(graphqlOperation(listStories));
      setStories(storyData.data.listStories.items);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      data={stories}
      keyExtractor={({user}) => user.id}
      renderItem={({item}) => <Story story={item} />}
    />
  );
};

export default Stories;

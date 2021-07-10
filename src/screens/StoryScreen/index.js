import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  SafeAreaView, Text,
  TouchableWithoutFeedback,
} from "react-native";
import {useNavigation, useRoute} from '@react-navigation/native';
import {STORIES_DATA} from '../../data/stories';
import styles from './styles';
import ProfilePicture from "../../components/ProfilePicture";

const StoryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {userId} = route.params;
  const [userStories, setUserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  useEffect(() => {
    const stories = STORIES_DATA.find(s => s.user.id === userId);
    setUserStories(stories);
    setActiveStoryIndex(0);
  }, []);

  const navigateToNextUser = () => {
    navigation.push('Story', {userId: String(parseInt(userId) + 1)});
  };

  const navigateToPreviousUser = () => {
    navigation.push('Story', {userId: String(parseInt(userId) - 1)});
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      navigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePreviousStory = () => {
    if (activeStoryIndex <= 0) {
      navigateToPreviousUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };
  const handleStoryClick = event => {
    const x = event.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;
    if (x < screenWidth / 2) {
      handlePreviousStory();
    } else {
      handleNextStory();
    }
  };

  if (!userStories) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = userStories.stories[activeStoryIndex];
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={event => handleStoryClick(event)}>
        <ImageBackground
          style={styles.image}
          source={{uri: activeStory.imageUri}}
        >
          <ProfilePicture uri={userStories.user.imageUri} />
          <Text>{userStories.user.name}</Text>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;

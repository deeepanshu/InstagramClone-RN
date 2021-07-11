import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {STORIES_DATA} from '../../data/stories';
import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
          source={{uri: activeStory.imageUri}}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={userStories.user.imageUri} size={40} />
            <Text style={styles.userName}>{userStories.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color="#fff" />
            </View>
            <View style={styles.textContainer}>
              <TextInput placeholder={'Send Message'} editable placeholderTextColor={'#fff'} style={styles.textInput} />
            </View>
            <View style={styles.messageButton}>
              <Ionicons name="paper-plane-outline" size={30} color="#fff" />
            </View>
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;

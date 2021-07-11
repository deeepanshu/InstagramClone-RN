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
import styles from './styles';
import ProfilePicture from '../../components/ProfilePicture';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {API, graphqlOperation} from 'aws-amplify';
import {listStories} from '../../graphql/queries';
import moment from 'moment';

const StoryScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [stories, setStories] = useState([]);
  const [activeStoryIndex, setActiveStoryIndex] = useState(null);

  useEffect(() => {
    fetchStories();
    setActiveStoryIndex(0);
  }, []);

  const fetchStories = async () => {
    try {
      const storyData = await API.graphql(graphqlOperation(listStories));
      setStories(storyData.data.listStories.items);
    } catch (e) {
      console.log(e.message);
    }
  };

  const navigateToNextUser = () => {
    navigation.pop();
    // navigation.push('Story', {userId: String(parseInt(userId) + 1)});
  };

  const navigateToPreviousUser = () => {
    navigation.pop();
    // navigation.push('Story', {userId: String(parseInt(userId) - 1)});
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= stories.length - 1) {
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

  if (!stories || stories.length === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = stories[activeStoryIndex];
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={event => handleStoryClick(event)}>
        <ImageBackground style={styles.image} source={{uri: activeStory.image}}>
          <View style={styles.userInfo}>
            <ProfilePicture uri={activeStory.user.image} size={40} />
            <Text style={styles.userName}>{activeStory.user.name}</Text>
            <Text style={styles.postedTime}>
              {moment(activeStory.createdAt).fromNow()}
            </Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color="#fff" />
            </View>
            <View style={styles.textContainer}>
              <TextInput
                placeholder={'Send Message'}
                editable
                placeholderTextColor={'#fff'}
                style={styles.textInput}
              />
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

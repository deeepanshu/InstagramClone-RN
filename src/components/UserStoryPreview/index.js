import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import ProfilePicture from '../ProfilePicture';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Story = ({story}) => {
  const {
    user: {id, image, name},
  } = story;
  const navigation = useNavigation();
  const onStoryClick = () => {
    navigation.navigate('Story', {userId: id});
  };
  return (
    <TouchableOpacity style={styles.container} onPress={onStoryClick}>
      <ProfilePicture uri={image} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;

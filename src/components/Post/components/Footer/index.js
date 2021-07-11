import React, {useState} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

const Footer = ({likesCount, caption, postedAt}) => {
  const [likes, setLikes] = useState(likesCount);
  const [isLiked, setIsLiked] = useState(false);

  const onLikePressed = () => {
    setLikes(_likes => (isLiked ? _likes - 1 : _likes + 1));
    setIsLiked(like => !like);
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.leftIcons}>
          <TouchableWithoutFeedback onPress={onLikePressed}>
            <AntDesignIcon
              name={isLiked ? 'heart' : 'hearto'}
              size={25}
              color={isLiked ? '#c30000' : '#5d5d5d'}
            />
          </TouchableWithoutFeedback>
          <FontistoIcon name="comment" size={23} color={'#5d5d5d'} />
          <IoniconsIcon
            name="paper-plane-outline"
            size={25}
            color={'#5d5d5d'}
          />
        </View>
        <FontAwesomeIcon name="bookmark-o" size={25} color={'#5d5d5d'} />
      </View>
      <Text style={styles.likes}>{likes} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{moment(postedAt).fromNow()}</Text>
    </View>
  );
};

export default Footer;

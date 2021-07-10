import React from 'react';
import Post from '../Post';
import { FlatList } from "react-native";
import Stories from "../Stories";

const POSTS = [
  {
    user: {
      imageUri:
        'https://i.picsum.photos/id/60/200/200.jpg?hmac=MjMlhHlJlU_z3Z1DXohWUex2M-Gs7dtbqv4EJ4pSg3E',
      name: 'Harshit',
    },
    imageUri:
      'https://i.picsum.photos/id/281/200/200.jpg?hmac=5FvZ-Y5zbbpS3-mJ_mp6-eH61MkwhUJi9qnhscegqkY',
    caption: 'They see me rolling!',
    likesCount: 5000,
    postedAt: '10 minutes ago',
  },
  {
    user: {
      imageUri:
        'https://i.picsum.photos/id/461/200/200.jpg?hmac=OfKixfjCbSjC-h3P78PbMNsJqVCnAClKqNmrUCONSw4',
      name: 'Hobo',
    },
    imageUri:
      'https://i.picsum.photos/id/208/200/200.jpg?hmac=J1BdqRgAAAId9wernbPINrW38haBGOtrpEqn3m2wjlY',
    caption: 'Eh! Just a good click!',
    likesCount: 50000,
    postedAt: '1 minute ago',
  },
];

const Feed = () => (
  <FlatList
    data={POSTS}
    keyExtractor={({caption}) => caption}
    ListHeaderComponent={() => <Stories />}
    renderItem={({item}) => <Post post={item} />}
  />
);

export default Feed;

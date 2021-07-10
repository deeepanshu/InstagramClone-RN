import React from 'react';
import {FlatList, View} from 'react-native';
import Story from '../Story';
import styles from './styles';

const DATA = [
  {
    imageUri:
      'https://i.picsum.photos/id/998/200/200.jpg?hmac=Vc80YaPx9n6ZScRmWn3BK9EpGBVjYYCDlXpsZfYCOPw',
    name: 'Deepanshu',
  },
  {
    imageUri:
      'https://i.picsum.photos/id/60/200/200.jpg?hmac=MjMlhHlJlU_z3Z1DXohWUex2M-Gs7dtbqv4EJ4pSg3E',
    name: 'Harshit',
  },
  {
    imageUri:
      'https://i.picsum.photos/id/1059/200/200.jpg?hmac=2w4ZTAuYGsSUL-ur3iVQO04H8398XxIaeLEGVBNRSLU',
    name: 'Garv',
  },
  {
    imageUri:
      'https://i.picsum.photos/id/816/200/200.jpg?hmac=ZNsj0gw4AJtSDA82gMxujRjh3_5ZHoVje8CtZopmcz4',
    name: 'Gazal',
  },
  {
    imageUri:
      'https://i.picsum.photos/id/349/200/200.jpg?hmac=8Cc9fPp4rsCZgc9k4BDMpTIMvfWPvylEu6r7aEuPafw',
    name: 'Gouri',
  },
  {
    imageUri:
      'https://i.picsum.photos/id/461/200/200.jpg?hmac=OfKixfjCbSjC-h3P78PbMNsJqVCnAClKqNmrUCONSw4',
    name: 'Gauri',
  },
  {
    imageUri:
      'https://i.picsum.photos/id/630/200/200.jpg?hmac=X7UBUxsi2YahTLmW0-zKMMPOALeDjY5wPZGTPaGbDhU',
    name: 'Lalit',
  },
];

const Stories = () => (
  <FlatList
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.container}
    data={DATA}
    keyExtractor={({name}) => name}
    renderItem={({item}) => <Story imageUri={item.imageUri} name={item.name} />}
  />
);

export default Stories;

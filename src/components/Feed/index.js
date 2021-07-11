import React, { useEffect, useState } from "react";
import Post from '../Post';
import {FlatList} from 'react-native';
import Stories from '../Stories';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postData.data.listPosts.items);
      console.log(postData.data.listPosts.items)
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={({caption}) => caption}
      ListHeaderComponent={() => <Stories />}
      renderItem={({item}) => <Post post={item} />}
    />
  );
};

export default Feed;

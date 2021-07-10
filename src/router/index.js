import React from 'react';
import FoundationIcons from 'react-native-vector-icons/Foundation';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
import HomeRoutes from './home.routes';
import DiscoveryScreen from '../screens/DiscoveryScreen';
import PostScreen from '../screens/PostScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Router = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        if (route.name === 'Home') {
          return <FoundationIcons name={'home'} size={size} color={color} />;
        }
        if (route.name === 'Discovery') {
          return <FeatherIcons name={'search'} size={size} color={color} />;
        }
        if (route.name === 'Post') {
          return (
            <FeatherIcons name={'plus-square'} size={size} color={color} />
          );
        }
        if (route.name === 'Notifications') {
          return <AntDesignIcons name={'hearto'} size={size} color={color} />;
        }
        if (route.name === 'Profile') {
          return (
            <IoniconsIcons name={'person-outline'} size={size} color={color} />
          );
        }

        return <IoniconsIcons name={'heart'} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#000',
      inactiveTintColor: 'gray',
      showLabel: false,
    }}>
    <Tab.Screen name="Home" component={HomeRoutes} />
    <Tab.Screen name="Discovery" component={DiscoveryScreen} />
    <Tab.Screen name="Post" component={PostScreen} />
    <Tab.Screen name="Notifications" component={NotificationsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default Router;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTE } from '../../constants';
import NewsPage from '../../screens/newsScreen/News';
import ProfilePage from '../../screens/profileScreen/Profile';
import homeIcon from '../../assets/img/home.png'
import { Image, View } from 'react-native';
import { styles } from './Root.style';
import Home from '../../screens/homeScree/Home';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
      <Tab.Navigator
        initialRouteName={ROUTE.HOME}
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}
      >
        <Tab.Screen
          name={ROUTE.HOME}
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, color, size }) => (
              <View style={styles.setingImg}><Image name={homeIcon} color={color} size={size} /></View>
            ),
          }}
          
        />
        <Tab.Screen
          name={ROUTE.NEWS}
          component={NewsPage}
          options={{
            tabBarLabel: 'News',
            tabBarIcon: ({ focused, color, size }) => (
              <Image name={homeIcon} color={color} size={size} />
            ),
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name={ROUTE.PROFILE}
          component={ProfilePage}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <Image name={homeIcon} color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default TabBar;
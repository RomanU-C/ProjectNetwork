import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTE } from '../../constants';
import NewsPage from '../../screens/newsScreen/News';
import ProfilePage from '../../screens/profileScreen/Profile';
import Home from '../../screens/homeScree/Home';

// function ExampleView(props) {
//     return 
//   }
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
                <Icon name="home-outline" size={30} color="#a4a4b8" />
            ),
          }}
        />
        <Tab.Screen
          name={ROUTE.NEWS}
          component={NewsPage}
          options={{
            tabBarLabel: 'News',
            tabBarIcon: ({ focused, color, size }) => (
              <Icon name="newspaper-outline" size={30} color="#a4a4b8" />
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
              <Icon name="person-outline" size={30} color="#a4a4b8" />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default TabBar;
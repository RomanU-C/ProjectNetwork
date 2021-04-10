import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTE } from '../../constants';
import LoginPage from '../../screens/loginScreen/Login';
import NewsPage from '../../screens/newsScreen/News';
import ProfilePage from '../../screens/profileScreen/Profile';
import { styles } from './Root.style';

const Tab = createBottomTabNavigator();


const Root = () => {
 return (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name={ROUTE.LOGIN} component={LoginPage} style={styles.setingTabBar}/>
            <Tab.Screen name={ROUTE.NEWS} component={NewsPage} style={styles.setingTabBar}/>
            <Tab.Screen name={ROUTE.PROFILE} component={ProfilePage} style={styles.setingTabBar}/>
          </Tab.Navigator>
        </NavigationContainer>
      );
};

export default Root;
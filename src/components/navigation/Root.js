import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTE } from '../../constants';
import Login from '../../screens/loginScreen/Login';
import NewsPage from '../../screens/newsScreen/News';
import ProfilePage from '../../screens/profileScreen/Profile';
import { styles } from './Root.style';

const Tab = createBottomTabNavigator();
let flag = true;
const checkAuth = !flag ? LoginPage : ProfilePage;




const Root = () => {
 return (
        <NavigationContainer>
          <Tab.Navigator>       
            <Tab.Screen name={ROUTE.FIRST} component={Login} style={styles.setingTabBar}/> 
            <Tab.Screen name={ROUTE.NEWS} component={NewsPage} style={styles.setingTabBar}/>
            <Tab.Screen name={ROUTE.PROFILE} component={ProfilePage} style={styles.setingTabBar}/>
          </Tab.Navigator>
        </NavigationContainer>
      );
};

export default Root;
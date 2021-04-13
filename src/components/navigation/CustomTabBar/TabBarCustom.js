import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from './../../../screens/homeScree/Home';
import Profile from './../../../screens/profileScreen/Profile';
import NewsPage from '../../../screens/newsScreen/News';
import TabCustom from './Tab'
const Tab = createBottomTabNavigator();

export default function TabBarCustom() {
  return (  
      <Tab.Navigator>
        <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
          tabBarButton: (props) => <TabCustom label='Home' {...props}/>
        }}
        />
        <Tab.Screen name='News' component={NewsPage}
        options={{
          tabBarButton: (props) => <TabCustom label='News' {...props}/>
        }}
        />
        <Tab.Screen name='Profile' component={Profile}
        options={{
          tabBarButton: (props) => <TabCustom label='Profile' {...props}/>
        }}
        />
      </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
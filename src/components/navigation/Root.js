import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabBar from './TabBar';
import Login from '../../screens/loginScreen/Login';
import { useSelector } from 'react-redux';



let Stack = createStackNavigator()



const Root = () => {
  const flagState = useSelector(state => state.state.flagState)
  console.log(flagState)
  return (
      <NavigationContainer>
        <Stack.Navigator>
          {!flagState ? <Stack.Screen name="Login" component={Login} /> :
          <Stack.Screen name="Hello Inside" component={TabBar} />}
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default Root;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabBar from './TabBar';
import Login from '../../screens/loginScreen/Login';



let Stack = createStackNavigator()
let flag = true;


const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!flag ? <Stack.Screen name="Login" component={Login} /> :
        <Stack.Screen name="TabBar" component={TabBar} />}
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};

export default Root;
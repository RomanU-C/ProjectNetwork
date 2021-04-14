import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';



const ProfilePage = () => {
 const userData = useSelector(state=>state.state.userData)
 console.log(userData)

 return (
        <View>
          <Text>Users Online</Text>
        </View>
  );
};

export default ProfilePage;
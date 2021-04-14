import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './Home.style';
import UserCardItem from './UsersCardItem';

const Home = () => {
  const userData = useSelector(state => state.state.UserData)
  return (
    <ScrollView>
      <Text style={styles.textStyle}>Your Friends</Text>
      {userData.map((user) =>
        <UserCardItem name={user.userName} key={user.id} status={user.status} url={{ uri: user.userAvatar }} />
      )}
    </ScrollView>
  );
};

export default Home;
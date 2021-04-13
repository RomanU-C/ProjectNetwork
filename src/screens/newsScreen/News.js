import React from 'react';
import {
  Image,
  Text,
  View,
  SafeAreaView,
  FlatList,

} from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './News.style';

const NewsPage = () => {
  const loading = false;
  const fetchData = () => {}
  const DATA = useSelector(state => state.state.dataNews)
  const renderList = ((item) => {
    return (
      <View style={styles.newsItemWrapper}>
        <View style={styles.userContainer}>
          <Image style={styles.userAvatar} source={{ uri: item.userAvatar }} />
          <View>
          <Text style={styles.userName}>{item.userName}</Text>
          <Text>{item.location}</Text>
          </View>
        </View>
        <View>
          <Image style={styles.userPostImg} source={{ uri: item.userPost }} />
        </View>
      </View>
    )
  })

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => {
          return renderList(item)
        }}
        keyExtractor={item => item.id}
        onRefresh={() => fetchData()}
        refreshing={loading}
      />
    </SafeAreaView>
  );
};

export default NewsPage;
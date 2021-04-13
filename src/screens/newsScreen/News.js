import React from 'react';
import {
  SafeAreaView,
  FlatList,
} 
from 'react-native';
import { useSelector } from 'react-redux';
import ItemNews from './ItemNews';
import { styles } from './News.style';

const NewsPage = () => {
  const loading = false;
  const fetchData = () => {}
  const DATA = useSelector(state => state.state.dataNews)
  const renderList = ((item) => <ItemNews item={item}/>)
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
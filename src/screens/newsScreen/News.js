import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
  SafeAreaView,
  FlatList,

} from 'react-native';
import { styles } from './News.style';

const loading = false;
const fetchData = () => {
  
}

const DATA = [
  {
    id: '1',
    userAvatar: './../../assets/img/avatar.jpeg',
    userName: 'Mike Mikowich',
    userPost: './../../assets/img/postImg.jpg',
  },
  {
    id: '2',
    userAvatar: './../../assets/img/joseph.jpeg',
    userName: 'Jogan Joganowich',
    userPost: './../../assets/img/postImg2.jpg',
  },
  {
    id: '3',
    userAvatar: './../../assets/img/richard.jpeg',
    userName: 'Richard Richardiwich',
    userPost: './../../assets/img/postImg3.jpg',
  },]


// const Item = ({ userAvatar, userName, userPost }) => (
//   <View style={styles.newsItemWrapper}>
//     <View style={styles.userContainer}>
//       <Image style={styles.userAvatar} source={userAvatar} />
//       <Text>{userName}</Text>
//     </View>
//     <View>
//       <Image style={styles.userPostImg} source={userPost} />
//     </View>
//   </View>

// );

const NewsPage = () => {
  const renderList = ((item) => {
    return (
      <View style={styles.newsItemWrapper}>
        <View style={styles.userContainer}>
          <Image style={styles.userAvatar} source={{ uri: item.userAvatar }} />
          <Text>{item.userName}</Text>
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
        onRefresh={()=>fetchData()}
        refreshing={loading}
      />
    </SafeAreaView>
    // <ScrollView>
    //   <View style={styles.newsItemWrapper}>
    //     <View style={styles.userContainer}>
    //       <Image style={styles.userAvatar} source={require('./../../assets/img/avatar.jpeg')}/>
    //       <Text>Mike Mikowich</Text>
    //     </View>
    //     <View>
    //       <Image style={styles.userPostImg} source={require('./../../assets/img/postImg.jpg')}/>
    //     </View>
    //   </View>

    //   <View style={styles.newsItemWrapper}>
    //     <View style={styles.userContainer}>
    //       <Image style={styles.userAvatar} source={require('./../../assets/img/avatar.jpeg')}/>
    //       <Text>Mike Mikowich</Text>
    //     </View>
    //     <View>
    //       <Image style={styles.userPostImg} source={require('./../../assets/img/postImg.jpg')}/>
    //     </View>
    //   </View>

    //   <View style={styles.newsItemWrapper}>
    //     <View style={styles.userContainer}>
    //       <Image style={styles.userAvatar} source={require('./../../assets/img/avatar.jpeg')}/>
    //       <Text>Mike Mikowich</Text>
    //     </View>
    //     <View>
    //       <Image style={styles.userPostImg} source={require('./../../assets/img/postImg.jpg')}/>
    //     </View>
    //   </View>

    //   <View style={styles.newsItemWrapper}>
    //     <View style={styles.userContainer}>
    //       <Image style={styles.userAvatar} source={require('./../../assets/img/avatar.jpeg')}/>
    //       <Text>Mike Mikowich</Text>
    //     </View>
    //     <View>
    //       <Image style={styles.userPostImg} source={require('./../../assets/img/postImg.jpg')}/>
    //     </View>
    //   </View>

    //   <View style={styles.newsItemWrapper}>
    //     <View style={styles.userContainer}>
    //       <Image style={styles.userAvatar} source={require('./../../assets/img/avatar.jpeg')}/>
    //       <Text>Mike Mikowich</Text>
    //     </View>
    //     <View>
    //       <Image style={styles.userPostImg} source={require('./../../assets/img/postImg.jpg')}/>
    //     </View>
    //   </View>
    // </ScrollView>
  );
};

export default NewsPage;
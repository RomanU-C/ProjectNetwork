import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './News.style';

const ItemNews = (item) => {
    return (
        <View style={styles.newsItemWrapper}>
            <View style={styles.userContainer}>
                <Image style={styles.userAvatar} source={{ uri: item.item.userAvatar }} />
                <View>
                    <Text style={styles.userName}>{item.item.userName}</Text>
                    <Text>{item.item.location}</Text>
                </View>
            </View>
            <View>
                <Image style={styles.userPostImg} source={{ uri: item.item.userPost }} />
            </View>
        </View>
    );
};

export default ItemNews;
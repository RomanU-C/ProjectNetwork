import React from 'react';
import {
    Button,
    Text,
    TextInput,
    View,
} from 'react-native';
import { styles } from './Login.style';

const LoginPage = () => {
    return (
        <View style={styles.loginContainer}>
            <Text>LoginPage</Text>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <Button title='Submit' />
        </View>
    );
};

export default LoginPage;
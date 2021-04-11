import React from 'react';
import { useState } from 'react';
import {
    AsyncStorage,
    Button,
    Text,
    TextInput,
    View,
} from 'react-native';
import { styles } from './Login.style';
import { validate, string } from 'valid.js';
import { regexString } from '../../constants';


const LoginPage = () => {
    const [nameValue, setNameValue] = useState('');
    const [passValue, setPassValue] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [passDirty, setPassDiry] = useState(false);
    const [nameError, setNameError] = useState('Имя не может быть пустым');
    const [passError, setPassError] = useState('Пароль не может быть пустым');
    const [regexResult, setregexResult] = useState(false);


    const _storeData = async () => {
        try {
            await AsyncStorage.setItem(
                'name', nameValue,
                'pass', passValue
            );
        } catch (error) {
            // Error saving data
        }

    };

    const nameHandler = (e) => {
        setNameValue(e.target.value)
        let isvalidName = validate(string.regex(regexString))
        let resultName = isvalidName(nameValue)
        if (!resultName) {
            setregexResult(true);
        }
    }

    const passHandler = (e) => {
        setPassValue(e.target.value)
        let isvalidPass = validate(string.regex(regexString))
        let resultPass = isvalidPass(passValue)
        if (!resultPass) {
            setregexResult(true);
        }
    }

    // did not understand yet how to get the event target
    const blurHandler = (e) => {
        switch (e.nativeEvent.name) {
            case 'Name':
                setNameDirty(true)
                break
            case 'Password':
                setPassDiry(true)
                break
        }
    }

    return (
        <View style={styles.loginContainer}>
            <Text>LoginPage</Text>
            {(nameDirty && nameError) && <Text style={{ color: 'red' }}>{nameError}</Text>}
            {regexResult ? <Text style={{ color: 'red' }}>Only latin and number 3-16 symbol</Text> : null}
            <TextInput onChange={nameHandler} value={nameValue} onBlur={e => blurHandler(e)} name='Name' style={styles.input} />
            {(passDirty && passError) && <Text style={{ color: 'red' }}>{passError}</Text>}
            {regexResult ? <Text style={{ color: 'red' }}>Only latin and number 3-8 symbol</Text> : null}
            <TextInput onChange={passHandler} value={passValue} onBlur={e => blurHandler(e)} name='Password' style={styles.input} />
            <Button onPress={_storeData} title='Submit' />
        </View>
    );
};

export default LoginPage;
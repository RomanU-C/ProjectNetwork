import React, { useState } from 'react';
import { Text, View, Image } from "react-native";
import { Button } from "react-native-elements";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { flag, setUserData } from "../../redux/globalRedusers";
import { SETTING_VALIDATION } from "../../constants";
import { styles } from "./Login.style";
import { Input } from 'react-native-elements';



const CustomForm = () => {
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        dispatch(flag());
        dispatch(setUserData(data))
    }
    return (
        <View style={styles.loginContentWrapper}>
            <Image style={styles.logoSetings} source={require('./../../assets/img/logo.png')} />
            <View>
                {errors.firstName ? <Text>{errors.firstName.message}</Text> : null}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder='Name'
                            leftIcon={{ type: 'font-awesome', name: 'chevron-right', size: 15 }}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="firstName"
                    rules={SETTING_VALIDATION.settingLogin}
                    defaultValue=""
                />
            </View>
            <View>
                {errors.password ? <Text>{errors.password.message}</Text> : null}
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            placeholder='Password'
                            leftIcon={{ type: 'font-awesome', name: 'chevron-right', size: 15 }}
                            onBlur={onBlur}
                            onChangeText={value => onChange(value)}
                            value={value}
                        />
                    )}
                    name="password"
                    rules={SETTING_VALIDATION.settingPassword}
                    defaultValue=""
                />
            </View>
            <Button
                onPress={handleSubmit(onSubmit)}
                buttonStyle={{ width: 250, borderColor: '#0a4724' }}
                containerStyle={{ margin: 5,
                alignItems: 'center' }}
                loadingProps={{ animating: true }}
                title="Go Inside"
                titleStyle={{ marginHorizontal: 5, color: '#0a4724' }}
                type="outline"
            />
           
        </View>
    );
};

export default CustomForm;
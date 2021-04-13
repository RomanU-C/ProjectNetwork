import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { flag, setUserData } from "../../redux/globalRedusers";
import { SETTING_VALIDATION } from "../../constants";
import { styles } from "./Login.style";


const CustomForm = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
      dispatch(flag());
      dispatch(setUserData(data))
  }
  return (
    <View style={styles.loginContentWrapper}>
                <Image style={styles.logoSetings} source={require('./../../assets/img/logo.png')}/>
                <View>
                    {errors.firstName ? <Text>{errors.firstName.message}</Text> : <Text>Name</Text>}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
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
                    {errors.password ? <Text>{errors.password.message}</Text> : <Text>Password</Text>}
                    <Controller
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                style={styles.input}
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
                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
  );
};

export default CustomForm;
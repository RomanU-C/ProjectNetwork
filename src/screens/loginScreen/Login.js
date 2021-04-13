import React, { useState } from "react";
import { Text, View, TextInput, Button, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./Login.style";
import { useDispatch } from "react-redux";
import { flag, setUserData } from "../../redux/globalRedusers";

const Login = () => {
    const dispatch = useDispatch();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        dispatch(flag(),setUserData(data))
    }
    return (
        <View style={styles.loginContainer}>
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
                        rules={{
                            required: {
                                value: true,
                                message: 'This Required'
                            },
                            minLength: {
                                value: 3,
                                message: 'Min Lenght 3 symbol'
                            },
                            maxLength: {
                                value: 8,
                                message: 'Max Lenght 8 symbol'
                            }

                        }}
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
                        rules={{
                            required: {
                                value: true,
                                message: 'This Required'
                            },
                            minLength: {
                                value: 3,
                                message: 'Min Lenght 3 symbol'
                            },
                            maxLength: {
                                value: 8,
                                message: 'Max Lenght 8 symbol'
                            }
                        }}
                        defaultValue=""
                    />

                </View>
                <Button title="Submit" onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    );
};


export default Login;
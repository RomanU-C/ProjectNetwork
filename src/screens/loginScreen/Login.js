import React from "react";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./Login.style";

const Login = () => {
    const { control, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{ 
      let stringData = `Имя: ${data.firstName} Пароль: ${data.password}`;
      Alert.alert(
        "Вместо console.log()",
        stringData,
        [
          {
            text: "Отмена",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "ОК", onPress: () => console.log("OK Pressed") }
        ]
      );;}

    return (
        <View style={styles.loginContainer}>
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

            <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
    );
};


export default Login;
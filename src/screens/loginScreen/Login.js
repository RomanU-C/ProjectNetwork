import React from "react";
import { View } from "react-native";
import CustomForm from "./CustomForm";
import { styles } from "./Login.style";

const Login = () => {
    return (
        <View style={styles.loginContainer}>
           <CustomForm />
        </View>
    );
};


export default Login;
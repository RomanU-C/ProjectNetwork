import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button, View } from 'react-native'
import { LOGIN_FIELDS } from '../../constants'
import { FormInput } from './FormInput'
import { styles } from './Login.style'



const Login = () => {
    const onSubmit = form => {
        console.log(form.value)
    }

    const onErrors = errors => {
        console.warn(errors)
    }
    const formMethods = useForm()
    return (
        <View style={styles.loginContainer}>
            <View style={styles.loginInner}>
                <FormProvider {...formMethods}>
                    <FormInput style={styles.input} name={LOGIN_FIELDS.username} label='Username'
                        rules={{ required: 'Username is required!' }} />

                    <FormInput style={styles.input} name={LOGIN_FIELDS.password} label='Password' rules={{
                        required: 'Password is required!',
                        minLength: {
                            message: 'Use at least 10 characters.',
                            value: 10,
                        },
                    }} />
                </FormProvider>
                <Button title='Login' onPress={formMethods.handleSubmit(onSubmit, onErrors)} />
            </View>
        </View>
    )
}

export default Login
import React from 'react'
import { Text, TextInput, View } from 'react-native'


export const Input = ({ label, error, ...textInputProps }) => {
    const isError = Boolean(error)
  
    return (
      <View>
        {Boolean(label) && <Text>{label}</Text>}
        <TextInput isError={isError} {...textInputProps}/>
        {isError && <Text>{error}</Text>}
      </View>
    )
  }
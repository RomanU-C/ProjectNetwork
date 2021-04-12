import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { Input } from './Input'


export const FormInput = (props) => {
  const { name, rules, defaultValue = '', ...inputProps } = props;


  const formContext = useFormContext()
  const { control, errors } = formContext

  const { field } = useController({ name, control, rules, defaultValue })

  return (
    <Input
      {...inputProps}
      error={errors}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
    />
  )
}
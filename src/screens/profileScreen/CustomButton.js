import React from 'react';
import { Button } from "react-native-elements";


const CustomButton = (props) => {
  const {title, onPress} = props;
  return (
    <Button
          onPress={onPress}
          buttonStyle={{ width: 250, backgroundColor: '#eb5050' }}
          containerStyle={{
            margin: 10,
            alignItems: 'center'
          }}
          loadingProps={{ animating: true }}
          title={title}
          titleStyle={{ marginHorizontal: 5, color: '#fff' }}
          type="solid"
        />
  );
};

export default CustomButton;
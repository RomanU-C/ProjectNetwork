import React, { useState } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Image
} from 'react-native';
import { useSelector } from 'react-redux';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { styles } from './Profile.style';
import { Button, Icon } from "react-native-elements";
import CustomButton from './CustomButton'
import { Input } from 'react-native-elements';


const ProfilePage = () => {
  const [stateInput, changeStateInput] = useState('')
  const bs = React.createRef()
  const fall = new Animated.Value(1)
  const renderHeader = () => (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.textStyle}>Load IMG</Text>
        <CustomButton title='Add from gallery' />
        <CustomButton title='Create photo' />
      </View>
    </View>)
  return (
    <View style={styles.container}>
      <BottomSheet
        renderHeader={renderHeader}
        ref={bs}
        snapPoints={[230, 0]}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
      <View style={styles.containerDropZone}>
        <View></View>
        <TouchableWithoutFeedback onPress={() => bs.current.snapTo(0)}>
          <View style={styles.dropPhotoWrapper}>
            <Icon
              color="#eb5050"
              name="send"
              onLongPress={() => console.log("onLongPress()")}
              size={50}
              type="material"
            />
            <Text>Tap to send</Text>
          </View>
        </TouchableWithoutFeedback>
        <Input
          placeholder='Add description'
          leftIcon={{ type: 'font-awesome', name: 'chevron-right', size: 15 }}
          value={stateInput}
          onChangeText={(text)=>{changeStateInput(text)}}
        />
        <CustomButton title='Save Change'/>
      </View>
    </View>
  );
};
export default ProfilePage;
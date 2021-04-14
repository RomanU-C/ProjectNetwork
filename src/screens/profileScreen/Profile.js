import React, { useState } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  Image
} from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { styles } from './Profile.style';
import { Button, Icon } from "react-native-elements";
import CustomButton from './CustomButton'
import { Input } from 'react-native-elements';
import ImagePicker from 'react-native-image-crop-picker';


const ProfilePage = () => {
  const [stateImg, setStateImg] = useState('')
  const [stateInput, changeStateInput] = useState('')
  const bs = React.createRef()
  const fall = new Animated.Value(1)

  const addPhotoFromGalery = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      setStateImg(image.path)
      bs.current.snapTo(0)
      console.log(image)
    });
  }
  const addPhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      setStateImg(image.path)
    });
  }

  const renderHeader = () => (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.textStyle}>Load IMG</Text>
        <CustomButton title='Add from gallery' onPress={addPhotoFromGalery} />
        <CustomButton title='Create photo' onPress={addPhotoFromCamera} />
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
            {stateImg ? <Image style={styles.imagePrev} source={{uri: stateImg}} /> : 
            <Icon
            color="#eb5050"
            name="send"
            size={50}
            type="material"
          />
            }
            <Text>Tap to send</Text>
          </View>
        </TouchableWithoutFeedback>
        <Input
          placeholder='Add description'
          leftIcon={{ type: 'font-awesome', name: 'chevron-right', size: 15 }}
          value={stateInput}
          onChangeText={(text) => { changeStateInput(text) }}
        />
        <CustomButton title='Save Change' />
      </View>
    </View>
  );
};
export default ProfilePage;
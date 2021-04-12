import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loginContainer: {
     flex: 1,
     backgroundColor: '#e8e8e8',
     paddingHorizontal: 10,
     paddingVertical: 10,
     alignItems: 'center',
     justifyContent: 'center'
    },
    loginContentWrapper: {
      display: 'flex',
      position: 'relative',
      width: '90%',
      backgroundColor: '#fff',
      paddingHorizontal: 20,
      paddingVertical: 20,
      borderRadius: 8
    },
    logoSetings: {
      width: 60,
      height: 60,
      position: 'absolute',
      left: '47%',
      top: '-17%'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
      },
  });
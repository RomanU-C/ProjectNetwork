import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    loginContainer: {
     flex: 1,
     backgroundColor: '#e8e8e8',
     paddingHorizontal: 10,
     paddingVertical: 10,
     alignItems: 'center'
    },
    loginInner: {
      width: '90%',
      display: 'flex',
    },
    input: {
        width: '60%',
        height: 40,
        margin: 12,
        borderWidth: 1,
        color: '#000',
      },
  });
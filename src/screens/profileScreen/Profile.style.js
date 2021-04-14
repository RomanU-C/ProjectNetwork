import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    wrapper: {
     backgroundColor: '#000',
     opacity: 0.7,
     borderTopLeftRadius: 12,
     borderTopRightRadius: 12,
     height: 300,
     alignItems: 'center',
     justifyContent: 'flex-start'
    },
    wrapperHeader: {
        height: 100
    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingVertical: 20,
        color: '#fff'
    },
    container: {
        flex: 1
    },
    dropPhotoWrapper: {
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 40,
        width: '80%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerDropZone: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    imagePrev: {
        width: 200,
        height: 200
    }
  });
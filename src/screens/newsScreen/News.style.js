import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    newsItemWrapper: {
        marginBottom: 20
    },
    userContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: 8,
        paddingVertical: 8
        },
    userAvatar: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    userName: {
        fontSize: 20,
        fontWeight: '900',
        marginBottom: 5
    },
    userPostImg: {
        width: '100%',
        height: 300
    }
  });
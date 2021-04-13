import React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Image from './../../../assets/img/index';


const Container = styled.TouchableWithoutFeedback``;
const Background = styled.View``;
const Icon = styled.Image``;
const Label = styled.Text``;


function Tab({ label, accessibilityState, onPress }) {
    const focused = accessibilityState.selected;
    const icon = !focused ? Image.icon[label] : Image.icon[`${label}Focused`];
    return (
        <Container onPress={onPress}>
            <Background style={styles.vrapperTab} focused={focused} label={label}>
                <Icon source={icon} style={styles.iconStyle}/>
                {focused && <Label style={styles.labelStyle}>{label}</Label>}
            </Background>
        </Container>
    )
}
const styles = StyleSheet.create({
    vrapperTab: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    iconStyle: {
        marginRight: 8
    },
    labelStyle: {
        fontWeight: '900'
    }
})
export default Tab;
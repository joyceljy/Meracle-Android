import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import ForgetPassword from '../containers/ForgetPassword_container';

const ForgetPasswordScene = () => {
    return (
        <View style={styles.container}>
            <ForgetPassword />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
export default ForgetPasswordScene;
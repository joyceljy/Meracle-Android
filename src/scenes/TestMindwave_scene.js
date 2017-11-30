import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import TestMindwave from '../containers/TestMindwave_container';

const TestMindwaveScene = () => {
    return (
        <View style={styles.container}>
            <TestMindwave />
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
export default TestMindwaveScene;
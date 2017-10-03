import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import MindwaveTest from '../containers/MindwaveTest_container';

const MindwaveTestScene = () => {
    return (
        <View style={styles.container}>
            <MindwaveTest />
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
export default MindwaveTestScene;
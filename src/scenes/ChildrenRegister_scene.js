import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import ChildrenRegister from '../containers/ChildrenRegister_container';

const ChildrenRegisterScene = () => {
    return (
        <View style={styles.container}>
            <ChildrenRegister />
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
export default ChildrenRegisterScene;
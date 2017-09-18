import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import SideBar from '../containers/SideBarContent';

const SideBarScene = () => {
    return (
        <View style={styles.container}>
            <SideBar />
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
export default SideBarScene;
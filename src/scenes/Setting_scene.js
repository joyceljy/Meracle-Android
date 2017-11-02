import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import Setting from '../containers/Setting_container';

const SettingScene = () => {
    return (
        <View style={styles.container}>
            <Setting />
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
export default SettingScene;
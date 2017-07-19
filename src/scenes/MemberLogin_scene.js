import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import MemberLogin from '../containers/MemberLogin_container';

const MemberLoginScene = () => {
    return (
        <View style={styles.container}>
            <MemberLogin />
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
export default MemberLoginScene;
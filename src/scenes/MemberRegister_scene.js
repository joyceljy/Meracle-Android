import React from 'react';
import {
    View,
    StyleSheet,
} from 'react-native';
import MemberRegister from '../containers/MemberRegister_container';

const MemberRegisterScene = () => {
    return (
        <View style={styles.container}>
            <MemberRegister />
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
export default MemberRegisterScene;
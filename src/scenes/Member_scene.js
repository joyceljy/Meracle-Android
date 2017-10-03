import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import Member from '../containers/Member_container';

const MemberScene = () => {
    return (
        <View style={styles.container}>
            <Member />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
    },
  
})
export default MemberScene;
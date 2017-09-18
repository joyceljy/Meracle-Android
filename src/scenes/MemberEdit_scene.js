import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import MemberEdit from '../containers/MemberEdit_container';

const MemberEditScene = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../images/backgroundImg.png')} style={styles.backgroundImage}>
               
                     <MemberEdit />
               
            </Image>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
})
export default MemberEditScene;
import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import EditPassword from '../containers/EditPassword_container';

const EditPasswordScene = () => {
 return (
        <View style={styles.container}>
            <Image source={require('../images/backgroundImg.png')} style={styles.backgroundImage}>
               
                     <EditPassword />
               
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
export default EditPasswordScene;
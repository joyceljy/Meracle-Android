import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import ChildrenEdit from '../containers/ChildrenEdit_container';

const ChildrenEditScene = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../images/backgroundImg.png')} style={styles.backgroundImage}>
               
                     <ChildrenEdit />
               
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
       
    },
})
export default ChildrenEditScene;
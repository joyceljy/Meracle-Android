import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import Kidwavepagepart from '../containers/kidwavepage_container';

const KidwavepageScene = () => {
    return (
        <View style={styles.container}>
            <Kidwavepagepart />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
    },
  
})
export default KidwavepageScene;
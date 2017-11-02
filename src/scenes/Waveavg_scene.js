import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import Waveavg from '../containers/Waveavg_page';

const WaveavgScene = () => {
    return (
        <View style={styles.container}>
            <Waveavg />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
    },
  
})
export default WaveavgScene;
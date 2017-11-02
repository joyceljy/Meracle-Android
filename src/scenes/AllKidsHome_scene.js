import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import AllKidsHome from '../containers/AllKidsHome_container';

const AllKidsHomeScene = () => {
    return (
        <View style={styles.container}>
            <AllKidsHome />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
    },
  
})
export default AllKidsHomeScene;
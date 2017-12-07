import React from 'react';
import {
    View,
    StyleSheet,
    Image
} from 'react-native';
import AllkidsRecord from '../containers/AllkidsRecord_container';

const AllkidsRecordScene = () => {
    return (
        <View style={styles.container}>
            <AllkidsRecord />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //flexDirection: 'row',
    },
  
})
export default AllkidsRecordScene;